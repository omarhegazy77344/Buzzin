import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { getLeadProvider } from "@/lib/leads/provider"

type ContactPayload = {
  name: string
  company: string
  jobTitle: string
  email: string
  phone: string
  industry: string
  message?: string
}

function validate(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null
  const b = body as Record<string, unknown>
  const name = typeof b.name === "string" ? b.name.trim() : ""
  const company = typeof b.company === "string" ? b.company.trim() : ""
  const jobTitle = typeof b.jobTitle === "string" ? b.jobTitle.trim() : ""
  const email = typeof b.email === "string" ? b.email.trim() : ""
  const phone = typeof b.phone === "string" ? b.phone.trim() : ""
  const industry = typeof b.industry === "string" ? b.industry.trim() : ""
  const message = typeof b.message === "string" ? b.message.trim() : ""

  if (name.length < 2 || company.length < 2 || jobTitle.length < 2) return null
  if (!email.includes("@") || phone.length < 8 || !industry) return null

  return { name, company, jobTitle, email, phone, industry, message: message || undefined }
}

function buildNotificationHtml(d: ContactPayload) {
  return `
<h2>New Demo Request — ${d.company}</h2>
<table style="border-collapse:collapse">
  <tr><td style="padding:4px 12px 4px 0;font-weight:600">Name</td><td>${d.name}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:600">Company</td><td>${d.company}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:600">Job Title</td><td>${d.jobTitle}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:600">Email</td><td>${d.email}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:600">Phone</td><td>${d.phone}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:600">Industry</td><td>${d.industry}</td></tr>
  ${d.message ? `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Message</td><td>${d.message}</td></tr>` : ""}
</table>`.trim()
}

function buildConfirmationHtml(name: string) {
  return `
<p>Hi ${name},</p>
<p>Thanks for reaching out. Someone from our team will be in touch within 4 business hours.</p>
<p>If you need to reach us sooner:</p>
<ul>
  <li>📞 <a href="tel:+97143201265">+971 4 320 1265</a></li>
  <li>💬 <a href="https://wa.me/97143201265">WhatsApp</a></li>
  <li>📧 <a href="mailto:hello@buzzin.ae">hello@buzzin.ae</a></li>
</ul>
<p>The Buzzin Team<br/>Dtec, Dubai Silicon Oasis, Dubai, UAE</p>`.trim()
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = validate(body)
    if (!data) {
      return NextResponse.json({ error: "Invalid or missing fields." }, { status: 400 })
    }

    // Save to database (fails gracefully if MONGODB_URI is not set)
    try {
      await getLeadProvider().createLead({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        jobTitle: data.jobTitle,
        industry: data.industry,
        premisesDescription: data.message,
        locale: "en",
        sourcePage: "/book-demo",
        channel: "form",
      })
    } catch (dbErr) {
      console.warn("[contact] DB save failed (non-blocking):", dbErr)
    }

    // Send emails via Resend, or log to console as fallback
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      const resend = new Resend(resendKey)
      const fromAddress = process.env.RESEND_FROM_EMAIL || "Buzzin <noreply@buzzin.ae>"

      await Promise.allSettled([
        resend.emails.send({
          from: fromAddress,
          to: "hello@buzzin.ae",
          subject: `New Demo Request — ${data.company}`,
          html: buildNotificationHtml(data),
        }),
        resend.emails.send({
          from: fromAddress,
          to: data.email,
          subject: "We received your Buzzin demo request",
          html: buildConfirmationHtml(data.name),
        }),
      ])
    } else {
      console.log("[contact] No RESEND_API_KEY — logging submission:\n", JSON.stringify(data, null, 2))
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[contact] Unexpected error:", err)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { getLeadProvider } from "@/lib/leads/provider"

type FormType = "demo" | "contact"

type BasePayload = {
  type: FormType
  name: string
  company: string
  email: string
  phone?: string
  message?: string
}

type DemoPayload = BasePayload & {
  type: "demo"
  jobTitle: string
  industry: string
}

type ContactPayload = BasePayload & {
  type: "contact"
  subject: string
}

type Payload = DemoPayload | ContactPayload

function validate(body: unknown): Payload | null {
  if (!body || typeof body !== "object") return null
  const b = body as Record<string, unknown>

  const type = (typeof b.type === "string" ? b.type : "demo") as FormType
  const name = typeof b.name === "string" ? b.name.trim() : ""
  const company = typeof b.company === "string" ? b.company.trim() : ""
  const email = typeof b.email === "string" ? b.email.trim() : ""
  const phone = typeof b.phone === "string" ? b.phone.trim() : ""
  const message = typeof b.message === "string" ? b.message.trim() : ""

  if (name.length < 2 || company.length < 2 || !email.includes("@")) return null
  if (phone && phone.length < 8) return null

  if (type === "contact") {
    const subject = typeof b.subject === "string" ? b.subject.trim() : ""
    if (!subject) return null
    return { type, name, company, email, phone: phone || undefined, subject, message: message || undefined }
  }

  const jobTitle = typeof b.jobTitle === "string" ? b.jobTitle.trim() : ""
  const industry = typeof b.industry === "string" ? b.industry.trim() : ""
  if (jobTitle.length < 2 || !industry || !phone || phone.length < 8) return null
  return { type: "demo", name, company, email, phone, jobTitle, industry, message: message || undefined }
}

function buildDemoNotificationHtml(d: DemoPayload) {
  return `
<h2>New Demo Request &mdash; ${d.company}</h2>
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

function buildContactNotificationHtml(d: ContactPayload) {
  return `
<h2>New Contact Message &mdash; ${d.subject}</h2>
<table style="border-collapse:collapse">
  <tr><td style="padding:4px 12px 4px 0;font-weight:600">Name</td><td>${d.name}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:600">Company</td><td>${d.company}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:600">Email</td><td>${d.email}</td></tr>
  ${d.phone ? `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Phone</td><td>${d.phone}</td></tr>` : ""}
  <tr><td style="padding:4px 12px 4px 0;font-weight:600">Subject</td><td>${d.subject}</td></tr>
  ${d.message ? `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Message</td><td>${d.message}</td></tr>` : ""}
</table>`.trim()
}

function buildDemoConfirmationHtml(name: string) {
  return `
<p>Hi ${name},</p>
<p>Thanks for reaching out. Someone from our team will be in touch within 4 business hours.</p>
<p>If you need to reach us sooner:</p>
<ul>
  <li>&#128222; <a href="tel:+97143201265">+971 4 3201265</a></li>
  <li>&#128172; <a href="https://wa.me/97143201265">WhatsApp</a></li>
  <li>&#128231; <a href="mailto:info@buzzin.ae">info@buzzin.ae</a></li>
</ul>
<p>The Buzzin Team<br/>Dtec, Dubai Silicon Oasis, Dubai, UAE</p>`.trim()
}

function buildContactConfirmationHtml(name: string) {
  return `
<p>Hi ${name},</p>
<p>Thanks for getting in touch. We have received your message and will respond within 4 business hours.</p>
<p>If this is urgent, reach us directly:</p>
<ul>
  <li>&#128222; <a href="tel:+97143201265">+971 4 3201265</a></li>
  <li>&#128172; <a href="https://wa.me/97143201265">wa.me/97143201265</a></li>
  <li>&#128231; <a href="mailto:info@buzzin.ae">info@buzzin.ae</a></li>
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

    const isDemo = data.type === "demo"
    const sourcePage = isDemo ? "/book-demo" : "/contact"

    try {
      await getLeadProvider().createLead({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        jobTitle: isDemo ? data.jobTitle : undefined,
        industry: isDemo ? data.industry : undefined,
        premisesDescription: isDemo ? data.message : `[${(data as ContactPayload).subject}] ${data.message ?? ""}`.trim(),
        locale: "en",
        sourcePage,
        channel: "form",
      })
    } catch (dbErr) {
      console.warn("[contact] DB save failed (non-blocking):", dbErr)
    }

    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      const resend = new Resend(resendKey)
      const fromAddress = process.env.RESEND_FROM_EMAIL || "Buzzin <noreply@buzzin.ae>"

      const notifSubject = isDemo
        ? `New Demo Request — ${data.company}`
        : `New Contact Message — ${(data as ContactPayload).subject} — ${data.company}`

      const notifHtml = isDemo
        ? buildDemoNotificationHtml(data as DemoPayload)
        : buildContactNotificationHtml(data as ContactPayload)

      const confirmSubject = isDemo
        ? "We received your Buzzin demo request"
        : "We received your message — Buzzin"

      const confirmHtml = isDemo
        ? buildDemoConfirmationHtml(data.name)
        : buildContactConfirmationHtml(data.name)

      await Promise.allSettled([
        resend.emails.send({
          from: fromAddress,
          to: "info@buzzin.ae",
          subject: notifSubject,
          html: notifHtml,
        }),
        resend.emails.send({
          from: fromAddress,
          to: data.email,
          subject: confirmSubject,
          html: confirmHtml,
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

import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

type CareersPayload = {
  fullName: string
  email: string
  phone: string
  role: string
  location: string
  linkedin?: string
  message: string
  cvFileName?: string
  cvFileType?: string
  cvBuffer?: Buffer
}

const MAX_CV_BYTES = 5 * 1024 * 1024 // 5 MB
const ACCEPTED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]

async function parseFormData(request: NextRequest): Promise<CareersPayload | null> {
  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return null
  }

  const fullName = String(form.get("fullName") ?? "").trim()
  const email = String(form.get("email") ?? "").trim()
  const phone = String(form.get("phone") ?? "").trim()
  const role = String(form.get("role") ?? "").trim()
  const location = String(form.get("location") ?? "").trim()
  const linkedin = String(form.get("linkedin") ?? "").trim()
  const message = String(form.get("message") ?? "").trim()

  if (fullName.length < 2) return null
  if (!email.includes("@")) return null
  if (phone.length < 8) return null
  if (!role) return null
  if (!location) return null
  if (message.length < 10) return null

  const payload: CareersPayload = {
    fullName,
    email,
    phone,
    role,
    location,
    linkedin: linkedin || undefined,
    message,
  }

  const cv = form.get("cv")
  if (cv && cv instanceof File && cv.size > 0) {
    if (cv.size > MAX_CV_BYTES) return null
    if (cv.type && !ACCEPTED_CV_TYPES.includes(cv.type)) return null
    const arrayBuffer = await cv.arrayBuffer()
    payload.cvBuffer = Buffer.from(arrayBuffer)
    payload.cvFileName = cv.name
    payload.cvFileType = cv.type || "application/octet-stream"
  }

  return payload
}

function buildNotificationHtml(d: CareersPayload) {
  return `
<h2>New Careers Application &mdash; ${d.fullName}</h2>
<table style="border-collapse:collapse">
  <tr><td style="padding:4px 12px 4px 0;font-weight:600">Name</td><td>${d.fullName}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:600">Email</td><td>${d.email}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:600">Phone</td><td>${d.phone}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:600">Role</td><td>${d.role}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:600">Location</td><td>${d.location}</td></tr>
  ${d.linkedin ? `<tr><td style="padding:4px 12px 4px 0;font-weight:600">LinkedIn</td><td><a href="${d.linkedin}">${d.linkedin}</a></td></tr>` : ""}
  <tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top">Message</td><td>${d.message.replace(/\n/g, "<br/>")}</td></tr>
  ${d.cvFileName ? `<tr><td style="padding:4px 12px 4px 0;font-weight:600">CV attached</td><td>${d.cvFileName}</td></tr>` : ""}
</table>`.trim()
}

function buildConfirmationHtml(name: string, role: string) {
  return `
<p>Hi ${name},</p>
<p>Thanks for applying to join the Buzzin team. We have received your application for the <strong>${role}</strong> role and will review it carefully.</p>
<p>If your background fits what we are looking for, someone from our team will be in touch within 5 business days.</p>
<p>In the meantime, feel free to learn more about us:</p>
<ul>
  <li>&#128279; <a href="https://buzzin.ae/en/about">About Buzzin</a></li>
  <li>&#128279; <a href="https://buzzin.ae/en/why-buzzin">Why Buzzin</a></li>
</ul>
<p>The Buzzin Team<br/>Dtec, Dubai Silicon Oasis, Dubai, UAE</p>`.trim()
}

export async function POST(request: NextRequest) {
  try {
    const data = await parseFormData(request)
    if (!data) {
      return NextResponse.json(
        { error: "Please complete every required field and attach a CV under 5 MB (PDF or Word)." },
        { status: 400 },
      )
    }

    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      const resend = new Resend(resendKey)
      const fromAddress = process.env.RESEND_FROM_EMAIL || "Buzzin <noreply@buzzin.ae>"

      const attachments = data.cvBuffer
        ? [
            {
              filename: data.cvFileName ?? "cv.pdf",
              content: data.cvBuffer,
            },
          ]
        : undefined

      await Promise.allSettled([
        resend.emails.send({
          from: fromAddress,
          to: "talents@buzzin.ae",
          replyTo: data.email,
          subject: `New Application — ${data.role} — ${data.fullName}`,
          html: buildNotificationHtml(data),
          attachments,
        }),
        resend.emails.send({
          from: fromAddress,
          to: data.email,
          subject: "We received your Buzzin application",
          html: buildConfirmationHtml(data.fullName, data.role),
        }),
      ])
    } else {
      console.log(
        "[careers] No RESEND_API_KEY — logging submission:\n",
        JSON.stringify(
          { ...data, cvBuffer: data.cvBuffer ? `<${data.cvBuffer.length} bytes>` : undefined },
          null,
          2,
        ),
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[careers] Unexpected error:", err)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}

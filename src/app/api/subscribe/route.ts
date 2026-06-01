import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function buildConfirmationHtml() {
  return `
<p>Hi there,</p>
<p>Thanks for subscribing to Buzzin updates. You will now hear from us when we launch new modules, announce partnerships, and publish premises management insights.</p>
<p>If you ever want to reach us directly:</p>
<ul>
  <li>&#128222; <a href="tel:+97143201265">+971 4 3201265</a></li>
  <li>&#128172; <a href="https://wa.me/97143201265">WhatsApp</a></li>
  <li>&#128231; <a href="mailto:info@buzzin.ae">info@buzzin.ae</a></li>
</ul>
<p>The Buzzin Team<br/>Dtec, Dubai Silicon Oasis, Dubai, UAE</p>`.trim()
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const email =
      body && typeof body === "object" && typeof body.email === "string"
        ? body.email.trim()
        : ""

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
    }

    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      const resend = new Resend(resendKey)
      const fromAddress = process.env.RESEND_FROM_EMAIL || "Buzzin <noreply@buzzin.ae>"

      await Promise.allSettled([
        resend.emails.send({
          from: fromAddress,
          to: "info@buzzin.ae",
          subject: `Newsletter Subscription — ${email}`,
          html: `<p>New newsletter subscription:</p><p><strong>${email}</strong></p>`,
        }),
        resend.emails.send({
          from: fromAddress,
          to: email,
          subject: "Welcome to Buzzin Updates",
          html: buildConfirmationHtml(),
        }),
      ])
    } else {
      console.log("[subscribe] No RESEND_API_KEY — logging subscription:", email)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[subscribe] Unexpected error:", err)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}

import type { Metadata } from "next"
import { Clock, Phone, Mail, MessageCircle } from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { BookDemoForm } from "@/components/marketing/book-demo-form"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Book a Free Demo | Buzzin — Premises Intelligence Platform",
  description:
    "Book a free Buzzin demo tailored to your industry. Trusted by Atlantis, Aldar, Taaleem, and 300+ organisations across UAE & GCC. We respond within 4 business hours.",
  robots: "noindex",
}

const trustRows = [
  {
    name: "Aldar Properties",
    outcome: "Exclusive 5-year partner across their entire UAE portfolio",
  },
  {
    name: "Atlantis The Palm",
    outcome: "Enterprise visitor and contractor management",
  },
  {
    name: "Taaleem Group",
    outcome: "40+ schools managed from one platform",
  },
]

export default function BookDemoPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="pt-16">
          <Container>
            <div className="grid gap-12 py-16 md:py-24 lg:grid-cols-[55fr_45fr] lg:gap-16 lg:items-start">

              {/* ─── LEFT COLUMN (trust + copy) ─── */}
              {/* On mobile this renders AFTER the form via CSS order */}
              <div className="order-2 lg:order-1 lg:sticky lg:top-28">

                {/* Eyebrow */}
                <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--text-brand)]">
                  Book a Free Demo
                </p>

                {/* H1 */}
                <h1 className="mt-4 font-display text-[44px] font-extrabold leading-[1.08] text-[#1E2547]">
                  See Buzzin running across a real&nbsp;premises.
                </h1>

                {/* Sub */}
                <p className="mt-5 max-w-[420px] font-body text-[16px] font-light leading-relaxed text-[var(--text-tertiary)]">
                  We tailor every demo to your industry and your specific operation. Not a generic walkthrough — your exact use case, your exact premises type.
                </p>

                {/* Response time */}
                <div className="mt-6 flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-[#F5A623]" strokeWidth={2} />
                  <span className="font-body text-[14px] text-[var(--text-secondary)]">
                    We respond to all requests within 4 business hours.
                  </span>
                </div>

                {/* Divider */}
                <hr className="my-8 border-[var(--border-default)]" />

                {/* Trusted by */}
                <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
                  Trusted by
                </p>

                <div className="mt-5 space-y-5">
                  {trustRows.map((row) => (
                    <div key={row.name} className="flex items-start gap-4">
                      {/* Logo placeholder */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--bg-surface-sunken)] border border-[var(--border-subtle)]">
                        <span className="font-heading text-[11px] font-bold text-[var(--text-muted)]">
                          {row.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-heading text-[14px] font-semibold text-[var(--text-primary)]">
                          {row.name}
                        </p>
                        <p className="mt-0.5 font-body text-[13px] text-[var(--text-tertiary)]">
                          {row.outcome}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 font-body text-[13px] text-[var(--text-muted)]">
                  And 300+ organisations across UAE, KSA, Kuwait, and Lebanon.
                </p>

                {/* Contact alternatives */}
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <a
                    href="tel:+97143201265"
                    className="flex items-center gap-2 font-body text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#F5A623]" />
                    +971 4 320 1265
                  </a>
                  <a
                    href="https://wa.me/97143201265?text=Hi%2C%20I%27d%20like%20to%20book%20a%20Buzzin%20demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-body text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                    WhatsApp
                  </a>
                  <a
                    href="mailto:hello@buzzin.ae"
                    className="flex items-center gap-2 font-body text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    <Mail className="h-3.5 w-3.5 text-[#F5A623]" />
                    hello@buzzin.ae
                  </a>
                </div>
              </div>

              {/* ─── RIGHT COLUMN (form card) ─── */}
              {/* On mobile this renders FIRST */}
              <div className="order-1 lg:order-2">
                <div className="rounded-2xl border-[1.5px] border-[#E8EDF5] bg-white p-8 shadow-[0_20px_50px_rgba(30,37,71,0.08)]">
                  <BookDemoForm />
                </div>
              </div>

            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

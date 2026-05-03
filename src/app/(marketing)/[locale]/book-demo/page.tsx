"use client"

// SEO: "Book a Demo | Buzzin"

import Link from "next/link"
import { CheckCircle2, Phone, Mail, MessageCircle, Shield, Clock, Users } from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll, StaggerOnScroll } from "@/components/ui/animate-on-scroll"

export const dynamic = "force-static"

const promises = [
  { icon: Clock, text: "We respond to all demo requests within four business hours" },
  { icon: Users, text: "A specialist who has deployed at properties like yours" },
  { icon: Shield, text: "No hard sell \u2014 if Buzzin isn\u2019t the right fit, we will say so" },
]

const clients = [
  "Atlantis The Palm",
  "Aldar Properties",
  "Taaleem",
  "Brighton College",
  "Kempinski",
  "Fairmont",
  "GEMS Education",
  "DIFC",
]

export default function BookDemoPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[var(--bg-page)]">
        <div className="pt-16">
          <section className="py-20 md:py-28">
            <Container>
              <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">

                {/* ── LEFT: Context ── */}
                <AnimateOnScroll direction="left" className="lg:sticky lg:top-28">
                  <p className="mb-4 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                    Book a Strategic Demo
                  </p>
                  <h1 className="font-display text-display-lg font-bold leading-[1.05] text-[var(--text-primary)] md:text-display-xl">
                    30 minutes. Real answers. No pitch deck.
                  </h1>
                  <p className="mt-5 text-body-lg text-[var(--text-secondary)]">
                    A working session with a Buzzin specialist who understands GCC enterprise operations. We map your current setup, show you what Buzzin looks like for your specific premises, and answer every question your security and operations team will raise.
                  </p>

                  <ul className="mt-8 space-y-4">
                    {promises.map((p) => (
                      <li key={p.text} className="flex items-start gap-3">
                        <p.icon className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" strokeWidth={1.75} />
                        <span className="text-body-md text-[var(--text-secondary)]">{p.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
                    <p className="font-heading text-body-sm font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                      Trusted by
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {clients.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-sunken)] px-3 py-1 font-heading text-body-xs font-medium text-[var(--text-secondary)]"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-5">
                    <a
                      href="tel:+97143201265"
                      className="flex items-center gap-2 font-heading text-body-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    >
                      <Phone className="h-4 w-4 text-amber-500" />
                      +971 4 320 1265
                    </a>
                    <a
                      href="mailto:hello@buzzin.ae"
                      className="flex items-center gap-2 font-heading text-body-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    >
                      <Mail className="h-4 w-4 text-amber-500" />
                      hello@buzzin.ae
                    </a>
                  </div>
                </AnimateOnScroll>

                {/* ── RIGHT: Form + Calendly placeholder ── */}
                <AnimateOnScroll direction="right">
                  <div className="rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-7 md:p-10">
                    <h2 className="font-heading text-heading-xl font-bold text-[var(--text-primary)]">
                      Tell us about your premises
                    </h2>
                    <p className="mt-1 text-body-sm text-[var(--text-secondary)]">
                      We will match you with the right specialist and confirm a time within four business hours.
                    </p>

                    <form
                      className="mt-7 space-y-4"
                      onSubmit={(e) => {
                        e.preventDefault()
                        window.location.href =
                          "https://wa.me/97143201265?text=Hi%2C%20I%20submitted%20a%20demo%20request%20on%20buzzin.ae%20and%20would%20like%20to%20book%20a%20demo."
                      }}
                    >
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block font-heading text-body-sm font-medium text-[var(--text-primary)]">
                            Full name <span className="text-amber-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Your name"
                            className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-page)] px-4 py-3 text-body-md text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block font-heading text-body-sm font-medium text-[var(--text-primary)]">
                            Work email <span className="text-amber-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="you@company.com"
                            className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-page)] px-4 py-3 text-body-md text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block font-heading text-body-sm font-medium text-[var(--text-primary)]">
                            Phone (WhatsApp preferred)
                          </label>
                          <input
                            type="tel"
                            placeholder="+971 50 000 0000"
                            className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-page)] px-4 py-3 text-body-md text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block font-heading text-body-sm font-medium text-[var(--text-primary)]">
                            Organisation <span className="text-amber-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Company or property name"
                            className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-page)] px-4 py-3 text-body-md text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block font-heading text-body-sm font-medium text-[var(--text-primary)]">
                          Industry
                        </label>
                        <select className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-page)] px-4 py-3 text-body-md text-[var(--text-primary)] outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20">
                          <option value="">Select your sector</option>
                          <option>Hospitality</option>
                          <option>Residential Real Estate</option>
                          <option>Education</option>
                          <option>Corporate / Office</option>
                          <option>Financial District</option>
                          <option>Government</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-1.5 block font-heading text-body-sm font-medium text-[var(--text-primary)]">
                          Describe your premises and current challenges
                        </label>
                        <textarea
                          rows={4}
                          placeholder="e.g. We manage 3 hotel towers in Dubai, currently using paper logbooks and WhatsApp for contractor permits..."
                          className="w-full resize-none rounded-xl border border-[var(--border-default)] bg-[var(--bg-page)] px-4 py-3 text-body-md text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Request a Demo
                      </Button>

                      <div className="flex items-center justify-center gap-6 pt-1">
                        <a
                          href="https://wa.me/97143201265?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Buzzin%20demo."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 font-heading text-body-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        >
                          <MessageCircle className="h-4 w-4 text-[#25D366]" />
                          Prefer WhatsApp?
                        </a>
                      </div>

                      <p className="text-center text-body-xs text-[var(--text-muted)]">
                        By submitting you agree to our{" "}
                        <Link href="/privacy-policy" className="underline hover:text-[var(--text-primary)]">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </form>
                  </div>

                  {/* Calendly placeholder */}
                  <div className="mt-5 rounded-2xl border border-dashed border-[var(--border-default)] bg-[var(--bg-surface-sunken)] p-6 text-center">
                    <p className="font-heading text-body-sm font-semibold text-[var(--text-secondary)]">
                      Prefer to self-schedule?
                    </p>
                    <p className="mt-1 text-body-xs text-[var(--text-muted)]">
                      Calendar booking coming soon \u2014 email{" "}
                      <a href="mailto:hello@buzzin.ae" className="text-[var(--text-brand)] underline">
                        hello@buzzin.ae
                      </a>{" "}
                      or call us to pick a time directly.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </Container>
          </section>

          {/* PROOF ROW */}
          <section className="bg-[var(--bg-canvas)] py-14">
            <Container>
              <StaggerOnScroll className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10" interval={0.07}>
                {[
                  { v: "20M+", l: "Secure interactions processed" },
                  { v: "300+", l: "Active organisations" },
                  { v: "<4hr", l: "Average first response" },
                  { v: "71\u00d7", l: "Year-on-year scale in 2025" },
                ].map((s) => (
                  <AnimateOnScroll key={s.l} className="text-center">
                    <div className="font-display text-display-md leading-none text-[var(--text-primary)] md:text-display-lg">
                      {s.v}
                    </div>
                    <p className="mt-2 text-body-sm text-[var(--text-secondary)]">{s.l}</p>
                  </AnimateOnScroll>
                ))}
              </StaggerOnScroll>
            </Container>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

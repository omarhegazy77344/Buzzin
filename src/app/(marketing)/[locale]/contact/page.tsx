"use client"

// Metadata for this client page is set via the parent layout or a sibling server component.
// SEO title: "Contact | Buzzin"

import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle, Calendar, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { PageHero } from "@/components/marketing/page-hero"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll, StaggerOnScroll } from "@/components/ui/animate-on-scroll"

const options = [
  {
    icon: Calendar,
    title: "Book a Strategic Demo",
    desc: "30-minute session with a Buzzin specialist. We map your operation and show you exactly how the platform fits.",
    cta: "Book a demo",
    href: "/book-demo",
    highlight: true,
  },
  {
    icon: MessageCircle,
    title: "Chat on WhatsApp",
    desc: "Quickest way to get a response. Message us directly and we'll reply within the hour during business hours.",
    cta: "Open WhatsApp",
    href: "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20the%20platform.",
    external: true,
  },
  {
    icon: Phone,
    title: "Call us directly",
    desc: "Speak to someone now. Our team is available Sunday to Thursday, 9am to 6pm Gulf Standard Time.",
    cta: "+971 4 320 1265",
    href: "tel:+97143201265",
  },
  {
    icon: Mail,
    title: "Send an email",
    desc: "For detailed enquiries, partnership proposals, or security and compliance questions.",
    cta: "hello@buzzin.ae",
    href: "mailto:hello@buzzin.ae",
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Get in touch"
          title="Talk to us. We respond to all enquiries within four business hours."
          description="Whether you are evaluating the platform, running a security review, or ready to go live \u2014 pick the channel that works for you."
        />

        {/* ── CONTACT OPTIONS ── */}
        <section className="bg-[var(--bg-page)] py-20 md:py-28">
          <Container>
            <StaggerOnScroll className="grid gap-5 md:grid-cols-2" interval={0.08}>
              {options.map((o) => (
                <AnimateOnScroll
                  key={o.title}
                  className={`group relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand md:p-8 ${
                    o.highlight
                      ? "border-amber-500/40 bg-gradient-to-br from-[var(--bg-surface)] to-amber-500/[0.04]"
                      : "border-[var(--border-default)] bg-[var(--bg-surface)] hover:border-amber-500/30"
                  }`}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/20">
                    <o.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-heading text-heading-md font-semibold text-[var(--text-primary)]">
                    {o.title}
                  </h3>
                  <p className="mt-2 flex-1 text-body-md leading-relaxed text-[var(--text-secondary)]">
                    {o.desc}
                  </p>
                  <div className="mt-6">
                    {o.external ? (
                      <a
                        href={o.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-heading text-body-md font-semibold text-[var(--text-brand)] transition-transform hover:translate-x-1"
                      >
                        {o.cta} <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link
                        href={o.href}
                        className="inline-flex items-center gap-2 font-heading text-body-md font-semibold text-[var(--text-brand)] transition-transform hover:translate-x-1"
                      >
                        {o.cta} <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </AnimateOnScroll>
              ))}
            </StaggerOnScroll>

            {/* ADDRESS */}
            <AnimateOnScroll className="mt-10 flex flex-col items-center gap-2 text-center" delay={0.2}>
              <MapPin className="h-5 w-5 text-amber-500" />
              <p className="font-heading text-body-md font-medium text-[var(--text-secondary)]">
                Dtec, Dubai Silicon Oasis, Dubai, UAE
              </p>
            </AnimateOnScroll>
          </Container>
        </section>

        {/* ── QUICK ENQUIRY FORM ── */}
        <section className="bg-[var(--bg-canvas)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-2xl">
              <div className="text-center">
                <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  Quick enquiry
                </p>
                <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                  Send us a message.
                </h2>
                <p className="mt-3 text-body-lg text-[var(--text-secondary)]">
                  We will reply within four business hours.
                </p>
              </div>

              <form
                className="mt-10 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  window.location.href =
                    "https://wa.me/97143201265?text=Hi%2C%20I%20submitted%20a%20contact%20form%20on%20buzzin.ae%20and%20would%20like%20to%20discuss%20the%20platform."
                }}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-heading text-body-sm font-medium text-[var(--text-primary)]">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-3 text-body-md text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-heading text-body-sm font-medium text-[var(--text-primary)]">
                      Work email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-3 text-body-md text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block font-heading text-body-sm font-medium text-[var(--text-primary)]">
                    Organisation & role
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Head of Operations, Aldar"
                    className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-3 text-body-md text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block font-heading text-body-sm font-medium text-[var(--text-primary)]">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your premises, current challenges, or what you would like to know."
                    className="w-full resize-none rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-3 text-body-md text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send message
                </Button>

                <p className="text-center text-body-xs text-[var(--text-muted)]">
                  By submitting you agree to our{" "}
                  <Link href="/privacy-policy" className="underline hover:text-[var(--text-primary)]">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </AnimateOnScroll>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

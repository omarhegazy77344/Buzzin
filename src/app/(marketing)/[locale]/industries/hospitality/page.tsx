import type { Metadata } from "next"
import Link from "next/link"
import {
  Users, ClipboardCheck, CalendarCheck, BookOpen, Shield,
  XCircle, ArrowRight, CheckCircle,
} from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { Button } from "@/components/ui/button"
import { SecurityBar } from "@/components/marketing/security-bar"
import { CtaBanner } from "@/components/marketing/cta-banner"
import {
  HospitalityHero, HeroBlock,
  SectionReveal, StaggerGrid, StaggerItem,
} from "@/components/marketing/hospitality-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Hotel & Hospitality Premises Management UAE | Buzzin",
  description:
    "Visitor management, contractor permits, and event check-in for UAE hotels and resorts. Trusted by Atlantis The Palm, Fairmont, Kempinski, and Hyatt. Book a free demo.",
  openGraph: {
    title: "Hotel Premises Management UAE | Buzzin",
    description:
      "Visitor management, contractor access, and event check-in for luxury hotels across the UAE. Trusted by Atlantis, Fairmont, and Kempinski.",
  },
}

/* ─── Data ─── */

const painPoints = [
  "Contractors entering through guest areas — no separate verified access flow",
  "Event attendees queuing at reception — no pre-registration or QR check-in",
  "Hosts unaware their guest has arrived — reputational damage with VIP visitors",
  "No audit trail of who was on property during an incident or insurance claim",
  "Multiple WhatsApp groups managing contractors, events, and visitors separately",
]

const modules = [
  {
    icon: Users, name: "Visitor Management",
    body: "Emirates ID and UAE Pass scanning at your lobby kiosk. Guest arrives, identity verified, host notified on WhatsApp — in 3 to 5 seconds.",
    href: "/en/platform/visitor-management-system",
  },
  {
    icon: ClipboardCheck, name: "Work Permit System",
    body: "Contractors self-register remotely. QR-coded permit scanned at the service entrance. No contractor enters without a verified, active permit.",
    href: "/en/platform/work-permit-system",
  },
  {
    icon: CalendarCheck, name: "Event Management",
    body: "Gala dinners, conferences, product launches. Unique QR per attendee. Time and location controlled access. Branded invitation emails.",
    href: "/en/platform/event-management",
  },
  {
    icon: BookOpen, name: "Booking Management", badge: "New",
    body: "Spa, gym, meeting rooms, pool cabanas. Live calendar. Auto-approve rules. QR access pass issued on booking confirmation.",
    href: "/en/platform/booking-management",
  },
  {
    icon: Shield, name: "Patrolling System",
    body: "NFC checkpoint scanning across your property. Timestamped patrol rounds. Missed checkpoint alerts to security management in real time.",
    href: "/en/platform/patrolling",
  },
]

const featureRows = [
  {
    title: "VIP guest pre-registration",
    body: "Invitation link sent in advance. Guest arrives and taps through in under 5 seconds — no queue, no friction.",
  },
  {
    title: "Contractor service entrance",
    body: "Separate kiosk flow. QR work permit scanned. Contractor details logged. Host notified. Never enters guest areas.",
  },
  {
    title: "Event QR check-in",
    body: "Unique QR per attendee. Gala dinner, conference, private function — contactless entry with full attendance log.",
  },
  {
    title: "Real-time property headcount",
    body: "Every person on property logged. Emergency evacuation list always accurate. One click, any device, any time.",
  },
]

const beforeAfter = [
  {
    before: "VIP guest arrives — receptionist manually calls the host, guest waits, first impression damaged",
    after: "VIP guest taps UAE Pass — host notified instantly, guest escorted within 60 seconds of arrival",
  },
  {
    before: "Contractors entering via guest entrance — no separate verified flow, no permit check at door",
    after: "Service entrance kiosk — QR work permit scanned, identity verified, contractor logged and directed correctly",
  },
  {
    before: "Gala dinner check-in — long queue at reception, paper guest list, no QR codes",
    after: "Event QR check-in — unique code per attendee, contactless, 8-second entry, full attendance log in real time",
  },
  {
    before: "Incident report — no accurate record of who was on property or which contractors were on site",
    after: "Complete tamper-proof audit log — every person, permit, and event exported in under 30 seconds",
  },
]

const clients = [
  "Atlantis The Palm", "Fairmont", "Kempinski", "Hyatt",
  "Jumeirah Beach Hotel", "Paramount Hotels", "Sonder",
]

/* ─── Page ─── */

export default function HospitalityPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://buzzin.ae/en" },
              { "@type": "ListItem", position: 2, name: "Industries", item: "https://buzzin.ae/en/industries" },
              { "@type": "ListItem", position: 3, name: "Hospitality", item: "https://buzzin.ae/en/industries/hospitality" },
            ],
          }),
        }}
      />

      <Navbar />

      <main>
        {/* ━━━ SECTION 1 — HERO ━━━ */}
        <section className="relative overflow-hidden bg-[var(--bg-proof)] pt-28 pb-20 md:pt-36 md:pb-24">
          <HexagonPattern className="text-white/[0.04]" />

          <Container className="relative z-[1]">
            {/* Breadcrumb */}
            <nav className="mb-8 font-body text-[12px] text-white/40">
              <Link href="/en" className="hover:text-white/60">Home</Link>
              <span className="mx-1.5">/</span>
              <Link href="/en/industries" className="hover:text-white/60">Industries</Link>
              <span className="mx-1.5">/</span>
              <span>Hospitality</span>
            </nav>

            <HospitalityHero
              left={
                <>
                  {/* Badges */}
                  <HeroBlock className="mb-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-400">
                      Hospitality &amp; Hotels
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 font-heading text-[11px] font-semibold text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      5 Modules Available
                    </span>
                  </HeroBlock>

                  {/* H1 */}
                  <HeroBlock>
                    <h1 className="font-display text-display-lg leading-[1.1] tracking-[-0.03em] text-white md:text-display-xl lg:text-display-2xl">
                      Every guest expected.{"\n"}Every contractor verified.{"\n"}Every event flawless.
                    </h1>
                  </HeroBlock>

                  {/* Sub */}
                  <HeroBlock className="mt-4 max-w-[480px]">
                    <p className="font-body text-[18px] font-light leading-[1.7] text-white/70">
                      For a 5-star property, operational precision is not optional. Buzzin gives your team complete visibility over every person, permit, and event across your entire property — from lobby to loading bay.
                    </p>
                  </HeroBlock>

                  {/* Trusted by */}
                  <HeroBlock className="mt-7">
                    <p className="mb-2.5 font-heading text-[10px] font-semibold uppercase tracking-wide text-amber-400/60">
                      Trusted By
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Atlantis The Palm", "Fairmont", "Kempinski", "Hyatt", "Jumeirah Beach Hotel"].map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 font-heading text-[11px] font-semibold text-white/80 transition-colors hover:bg-white/[0.14]"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </HeroBlock>

                  {/* CTAs */}
                  <HeroBlock className="mt-8 flex flex-wrap gap-3">
                    <Button size="lg" asChild>
                      <Link href="/en/book-demo">Book a Hospitality Demo &rarr;</Link>
                    </Button>
                    <a
                      href="#modules"
                      className="inline-flex h-12 items-center rounded-lg border border-white/25 bg-transparent px-7 font-heading text-body-lg font-medium text-white/80 transition-colors hover:border-white/50"
                    >
                      See All Modules
                    </a>
                  </HeroBlock>
                </>
              }
              right={
                <div className="flex flex-col gap-4">
                  {[
                    { val: "5\u2605", title: "5-star standard", body: "Every check-in reflects the quality of your property" },
                    { val: "5 sec", title: "Lobby check-in", body: "From arrival to verified in 3 to 5 seconds \u2014 no queue" },
                    { val: "24/7", title: "Always on", body: "Real-time visibility across your property \u2014 any time, any device" },
                  ].map((card) => (
                    <HeroBlock key={card.title}>
                      <div className="flex items-center gap-4 rounded-[14px] border border-white/10 bg-white/[0.07] px-6 py-5 transition-colors hover:bg-white/10">
                        <span className="font-heading text-[32px] font-extrabold text-[var(--text-brand)]">{card.val}</span>
                        <div>
                          <p className="font-heading text-[14px] font-bold text-white">{card.title}</p>
                          <p className="font-body text-[13px] font-light text-white/55">{card.body}</p>
                        </div>
                      </div>
                    </HeroBlock>
                  ))}
                </div>
              }
            />
          </Container>
        </section>

        {/* ━━━ SECTION 2 — THE MONDAY MORNING PROBLEM ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                &mdash; The Problem
              </p>
              <h2 className="mt-4 max-w-[600px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                When operations break down, it shows in the lobby.
              </h2>
            </SectionReveal>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <SectionReveal>
                <p className="mb-3.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What a Hotel GM Told Us
                </p>
                <blockquote className="border-l-[3px] border-[var(--text-brand)] pl-5 font-display text-[1.5rem] leading-[1.5] text-[var(--text-primary)]">
                  &ldquo;During peak check-in, my lobby became chaos. Contractors at the wrong entrance. Visitors waiting with no host notified. For a 5-star property, that is not the standard we operate to.&rdquo;
                </blockquote>
                <p className="mt-3 font-body text-[12px] text-[var(--text-muted)]">
                  — General Manager, Luxury Hotel, Dubai
                </p>
                <p className="mt-5 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  Peak season, back-to-back events, and a construction contractor at the wrong gate. Without a connected system, every one of these is a separate problem with no single source of truth.
                </p>
              </SectionReveal>

              <SectionReveal>
                <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What This Costs Your Property
                </p>
                <StaggerGrid className="space-y-3" interval={0.1}>
                  {painPoints.map((p) => (
                    <StaggerItem key={p}>
                      <div className="flex gap-3">
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={1.5} />
                        <p className="font-body text-[14px] leading-[1.55] text-[var(--text-secondary)]">{p}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGrid>
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 3 — MODULES FOR HOSPITALITY ━━━ */}
        <section id="modules" className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                &mdash; The Platform
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Five modules. One property. Total operational control.
              </h2>
              <p className="mt-3 mb-10 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Every module shares the same dashboard and data. When a contractor is checked in via the work permit system, security knows. When an event guest registers, the lobby team knows.
              </p>
            </SectionReveal>

            <StaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" interval={0.1}>
              {modules.map((m, i) => (
                <StaggerItem key={m.name} className={i >= 3 ? "lg:col-span-1" : ""}>
                  <div className="relative rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-[22px] transition-all duration-[220ms] hover:border-[rgba(245,166,35,0.45)] hover:-translate-y-[3px] hover:shadow-md">
                    {m.badge && (
                      <span className="absolute right-4 top-4 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 font-heading text-[8px] font-bold text-[var(--text-brand)]">
                        {m.badge}
                      </span>
                    )}
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                        <m.icon className="h-4 w-4 text-[var(--text-brand)]" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading text-[14px] font-bold text-[var(--text-primary)]">{m.name}</h3>
                    </div>
                    <p className="mb-3.5 font-body text-[13px] leading-[1.55] text-[var(--text-muted)]">{m.body}</p>
                    <Link href={m.href} className="font-body text-[12px] font-semibold text-[var(--text-brand)] hover:underline">
                      Learn more &rarr;
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 4 — THE HOSPITALITY DIFFERENCE ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                &mdash; Built for Hospitality
              </p>
              <h2 className="mt-4 mb-10 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                The features your property actually needs.
              </h2>
            </SectionReveal>

            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Left — feature rows */}
              <SectionReveal>
                <p className="font-heading text-[10px] font-bold uppercase text-[var(--text-brand)]">
                  Most Requested by Hotel Clients
                </p>
                <h3 className="mt-2 mb-3 font-heading text-[1.5rem] font-bold text-[var(--text-primary)]">
                  Separate flows for guests, contractors, and event attendees — managed from one dashboard.
                </h3>
                <p className="mb-6 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  A 5-star lobby cannot process a VIP guest and a maintenance contractor through the same entrance flow. Buzzin gives you fully separate check-in journeys — each configured to your standards — with every interaction logged to a single audit trail.
                </p>

                <StaggerGrid className="space-y-3.5" interval={0.1}>
                  {featureRows.map((f, i) => (
                    <StaggerItem key={f.title}>
                      <div className="flex gap-3">
                        <CheckCircle className="mt-[3px] h-4 w-4 shrink-0 text-[var(--text-brand)]" strokeWidth={1.5} />
                        <div>
                          <p className="font-heading text-[14px] font-semibold text-[var(--text-primary)]">{f.title}</p>
                          <p className="mt-0.5 font-body text-[13px] leading-[1.5] text-[var(--text-muted)]">
                            {f.body}
                            {i === 3 && (
                              <> — <Link href="/en/security-compliance" className="text-[var(--text-brand)] hover:underline">view security certifications</Link></>
                            )}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGrid>
              </SectionReveal>

              {/* Right — proof card */}
              <SectionReveal>
                <div className="relative overflow-hidden rounded-2xl bg-[var(--bg-proof)] p-7">
                  <div className="pointer-events-none absolute right-0 top-0 h-[200px] w-[200px] bg-[radial-gradient(circle,rgba(245,166,35,0.08)_0%,transparent_70%)]" />
                  <div className="relative z-[1]">
                    <p className="mb-3 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                      Atlantis The Palm
                    </p>
                    <p className="font-display text-[1.2rem] italic leading-[1.5] text-white">
                      &ldquo;Buzzin manages visitor flows, contractor access, and event check-in across one of the UAE&apos;s most visited luxury destinations.&rdquo;
                    </p>
                    <div className="my-4 h-px bg-white/10" />
                    <div className="flex gap-6">
                      {[
                        { val: "20M+", label: "interactions processed" },
                        { val: "300+", label: "organisations" },
                        { val: "5 yrs", label: "data retention" },
                      ].map((s) => (
                        <div key={s.label}>
                          <p className="font-heading text-[1.5rem] font-bold text-[var(--text-brand)]">{s.val}</p>
                          <p className="font-body text-[11px] font-light text-white/50">{s.label}</p>
                        </div>
                      ))}
                    </div>
                    <span className="mt-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-0.5 font-heading text-[8px] font-bold text-[var(--text-brand)]">
                      Hospitality &amp; Hotels
                    </span>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 5 — BEFORE / AFTER ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                &mdash; The Transformation
              </p>
              <h2 className="mt-4 mb-10 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                What changes when your property runs on Buzzin.
              </h2>
            </SectionReveal>

            <StaggerGrid className="space-y-2.5" interval={0.1}>
              {beforeAfter.map((row, i) => (
                <StaggerItem key={i}>
                  <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-[var(--border-default)] md:grid-cols-[1fr_40px_1fr]">
                    <div className="bg-[#FFF5F5] px-5 py-4">
                      <p className="mb-1.5 font-heading text-[9px] font-bold uppercase tracking-wide text-red-500">Before</p>
                      <p className="font-body text-[13px] leading-[1.55] text-red-800">{row.before}</p>
                    </div>
                    <div className="hidden items-center justify-center border-x border-[var(--border-default)] bg-white md:flex">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500">
                        <ArrowRight className="h-3.5 w-3.5 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="bg-[#F0FDF4] px-5 py-4">
                      <p className="mb-1.5 font-heading text-[9px] font-bold uppercase tracking-wide text-emerald-600">With Buzzin</p>
                      <p className="font-body text-[13px] font-semibold leading-[1.55] text-emerald-800">{row.after}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 6 — ALL CLIENTS IN SECTOR ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-14 md:py-16">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                &mdash; Hospitality Clients
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                The UAE&apos;s leading hotels trust Buzzin.
              </h2>
            </SectionReveal>

            <StaggerGrid className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" interval={0.06}>
              {clients.map((c) => (
                <StaggerItem key={c}>
                  <div className="flex min-h-[64px] items-center justify-center rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-5 py-4 transition-all duration-[220ms] hover:border-[rgba(245,166,35,0.35)] hover:-translate-y-[2px]">
                    <span className="font-heading text-[12px] font-bold text-[var(--text-muted)] transition-colors group-hover:text-[var(--text-primary)]">
                      {c}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>

            <p className="mt-4 text-center font-body text-[12px] text-[var(--text-muted)]">
              Logo files will be placed here — tiles sized and ready for SVG/PNG upload
            </p>

            <p className="mt-3 text-center">
              <Link href="/en/industries/residential-real-estate" className="font-body text-[13px] text-[var(--text-brand)] hover:underline">
                See our real estate clients &rarr;
              </Link>
            </p>
          </Container>
        </section>

        {/* ━━━ SECTION 7 — SECURITY ━━━ */}
        <SecurityBar />

        {/* ━━━ SECTION 8 — BOTTOM CTA ━━━ */}
        <CtaBanner
          content={{
            headline: "Ready to bring this standard to your property?",
            subline: "We will walk you through exactly how Buzzin works for hospitality — your property type, your guest flow, your contractor challenges.",
            primaryLabel: "Book a Free Demo",
            primaryHref: "/book-demo",
            whatsappLabel: "Chat on WhatsApp",
            whatsappHref: "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20the%20platform.",
            phone: "+971 4 320 1265",
          }}
        />
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 pb-6 text-center">
          <Link href="/en/industries" className="font-body text-[13px] text-white/60 hover:text-white transition-colors">
            See all industries &rarr;
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

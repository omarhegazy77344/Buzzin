import type { Metadata } from "next"
import Link from "next/link"
import {
  QrCode, MapPin, Mail, CheckSquare, Users, BarChart2,
  Star, Presentation, GraduationCap, Building2, Briefcase, PartyPopper,
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
import { EventDashboardMock } from "@/components/marketing/event-dashboard-mock"
import {
  VmsHero, HeroBlock,
  VmsSectionReveal, VmsStaggerGrid, VmsStaggerItem,
} from "@/components/marketing/vms-page-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Event Management System UAE | Buzzin — QR Check-In, Branded Invitations, Access Control",
  description:
    "Digital event management system for UAE hotels, corporates, and schools. Unique QR per attendee, time and location controlled access, branded invitations, full attendance log. Trusted by Atlantis, Fairmont, and Kempinski.",
  openGraph: {
    title: "Event Management System UAE | Buzzin",
    description:
      "Unique QR per attendee. Time and location controlled access. Branded invitations. Full attendance log. Trusted by Atlantis, Fairmont, and Kempinski.",
  },
}

/* ─── Data ─── */

const steps = [
  { title: "Event created in dashboard", body: "Admin creates event with date, time, location map, capacity limit, and access control rules. Approval workflow set to auto or manual." },
  { title: "Unique invitation links sent", body: "Each invitee receives a unique, one-time use registration link by email. Group registration available with admin-set attendee limits." },
  { title: "Attendee registers and submits", body: "Attendee completes pre-registration form. Optional: Emirates ID or passport attachment as mandatory requirement. Admin reviews and approves or auto-approves." },
  { title: "Individual QR code issued", body: "Each registered attendee receives their own unique QR code by email. It cannot be shared or duplicated. Event title, date, time, and venue map are included in the invitation." },
  { title: "Contactless QR check-in", body: "Attendee scans QR at event entrance. Location and time verified automatically. Check-in logged in real time. Badge printed if required." },
]

const features = [
  {
    icon: QrCode, title: "Unique Per-Attendee QR",
    items: [
      "One QR code per registered attendee",
      "Cannot be shared or duplicated",
      "One-time use, invalid after scan",
      "Individual QR per attendee in group registrations",
      "QR contains attendee photo if ID submitted",
    ],
  },
  {
    icon: MapPin, title: "Time & Location Control",
    items: [
      "QR only valid at specified GPS location",
      "QR only valid during event entry/exit window",
      "Invitees cannot enter before or after set times",
      "Multi-location events supported",
      "Location radius configurable per event",
    ],
  },
  {
    icon: Mail, title: "Branded Invitations",
    items: [
      "Client logo and brand colors on all invitation emails",
      "Customisable email copy per event",
      "Event title, date, time, and venue map link included",
      "One-click Add-to-Calendar option",
      "Reminder emails configurable before event",
    ],
  },
  {
    icon: CheckSquare, title: "Approval Workflows",
    items: [
      "Auto-approve based on rules",
      "Manual review and approval by admin before QR issued",
      "Bulk approve or reject group registrations",
      "Revoke access before or during event instantly",
      "Waitlist management for capacity-limited events",
    ],
  },
  {
    icon: Users, title: "Group Registration",
    items: [
      "Admin sets maximum attendees per registration request",
      "Individual QR generated for each person in group",
      "All QRs sent in one email to requester",
      "Group details tracked for access control",
      "Host responsible for group behaviour",
    ],
  },
  {
    icon: BarChart2, title: "Event Logs & Analytics",
    items: [
      "Real-time check-in count during event",
      "No-show tracking post event",
      "Dwell time and exit logging",
      "Exportable attendee log for audit or compliance",
      "Multi-event comparison reporting",
    ],
  },
]

const useCases = [
  {
    icon: Star,
    title: "Gala Dinners & Award Ceremonies",
    body: "VIP table assignment. Unique QR per guest. Location-controlled entry to ballroom. Real-time headcount for seating management.",
  },
  {
    icon: Presentation,
    title: "Conferences & Seminars",
    body: "Multi-session events with different QR codes per session. Speaker and VIP separate access flow. Full attendance log for CPD or certification records.",
  },
  {
    icon: GraduationCap,
    title: "School Events & Graduations",
    body: "Parent evenings, sports days, graduation ceremonies. Unique QR per family. Location controlled.",
    link: { text: "KHDA-compatible attendance log", href: "/en/industries/education" },
  },
  {
    icon: Building2,
    title: "Property Launch Events",
    body: "Invited buyer access only. Emirates ID verification at entry. Separate contractor and staff access. Full attendee record for follow-up.",
  },
  {
    icon: Briefcase,
    title: "Corporate Functions",
    body: "Internal events, board dinners, client entertainment. Discreet QR check-in. Branded invitations. Exportable attendance for expense and compliance reporting.",
  },
  {
    icon: PartyPopper,
    title: "Private & Members Events",
    body: "Members-only access control. Guest invitation by host. Plus-one management. Capacity limits enforced automatically at the door.",
  },
]

const consequences = [
  "Paper guest list at the door. Staff manually searching names while guests wait in a growing queue.",
  "QR codes forwarded to uninvited guests. No way to know if the person scanning is the registered attendee.",
  "No real-time attendance count. You find out how many came after the event, not during.",
  "Contractor and staff access mixed with guest access, with no separate verified flows",
  "No audit log. Insurance, compliance, or incident investigation requires records that do not exist.",
]

const proofCards = [
  {
    name: "Atlantis The Palm",
    body: "Event check-in and access control across one of the UAE\u2019s most active luxury event destinations, covering gala dinners, conferences, and private functions.",
    tag: "Hospitality",
    href: "/en/industries/hospitality",
  },
  {
    name: "Fairmont",
    body: "Branded event invitations and QR check-in for corporate functions and private dining events across Fairmont UAE properties.",
    tag: "Hospitality",
  },
  {
    name: "Taaleem Group",
    body: "School event management across 40+ campuses. Parent evenings, sports days, and graduation ceremonies with KHDA-compatible attendance logs.",
    tag: "Education",
    href: "/en/industries/education",
  },
]

const beforeAfter = [
  {
    before: "Paper guest list at the door. Staff manually searching names while guests queue in the lobby.",
    after: "QR scan at entrance. Attendee verified in 3 seconds, real-time count updates instantly.",
  },
  {
    before: "Single QR code forwarded to uninvited guests. No way to verify the person at the door.",
    after: "Unique one-time QR per attendee. Cannot be shared, invalid after first scan.",
  },
  {
    before: "No real-time attendance count during the event. You find out numbers the following morning.",
    after: "Live dashboard showing check-ins, no-shows, and current headcount, updated in real time throughout.",
  },
  {
    before: "No event audit log. Insurance claim or incident investigation has no verified attendance record.",
    after: "Complete immutable attendee log with timestamps. Exportable in under 30 seconds after event.",
  },
]

/* ─── Page ─── */

export default function EventManagementPage() {
  return (
    <>
      {/* JSON-LD — SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Buzzin Event Management System",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Android",
            description:
              "Digital event management system for UAE with unique QR per attendee, time and location controlled access, branded invitations, and real-time attendance tracking.",
            offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
            provider: { "@type": "Organization", name: "Buzzin FZCO", url: "https://buzzin.ae" },
          }),
        }}
      />

      {/* JSON-LD — BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://buzzin.ae/en" },
              { "@type": "ListItem", position: 2, name: "Platform", item: "https://buzzin.ae/en/platform" },
              { "@type": "ListItem", position: 3, name: "Event Management", item: "https://buzzin.ae/en/platform/event-management" },
            ],
          }),
        }}
      />

      <Navbar />

      <main>
        {/* ━━━ SECTION 1 — HERO ━━━ */}
        <section className="bg-[var(--bg-page)] pt-28 pb-16 md:pt-36 md:pb-20">
          <Container>
            {/* Breadcrumb */}
            <nav className="mb-8 font-body text-[12px] text-[var(--text-muted)]">
              <Link href="/en" className="hover:text-[var(--text-secondary)]">Home</Link>
              <span className="mx-1.5">/</span>
              <Link href="/en/platform" className="hover:text-[var(--text-secondary)]">Platform</Link>
              <span className="mx-1.5">/</span>
              <span>Event Management</span>
            </nav>

            <VmsHero
              left={
                <>
                  {/* Badges */}
                  <HeroBlock className="mb-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                      Event Management
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-heading text-[11px] font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Core Module · Live
                    </span>
                  </HeroBlock>

                  {/* H1 */}
                  <HeroBlock>
                    <h1 className="font-display text-display-lg md:text-display-xl lg:text-display-2xl text-[var(--text-primary)]">
                      Every attendee. Registered, QR-coded, and checked in within 3&nbsp;seconds.
                    </h1>
                  </HeroBlock>

                  {/* Sub */}
                  <HeroBlock className="mt-4 max-w-[480px]">
                    <p className="font-body text-body-lg leading-[1.7] text-[var(--text-secondary)]">
                      Branded invitations. Unique QR code per attendee. Time and location controlled access. Auto or manual approval workflows. Built for the GCC hospitality and corporate event standard.
                    </p>
                  </HeroBlock>

                  {/* Micro-stats */}
                  <HeroBlock className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-8">
                    {[
                      { val: "3 sec", label: "average check-in time" },
                      { val: "Unique", label: "QR per attendee, not shared" },
                      { val: "GPS", label: "location controlled access" },
                    ].map((s, i) => (
                      <div key={s.label} className="flex items-center gap-4 sm:gap-8">
                        {i > 0 && <div className="hidden h-10 w-px bg-[var(--border-default)] sm:block" />}
                        <div>
                          <p className="font-heading text-[28px] font-bold text-[var(--text-brand)]">{s.val}</p>
                          <p className="font-body text-[12px] text-[var(--text-muted)]">{s.label}</p>
                        </div>
                      </div>
                    ))}
                  </HeroBlock>

                  {/* CTAs */}
                  <HeroBlock className="mt-8 flex flex-wrap gap-3">
                    <Button size="lg" asChild>
                      <Link href="/en/book-demo">Book a Free Demo &rarr;</Link>
                    </Button>
                    <Button variant="ghost" size="lg" asChild>
                      <Link href="#how-it-works">How It Works</Link>
                    </Button>
                  </HeroBlock>
                </>
              }
              right={<EventDashboardMock />}
            />
          </Container>
        </section>

        {/* ━━━ SECTION 2 — THE PROBLEM ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The Problem
              </p>
              <h2 className="mt-4 max-w-[560px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                A queue at your gala dinner entrance is a first impression you cannot undo.
              </h2>
            </VmsSectionReveal>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <VmsSectionReveal>
                <p className="mb-3.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What an Events Manager Told Us
                </p>
                <blockquote className="border-l-[3px] border-[var(--text-brand)] pl-5 font-display text-[1.5rem] italic leading-[1.5] text-[var(--text-primary)]">
                  &ldquo;We had 400 guests for a gala dinner. Paper guest list at the door. Three staff trying to find names manually. Guests waiting in the lobby for 20 minutes. It was embarrassing, and completely avoidable.&rdquo;
                </blockquote>
                <p className="mt-3 font-body text-[12px] text-[var(--text-muted)]">
                  Events Manager, Luxury Hotel, Dubai
                </p>
                <p className="mt-5 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  Without a digital system, every large event creates the same problem. Paper lists that get out of date. QR codes that can be shared or duplicated. No way to verify that the person at the door is actually the registered attendee.
                </p>
              </VmsSectionReveal>

              <VmsSectionReveal>
                <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What This Costs Your Event
                </p>
                <div className="space-y-3">
                  {consequences.map((c) => (
                    <div key={c} className="flex gap-3">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={1.5} />
                      <p className="font-body text-[14px] leading-[1.55] text-[var(--text-secondary)]">{c}</p>
                    </div>
                  ))}
                </div>
              </VmsSectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 3 — HOW IT WORKS ━━━ */}
        <section id="how-it-works" className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                How It Works
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                From invitation to check-in, fully contactless.
              </h2>
              <p className="mt-3 mb-10 max-w-[500px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Every attendee receives a unique one-time QR code by email. At the event entrance, they scan and are verified in 3 seconds. No paper list, no manual search.
              </p>
            </VmsSectionReveal>

            <VmsStaggerGrid className="relative grid grid-cols-1 gap-4 md:grid-cols-5" interval={0.15}>
              {steps.map((s, i) => (
                <VmsStaggerItem key={s.title}>
                  <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6">
                    <span className="block font-heading text-[4.5rem] font-bold leading-none text-[var(--border-default)]">
                      {i + 1}
                    </span>
                    <h3 className="mt-1 font-heading text-[1rem] font-semibold text-[var(--text-primary)]">{s.title}</h3>
                    <p className="mt-2 font-body text-[13px] leading-[1.6] text-[var(--text-muted)]">{s.body}</p>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 4 — FEATURES ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Features
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Every feature the GCC event standard requires.
              </h2>
              <p className="mt-3 mb-9 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Unique QR per attendee, time and location control, branded invitations, approval workflows, group registration, and exportable analytics. All in one module.
              </p>
            </VmsSectionReveal>

            <VmsStaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" interval={0.1}>
              {features.map((f) => (
                <VmsStaggerItem key={f.title}>
                  <div className="rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                        <f.icon className="h-[18px] w-[18px] text-[var(--text-brand)]" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading text-[15px] font-bold text-[var(--text-primary)]">{f.title}</h3>
                    </div>
                    <ul className="mt-3.5 space-y-2">
                      {f.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[5px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--text-brand)]" />
                          <span className="font-body text-[13px] text-[var(--text-secondary)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 5 — USE CASES ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Use Cases
              </p>
              <h2 className="mt-4 max-w-[520px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Every event type. One system.
              </h2>
              <p className="mt-3 mb-10 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                From gala dinners to parent evenings, product launches to graduation ceremonies. Buzzin Event Management handles every format.
              </p>
            </VmsSectionReveal>

            <VmsStaggerGrid className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" interval={0.08}>
              {useCases.map((u) => (
                <VmsStaggerItem key={u.title}>
                  <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-5 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.3)] hover:bg-[var(--bg-surface)]">
                    <u.icon className="mb-2.5 h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
                    <h3 className="mb-1.5 font-heading text-[14px] font-bold text-[var(--text-primary)]">{u.title}</h3>
                    <p className="font-body text-[12px] leading-[1.55] text-[var(--text-muted)]">
                      {u.link ? (
                        <>
                          {u.body}{" "}
                          <Link href={u.link.href} className="text-[var(--text-brand)] hover:underline">
                            {u.link.text}
                          </Link>
                          .
                        </>
                      ) : (
                        u.body
                      )}
                    </p>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 6 — CLIENT PROOF ━━━ */}
        <section className="relative overflow-hidden bg-[var(--bg-proof)] py-16 md:py-20">
          <HexagonPattern className="text-white/[0.04]" />
          <Container className="relative">
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Trusted By
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-white">
                The UAE&apos;s leading event venues trust Buzzin.
              </h2>
            </VmsSectionReveal>

            <VmsStaggerGrid className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-3" interval={0.12}>
              {proofCards.map((c) => (
                <VmsStaggerItem key={c.name}>
                  <div className="rounded-[14px] border border-white/[0.08] bg-white/[0.05] p-6 transition-colors duration-300 hover:bg-white/[0.08]">
                    {c.href ? (
                      <Link href={c.href} className="font-heading text-[16px] font-bold text-[var(--text-brand)] hover:underline">{c.name}</Link>
                    ) : (
                      <p className="font-heading text-[16px] font-bold text-[var(--text-brand)]">{c.name}</p>
                    )}
                    <p className="mt-2 font-body text-[13px] leading-[1.65] text-white/60">{c.body}</p>
                    <span className="mt-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-0.5 font-heading text-[8px] font-bold text-[var(--text-brand)]">
                      {c.tag}
                    </span>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>

            <p className="mt-6 text-center font-body text-[13px] text-white/40">
              And 300+ organisations across UAE, KSA, Kuwait, and Lebanon.
            </p>
          </Container>
        </section>

        {/* ━━━ SECTION 7 — BEFORE / AFTER ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The Transformation
              </p>
              <h2 className="mt-4 mb-10 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                What changes when your events go digital.
              </h2>
            </VmsSectionReveal>

            <VmsStaggerGrid className="space-y-2.5" interval={0.1}>
              {beforeAfter.map((row, i) => (
                <VmsStaggerItem key={i}>
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
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 8 — SECURITY ━━━ */}
        <SecurityBar />

        {/* ━━━ SECTION 9 — BOTTOM CTA ━━━ */}
        <CtaBanner
          content={{
            headline: "Ready to run your next event without a paper guest list?",
            subline:
              "We will show you exactly how Buzzin Event Management works for your event type. Book a 30-minute demo.",
            primaryLabel: "Book a Free Demo",
            primaryHref: "/en/book-demo",
            whatsappLabel: "Chat on WhatsApp",
            whatsappHref:
              "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20the%20platform.",
            phone: "+971 4 320 1265",
          }}
        />
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 pb-6 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/en/platform" className="font-body text-[13px] text-white/60 transition-colors hover:text-white">
              See all platform modules &rarr;
            </Link>
            <Link href="/en/industries/hospitality" className="font-body text-[13px] text-white/60 transition-colors hover:text-white">
              See how we work for hospitality &rarr;
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

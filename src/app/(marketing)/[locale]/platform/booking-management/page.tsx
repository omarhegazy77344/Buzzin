import type { Metadata } from "next"
import Link from "next/link"
import {
  Search, Settings, Shield, CalendarSearch, QrCode, ScanLine, Mail, BarChart2,
  Building2, Waves, Star, Laptop, Dumbbell, Utensils,
  Users, BookOpen, CheckCircle, XCircle, ArrowRight,
} from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { SectionBackground } from "@/components/ui/SectionBackground"
import { Button } from "@/components/ui/button"
import { SecurityBar } from "@/components/marketing/security-bar"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { BookingCalendarMock } from "@/components/marketing/booking-calendar-mock"
import { TransformationShowcase } from "@/components/marketing/transformation-showcase"
import {
  VmsHero, HeroBlock,
  VmsSectionReveal, VmsStaggerGrid, VmsStaggerItem,
} from "@/components/marketing/vms-page-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Booking Management System UAE | Buzzin \u2014 Facilities, Events, QR Access Control",
  description:
    "Enterprise facility and amenity booking management for UAE. Live availability, per-member QR codes, real-time capacity control, approval workflows, and full audit trail. Trusted by Aldar and 550+ organisations.",
  openGraph: {
    title: "Booking Management System UAE | Buzzin",
    description:
      "Live availability. Per-member QR codes. Real-time capacity. Approval workflows. Full audit trail. From co-working desks to ballrooms \u2014 one platform.",
  },
}

/* ─── Data ─── */

const capabilities = [
  {
    icon: Search,
    title: "Customer-facing booking",
    body: "Guests search availability, capture their details, and receive QR-based digital passes. Available through a standalone web app or embedded directly in the Buzzin user app.",
  },
  {
    icon: Settings,
    title: "Operations management",
    body: "Facility configuration, dynamic pricing, approval workflows, and a live operational dashboard for property operators, security, and finance teams.",
  },
  {
    icon: Shield,
    title: "Compliance & access control",
    body: "Encrypted data storage, role-based access, an immutable audit trail, and QR-based check-in and check-out with full access logging.",
  },
]

const consequences = [
  "Double-bookings: two groups arrive for the same facility at the same time with no resolution",
  "Group bookings tracked as one entry. No way to know which individual members actually attended.",
  "No real-time capacity control, so a facility fills beyond safe limits without any system alert",
  "Audit trail gaps. Insurance claims, incidents, or compliance reviews have no complete access record.",
  "Revenue leakage because bookings that should generate income are handled manually with no payment integration or pricing control",
]

const steps = [
  {
    title: "Guest searches availability",
    body: "Guest searches by date, time, duration, and number of guests. System returns only options with sufficient real-time capacity. Bookable up to 6 months ahead.",
  },
  {
    title: "Details captured and ID uploaded",
    body: "Guest provides name, mobile, email, and identification. Emirates ID or passport uploaded and stored against profile for future re-use.",
  },
  {
    title: "Booking confirmed or routed",
    body: "Standard bookings auto-confirmed instantly. Bookings requiring approval routed to the right person with full audit of who approved what.",
  },
  {
    title: "Per-member QR codes issued",
    body: "Each guest in a group booking receives their own individual QR code. This enables independent check-in and access tracking per person, not per booking.",
  },
  {
    title: "QR check-in with access logging",
    body: "Guest presents QR at venue entry. System validates against booking record, confirms time window, grants access. Multiple entries and exits logged throughout the session.",
  },
]

const features = [
  {
    icon: CalendarSearch,
    title: "Facility & Availability",
    items: [
      "Facility configuration: capacity, operating hours, booking rules",
      "Availability search by date, time, duration, and guest count",
      "Real-time capacity check with live calculation against all active bookings",
      "Operating hours and blocked dates per facility",
      "Advance booking up to 6 months, configurable per property",
    ],
  },
  {
    icon: QrCode,
    title: "Booking & Identity",
    items: [
      "Per-member QR codes for every individual in a group booking",
      "Visitor and guest data capture (name, mobile, email, ID)",
      "Emirates ID and passport upload, stored and reused across bookings",
      "Booking confirmation email with reference, time, location, and QR pass",
      "Single identity across all Buzzin products. No re-keying.",
    ],
  },
  {
    icon: ScanLine,
    title: "Check-In & Access Control",
    items: [
      "QR-based check-in validated against booking record and time window",
      "Multiple entries and exits within active booking using the same QR code",
      "Access logging: every check-in and check-out with timestamp and device ID",
      "Late check-in grace period, configurable buffer for late arrivals",
      "Integrated with Buzzin VMS identity ecosystem",
    ],
  },
  {
    icon: Mail,
    title: "Communications",
    items: [
      "Automated email notifications at every step: booking, payment, reminder, expiry, cancellation",
      "Multi-language email templates",
      "Fully customisable templates per property and event type",
      "Confirmation always contains QR pass, reference, and location",
    ],
  },
  {
    icon: BarChart2,
    title: "Operations & Analytics",
    items: [
      "Admin dashboard covering bookings, occupancy, revenue, and approvals across all properties",
      "Calendar dashboard: full month colour-coded by status (Pending, Approved, Ongoing, Completed)",
      "Real-time dashboard. Tiles update the moment a booking changes, no refresh required.",
      "Utilisation metrics including peak hours and capacity trends by date range",
      "Session analytics: duration patterns, peak slots, volume per facility",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    items: [
      "Role-based access control with configurable roles and granular permissions per property",
      "Data encryption: all customer data, payment info, and ID protected with industry-standard encryption",
      "Immutable audit trail. Every booking action, payment event, and override recorded permanently.",
      "Approval workflow with full audit. Every approval logged with approver identity and timestamp.",
      "Event creation and management for one-off or recurring events with ticketing rules",
    ],
  },
]

const useCases = [
  {
    icon: Building2,
    title: "Meeting & Conference Rooms",
    body: "Time-slot booking with per-member QR access. Approval workflows for executive rooms. Full occupancy and utilisation reporting.",
  },
  {
    icon: Waves,
    title: "Pool & Leisure Facilities",
    body: "Capacity mode: book by session and the system manages headcount. Late check-in grace period. Multiple entries and exits during active session.",
  },
  {
    icon: Star,
    title: "Ballrooms & Event Spaces",
    body: "Event creation with ticketing rules. Per-attendee QR codes. Approval before QR issued. Immutable access log for every person who entered.",
  },
  {
    icon: Laptop,
    title: "Co-Working & Desk Booking",
    body: "Advance booking up to 6 months. Operating hours per zone. Blocked dates for private hire or maintenance. Real-time availability search.",
  },
  {
    icon: Dumbbell,
    title: "Gym & Sports Courts",
    body: "Per-slot booking with configurable duration (30, 60, 90 minutes). Grace period for late arrivals. Peak hour and utilisation analytics.",
  },
  {
    icon: Utensils,
    title: "Community Halls & Clubhouses",
    body: "Group booking with per-member QR. Pricing rules per facility. Admin approval routing. Full audit trail for every session.",
  },
]

const ecosystemRows = [
  "ID captured once at booking and reused for all future visits",
  "Properties, branding, and notifications configured once, then shared across all modules",
  "Customer moves between Buzzin services without signing in again for a unified app experience",
]

const proofCards = [
  {
    name: "Aldar Properties",
    body: "Facility and amenity booking management across Aldar residential communities. Meeting rooms, pools, and community halls with per-member QR access control and full audit trail.",
    tag: "Real Estate",
    href: "/en/industries/residential-real-estate",
  },
  {
    name: "Azizi Developments",
    body: "Live availability calendar and self-service booking for residents across Azizi communities. Automated confirmation, QR access passes, and real-time occupancy dashboard.",
    tag: "Real Estate",
  },
]

const beforeAfter = [
  {
    before: "Facility booked by phone call. Staff manually check a spreadsheet, and double-bookings happen every weekend.",
    after: "Guest books online. Real-time capacity check eliminates double-bookings, confirmation and QR issued instantly.",
  },
  {
    before: "Group booking logged as one entry. No way to know which individuals actually attended or accessed the facility.",
    after: "Per-member QR code for every individual in the group, with independent access tracking and audit per person.",
  },
  {
    before: "No access control at facility entrance. Anyone can enter regardless of booking status or time window.",
    after: "QR validated at entrance. Time window confirmed, access granted, every entry and exit logged automatically.",
  },
  {
    before: "Incident or insurance claim with no verified record of who was in the facility or when they left.",
    after: "Immutable audit trail. Every booking action, check-in, check-out, and approval logged permanently.",
  },
]

/* ─── Page ─── */

export default function BookingManagementPage() {
  return (
    <>
      {/* JSON-LD — SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Buzzin Booking Management System",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Android",
            description:
              "Enterprise facility and amenity booking management platform. Live availability, per-member QR codes, real-time capacity control, approval workflows, and immutable audit trail.",
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
              { "@type": "ListItem", position: 3, name: "Booking Management", item: "https://buzzin.ae/en/platform/booking-management" },
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
              <span>Booking Management</span>
            </nav>

            <VmsHero
              left={
                <>
                  <HeroBlock className="mb-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                      Booking Management
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-heading text-[11px] font-semibold text-amber-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                      New Module · Live
                    </span>
                  </HeroBlock>

                  <HeroBlock>
                    <h1 className="font-display text-display-lg md:text-display-xl lg:text-display-2xl text-[var(--text-primary)]">
                      From co-working desks to ballrooms, every bookable space managed in one platform.
                    </h1>
                  </HeroBlock>

                  <HeroBlock className="mt-4 max-w-[480px]">
                    <p className="font-body text-body-lg leading-[1.7] text-[var(--text-secondary)]">
                      Live availability search. Per-member QR codes for group bookings. Real-time capacity control. Approval workflows. Full audit trail. Connected directly to the Buzzin visitor and identity ecosystem.
                    </p>
                  </HeroBlock>

                  <HeroBlock className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-8">
                    {[
                      { val: "QR", label: "per member in group bookings" },
                      { val: "6 mo", label: "advance booking window" },
                      { val: "Real", label: "time capacity control" },
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
              right={<BookingCalendarMock />}
            />
          </Container>
        </section>

        {/* ━━━ SECTION 2 — WHAT IS BMS ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-14 md:py-16">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The Platform
              </p>
              <h2 className="mt-4 max-w-[560px] font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                One platform handles the entire booking lifecycle, from search to access control to audit.
              </h2>
            </VmsSectionReveal>

            <VmsStaggerGrid className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-3" interval={0.12}>
              {capabilities.map((c) => (
                <VmsStaggerItem key={c.title}>
                  <div className="h-full rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.35)] hover:shadow-md">
                    <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                      <c.icon className="h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 font-heading text-[15px] font-bold text-[var(--text-primary)]">{c.title}</h3>
                    <p className="font-body text-[13px] leading-[1.6] text-[var(--text-muted)]">{c.body}</p>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 3 — THE PROBLEM ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The Problem
              </p>
              <h2 className="mt-4 max-w-[560px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Facility booking by phone and spreadsheet creates double-bookings, disputes, and blind spots every week.
              </h2>
            </VmsSectionReveal>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <VmsSectionReveal>
                <p className="mb-3.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What a Property Operator Told Us
                </p>
                <blockquote className="border-l-[3px] border-[var(--text-brand)] pl-5 font-display text-[1.5rem] italic leading-[1.5] text-[var(--text-primary)]">
                  &ldquo;We had the ballroom double-booked on a Saturday. Two events. One space. Neither booking was visible to the other team. That cannot happen with enterprise clients. Ever.&rdquo;
                </blockquote>
                <p className="mt-3 font-body text-[12px] text-[var(--text-muted)]">
                  Operations Manager, Mixed-Use Development, Dubai
                </p>
                <p className="mt-5 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  Without a real-time booking system, every facility operates as a separate problem. Availability is unclear, group bookings have no individual access tracking, and the audit trail for any incident is incomplete or does not exist.
                </p>
              </VmsSectionReveal>

              <VmsSectionReveal>
                <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What This Costs Your Operation
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

        {/* ━━━ SECTION 4 — HOW IT WORKS ━━━ */}
        <section id="how-it-works" className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                How It Works
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                From availability search to QR access. Fully digital.
              </h2>
              <p className="mt-3 mb-10 max-w-[500px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                The entire booking journey is managed in one platform. Guest books, identity captured, QR issued, access controlled, audit logged automatically.
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

        {/* ━━━ SECTION 5 — FEATURES ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Features
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Every feature live in production.
              </h2>
              <p className="mt-3 mb-9 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                All features below are operational today across every property running on the Buzzin BMS platform.
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

        {/* ━━━ SECTION 6 — USE CASES ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-14 md:py-16">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Use Cases
              </p>
              <h2 className="mt-4 max-w-[480px] font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Every bookable space. One platform.
              </h2>
              <p className="mt-3 mb-9 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                From a co-working desk to a ballroom, BMS manages any bookable space with the same level of control and audit trail.
              </p>
            </VmsSectionReveal>

            <VmsStaggerGrid className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" interval={0.08}>
              {useCases.map((u) => (
                <VmsStaggerItem key={u.title}>
                  <div className="h-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.3)] hover:bg-[var(--bg-canvas)]">
                    <u.icon className="mb-2.5 h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
                    <h3 className="mb-1.5 font-heading text-[14px] font-bold text-[var(--text-primary)]">{u.title}</h3>
                    <p className="font-body text-[12px] leading-[1.55] text-[var(--text-muted)]">{u.body}</p>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 7 — BUZZIN ECOSYSTEM ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Ecosystem
              </p>
              <h2 className="mt-4 max-w-[520px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                BMS is part of the connected Buzzin ecosystem, not a standalone tool.
              </h2>
              <p className="mt-3 mb-9 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                A single identity follows guests across every Buzzin product. ID documents captured during booking are reused at the gate. Properties, branding, and notifications are configured once and shared across the entire platform.
              </p>
            </VmsSectionReveal>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Left — connection card */}
              <VmsSectionReveal>
                <div className="h-full rounded-[14px] border-[1.5px] border-amber-500/20 bg-[var(--bg-canvas)] p-6">
                  <p className="mb-3 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                    Connected to VMS
                  </p>
                  <p className="mb-4 font-body text-[14px] leading-[1.65] text-[var(--text-secondary)]">
                    When a guest books a facility, their identity is shared with the Visitor Management System. At the gate, they are already known. No re-keying. No second registration. One identity across the entire Buzzin ecosystem.
                  </p>
                  <div className="mb-5 space-y-2.5">
                    {ecosystemRows.map((row) => (
                      <div key={row} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--text-brand)]" strokeWidth={2} />
                        <p className="font-body text-[13px] leading-[1.5] text-[var(--text-muted)]">{row}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/en/platform/visitor-management-system"
                    className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
                  >
                    See Visitor Management System &rarr;
                  </Link>
                </div>
              </VmsSectionReveal>

              {/* Right — platform diagram card */}
              <VmsSectionReveal>
                <div className="h-full rounded-[14px] bg-[var(--bg-proof)] p-6">
                  <p className="mb-3.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                    The Buzzin Platform
                  </p>

                  {/* Row 1 — VMS */}
                  <div className="mb-2 flex items-center justify-between rounded-[10px] border border-white/[0.10] bg-white/[0.07] px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <Users className="h-4 w-4 text-[var(--text-brand)]" strokeWidth={1.75} />
                      <span className="font-heading text-[13px] font-bold text-white">
                        Visitor Management System (VMS)
                      </span>
                    </div>
                    <span className="rounded-full border border-white/[0.12] bg-white/[0.06] px-2.5 py-0.5 font-heading text-[9px] font-semibold text-white/55">
                      Core
                    </span>
                  </div>

                  {/* Row 2 — BMS (highlighted) */}
                  <div className="flex items-center justify-between rounded-[10px] border border-amber-500/25 bg-amber-500/[0.12] px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="h-4 w-4 text-[var(--text-brand)]" strokeWidth={1.75} />
                      <span className="font-heading text-[13px] font-bold text-[var(--text-brand)]">
                        Booking Management System (BMS)
                      </span>
                    </div>
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/15 px-2.5 py-0.5 font-heading text-[9px] font-bold text-[var(--text-brand)]">
                      New
                    </span>
                  </div>

                  <p className="mt-3 font-body text-[12px] font-light leading-[1.6] text-white/50">
                    Both products share identity, property settings, and notification infrastructure. Configured once, used everywhere.
                  </p>
                </div>
              </VmsSectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 8 — CLIENT PROOF ━━━ */}
        <section className="relative overflow-hidden bg-[var(--bg-proof)] py-16 md:py-20">
          <SectionBackground
            variant="dark"
            hexGrid
            floatingElements={[
              { type: "hexagon", size: 90, x: "94%", y: "30%", delay: 0, duration: 9, color: "white" },
              { type: "hexagon", size: 70, x: "4%", y: "70%", delay: 2, duration: 8, color: "amber" },
            ]}
            gradientOrb={{ x: "50%", y: "40%", size: 300, color: "amber", opacity: 0.05 }}
          />
          <Container className="relative">
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Trusted By
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-white">
                UAE communities and properties running on Buzzin BMS.
              </h2>
            </VmsSectionReveal>

            <VmsStaggerGrid className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2" interval={0.12}>
              {proofCards.map((c) => (
                <VmsStaggerItem key={c.name}>
                  <div className="card-hover rounded-[14px] border border-white/[0.08] bg-white/[0.05] p-6 hover:bg-white/[0.08]">
                    {c.href ? (
                      <Link href={c.href} className="font-heading text-[16px] font-bold text-[var(--text-brand)] hover:underline">
                        {c.name}
                      </Link>
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
              And 550+ organisations across UAE, KSA, Kuwait, and Lebanon.
            </p>
          </Container>
        </section>

        {/* ━━━ SECTION 9 — THE TRANSFORMATION ━━━ */}
        <TransformationShowcase
          rows={beforeAfter}
          title="What changes when bookings go fully digital."
          subtitle={null}
        />

        {/* ━━━ SECTION 10 — SECURITY ━━━ */}
        <SecurityBar />

        {/* ━━━ SECTION 11 — BOTTOM CTA ━━━ */}
        <CtaBanner
          content={{
            headline: "Ready to bring every bookable space under one platform?",
            subline:
              "We will show you exactly how Buzzin BMS works for your facilities, from co-working desks to ballrooms. Book a 30-minute demo.",
            primaryLabel: "Book a Free Demo",
            primaryHref: "/en/book-demo",
            whatsappLabel: "Chat on WhatsApp",
            whatsappHref:
              "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20Buzzin%20Booking%20Management.",
            phone: "+971 4 320 1265",
          }}
        />

        <div className="bg-gradient-to-br from-amber-500 to-amber-600 pb-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="/en/platform"
              className="font-body text-[13px] text-white/70 transition-colors hover:text-white"
            >
              See all platform modules &rarr;
            </Link>
            <Link
              href="/en/industries/residential-real-estate"
              className="font-body text-[13px] text-white/70 transition-colors hover:text-white"
            >
              See how we work for real estate &rarr;
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

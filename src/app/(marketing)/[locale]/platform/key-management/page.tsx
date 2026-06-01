import type { Metadata } from "next"
import Link from "next/link"
import {
  Tag, Building2, Lock,
  Monitor, KeyRound, Bell, BarChart2, Users, FileText,
  ShieldAlert, HardHat, Star, Hotel, ClipboardCheck,
  CheckCircle, XCircle,
} from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { SecurityBar } from "@/components/marketing/security-bar"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { KmsDashboardMock } from "@/components/marketing/kms-dashboard-mock"
import {
  VmsHero, HeroBlock,
  VmsSectionReveal, VmsStaggerGrid, VmsStaggerItem,
} from "@/components/marketing/vms-page-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Key Management System UAE | Buzzin \u2014 NFC Key Tracking & Accountability (Coming Soon)",
  description:
    "Buzzin Key Management System \u2014 real-time NFC key tracking, role-based access, immutable audit logs, and automatic overdue escalations for hospitality and commercial properties. Coming soon.",
  openGraph: {
    title: "Key Management System UAE | Buzzin (Coming Soon)",
    description:
      "Real-time physical key tracking and accountability. NFC checkout in 5 seconds. Immutable audit trail. Automatic escalations. Built for large hospitality and commercial properties.",
  },
  robots: { index: false, follow: true },
}

/* ─── Data ─── */

const consequences = [
  "Master keys go missing during shift handovers, and nobody knows where, when, or with whom",
  "Restricted-area access happens with no record. Server rooms, wine cellars, and executive lounges open without accountability.",
  "Contractor keys outlive permits. Vendors keep working keys long after their job is closed.",
  "Lost-key incidents trigger property-wide re-keying, costing thousands of dirhams and days of operational disruption",
  "Inspectors and insurers ask for a key audit, and you produce a paper logbook with gaps no one can explain",
]

const steps = [
  {
    title: "Keys registered with NFC tags",
    body: "Every physical key is assigned a unique NFC tag, key type (Master, Sub-Master, Individual, Restricted, Emergency), location, station, and checkout rules: max duration, return deadline, and approval requirements.",
  },
  {
    title: "Users enrolled with permissions",
    body: "Staff and contractors are enrolled with role-based, individual, or temporary key authorisations. Housekeeping, F&B, Engineering, Security, IT, Events, and Facilities each see only the keys relevant to their role.",
  },
  {
    title: "Authorised users check out via NFC",
    body: "User taps their badge at a key station to claim a key. Restricted keys require NFC + PIN. Average checkout time: 5 seconds. Unauthorised attempts are logged and alert the custodian.",
  },
  {
    title: "Live Status Board tracks every key",
    body: "A 3-lane Kanban view (Available / Checked Out / Overdue) syncs in real time from all 7 stations. Admins see who holds each key, the duration held, and the return deadline.",
  },
  {
    title: "Overdue & exception events escalate automatically",
    body: "Overdue keys, denied access, permit expirations, and clock-out-with-key events trigger multi-tier alerts. Notifications move from Push to SMS to WhatsApp/Email, routed progressively to the holder, custodian, managers, and security.",
  },
]

const hardware = [
  {
    icon: Tag,
    title: "NFC Tags",
    body: "Every physical key carries a unique NFC tag scanned at registration and at every checkout or return. Tags cannot be cloned and the system rejects unrecognised IDs. Compatible with NFC + PIN for restricted keys.",
  },
  {
    icon: Building2,
    title: "Key Stations",
    body: "Fixed terminals installed at strategic points: Main Lobby, Tower A, Tower B, Service Corridor, Pool Deck, Executive, and Parking. Each station reports its own health and alerts when offline (e.g., \u201cStation 4 offline since 09:14\u201d).",
  },
  {
    icon: Lock,
    title: "NFC + PIN",
    body: "Enhanced security for restricted keys such as server rooms and plant rooms. NFC identifies the user, PIN confirms intent, and the dual factor is recorded in the audit log against reader location and method.",
  },
]

const features = [
  {
    icon: Monitor,
    title: "Live Status Board",
    items: [
      "3-lane Kanban view: Available, Checked Out, Overdue",
      "Real-time sync from every registered key station",
      "Filter by department, key type, holder, or station",
      "One-click drill-down into any active checkout",
      "Station health indicators with offline alerts within seconds",
    ],
  },
  {
    icon: KeyRound,
    title: "Key Registry",
    items: [
      "Full inventory of every registered key, NFC tag, and station",
      "Key types: Master, Sub-Master, Individual, Restricted, Emergency",
      "Access levels: Standard, Restricted, Master",
      "Checkout rules: max duration, manager approval, reason required",
      "CSV import & export, key recall, lost-key flagging, deactivation",
    ],
  },
  {
    icon: Bell,
    title: "Alerts & Escalations",
    items: [
      "Configurable multi-tier alert rules with escalation timelines",
      "Channels: Push, SMS, WhatsApp, Email, Dashboard",
      "Routed progressively to holder, custodian, manager, security, then facilities",
      "Triggers: overdue, denied access, permit expiry, clock-out-with-key",
      "Acknowledgement and resolution tracked per alert",
    ],
  },
  {
    icon: BarChart2,
    title: "Reports & Analytics",
    items: [
      "Usage frequency: most and least active keys, top 30-day movers",
      "Average checkout duration vs. configured limit",
      "Compliance scoring per department (housekeeping, IT, engineering)",
      "Peak-time heatmaps and risk indicators",
      "Department-level summaries exportable for management review",
    ],
  },
  {
    icon: Users,
    title: "Users & Permissions",
    items: [
      "Role-based access control with individual, role, or temporary grants",
      "List and matrix views of who can access which keys",
      "Department mapping for Housekeeping, F&B, Engineering, Security, IT, and Events",
      "Contractor onboarding with permit-linked expiry",
      "Custodian override with PIN at the station",
    ],
  },
  {
    icon: FileText,
    title: "Audit Logs",
    items: [
      "Permanent, server-signed event history covering every checkout, return, and override",
      "Reader location, method (NFC, NFC+PIN, override), and timestamp captured",
      "Filter by user, key, station, department, or date range",
      "Export to CSV or signed PDF for inspectors and insurers",
      "Retention policy configurable per jurisdiction",
    ],
  },
]

const useCases = [
  {
    icon: Hotel,
    title: "Housekeeping Floor Keys",
    body: "Floor master keys checked out at shift start, returned at shift end. Overdue alerts before housekeepers clock out. Compliance scoring per shift and per supervisor.",
  },
  {
    icon: ShieldAlert,
    title: "Restricted Areas",
    body: "Server rooms, wine cellars, plant rooms, executive lounges, security control. NFC + PIN required. Every access logged with reader location and method.",
  },
  {
    icon: HardHat,
    title: "Contractor Keys",
    body: "Vendor keys tied directly to active work permits. Keys auto-expire when the permit closes, so vendors can never hold access beyond their job window.",
  },
  {
    icon: Star,
    title: "Event & Banquet Venues",
    body: "Ballroom and event-space keys with checkout windows tied to event schedules. Per-event audit trail for incident reviews and venue-handover records.",
  },
  {
    icon: Building2,
    title: "Multi-Building Properties",
    body: "Multiple towers, multiple key stations, one dashboard. Property switcher for group operators. Cross-building checkouts and transfers fully audited.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Reporting",
    body: "30-day compliance score per department. Signed PDF exports for inspectors. Lost-key incident reports with full holder, station, and timeline detail.",
  },
]

const ecosystemRows = [
  "Contractor keys auto-expire when a Work Permit closes, so no manual deactivation is needed",
  "Clock-in/clock-out integration ensures staff cannot leave with a key still checked out",
  "One shared audit surface for visitors, permits, attendance, and keys on a single permanent log",
]

/* ─── Page ─── */

export default function KeyManagementPage() {
  return (
    <>
      {/* JSON-LD — SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Buzzin Key Management System",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Android, iOS",
            description:
              "Real-time physical key tracking and accountability platform. NFC checkout, immutable audit trail, automatic overdue escalations, and role-based access for hospitality and commercial properties. Coming soon.",
            offers: { "@type": "Offer", availability: "https://schema.org/PreOrder" },
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
              { "@type": "ListItem", position: 3, name: "Key Management", item: "https://buzzin.ae/en/platform/key-management" },
            ],
          }),
        }}
      />

      <Navbar />

      <main>
        {/* ━━━ SECTION 1 — HERO ━━━ */}
        <section className="bg-[var(--bg-page)] pt-28 pb-16 md:pt-36 md:pb-20">
          <Container>
            <nav className="mb-8 font-body text-[12px] text-[var(--text-muted)]">
              <Link href="/en" className="hover:text-[var(--text-secondary)]">Home</Link>
              <span className="mx-1.5">/</span>
              <Link href="/en/platform" className="hover:text-[var(--text-secondary)]">Platform</Link>
              <span className="mx-1.5">/</span>
              <span>Key Management</span>
            </nav>

            <VmsHero
              left={
                <>
                  <HeroBlock className="mb-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                      Key Management
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-heading text-[11px] font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Coming Soon
                    </span>
                  </HeroBlock>

                  <HeroBlock>
                    <h1 className="font-display text-display-lg md:text-display-xl lg:text-display-2xl text-[var(--text-primary)]">
                      Every physical key, tracked, accountable, and visible in real time.
                    </h1>
                  </HeroBlock>

                  <HeroBlock className="mt-4 max-w-[480px]">
                    <p className="font-body text-body-lg leading-[1.7] text-[var(--text-secondary)]">
                      NFC tag per key. Checkout in 5 seconds at any station. Live status board across every tower and department. Immutable audit log. Automatic escalations the moment a key is overdue.
                    </p>
                  </HeroBlock>

                  <HeroBlock className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-8">
                    {[
                      { val: "5 sec", label: "average NFC checkout" },
                      { val: "96.4%", label: "30-day compliance score" },
                      { val: "NFC", label: "tag per key + station" },
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
                      <Link href="/en/book-demo">Register Interest &rarr;</Link>
                    </Button>
                    <Button variant="ghost" size="lg" asChild>
                      <Link href="#how-it-works">How It Works</Link>
                    </Button>
                  </HeroBlock>
                </>
              }
              right={<KmsDashboardMock />}
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
                A master key on a paper logbook is a security incident waiting to be discovered.
              </h2>
            </VmsSectionReveal>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <VmsSectionReveal>
                <p className="mb-3.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What a Hospitality Security Director Told Us
                </p>
                <blockquote className="border-l-[3px] border-[var(--text-brand)] pl-5 font-display text-[1.5rem] italic leading-[1.5] text-[var(--text-primary)]">
                  &ldquo;A floor master key disappeared during a shift change. Eight hours of footage. Twelve interviews. No record of who had it last. By the time we re-keyed the floor, we had spent more than the cost of a full digital system.&rdquo;
                </blockquote>
                <p className="mt-3 font-body text-[12px] text-[var(--text-muted)]">
                  Director of Security, Luxury Resort, Dubai
                </p>
                <p className="mt-5 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  In a large property with hundreds of keys and thousands of access events a week, a paper logbook is not a system. It is an open liability. Every missed entry, every off-shift handover, every contractor who held a key one day longer than they should have, creates exposure.
                </p>
              </VmsSectionReveal>

              <VmsSectionReveal>
                <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What This Costs Your Property
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
                From tag registration to overdue escalation, fully automatic.
              </h2>
              <p className="mt-3 mb-10 max-w-[500px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Designed for multi-building hospitality operations and the precision that insurance-grade audits demand.
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

        {/* ━━━ SECTION 4 — HARDWARE ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Hardware
              </p>
              <h2 className="mt-4 max-w-[560px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                NFC tags, fixed stations, and PIN-confirmed access for restricted keys.
              </h2>
              <p className="mt-3 mb-10 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Stations are distributed across the property, not concentrated in a single cabinet. Checkout happens where the keys are needed, and every station reports its own health status.
              </p>
            </VmsSectionReveal>

            <VmsStaggerGrid className="grid grid-cols-1 gap-5 md:grid-cols-3" interval={0.12}>
              {hardware.map((h) => (
                <VmsStaggerItem key={h.title}>
                  <div className="h-full rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500/10">
                      <h.icon className="h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 font-heading text-[16px] font-bold text-[var(--text-primary)]">{h.title}</h3>
                    <p className="font-body text-[13px] leading-[1.65] text-[var(--text-muted)]">{h.body}</p>
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
                Every feature a multi-building security operation needs.
              </h2>
              <p className="mt-3 mb-9 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Live status board, key registry, alerts, analytics, role-based access, and permanent audit logs. All on the same platform that already runs your visitors, permits, and attendance.
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
                Every key in your property. One accountable system.
              </h2>
              <p className="mt-3 mb-9 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                From floor masters to server rooms to ballrooms, KMS replaces the paper logbook with a real-time, audit-grade record of every checkout, return, and exception.
              </p>
            </VmsSectionReveal>

            <VmsStaggerGrid className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" interval={0.08}>
              {useCases.map((u) => (
                <VmsStaggerItem key={u.title}>
                  <div className="h-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.3)] hover:bg-[var(--bg-page)]">
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
                KMS plugs straight into the Buzzin platform. It is not a standalone tool.
              </h2>
              <p className="mt-3 mb-9 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Contractor keys expire with their permits. Staff cannot clock out with a key still in hand. Every event lands on the same immutable audit log as visitors, permits, and attendance.
              </p>
            </VmsSectionReveal>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <VmsSectionReveal>
                <div className="h-full rounded-[14px] border-[1.5px] border-amber-500/20 bg-[var(--bg-canvas)] p-6">
                  <p className="mb-3 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                    Connected to Work Permits
                  </p>
                  <p className="mb-4 font-body text-[14px] leading-[1.65] text-[var(--text-secondary)]">
                    When a contractor&apos;s Work Permit closes, every key tied to that permit is recalled automatically. No vendor walks off-site with a usable key. No admin has to remember to deactivate it. The two systems share one record.
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
                    href="/en/platform/work-permit-system"
                    className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
                  >
                    See Work Permit System &rarr;
                  </Link>
                </div>
              </VmsSectionReveal>

              <VmsSectionReveal>
                <div className="h-full rounded-[14px] bg-[var(--bg-proof)] p-6">
                  <p className="mb-3.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                    The Buzzin Platform
                  </p>

                  {/* VMS */}
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

                  {/* Permits */}
                  <div className="mb-2 flex items-center justify-between rounded-[10px] border border-white/[0.10] bg-white/[0.07] px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <ClipboardCheck className="h-4 w-4 text-[var(--text-brand)]" strokeWidth={1.75} />
                      <span className="font-heading text-[13px] font-bold text-white">
                        Work Permit System
                      </span>
                    </div>
                    <span className="rounded-full border border-white/[0.12] bg-white/[0.06] px-2.5 py-0.5 font-heading text-[9px] font-semibold text-white/55">
                      Core
                    </span>
                  </div>

                  {/* KMS — highlighted */}
                  <div className="flex items-center justify-between rounded-[10px] border border-amber-500/25 bg-amber-500/[0.12] px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <KeyRound className="h-4 w-4 text-[var(--text-brand)]" strokeWidth={1.75} />
                      <span className="font-heading text-[13px] font-bold text-[var(--text-brand)]">
                        Key Management System (KMS)
                      </span>
                    </div>
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/15 px-2.5 py-0.5 font-heading text-[9px] font-bold text-[var(--text-brand)]">
                      Soon
                    </span>
                  </div>

                  <p className="mt-3 font-body text-[12px] font-light leading-[1.6] text-white/50">
                    Identity, permits, attendance, and key custody share one record. Configured once, audited everywhere.
                  </p>
                </div>
              </VmsSectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 8 — SECURITY ━━━ */}
        <SecurityBar />

        {/* ━━━ SECTION 9 — BOTTOM CTA ━━━ */}
        <CtaBanner
          content={{
            headline: "Want to be first when Key Management goes live?",
            subline:
              "Buzzin KMS is in final development. Register your interest and we will book a private walkthrough of the platform as soon as it ships, tailored to your property.",
            primaryLabel: "Register Interest",
            primaryHref: "/en/book-demo",
            whatsappLabel: "Chat on WhatsApp",
            whatsappHref:
              "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20the%20Key%20Management%20System.",
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
              href="/en/industries/hospitality"
              className="font-body text-[13px] text-white/70 transition-colors hover:text-white"
            >
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

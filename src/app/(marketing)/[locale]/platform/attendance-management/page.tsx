import type { Metadata } from "next"
import Link from "next/link"
import {
  CreditCard, Smartphone, Wifi,
  RadioTower, Bell, FileText, Clock, MapPin, Download,
  XCircle, ArrowRight,
} from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { Button } from "@/components/ui/button"
import { SecurityBar } from "@/components/marketing/security-bar"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { AttendanceDashboardMock } from "@/components/marketing/attendance-dashboard-mock"
import {
  VmsHero, HeroBlock,
  VmsSectionReveal, VmsStaggerGrid, VmsStaggerItem,
} from "@/components/marketing/vms-page-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Attendance Management System UAE | Buzzin \u2014 NFC Tap-In, Real-Time Punctuality Alerts",
  description:
    "Digital staff attendance system for UAE schools and corporates. NFC card or phone tap-in. Real-time late alerts. Shift reports. Audit-ready logs. Trusted by Taaleem, Brighton College, and 300+ organisations.",
  openGraph: {
    title: "Attendance Management System UAE | Buzzin",
    description:
      "NFC card or phone tap. Real-time punctuality alerts. Shift reports. Late arrival notifications. Built for UAE schools and corporates.",
  },
}

/* ─── Data ─── */

const consequences = [
  "Late arrivals are noticed by colleagues, not flagged by the system. Management hears about chronic lateness weeks later.",
  "Paper sign-in sheets and Excel files are easy to backfill, miscount, and lose, leaving no audit trail behind",
  "Shift handovers and split shifts are calculated by hand at the end of every month. Errors compound on payroll.",
  "Inspectors and auditors expect a verifiable digital record, yet a notebook is no longer acceptable evidence",
  "Staff who arrive on time wonder why no one is held to a standard, and the culture quietly erodes",
]

const steps = [
  { title: "Staff member taps NFC card or phone at the reader", body: "Reader is installed at the staff entrance, reception, or each campus gate. Tap is registered in under half a second with no PIN, no signature, and no manual log." },
  { title: "Identity verified against the staff database", body: "The tap matches an active staff record. Inactive cards are rejected and flagged. Visitor and contractor taps are ignored because attendance is staff-only." },
  { title: "Check-in timestamped and logged in real time", body: "The exact time of arrival is captured to the second. Location (campus or building) is recorded automatically. The log cannot be altered after the fact." },
  { title: "Late arrival triggers automatic alert", body: "Cut-off time is configured per shift. Any tap after cut-off triggers a notification to the line manager, HR, or principal by app, email, or WhatsApp." },
  { title: "Reports exported for payroll and audit", body: "End-of-month shift reports generated in one click: hours worked, lateness summary, absence rate, by individual or department. Exportable to PDF or Excel." },
]

const hardware = [
  {
    icon: CreditCard, title: "NFC Card",
    body: "A branded plastic NFC card for each staff member. Worn on a lanyard or kept in a wallet. Cards are hardware-secured and cannot be cloned. Lost cards are deactivated instantly from the admin panel.",
  },
  {
    icon: Smartphone, title: "Phone Virtual NFC",
    body: "Staff use their own smartphone as the NFC tag, so no physical card is required. iOS and Android supported. Ideal for trial deployments and BYOD environments. Identity tied to the staff record, not the device.",
  },
  {
    icon: Wifi, title: "RFID Card",
    body: "Legacy RFID card compatibility for sites with existing card infrastructure. Buzzin readers accept both NFC and RFID, so there is no need to re-issue cards on day one. Phased migration supported.",
  },
]

const features = [
  {
    icon: RadioTower, title: "NFC / Phone Tap-In",
    items: [
      "Sub-second tap registration",
      "NFC card, RFID card, or virtual NFC on phone",
      "No PINs, no signatures, no paper",
      "Works at staff entrances, receptions, and multi-campus gates",
      "Offline-tolerant: syncs automatically when the connection is restored",
    ],
  },
  {
    icon: Bell, title: "Real-Time Late Alerts",
    items: [
      "Cut-off time configured per shift, per role",
      "Alerts fire by app, email, or WhatsApp",
      "Routed to line manager, HR, or principal",
      "Threshold-based escalation for repeat offenders",
      "Daily morning digest of overnight absentees",
    ],
  },
  {
    icon: FileText, title: "Shift Reports",
    items: [
      "Hours worked, by individual or department",
      "Lateness summary, by day, week, or month",
      "Absence rate by team",
      "Export to PDF or Excel in one click",
      "Custom report templates per organisation",
    ],
  },
  {
    icon: Clock, title: "Shift Patterns & Schedules",
    items: [
      "Fixed and rotating shift patterns supported",
      "Split shifts and overtime tracked automatically",
      "Public holiday and leave calendars built in",
      "Schedule changes propagate instantly to alerts",
      "Per-role grace periods configurable",
    ],
  },
  {
    icon: MapPin, title: "Multi-Campus Aggregation",
    items: [
      "One dashboard across every campus or site",
      "Group admin drill-down to individual location",
      "Compare punctuality across sites",
      "Per-site managers see only their own data",
      "Region or country roll-up reporting",
    ],
  },
  {
    icon: Download, title: "Audit-Ready Export",
    items: [
      "Permanent log of every tap that cannot be altered after the fact",
      "Timestamped to the second",
      "Exportable for KHDA, ADEK, or internal audit",
      "Retention policy configurable per jurisdiction",
      "API for payroll system integration",
    ],
  },
]

const proofCards = [
  {
    name: "Taaleem Group",
    body: "Staff attendance and punctuality reporting across 40+ campuses with one dashboard, one report format, and a KHDA-ready audit trail.",
    tag: "Education",
    href: "/en/industries/education",
  },
  {
    name: "Brighton College UAE",
    body: "NFC tap-in for teaching and support staff across multiple campuses. Late arrival alerts to senior leadership. Monthly punctuality reports for SLT review.",
    tag: "Education",
    href: "/en/industries/education",
  },
]

const beforeAfter = [
  {
    before: "Paper sign-in sheet at reception. Easy to backfill, easy to lose, and no audit trail.",
    after: "NFC tap at the gate, timestamped to the second, locked once recorded, and exportable for inspection",
  },
  {
    before: "Late arrivals noticed weeks later when colleagues mention it. Culture erodes quietly.",
    after: "Instant WhatsApp alert to the line manager the moment cut-off is missed. Patterns addressed in real time.",
  },
  {
    before: "Monthly shift reports calculated by hand in Excel. Errors compound and payroll disputes follow.",
    after: "One-click monthly report covering hours worked, lateness, absence rate, per individual or department",
  },
  {
    before: "Inspectors ask for attendance evidence and you produce a notebook, hoping it is accepted",
    after: "Inspectors ask for attendance evidence and you export a complete digital log in 30 seconds",
  },
]

/* ─── Page ─── */

export default function AttendanceManagementPage() {
  return (
    <>
      {/* JSON-LD — SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Buzzin Attendance Management System",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Android, iOS",
            description:
              "Digital staff attendance system for UAE schools and corporates. NFC card or phone tap-in, real-time late alerts, shift reports, and audit-ready logs.",
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
              { "@type": "ListItem", position: 3, name: "Attendance Management", item: "https://buzzin.ae/en/platform/attendance-management" },
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
              <span>Attendance Management</span>
            </nav>

            <VmsHero
              left={
                <>
                  <HeroBlock className="mb-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                      Attendance Management
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-heading text-[11px] font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Core Module · Live
                    </span>
                  </HeroBlock>

                  <HeroBlock>
                    <h1 className="font-display text-display-lg md:text-display-xl lg:text-display-2xl text-[var(--text-primary)]">
                      Every shift logged, alerted, and accounted for in a single tap.
                    </h1>
                  </HeroBlock>

                  <HeroBlock className="mt-4 max-w-[480px]">
                    <p className="font-body text-body-lg leading-[1.7] text-[var(--text-secondary)]">
                      NFC card or phone tap-in at the gate. Real-time punctuality alerts to the line manager. Shift reports for payroll and audit. Built for UAE schools and corporates.
                    </p>
                  </HeroBlock>

                  <HeroBlock className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-8">
                    {[
                      { val: "< 1 sec", label: "tap to logged" },
                      { val: "Real-time", label: "late arrival alerts" },
                      { val: "Audit", label: "ready monthly reports" },
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
              right={<AttendanceDashboardMock />}
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
                If you only learn about chronic lateness on payroll day, you have lost the chance to address it.
              </h2>
            </VmsSectionReveal>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <VmsSectionReveal>
                <p className="mb-3.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What a School Principal Told Us
                </p>
                <blockquote className="border-l-[3px] border-[var(--text-brand)] pl-5 font-display text-[1.5rem] italic leading-[1.5] text-[var(--text-primary)]">
                  &ldquo;Every Monday I would walk past the staff room and notice the same three teachers were always late. By the time I checked the paper sign-in sheet, three months had passed and the pattern was set. I had no record I could act on.&rdquo;
                </blockquote>
                <p className="mt-3 font-body text-[12px] text-[var(--text-muted)]">
                  Principal, International School, Dubai
                </p>
                <p className="mt-5 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  Staff punctuality is the visible measure of how your operation runs. Without a real-time record, lateness becomes a private problem instead of a managed one. By the time it surfaces, the culture has already shifted.
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

        {/* ━━━ SECTION 3 — HOW IT WORKS ━━━ */}
        <section id="how-it-works" className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                How It Works
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                From tap at the gate to monthly payroll report.
              </h2>
              <p className="mt-3 mb-10 max-w-[500px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Built for multi-campus operations and the precision that payroll-grade audits demand.
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
                NFC card, phone tap, or legacy RFID. Whichever fits your operation.
              </h2>
              <p className="mt-3 mb-10 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Buzzin readers accept both NFC and RFID, so existing card infrastructure continues to work while new staff onboard with virtual NFC on their phones.
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
                Every feature a multi-campus, multi-shift operation needs.
              </h2>
              <p className="mt-3 mb-9 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Tap-in, real-time alerts, shift patterns, multi-campus aggregation, and inspection-ready exports. All on one platform that also handles your visitor management and work permits.
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

        {/* ━━━ SECTION 6 — CLIENT PROOF ━━━ */}
        <section className="relative overflow-hidden bg-[var(--bg-proof)] py-16 md:py-20">
          <HexagonPattern className="text-white/[0.04]" />
          <Container className="relative">
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Trusted By
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-white">
                International schools across the UAE run staff attendance on Buzzin.
              </h2>
            </VmsSectionReveal>

            <VmsStaggerGrid className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2" interval={0.12}>
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
                What changes when attendance goes from paper to platform.
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
            headline: "Ready to retire the paper sign-in sheet?",
            subline:
              "We will show you exactly how Buzzin Attendance Management works for your organisation in a 30-minute demo.",
            primaryLabel: "Book a Free Demo",
            primaryHref: "/en/book-demo",
            whatsappLabel: "Chat on WhatsApp",
            whatsappHref:
              "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20Attendance%20Management.",
            phone: "+971 4 320 1265",
          }}
        />
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 pb-6 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/en/platform" className="font-body text-[13px] text-white/60 transition-colors hover:text-white">
              See all platform modules &rarr;
            </Link>
            <Link href="/en/industries/education" className="font-body text-[13px] text-white/60 transition-colors hover:text-white">
              See how we work for education &rarr;
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

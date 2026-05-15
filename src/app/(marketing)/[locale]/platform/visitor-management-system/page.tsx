import type { Metadata } from "next"
import Link from "next/link"
import {
  ScanLine, Bell, Shield, FileCheck, BarChart2, Server,
  XCircle, ArrowRight, CheckCircle, Phone, MessageCircle, Mail,
  Wifi, MessageSquare, GraduationCap, Wrench, MapPin,
} from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { Button } from "@/components/ui/button"
import { CtaBanner } from "@/components/marketing/cta-banner"
import {
  VmsHero, HeroBlock, DashboardMock,
  VmsSectionReveal, VmsStaggerGrid, VmsStaggerItem,
} from "@/components/marketing/vms-page-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Visitor Management System UAE | Buzzin — Emirates ID & UAE Pass Check-In",
  description:
    "Enterprise visitor management system for UAE. Emirates ID scanning, UAE Pass integration, 3-5 second check-in, WhatsApp host alerts. Trusted by Atlantis, Aldar, Fairmont, and 300+ organisations. Book a free demo.",
  openGraph: {
    title: "Visitor Management System UAE | Buzzin",
    description:
      "Emirates ID scanning. UAE Pass integration. 3-5 second check-in. Trusted by Atlantis, Aldar, and 300+ organisations across the GCC.",
  },
}

/* ─── Data ─── */

const steps = [
  { title: "Visitor arrives at kiosk", body: "Self-service Android tablet at reception or gate entrance. No receptionist required." },
  { title: "Identity verified instantly", body: "National ID, Emirates ID, driving license, passport, or UAE Pass scanned and authenticated via ICP in real time." },
  { title: "Host notified immediately", body: "Your host receives an instant notification — their visitor has arrived, with photo and name confirmed." },
  { title: "Badge printed automatically", body: "Client-branded visitor badge prints on arrival — photo, name, timestamp, and QR code included." },
  { title: "Departure logged", body: "Sign-out recorded. Audit trail complete. Evacuation list updated automatically." },
]

const features = [
  {
    icon: ScanLine, title: "Identity & Verification",
    items: ["UAE Pass QR code scanning", "Emirates ID hardware scanning", "National ID and passport scanning", "Driving license scanning", "Real-time ICP App verification", "Photo capture on every check-in", "Watchlist and blacklist checking"],
  },
  {
    icon: Bell, title: "Notifications & Alerts",
    items: ["Host notifications via push and email", "WhatsApp and SMS notifications (add-on)", "Multi-host support — up to 5 hosts", "Exceeding visit time automatic alert", "Delivery driver separate flow", "Pre-registration invitation link", "Visitor self-registration via QR"],
  },
  {
    icon: Shield, title: "Access & Control",
    items: ["Multi-gate support — one dashboard", "Phone-based virtual NFC card access", "QR code badge for gate scanning", "Real-time headcount — always accurate", "Emergency evacuation list one click", "Blacklist with instant gate alert", "Community communication to tenants"],
  },
  {
    icon: FileCheck, title: "Compliance & Audit",
    items: ["Tamper-proof digital audit log", "Complete audit export in 30 seconds", "GDPR and UAE PDPL compliant", "Data retained securely for 5 years", "Right to deletion on request", "HTTPS/TLS 1.2+ end-to-end encryption", "No sensitive data stored on tablets"],
  },
  {
    icon: BarChart2, title: "Analytics & Reporting",
    items: ["Real-time visitor counts dashboard", "Traffic flow and peak time insights", "Detailed visitor logs with filters", "Attendance reports by shift", "Late arrival and early departure tracking", "Export entry and exit logs", "Exportable audit reports"],
  },
  {
    icon: Server, title: "Hardware & Deployment",
    items: ["Android tablet (8.0+, 8GB RAM, 13MP)", "NFC card reader — MIFARE compatible", "Client-branded badge printer supplied", "On-premises deployment available", "Encrypted cloud — AWS, GCP, or Azure", "Wi-Fi or 4G/LTE connectivity", "Scalable — grows with your operation"],
  },
]

const integrations = [
  { abbr: "UAE", name: "UAE Pass", desc: "National digital identity — QR scan check-in for UAE nationals and residents" },
  { abbr: "ICP", name: "ICP App", desc: "Federal identity verification for residents, visitors, and contractors" },
  { abbr: "WA", name: "WhatsApp Business", desc: "Host notifications via WATI integration — available as add-on" },
  { abbr: "AD", name: "Active Directory / SSO", desc: "Single sign-on and automated user synchronization for enterprise IT" },
  { abbr: "NFC", name: "NFC Card Readers", desc: "MIFARE compatible readers — supplied and configured by Buzzin" },
  { abbr: "ACC", name: "Access Control Systems", desc: "Turnstiles, gate barriers, and ANPR cameras for automated entry" },
]

const proofCards = [
  { name: "Atlantis The Palm", body: "Managing visitor flows, contractor access, and event check-in across one of the UAE\u2019s most visited luxury destinations.", tag: "Hospitality" },
  { name: "Aldar Properties", body: "Exclusive 5-year partner across the entire Aldar UAE portfolio — residential communities, commercial assets, and retail.", tag: "Real Estate", href: "/en/industries/residential-real-estate" },
  { name: "Taaleem Group", body: "Visitor management and safeguarding across multiple international school campuses — one dashboard, complete control.", tag: "Education", href: "/en/industries/education" },
]

const beforeAfter = [
  {
    before: "Visitor signs in by hand — illegible writing, no photo, no identity verification, no timestamp",
    after: "National ID or UAE Pass scanned — identity confirmed by ICP, photo captured, host notified in 3 to 5 seconds",
  },
  {
    before: "Host has no idea their visitor arrived — they find out 15 minutes later by accident",
    after: "Host receives an instant notification the moment their visitor checks in at the gate",
  },
  {
    before: "Evacuation alert — you have no accurate list of who is currently on your premises",
    after: "Real-time evacuation list — every person on site, one click, always accurate, always current",
  },
]

const certs = ["ISO 27001 Certified", "SOC 1 / 2 / 3", "GDPR Aligned", "UAE Pass Integrated", "On-Premises Available", "5-Year Data Retention"]

const supportCards = [
  { icon: Wifi, title: "Remote Troubleshooting", body: "OTA updates and MDM-based remote access — issues resolved without a site visit in most cases" },
  { icon: MessageSquare, title: "SLA-Backed Support", body: "Phone, email, and chat support with guaranteed response times — not a ticketing queue" },
  { icon: GraduationCap, title: "Training & Onboarding", body: "Full user training during deployment for reception, security, and admin teams" },
  { icon: Wrench, title: "Routine Site Visits", body: "Regular on-site visits for maintenance, performance checks, and hardware inspection" },
]

const consequences = [
  "No identity verification — anyone can write any name in your visitor logbook",
  "Your host has no idea their visitor has been waiting at reception for 10 minutes",
  "A GDPR or PDPL audit would expose you immediately — no data retention policy",
  "In an emergency evacuation you have no accurate headcount of who is on premises",
]

/* ─── Page ─── */

export default function VmsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Buzzin Visitor Management System",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Android",
            description: "Enterprise visitor management system for UAE with Emirates ID and UAE Pass scanning, WhatsApp host notifications, and tamper-proof audit logs.",
            offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
            provider: { "@type": "Organization", name: "Buzzin FZCO", url: "https://buzzin.ae" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://buzzin.ae/en" },
              { "@type": "ListItem", position: 2, name: "Platform", item: "https://buzzin.ae/en/platform" },
              { "@type": "ListItem", position: 3, name: "Visitor Management System", item: "https://buzzin.ae/en/platform/visitor-management-system" },
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
              <span>Visitor Management System</span>
            </nav>

            <VmsHero
              left={
                <>
                  {/* Badges */}
                  <HeroBlock className="mb-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                      Visitor Management
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-heading text-[11px] font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Core Module — Live
                    </span>
                  </HeroBlock>

                  {/* H1 */}
                  <HeroBlock>
                    <h1 className="font-display text-display-lg md:text-display-xl lg:text-display-2xl text-[var(--text-primary)]">
                      Every visitor. Registered, verified, and host notified — in 3 to 5&nbsp;seconds.
                    </h1>
                  </HeroBlock>

                  {/* Sub */}
                  <HeroBlock className="mt-4 max-w-[480px]">
                    <p className="font-body text-body-lg leading-[1.7] text-[var(--text-secondary)]">
                      The UAE&apos;s most trusted enterprise visitor management system. National ID, Emirates ID, and UAE Pass scanning. WhatsApp host alerts. Tamper-proof audit log. Already running across Atlantis, Aldar, Fairmont, and 300+ organisations across the GCC.
                    </p>
                  </HeroBlock>

                  {/* Micro-stats */}
                  <HeroBlock className="mt-7 flex items-center gap-8">
                    {[
                      { val: "20M+", label: "interactions processed" },
                      { val: "3\u20135 sec", label: "average check-in time" },
                      { val: "300+", label: "active organisations" },
                    ].map((s, i) => (
                      <div key={s.label} className="flex items-center gap-8">
                        {i > 0 && <div className="h-10 w-px bg-[var(--border-default)]" />}
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
              right={<DashboardMock />}
            />
          </Container>
        </section>

        {/* ━━━ SECTION 2 — THE PROBLEM ━━━ */}
        <section id="the-problem" className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                &mdash; The Problem
              </p>
              <h2 className="mt-4 max-w-[560px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Your visitor register is a liability waiting to happen.
              </h2>
            </VmsSectionReveal>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <VmsSectionReveal>
                <blockquote className="border-l-[3px] border-[var(--text-brand)] pl-5 font-display text-[1.5rem] leading-[1.5] text-[var(--text-primary)]">
                  &ldquo;Managing visitors with a paper logbook is not just inefficient — it is a compliance risk, a security gap, and a liability your organisation cannot afford.&rdquo;
                </blockquote>
                <p className="mt-4 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  Every time a visitor signs in by hand, you have no verified identity, no photo, no host notification, and no audit trail. When a regulator asks, an incident occurs, or an evacuation happens — that paper register will fail you.
                </p>
              </VmsSectionReveal>

              <VmsSectionReveal>
                <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What This Is Costing You Right Now
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
                &mdash; How It Works
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                From arrival to verified — in five steps.
              </h2>
              <p className="mt-3 mb-10 max-w-[500px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Every check-in follows the same precise flow — whether it is a VIP guest at Atlantis or a contractor at an Aldar community gate.
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
                &mdash; Features
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Every feature an enterprise premises requires.
              </h2>
              <p className="mt-3 mb-9 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                27 features built for the operational and compliance demands of UAE enterprise — residential, hospitality, education, and financial districts.
              </p>
            </VmsSectionReveal>

            <VmsStaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" interval={0.1}>
              {features.map((f) => (
                <VmsStaggerItem key={f.title}>
                  <div className="rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-all duration-[220ms] hover:border-[rgba(245,166,35,0.4)] hover:-translate-y-[2px] hover:shadow-md">
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
                          <span className="font-body text-[13px] text-[var(--text-secondary)]">
                            {f.title === "Compliance & Audit" && item === "GDPR and UAE PDPL compliant" ? (
                              <>{item} — <Link href="/en/security-compliance" className="text-[var(--text-brand)] hover:underline">view all security certifications</Link></>
                            ) : item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 5 — INTEGRATIONS ━━━ */}
        <section className="bg-[var(--bg-page)] py-14 md:py-16">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                &mdash; Integrations
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Built for the UAE digital infrastructure.
              </h2>
              <p className="mt-3 mb-8 max-w-[480px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Buzzin connects natively with the UAE&apos;s national identity systems — not as an afterthought, but as a core part of how the platform works.
              </p>
            </VmsSectionReveal>

            <VmsStaggerGrid className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" interval={0.08}>
              {integrations.map((t) => (
                <VmsStaggerItem key={t.abbr}>
                  <div className="flex items-center gap-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-5 py-4 transition-colors duration-200 hover:border-[rgba(245,166,35,0.3)]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 font-heading text-[11px] font-bold text-[var(--text-brand)]">
                      {t.abbr}
                    </span>
                    <div>
                      <p className="font-heading text-[13px] font-semibold text-[var(--text-primary)]">{t.name}</p>
                      <p className="font-body text-[11px] text-[var(--text-muted)]">{t.desc}</p>
                    </div>
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
                &mdash; Trusted By
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-white">
                The most demanding premises in the UAE run on Buzzin.
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
                &mdash; The Transformation
              </p>
              <h2 className="mt-4 mb-10 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                What changes when you replace the paper logbook.
              </h2>
            </VmsSectionReveal>

            <VmsStaggerGrid className="space-y-2.5" interval={0.1}>
              {beforeAfter.map((row, i) => (
                <VmsStaggerItem key={i}>
                  <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-[var(--border-default)] md:grid-cols-[1fr_40px_1fr]">
                    {/* Before */}
                    <div className="bg-[#FFF5F5] px-5 py-4">
                      <p className="mb-1.5 font-heading text-[9px] font-bold uppercase tracking-wide text-red-500">Before</p>
                      <p className="font-body text-[13px] leading-[1.55] text-red-800">{row.before}</p>
                    </div>
                    {/* Arrow */}
                    <div className="hidden items-center justify-center border-x border-[var(--border-default)] bg-white md:flex">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500">
                        <ArrowRight className="h-3.5 w-3.5 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    {/* After */}
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
        <section className="bg-[var(--bg-page)] py-14 md:py-16 text-center">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                &mdash; Security & Compliance
              </p>
              <h2 className="mt-4 font-heading text-[2rem] font-bold text-[var(--text-primary)]">
                Enterprise-grade security. GCC-native compliance.
              </h2>
            </VmsSectionReveal>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {certs.map((c) => (
                <div key={c} className="flex items-center gap-[7px] rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-2.5 transition-colors duration-200 hover:border-[rgba(245,166,35,0.3)]">
                  <CheckCircle className="h-4 w-4 text-[var(--text-brand)]" strokeWidth={1.5} />
                  <span className="font-heading text-[11px] font-bold text-[var(--text-primary)]">{c}</span>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-4 max-w-[520px] font-body text-[13px] text-[var(--text-muted)]">
              HTTPS/TLS 1.2+ end-to-end encryption. No sensitive data stored on tablets. Role-based access control. Trusted by financial institutions, government schools, and luxury hospitality groups across the GCC.
            </p>
          </Container>
        </section>

        {/* ━━━ SECTION 9 — SUPPORT ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-14 md:py-16">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                &mdash; Support & Deployment
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                We do not disappear after go-live.
              </h2>
              <p className="mt-3 mb-9 max-w-[480px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                From first site visit to routine maintenance — Buzzin is with you at every stage.
              </p>
            </VmsSectionReveal>

            <VmsStaggerGrid className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" interval={0.1}>
              {supportCards.map((c) => (
                <VmsStaggerItem key={c.title}>
                  <div className="rounded-xl border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-5">
                    <c.icon className="mb-3 h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
                    <h3 className="font-heading text-[14px] font-semibold text-[var(--text-primary)]">{c.title}</h3>
                    <p className="mt-1.5 font-body text-[12px] leading-[1.6] text-[var(--text-muted)]">{c.body}</p>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 10 — BOTTOM CTA ━━━ */}
        <CtaBanner
          content={{
            headline: "Ready to replace your paper logbook with a system Atlantis trusts?",
            subline: "We will show you exactly how Buzzin works for your premises type — in a 30-minute tailored demo.",
            primaryLabel: "Book a Free Demo",
            primaryHref: "/book-demo",
            whatsappLabel: "Chat on WhatsApp",
            whatsappHref: "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20the%20platform.",
            phone: "+971 4 320 1265",
          }}
        />
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 pb-6 text-center">
          <Link href="/en/platform" className="font-body text-[13px] text-white/60 hover:text-white transition-colors">
            See all platform modules &rarr;
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

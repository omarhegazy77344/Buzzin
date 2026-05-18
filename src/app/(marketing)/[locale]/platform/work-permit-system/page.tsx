import type { Metadata } from "next"
import Link from "next/link"
import {
  QrCode, UserCheck, Settings, Building2, BarChart2, Zap,
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
import { WorkPermitDashboard } from "@/components/marketing/work-permit-dashboard"
import {
  VmsHero, HeroBlock,
  VmsSectionReveal, VmsStaggerGrid, VmsStaggerItem,
} from "@/components/marketing/vms-page-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Digital Work Permit System UAE | Buzzin — Contractor Management & RERA Compliance",
  description:
    "QR-coded digital work permits for UAE. Contractor self-registration, permit lifecycle management, RERA-ready audit trail. 81,085 permits processed in Q1 2026. Trusted by Aldar, Asteco, and DAMAC.",
  openGraph: {
    title: "Digital Work Permit System UAE | Buzzin",
    description:
      "QR work permits. Contractor self-registration. RERA-ready audit trail. 81,085 permits in Q1 2026. Trusted by Aldar, Asteco, and DAMAC.",
  },
}

/* ─── Data ─── */

const steps = [
  { title: "Contractor self-registers", body: "Contractor receives a registration link. They submit their details, upload required documents, and select permit type \u2014 no admin involvement needed." },
  { title: "Admin reviews and approves", body: "Admin reviews submission, checks documents, approves or requests changes. Filter by date, location, company, and permit type." },
  { title: "QR permit issued instantly", body: "Approved contractor receives a QR-coded digital permit by email. Permit displays job details, employee photo, and validity period." },
  { title: "Gate scan in 2 seconds", body: "Security guard scans QR at gate entrance. Valid or denied response in under 2 seconds. Expired permits automatically denied." },
  { title: "Automatic expiry management", body: "System alerts contractor and admin 48 hours before expiry. Gate automatically denies entry when permit expires \u2014 zero manual oversight required." },
]

const features = [
  {
    icon: QrCode, title: "QR-Coded Digital Permits",
    items: [
      "Unique QR code per contractor per permit",
      "Displays job details and employee photo",
      "Secure gate entry via QR scan",
      "Cannot be shared or duplicated",
      "Works offline \u2014 no connectivity needed at gate for scan",
    ],
  },
  {
    icon: UserCheck, title: "Contractor Self-Service",
    items: [
      "Remote registration via link \u2014 no site visit required",
      "Document upload \u2014 trade license, insurance, ID, certifications",
      "Real-time permit status monitoring",
      "Contractor notified via email at every stage",
    ],
  },
  {
    icon: Settings, title: "Permit Lifecycle Management",
    items: [
      "Approve, reject, or request changes",
      "Revoke permits instantly",
      "Filter by date, location, company, permit type",
      "Calendar view \u2014 colour-coded contractor traffic planning",
      "Configurable permit types and mandatory document requirements",
    ],
  },
  {
    icon: Building2, title: "Admin & Departmental Controls",
    items: [
      "Multi-level approval workflows",
      "Departmental access rights",
      "Maximum employees per permit",
      "Maximum days permitted",
      "Pricing configuration if required",
      "Multi-site \u2014 one permit valid at multiple gates",
    ],
  },
  {
    icon: BarChart2, title: "Logs, Reports & Analytics",
    items: [
      "Detailed permit activity tracking",
      "Entry and exit logs with timestamps",
      "Export for RERA auditing",
      "Peak contractor traffic insights",
      "Company-level permit history",
      "Full audit trail \u2014 tamper-proof",
    ],
  },
  {
    icon: Zap, title: "Expiry & Alert Management",
    items: [
      "Automatic 48-hour expiry alerts",
      "Gate auto-denial on expiry \u2014 zero manual oversight",
      "Exceeding time alerts",
      "Admin dashboard \u2014 expiring permits highlighted",
      "Bulk renewal workflow for large contractor lists",
    ],
  },
]

const consequences = [
  "Contractors on site after permit expires \u2014 no automated gate denial, no alert to anyone",
  "No record of which contractor did which work \u2014 insurance claim or incident investigation impossible",
  "Admin team manually chasing contractors for document uploads \u2014 hours lost every week",
  "RERA audit requires searching months of WhatsApp threads and email attachments",
  "No visibility across multiple sites \u2014 each community manages permits in isolation",
]

const complianceRows = [
  "Complete contractor history \u2014 every permit ever issued, with documents, timestamps, and approvals",
  "Gate scan log \u2014 every entry and exit, by contractor, by site, by date range",
  "Tamper-proof export \u2014 PDF or CSV, court-admissible audit record",
  "On-demand \u2014 export in under 30 seconds, any time, any device",
]

const proofCards = [
  {
    name: "Aldar Properties",
    body: "Exclusive 5-year partner \u2014 work permit system deployed across all Aldar residential communities and commercial assets in the UAE.",
    tag: "Real Estate",
    href: "/en/industries/residential-real-estate",
  },
  {
    name: "Asteco",
    body: "Complete contractor permit management across the Asteco UAE portfolio \u2014 RERA-ready audit trail maintained for every community.",
    tag: "Property Management",
  },
  {
    name: "DAMAC Properties",
    body: "Flexible permit configuration across multiple DAMAC developments \u2014 adapted to the specific operational requirements of each site.",
    tag: "Real Estate",
  },
]

const beforeAfter = [
  {
    before: "Contractor permit on WhatsApp PDF \u2014 no expiry tracking, forwarded to anyone, no gate check possible",
    after: "QR-coded permit \u2014 unique per contractor, scanned at gate, expired permits automatically denied",
  },
  {
    before: "Permit expires \u2014 contractor continues working, nobody knows, discovered in RERA audit three months later",
    after: "48-hour expiry alert to contractor and admin \u2014 gate auto-denies entry the moment permit expires",
  },
  {
    before: "Admin manually chasing contractors for documents \u2014 hours lost every week across every community",
    after: "Contractor self-registers remotely \u2014 uploads own documents, admin reviews and approves in one click",
  },
  {
    before: "RERA audit \u2014 search months of WhatsApp threads and email attachments across 12 communities",
    after: "Complete RERA-ready audit export in under 30 seconds \u2014 every permit, every scan, every document",
  },
]

const proofMiniRows = [
  { label: "Total permits to date", value: "165,000+" },
  { label: "Gate scan accuracy", value: "99.9%" },
  { label: "Average verification time", value: "1.8 sec" },
]

/* ─── Page ─── */

export default function WorkPermitSystemPage() {
  return (
    <>
      {/* JSON-LD — SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Buzzin Work Permit System",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Android",
            description:
              "Digital work permit system for UAE with QR-coded permits, contractor self-registration, and RERA-ready audit trail.",
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
              { "@type": "ListItem", position: 3, name: "Work Permit System", item: "https://buzzin.ae/en/platform/work-permit-system" },
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
              <span>Work Permit System</span>
            </nav>

            <VmsHero
              left={
                <>
                  {/* Badges */}
                  <HeroBlock className="mb-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                      Work Permit System
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-heading text-[11px] font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                      Core Module — Live
                    </span>
                  </HeroBlock>

                  {/* H1 */}
                  <HeroBlock>
                    <h1 className="font-display text-[3rem] leading-[1.1] tracking-[-0.03em] text-[var(--text-primary)] md:text-display-xl lg:text-[4.5rem]">
                      Every contractor at your gate &mdash; verified in under 2&nbsp;seconds.
                    </h1>
                  </HeroBlock>

                  {/* Sub */}
                  <HeroBlock className="mt-4 max-w-[480px]">
                    <p className="font-body text-[18px] leading-[1.7] text-[var(--text-secondary)]">
                      QR-coded digital work permits. Contractor self-registration. Permit lifecycle management. RERA-ready audit trail. 81,085 permits processed in Q1 2026 alone &mdash; across Aldar, Asteco, DAMAC, and more.
                    </p>
                  </HeroBlock>

                  {/* Micro-stats */}
                  <HeroBlock className="mt-7 flex items-center gap-8">
                    {[
                      { val: "81K+", label: "permits in Q1 2026" },
                      { val: "2 sec", label: "gate scan verification" },
                      { val: "165K+", label: "total permits processed" },
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
              right={<WorkPermitDashboard />}
            />
          </Container>
        </section>

        {/* ━━━ SECTION 2 — THE PROBLEM ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                &mdash; The Problem
              </p>
              <h2 className="mt-4 max-w-[560px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Contractor permits on WhatsApp PDFs are not a system. They are a liability.
              </h2>
            </VmsSectionReveal>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <VmsSectionReveal>
                <p className="mb-3.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What a Facilities Manager Told Us
                </p>
                <blockquote className="border-l-[3px] border-[var(--text-brand)] pl-5 font-display text-[1.5rem] italic leading-[1.5] text-[var(--text-primary)]">
                  &ldquo;We had a contractor on site for three weeks after his permit expired. Nobody knew. We only found out during a RERA audit. That was the last paper permit we ever issued.&rdquo;
                </blockquote>
                <p className="mt-3 font-body text-[12px] text-[var(--text-muted)]">
                  &mdash; Facilities Manager, Residential Community, Abu Dhabi
                </p>
                <p className="mt-5 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  With hundreds of contractors across multiple sites, manually tracking permit expiries is impossible. One missed expiry is a security incident. One RERA audit without a clean audit trail is a liability.
                </p>
              </VmsSectionReveal>

              <VmsSectionReveal>
                <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What This Is Costing You
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
                From application to gate scan &mdash; fully digital.
              </h2>
              <p className="mt-3 mb-10 max-w-[500px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                The entire permit lifecycle managed in one system &mdash; contractor applies, admin approves, QR issued, gate scans, permit expires automatically.
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
                Complete permit lifecycle management.
              </h2>
              <p className="mt-3 mb-9 max-w-[500px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                From contractor registration to RERA audit export &mdash; every step of the work permit process managed in one platform.
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

        {/* ━━━ SECTION 5 — RERA COMPLIANCE ━━━ */}
        <section className="bg-[var(--bg-page)] py-14 md:py-16">
          <Container>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <VmsSectionReveal>
                <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  &mdash; RERA Compliance
                </p>
                <h2 className="mt-4 max-w-[400px] font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  RERA audit ready. In under 30&nbsp;seconds.
                </h2>
                <p className="mt-3 mb-6 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  The Real Estate Regulatory Authority requires developers and property managers to maintain contractor access records. Buzzin generates a complete, tamper-proof audit export covering every permit, every gate scan, and every contractor who has been on your property.
                </p>
                <div className="space-y-3.5">
                  {complianceRows.map((row) => (
                    <div key={row} className="flex gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-brand)]" strokeWidth={1.5} />
                      <p className="font-body text-[14px] leading-[1.55] text-[var(--text-secondary)]">{row}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4">
                  <Link
                    href="/en/security-compliance"
                    className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
                  >
                    View security certifications &rarr;
                  </Link>
                </p>
              </VmsSectionReveal>

              <VmsSectionReveal>
                <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.05] p-7">
                  <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                    Q1 2026 — Live Data
                  </p>
                  <p className="font-heading text-[3rem] font-extrabold leading-none tracking-[-2px] text-[var(--text-primary)]">
                    81,085
                  </p>
                  <p className="mt-1.5 font-body text-[14px] font-light text-[var(--text-muted)]">
                    Work permits processed in Q1 2026 alone. On pace to exceed all of 2025 by a significant margin.
                  </p>
                  <div className="my-4 h-px bg-[var(--border-default)]" />
                  {proofMiniRows.map((r) => (
                    <div key={r.label} className="flex items-center justify-between py-1">
                      <span className="font-body text-[13px] text-[var(--text-muted)]">{r.label}</span>
                      <span className="font-heading text-[13px] font-bold text-[var(--text-brand)]">{r.value}</span>
                    </div>
                  ))}
                </div>
              </VmsSectionReveal>
            </div>
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
                Processing hundreds of thousands of permits across the UAE.
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
                What changes when permits go fully digital.
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
            headline: "Ready to replace WhatsApp PDFs with a system that actually works?",
            subline:
              "We will show you exactly how Buzzin manages contractor permits across your specific sites \u2014 in a 30-minute tailored demo.",
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
            <Link href="/en/industries/residential-real-estate" className="font-body text-[13px] text-white/60 transition-colors hover:text-white">
              See our real estate clients &rarr;
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

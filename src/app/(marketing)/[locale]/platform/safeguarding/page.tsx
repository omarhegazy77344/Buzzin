import type { Metadata } from "next"
import Link from "next/link"
import {
  ShieldCheck, FileCheck, Bell, Smartphone, BarChart2, Calendar,
  AlertTriangle, CheckCircle, XCircle, AlertCircle,
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
  VmsHero, HeroBlock,
  VmsSectionReveal, VmsStaggerGrid, VmsStaggerItem,
} from "@/components/marketing/vms-page-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Safeguarding System UAE | Buzzin \u2014 KHDA Compliance, Authorised Pickup, Child Safety",
  description:
    "Buzzin Safeguarding System \u2014 authorised pickup verification, KHDA audit export, UAE Child Safety Law compliance by January 2027. Built for international schools across UAE. Trusted by Taaleem and Brighton College UAE.",
  openGraph: {
    title: "Safeguarding System UAE | Buzzin",
    description:
      "KHDA-ready safeguarding for UAE international schools. Authorised pickup verification, tamper-proof audit logs, UAE Child Safety Law 2027 compliance.",
  },
  robots: { index: true, follow: true },
}

/* ─── Data ─── */

const consequences = [
  "KHDA inspection failure because a paper visitor log is no longer acceptable evidence",
  "An unauthorised person collects a child. There is no verification system and no photo ID check.",
  "A contractor on campus with no valid permit and no RERA-equivalent audit trail to show for it",
  "Evacuation drill with no accurate headcount of every child and adult on site",
  "Data exposure when visitor details sit in a paper logbook with no UAE PDPL or GDPR protection",
]

const features = [
  {
    icon: ShieldCheck,
    title: "Authorised Pickup Verification",
    items: [
      "Child can only be collected by pre-approved contacts",
      "Photo ID captured and compared at gate",
      "Unknown person triggers instant alert",
      "Admin manages approved contacts",
      "Full collection log always available",
    ],
  },
  {
    icon: FileCheck,
    title: "KHDA Audit Export",
    items: [
      "Complete safeguarding log exportable for KHDA inspection in one click",
      "Timestamped record that cannot be altered after the fact",
      "Covers all visitor, contractor, and collection events",
      "PDF or CSV format available",
      "Available in under 30 seconds",
    ],
  },
  {
    icon: Bell,
    title: "Real-Time Safeguarding Alerts",
    items: [
      "Unknown person at the gate triggers an instant alert",
      "Contractor without a valid permit flagged immediately",
      "Unregistered vehicle in school zone",
      "Alert escalation to designated staff",
      "Full alert history in dashboard",
    ],
  },
  {
    icon: Smartphone,
    title: "Parent Mobile Management",
    items: [
      "Parents manage authorised pickup contacts from their phone",
      "No admin overhead for school office",
      "Add and remove contacts instantly",
      "Emergency contact management",
      "Notification when child collected",
    ],
  },
  {
    icon: BarChart2,
    title: "Compliance Dashboard",
    items: [
      "Track all safeguarding events",
      "Live KHDA readiness score",
      "Export documentation for inspectors",
      "Compare compliance across campuses",
      "Monthly safeguarding report",
    ],
  },
  {
    icon: Calendar,
    title: "UAE Compliance Timeline",
    items: [
      "Tracks your school\u2019s position against January 2027 deadline",
      "Live compliance status indicator",
      "Months of verified records already building from day one",
      "Inspection readiness checklist",
    ],
  },
]

const timeline = [
  {
    date: "Dec 2025",
    title: "Federal Decree-Law 26/2025 enacted",
    body: "UAE Child Digital Safety Law officially passed.",
  },
  {
    date: "Jan 2026",
    title: "KHDA awareness campaign begins",
    body: "Schools formally notified of new requirements.",
  },
  {
    date: "Mid 2026",
    title: "Inspection criteria updated",
    body: "Digital safeguarding logs become part of the KHDA inspection checklist.",
  },
  {
    date: "Jan 2027",
    title: "Full compliance required",
    body: "All UAE schools must have auditable digital safeguarding records.",
  },
]

const beforeAfter = [
  {
    before: "Paper visitor logbook at reception. KHDA inspector asks for records and you hand them a notebook.",
    after: "Digital visitor log, timestamped and locked once recorded. Exportable in 30 seconds for any KHDA inspection.",
  },
  {
    before: "Unknown person arrives to collect a child. The receptionist has no way to verify they are authorised.",
    after: "Authorised pickup verification with photo ID checked against the approved list. Instant alert if the person is not registered.",
  },
  {
    before: "Contractor on site with a WhatsApp PDF permit. No expiry check, no gate scan, no audit record.",
    after: "QR work permit scanned at the entrance. Valid or denied in 2 seconds, with a complete contractor log always available.",
  },
  {
    before: "Evacuation drill where teachers count manually, with no record of contractors or visitors on site",
    after: "Real-time evacuation list with every person on site in one click, always accurate and always current",
  },
]

const proofCards = [
  {
    name: "Taaleem Group",
    body: "Safeguarding system deployed across Taaleem campuses with authorised pickup verification, KHDA-ready audit logs, and real-time alerts to school admin.",
    tag: "Education",
  },
  {
    name: "Brighton College UAE",
    body: "Visitor management and safeguarding across Brighton College UAE campus. Every visitor logged, every collection verified, every incident traceable.",
    tag: "Education",
  },
]

/* ─── Page ─── */

export default function SafeguardingPage() {
  return (
    <>
      {/* JSON-LD — SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Buzzin Safeguarding System",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Android",
            description:
              "KHDA-ready safeguarding system for UAE international schools. Authorised pickup verification, tamper-proof audit logs, and UAE Child Safety Law 2027 compliance.",
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
              { "@type": "ListItem", position: 3, name: "Safeguarding System", item: "https://buzzin.ae/en/platform/safeguarding" },
            ],
          }),
        }}
      />

      <Navbar />

      <main>
        {/* ━━━ SECTION 1 — HERO (navy) ━━━ */}
        <section className="relative overflow-hidden bg-[var(--bg-proof)] pt-28 pb-20 md:pt-36 md:pb-24">
          <HexagonPattern className="text-white/[0.04]" />

          <Container className="relative z-[1]">
            <nav className="mb-8 font-body text-[12px] text-white/50">
              <Link href="/en" className="hover:text-white/80">Home</Link>
              <span className="mx-1.5">/</span>
              <Link href="/en/platform" className="hover:text-white/80">Platform</Link>
              <span className="mx-1.5">/</span>
              <span className="text-white/70">Safeguarding System</span>
            </nav>

            <VmsHero
              left={
                <>
                  <HeroBlock className="mb-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-400">
                      Safeguarding
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 font-heading text-[11px] font-semibold text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      New Module · Live
                    </span>
                    <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/15 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-red-400">
                      UAE Child Safety Law · Jan 2027
                    </span>
                  </HeroBlock>

                  <HeroBlock>
                    <h1 className="font-display text-display-lg md:text-display-xl lg:text-display-2xl text-white">
                      Every child known, verified, and safe.
                    </h1>
                  </HeroBlock>

                  <HeroBlock className="mt-4 max-w-[480px]">
                    <p className="font-body text-[18px] font-light leading-[1.75] text-white/70">
                      UAE Federal Decree-Law No. 26/2025 requires every school to have auditable safeguarding records by January 2027. Buzzin Safeguarding is KHDA-ready from day one with authorised pickup verification, permanent logs, and one-click audit export.
                    </p>
                  </HeroBlock>

                  <HeroBlock className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-8">
                    {[
                      { val: "Jan", label: "2027 compliance deadline" },
                      { val: "KHDA", label: "audit export ready" },
                      { val: "Zero", label: "paper logbooks needed" },
                    ].map((s, i) => (
                      <div key={s.label} className="flex items-center gap-4 sm:gap-8">
                        {i > 0 && <div className="hidden h-10 w-px bg-white/10 sm:block" />}
                        <div>
                          <p className="font-heading text-[28px] font-bold text-[var(--text-brand)]">{s.val}</p>
                          <p className="font-body text-[12px] text-white/55">{s.label}</p>
                        </div>
                      </div>
                    ))}
                  </HeroBlock>

                  <HeroBlock className="mt-8 flex flex-wrap gap-3">
                    <Button size="lg" asChild>
                      <Link href="/en/book-demo">Book a School Demo &rarr;</Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="lg"
                      asChild
                      className="border-white/30 !text-white hover:bg-white/10"
                    >
                      <Link href="/en/industries/education">See Education Module</Link>
                    </Button>
                  </HeroBlock>
                </>
              }
              right={
                <div className="rounded-2xl border border-white/[0.12] bg-white/[0.07] p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-400" strokeWidth={2} />
                    <span className="font-heading text-[13px] font-bold text-red-400">Compliance Deadline</span>
                  </div>

                  <h3 className="font-heading text-[1.75rem] font-bold tracking-[-0.02em] text-white">
                    January 2027
                  </h3>

                  <p className="mt-2 font-body text-[14px] font-light leading-[1.65] text-white/65">
                    UAE Federal Decree-Law No. 26/2025 on Child Digital Safety requires every school to maintain auditable safeguarding records. KHDA inspectors will ask for this log. A paper notebook is not acceptable.
                  </p>

                  <div className="my-4 h-px bg-white/10" />

                  <div className="space-y-2.5">
                    {[
                      "Authorised pickup verification, live now",
                      "KHDA audit export in one click",
                      "Permanent digital log, always on",
                    ].map((r) => (
                      <div key={r} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2} />
                        <p className="font-body text-[13px] text-white/70">{r}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/en/book-demo"
                    className="mt-4 block font-heading text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
                  >
                    Check your school&apos;s readiness &rarr;
                  </Link>
                </div>
              }
            />
          </Container>
        </section>

        {/* ━━━ SECTION 2 — COMPLIANCE URGENCY BANNER ━━━ */}
        <section className="relative overflow-hidden bg-amber-500 px-8 py-5">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-[1] mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <AlertTriangle className="h-[22px] w-[22px] shrink-0 text-[var(--text-primary)]" strokeWidth={2} />
              <div>
                <p className="font-heading text-[15px] font-bold text-[var(--text-primary)]">
                  UAE Federal Decree-Law No. 26/2025 · Child Digital Safety
                </p>
                <p className="font-body text-[13px] text-[rgba(30,37,71,0.7)]">
                  All UAE schools must have auditable safeguarding records by January 2027.
                </p>
              </div>
            </div>

            <Link
              href="/en/book-demo"
              className="inline-flex items-center rounded-lg bg-[var(--bg-proof)] px-[18px] py-[9px] font-heading text-[13px] font-bold text-white transition-all hover:-translate-y-px hover:shadow-md"
            >
              Check Your School&apos;s Compliance &rarr;
            </Link>
          </div>
        </section>

        {/* ━━━ SECTION 3 — THE PROBLEM ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The Problem
              </p>
              <h2 className="mt-4 max-w-[580px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                KHDA will ask for the safeguarding log. What will you show them?
              </h2>
            </VmsSectionReveal>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <VmsSectionReveal>
                <p className="mb-3.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What a School Principal Told Us
                </p>
                <blockquote className="border-l-[3px] border-[var(--text-brand)] pl-5 font-display text-[1.4rem] italic leading-[1.5] text-[var(--text-primary)]">
                  &ldquo;KHDA inspection is in six weeks. Our visitor log is still a paper notebook at reception. Our safeguarding record is three different spreadsheets. I cannot hand that to an inspector.&rdquo;
                </blockquote>
                <p className="mt-3 font-body text-[12px] text-[var(--text-muted)]">
                  School Principal, International School, Dubai
                </p>
                <p className="mt-5 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  With 40+ schools in some groups, a manual process does not scale. And with the January 2027 deadline, the risk of not having a system is no longer theoretical.
                </p>
              </VmsSectionReveal>

              <VmsSectionReveal>
                <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What Manual Safeguarding Costs You
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

        {/* ━━━ SECTION 4 — FEATURES ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Features
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Built specifically for UAE international schools.
              </h2>
              <p className="mt-3 mb-9 max-w-[500px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Six capabilities purpose-built for KHDA inspection readiness and UAE Child Safety Law compliance.
              </p>
            </VmsSectionReveal>

            <VmsStaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" interval={0.1}>
              {features.map((f) => (
                <VmsStaggerItem key={f.title}>
                  <div className="h-full rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md">
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

        {/* ━━━ SECTION 5 — COMPLIANCE TIMELINE ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-14 md:py-16">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                UAE Compliance Timeline
              </p>
              <h2 className="mt-4 max-w-[480px] font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                The clock is running. Schools deploying now have the advantage.
              </h2>
            </VmsSectionReveal>

            <div className="mt-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <VmsStaggerGrid className="space-y-4" interval={0.12}>
                {timeline.map((row) => (
                  <VmsStaggerItem key={row.date}>
                    <div className="flex items-start gap-4">
                      <span className="min-w-[80px] rounded-lg bg-[var(--bg-proof)] px-[10px] py-[6px] text-center font-heading text-[11px] font-bold text-[var(--text-brand)]">
                        {row.date}
                      </span>
                      <div>
                        <p className="mb-1 font-heading text-[13px] font-semibold text-[var(--text-primary)]">{row.title}</p>
                        <p className="font-body text-[12px] leading-[1.5] text-[var(--text-muted)]">{row.body}</p>
                      </div>
                    </div>
                  </VmsStaggerItem>
                ))}
              </VmsStaggerGrid>

              <VmsSectionReveal>
                <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.08] p-7">
                  <p className="mb-3 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                    Schools Deploying Now
                  </p>
                  <h3 className="mb-3 font-heading text-[1.5rem] font-bold text-[var(--text-primary)]">
                    12+ months of verified records before the deadline.
                  </h3>
                  <p className="mb-5 font-body text-[14px] leading-[1.65] text-[var(--text-secondary)]">
                    Schools that deploy Buzzin Safeguarding today will arrive at the January 2027 deadline with over a year of verified, KHDA-ready safeguarding records already logged. That is not just compliance. It is confidence.
                  </p>
                  <Button size="lg" asChild className="w-full">
                    <Link href="/en/book-demo">Deploy Before the Deadline &rarr;</Link>
                  </Button>
                </div>
              </VmsSectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 6 — CLIENT PROOF (navy) ━━━ */}
        <section className="relative overflow-hidden bg-[var(--bg-proof)] py-16 md:py-20">
          <HexagonPattern className="text-white/[0.04]" />

          <Container className="relative z-[1]">
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Trusted By
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-white">
                UAE schools already running Buzzin Safeguarding.
              </h2>
            </VmsSectionReveal>

            <VmsStaggerGrid className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2" interval={0.12}>
              {proofCards.map((p) => (
                <VmsStaggerItem key={p.name}>
                  <div className="h-full rounded-[14px] border border-white/[0.10] bg-white/[0.05] p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-heading text-[18px] font-bold text-white">{p.name}</h3>
                      <span className="rounded-full border border-amber-500/30 bg-amber-500/15 px-2.5 py-0.5 font-heading text-[10px] font-semibold text-[var(--text-brand)]">
                        {p.tag}
                      </span>
                    </div>
                    <p className="font-body text-[14px] leading-[1.65] text-white/70">{p.body}</p>
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
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                What changes when safeguarding goes fully digital.
              </h2>
            </VmsSectionReveal>

            <VmsStaggerGrid className="mt-10 space-y-4" interval={0.1}>
              {beforeAfter.map((row, i) => (
                <VmsStaggerItem key={i}>
                  <div className="grid grid-cols-1 gap-4 rounded-[14px] border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 md:grid-cols-2">
                    <div className="flex gap-3">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={1.5} />
                      <div>
                        <p className="mb-1 font-heading text-[10px] font-bold uppercase tracking-wide text-red-500">Before</p>
                        <p className="font-body text-[14px] leading-[1.55] text-[var(--text-secondary)]">{row.before}</p>
                      </div>
                    </div>
                    <div className="flex gap-3 border-t border-[var(--border-subtle)] pt-4 md:border-l md:border-t-0 md:pl-5 md:pt-0">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                      <div>
                        <p className="mb-1 font-heading text-[10px] font-bold uppercase tracking-wide text-emerald-600">After</p>
                        <p className="font-body text-[14px] leading-[1.55] text-[var(--text-primary)]">{row.after}</p>
                      </div>
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
            headline: "Your KHDA inspection is coming. Is your school ready?",
            subline:
              "We will walk you through Buzzin Safeguarding for your school, covering visitor management, authorised pickup, contractor permits, and attendance in one platform.",
            primaryLabel: "Book a School Demo",
            primaryHref: "/en/book-demo",
            whatsappLabel: "Chat on WhatsApp",
            whatsappHref:
              "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20the%20Safeguarding%20System.",
            phone: "+971 4 320 1265",
          }}
        />

        <div className="bg-gradient-to-br from-amber-500 to-amber-600 pb-6 text-center">
          <p className="font-body text-[13px] text-white/85">
            Prefer to speak directly? Call us:{" "}
            <a href="tel:+97143201265" className="font-heading font-bold text-white hover:underline">
              +971 4 320 1265
            </a>
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="/en/platform"
              className="font-body text-[13px] text-white/70 transition-colors hover:text-white"
            >
              See all platform modules &rarr;
            </Link>
            <Link
              href="/en/industries/education"
              className="font-body text-[13px] text-white/70 transition-colors hover:text-white"
            >
              See education industry &rarr;
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

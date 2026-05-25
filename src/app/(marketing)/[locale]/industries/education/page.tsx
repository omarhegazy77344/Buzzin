import type { Metadata } from "next"
import Link from "next/link"
import {
  Users, ClipboardCheck, CalendarCheck, UserCheck, ShieldCheck,
  XCircle, ArrowRight, CheckCircle, AlertCircle,
} from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { Button } from "@/components/ui/button"
import { SecurityBar } from "@/components/marketing/security-bar"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { EducationComplianceBanner } from "@/components/marketing/education-compliance-banner"
import {
  HospitalityHero as Hero, HeroBlock,
  SectionReveal, StaggerGrid, StaggerItem,
} from "@/components/marketing/hospitality-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "School Visitor Management & Safeguarding UAE | Buzzin — KHDA Compliant",
  description:
    "KHDA-ready visitor management and safeguarding system for UAE schools. Authorised pickup verification, audit logs, UAE Child Safety Law compliance. Trusted by Taaleem, Brighton College, GEMS, and Rashid & Latifa Schools.",
  openGraph: {
    title: "School Safeguarding & Visitor Management UAE | Buzzin",
    description:
      "KHDA-ready. Authorised pickup verification. UAE Child Safety Law compliant. Trusted by Taaleem, Brighton College UAE, and GEMS Education.",
  },
}

/* ─── Data ─── */

const consequences = [
  "KHDA inspection failure because a paper visitor log is no longer acceptable evidence",
  "An unauthorised person collects a child with no verification system and no photo ID check",
  "Contractors on campus without a valid permit, leaving no audit trail for regulators",
  "During an evacuation drill, there is no accurate headcount of children and adults on site",
  "Visitor data sits in a paper logbook with no data-protection controls",
]

const safeguardingFeatures = [
  { title: "Authorised pickup verification", body: "Only pre-approved contacts can collect a child. Photo ID is captured and compared at the gate before release." },
  { title: "Unknown person alert", body: "If an unregistered person attempts pickup, school admin and designated staff receive an instant alert." },
  { title: "KHDA audit export", body: "Your complete safeguarding log is timestamped, protected from edits, and exportable in one click for any KHDA inspection." },
  { title: "Parent mobile management", body: "Parents add or remove authorised pickup contacts from their phone, so the school office does not have to." },
  { title: "Real-time safeguarding alerts", body: "Any safeguarding event on campus triggers an immediate notification to school admin, wherever they are." },
  { title: "Compliance dashboard", body: "View safeguarding events at a glance, check your readiness score, and export documentation for inspectors." },
]

const modules = [
  { icon: ShieldCheck, name: "Safeguarding", badge: "Coming Soon", badgeColor: "emerald", body: "Authorised pickup verification and KHDA audit export. Designed for UAE Child Safety Law 2026 and built for international schools.", href: null as string | null },
  { icon: Users, name: "Visitor Management", body: "Emirates ID and UAE Pass scanning at reception. Every visitor is logged, verified, and their host notified. No more paper logbooks.", href: "/en/platform/visitor-management-system" },
  { icon: ClipboardCheck, name: "Work Permit System", body: "Every contractor on campus holds a verified, active digital permit with a full audit trail for school site works.", href: "/en/platform/work-permit-system" },
  { icon: UserCheck, name: "Attendance Management", body: "Staff tap an NFC card or phone to clock in. Late arrivals are flagged to management automatically, with real-time punctuality alerts.", href: "/en/platform/attendance-management" },
  { icon: CalendarCheck, name: "Event Management", body: "Sports days, parent evenings, and graduation ceremonies. Each attendee gets a unique QR with location-controlled access and branded invitations.", href: "/en/platform/event-management" },
]

const timeline = [
  { date: "Dec 2025", title: "Federal Decree-Law 26/2025 enacted", body: "UAE Child Digital Safety Law officially passed" },
  { date: "Jan 2026", title: "KHDA awareness campaign begins", body: "Schools formally notified of new safeguarding record requirements" },
  { date: "Mid 2026", title: "Inspection criteria updated", body: "Digital safeguarding logs become part of KHDA inspection checklist" },
  { date: "Jan 2027", title: "Full compliance required", body: "All UAE schools must have auditable digital safeguarding records" },
]

const groupBullets = [
  "A single group admin dashboard lets you see all schools from one login and drill down to any campus",
  "Each campus manages its own operations within group-defined policies, so individual schools stay in control",
  "Cross-campus reports let you compare visitor volumes, compliance scores, and safeguarding events side by side",
  "One subscription covers your entire group, priced by scale rather than by module or campus",
]

const beforeAfter = [
  { before: "Paper visitor logbook at reception. When the KHDA inspector asks for records, you hand them a notebook.", after: "Digital visitor log that is timestamped, protected from edits, and exportable in 30 seconds for any inspection." },
  { before: "An unknown person arrives to collect a child and the receptionist has no way to verify they are authorised.", after: "Authorised pickup verification checks photo ID against the approved list and sends an instant alert if the person is not registered." },
  { before: "A contractor on site with a WhatsApp PDF permit. No expiry check, no gate scan, no audit record.", after: "QR work permit scanned at the school entrance. Valid or denied in 2 seconds, with a complete contractor log always available." },
  { before: "During an evacuation drill, a teacher counts children manually with no record of contractors or visitors on site.", after: "A real-time evacuation list shows every child, staff member, visitor, and contractor on site in one click." },
]

const clients = [
  "Taaleem", "Brighton College UAE", "GEMS Education",
  "Rashid & Latifa Schools", "Misk Schools KSA", "Massar Sharjah",
  "Bloom Education Group",
]

/* ─── Page ─── */

export default function EducationPage() {
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
              { "@type": "ListItem", position: 3, name: "Education", item: "https://buzzin.ae/en/industries/education" },
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
              <span>Education</span>
            </nav>

            <Hero
              left={
                <>
                  {/* Badges */}
                  <HeroBlock className="mb-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-400">
                      Education &amp; Schools
                    </span>
                    <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/15 px-3 py-1 font-heading text-[11px] font-semibold uppercase text-red-400">
                      UAE Child Safety Law · Jan 2027
                    </span>
                  </HeroBlock>

                  {/* H1 */}
                  <HeroBlock>
                    <h1 className="font-display text-display-lg leading-[1.1] tracking-[-0.03em] text-white md:text-display-xl lg:text-display-2xl">
                      Safeguarding every child{"\n"}on your campus.
                    </h1>
                  </HeroBlock>

                  {/* Sub */}
                  <HeroBlock className="mt-4 max-w-[480px]">
                    <p className="font-body text-[18px] font-light leading-[1.7] text-white/70">
                      UAE Federal Decree-Law No. 26/2025 requires every school to have auditable safeguarding records by January 2027. Buzzin is KHDA-ready with visitor management, authorised pickup verification, and a secure audit log built specifically for international schools.
                    </p>
                  </HeroBlock>

                  {/* Trusted by */}
                  <HeroBlock className="mt-7">
                    <p className="mb-2.5 font-heading text-[10px] font-semibold uppercase tracking-wide text-amber-400/60">
                      Trusted By
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Taaleem", "Brighton College UAE", "GEMS Education", "Rashid & Latifa Schools", "Misk Schools KSA"].map((c) => (
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
                      <Link href="/en/book-demo">Book a School Demo &rarr;</Link>
                    </Button>
                    <a
                      href="#safeguarding"
                      className="inline-flex h-12 items-center rounded-lg border border-white/25 bg-transparent px-7 font-heading text-body-lg font-medium text-white/80 transition-colors hover:border-white/50"
                    >
                      See Safeguarding Module
                    </a>
                  </HeroBlock>
                </>
              }
              right={
                <HeroBlock>
                  <div className="rounded-2xl border border-white/12 bg-white/[0.07] p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-400" strokeWidth={1.5} />
                      <span className="font-heading text-[13px] font-bold text-red-400">Compliance Deadline</span>
                    </div>
                    <h3 className="font-heading text-[1.5rem] font-bold tracking-[-0.02em] text-white">January 2027</h3>
                    <p className="mt-2 font-body text-[14px] font-light leading-[1.65] text-white/65">
                      UAE Federal Decree-Law No. 26/2025 on Child Digital Safety requires every school to maintain auditable safeguarding records. KHDA inspectors will ask for this log. A paper notebook is no longer acceptable.
                    </p>
                    <div className="my-4 h-px bg-white/10" />
                    <div className="space-y-2.5">
                      {["Authorised pickup verification, live now", "KHDA audit export in one click", "Secure digital log, always on"].map((r) => (
                        <div key={r} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" strokeWidth={1.5} />
                          <span className="font-body text-[13px] text-white/70">{r}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/en/book-demo" className="mt-4 block font-body text-[13px] font-semibold text-[var(--text-brand)]">
                      Check your school&apos;s readiness &rarr;
                    </Link>
                  </div>
                </HeroBlock>
              }
            />
          </Container>
        </section>

        {/* ━━━ SECTION 2 — COMPLIANCE URGENCY BANNER ━━━ */}
        <EducationComplianceBanner />

        {/* ━━━ SECTION 3 — THE MONDAY MORNING PROBLEM ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The Problem
              </p>
              <h2 className="mt-4 max-w-[580px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                KHDA will ask for the safeguarding log. What will you show them?
              </h2>
            </SectionReveal>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <SectionReveal>
                <p className="mb-3.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What a School Principal Told Us
                </p>
                <blockquote className="border-l-[3px] border-[var(--text-brand)] pl-5 font-display text-[1.5rem] leading-[1.5] text-[var(--text-primary)]">
                  &ldquo;KHDA inspection is in six weeks. Our visitor log is still a paper notebook at reception. Our safeguarding record is three different spreadsheets. I cannot hand that to an inspector.&rdquo;
                </blockquote>
                <p className="mt-3 font-body text-[12px] text-[var(--text-muted)]">
                  School Principal, International School, Dubai
                </p>
                <p className="mt-5 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  With 40+ schools in some groups, a manual process does not scale. And with the January 2027 deadline, the risk of not having a system is no longer theoretical.
                </p>
              </SectionReveal>

              <SectionReveal>
                <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What This Puts at Risk
                </p>
                <StaggerGrid className="space-y-3" interval={0.1}>
                  {consequences.map((c) => (
                    <StaggerItem key={c}>
                      <div className="flex gap-3">
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={1.5} />
                        <p className="font-body text-[14px] leading-[1.55] text-[var(--text-secondary)]">{c}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGrid>
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 4 — SAFEGUARDING MODULE ━━━ */}
        <section id="safeguarding" className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Safeguarding
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Know who is picking up every child, every time.
              </h2>
            </SectionReveal>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
              {/* Left — features */}
              <SectionReveal>
                <p className="mb-7 max-w-[460px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                  Buzzin&apos;s Safeguarding module is built specifically for UAE schools. It ships KHDA-ready and handles authorised pickup verification at every gate on your campus.
                </p>

                <StaggerGrid className="space-y-4" interval={0.1}>
                  {safeguardingFeatures.map((f) => (
                    <StaggerItem key={f.title}>
                      <div className="flex gap-3">
                        <CheckCircle className="mt-[3px] h-4 w-4 shrink-0 text-[var(--text-brand)]" strokeWidth={1.5} />
                        <div>
                          <p className="font-heading text-[14px] font-semibold text-[var(--text-primary)]">{f.title}</p>
                          <p className="mt-0.5 font-body text-[13px] leading-[1.5] text-[var(--text-muted)]">{f.body}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGrid>

                <div className="mt-6">
                  <Button size="lg" asChild>
                    <Link href="/en/book-demo">Book a Safeguarding Demo &rarr;</Link>
                  </Button>
                </div>
              </SectionReveal>

              {/* Right — compliance timeline */}
              <SectionReveal>
                <div className="rounded-2xl border-[1.5px] border-[rgba(245,166,35,0.25)] bg-[var(--bg-canvas)] p-7">
                  <p className="mb-4 font-heading text-[14px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                    UAE Compliance Timeline
                  </p>

                  <StaggerGrid className="space-y-4" interval={0.12}>
                    {timeline.map((t) => (
                      <StaggerItem key={t.date}>
                        <div className="flex gap-4">
                          <span className="flex min-w-[80px] items-center justify-center rounded-lg bg-[var(--bg-proof)] px-2.5 py-1.5 font-heading text-[11px] font-bold text-[var(--text-brand)]">
                            {t.date}
                          </span>
                          <div>
                            <p className="font-heading text-[13px] font-semibold text-[var(--text-primary)]">{t.title}</p>
                            <p className="font-body text-[12px] leading-[1.5] text-[var(--text-muted)]">{t.body}</p>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerGrid>

                  <div className="mt-5 rounded-[10px] border border-amber-500/20 bg-amber-500/[0.08] px-4 py-3.5">
                    <p className="font-body text-[13px] text-[var(--text-primary)]">
                      Buzzin is already KHDA-ready. Schools deploying now will have 12+ months of verified records before the deadline.
                    </p>
                  </div>

                  <Link href="/en/book-demo" className="mt-4 block font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline">
                    Book your school&apos;s demo now &rarr;
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 5 — ALL MODULES FOR EDUCATION ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The Platform
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                One platform for your entire school operation.
              </h2>
              <p className="mt-3 mb-10 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Safeguarding, visitor management, contractor permits, and attendance all feed into one dashboard with a single audit trail.
              </p>
            </SectionReveal>

            <StaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" interval={0.1}>
              {modules.map((m) => (
                <StaggerItem key={m.name}>
                  <div className="relative rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-[22px] transition-all duration-[220ms] hover:border-[rgba(245,166,35,0.45)] hover:-translate-y-[3px] hover:shadow-md">
                    {m.badge && (
                      <span className={`absolute right-4 top-4 rounded-full border px-2 py-0.5 font-heading text-[8px] font-bold ${m.badgeColor === "emerald" ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-600" : "border-amber-500/30 bg-amber-500/15 text-[var(--text-brand)]"}`}>
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
                    {m.href ? (
                      <Link href={m.href} className="font-body text-[12px] font-semibold text-[var(--text-brand)] hover:underline">
                        Learn more &rarr;
                      </Link>
                    ) : null}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 6 — SCALABILITY FOR SCHOOL GROUPS ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Built for School Groups
              </p>
              <h2 className="mt-4 mb-10 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                40 schools. One dashboard.
              </h2>
            </SectionReveal>

            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Left — group features */}
              <SectionReveal>
                <p className="mb-6 max-w-[440px] font-body text-[16px] font-light text-[var(--text-muted)]">
                  Taaleem chose Buzzin specifically because of how the platform scales across a large portfolio of schools: centralised visibility, school-level control, and group-level reporting.
                </p>

                <StaggerGrid className="space-y-3.5" interval={0.1}>
                  {groupBullets.map((b) => (
                    <StaggerItem key={b}>
                      <div className="flex gap-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-brand)]" strokeWidth={1.5} />
                        <p className="font-body text-[14px] leading-[1.55] text-[var(--text-secondary)]">{b}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGrid>

                <div className="mt-7">
                  <Button size="lg" asChild>
                    <Link href="/en/book-demo">Book a School Group Demo &rarr;</Link>
                  </Button>
                </div>

                <p className="mt-4">
                  <Link href="/en/industries/hospitality" className="font-body text-[13px] text-[var(--text-brand)] hover:underline">
                    See our hospitality clients &rarr;
                  </Link>
                </p>
              </SectionReveal>

              {/* Right — proof card */}
              <SectionReveal>
                <div className="relative overflow-hidden rounded-2xl bg-[var(--bg-proof)] p-7">
                  <div className="pointer-events-none absolute right-0 top-0 h-[200px] w-[200px] bg-[radial-gradient(circle,rgba(245,166,35,0.08)_0%,transparent_70%)]" />
                  <div className="relative z-[1]">
                    <p className="mb-3 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                      Taaleem Group
                    </p>
                    <p className="font-display text-[1.2rem] italic leading-[1.5] text-white">
                      &ldquo;Attracted by the scalability and the level of control they could have across a large number of schools, with a system simple enough for every campus to use independently.&rdquo;
                    </p>
                    <div className="my-4 h-px bg-white/10" />
                    <div className="flex gap-6">
                      {[
                        { val: "40+", label: "school campuses" },
                        { val: "1", label: "unified dashboard" },
                        { val: "300+", label: "organisations globally" },
                      ].map((s) => (
                        <div key={s.label}>
                          <p className="font-heading text-[1.5rem] font-bold text-[var(--text-brand)]">{s.val}</p>
                          <p className="font-body text-[11px] font-light text-white/50">{s.label}</p>
                        </div>
                      ))}
                    </div>
                    <span className="mt-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-0.5 font-heading text-[8px] font-bold text-[var(--text-brand)]">
                      Education
                    </span>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 7 — BEFORE / AFTER ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The Transformation
              </p>
              <h2 className="mt-4 mb-10 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                What changes when your school runs on Buzzin.
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

        {/* ━━━ SECTION 8 — ALL EDUCATION CLIENTS ━━━ */}
        <section className="bg-[var(--bg-page)] py-14 md:py-16">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Education Clients
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Trusted by international schools across the UAE and GCC.
              </h2>
            </SectionReveal>

            <StaggerGrid className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" interval={0.06}>
              {clients.map((c) => (
                <StaggerItem key={c}>
                  <div className="flex min-h-[64px] items-center justify-center rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-5 py-4 transition-all duration-[220ms] hover:border-[rgba(245,166,35,0.35)] hover:-translate-y-[2px]">
                    <span className="font-heading text-[12px] font-bold text-[var(--text-muted)]">
                      {c}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>

            <p className="mt-4 text-center font-body text-[12px] text-[var(--text-muted)]">
              Logo files will be placed here. Tiles sized and ready for SVG/PNG upload.
            </p>
          </Container>
        </section>

        {/* ━━━ SECTION 9 — SECURITY ━━━ */}
        <SecurityBar />

        {/* ━━━ SECTION 10 — BOTTOM CTA ━━━ */}
        <CtaBanner
          content={{
            headline: "Your KHDA inspection is coming. Is your school ready?",
            subline: "We will walk you through exactly how Buzzin works for your school: visitor management, safeguarding, contractor permits, and attendance in one platform.",
            primaryLabel: "Book a Free Demo",
            primaryHref: "/book-demo",
            whatsappLabel: "Chat on WhatsApp",
            whatsappHref: "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20the%20platform.",
            phone: "+971 4 320 1265",
            phoneCalloutPrefix: "Prefer to speak directly? Call us now:",
          }}
        />
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 pb-6 text-center">
          <Link href="/en/industries" className="font-body text-[13px] text-white/60 transition-colors hover:text-white">
            See all industries &rarr;
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

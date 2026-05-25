import type { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle, Layers, Wrench, Zap, MapPin, Headphones, TrendingUp,
} from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { StatsBar } from "@/components/marketing/stats-bar"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { SecurityBar } from "@/components/marketing/security-bar"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { WhyBuzzinExclusivityBlock } from "@/components/marketing/why-buzzin-exclusivity"
import {
  SectionReveal, StaggerGrid, StaggerItem,
} from "@/components/marketing/hospitality-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Why Buzzin | The Premises Intelligence Platform for Enterprise UAE & GCC",
  description:
    "Why enterprise organisations across the UAE choose Buzzin. Simplicity, flexibility, and enterprise-grade features in one platform. Exclusive partner to Aldar and Asteco. Trusted by Atlantis, Taaleem, Fairmont, and 300+ organisations.",
  openGraph: {
    title: "Why Buzzin | Premises Intelligence Platform UAE",
    description:
      "Simplicity. Flexibility. Enterprise features. One integrated platform trusted by Aldar, Atlantis, Taaleem, and 300+ organisations across the GCC.",
  },
}

/* ─── Data ─── */

const reasonChips = [
  "01. Simplicity",
  "02. Flexibility",
  "03. Depth of Features",
]

const simplicityRows = [
  "One Android tablet to get started. No servers, no complex infrastructure, and no IT department required.",
  "Most deployments go live within days, not the months typical of large-scale software rollouts.",
  "The security guard at the gate uses a QR scanner, the same technology they already understand.",
  "A school receptionist checks visitors in on a touchscreen kiosk that is simpler than the paper logbook it replaces.",
]

const flexibilityRows = [
  "When a client needs something that does not exist, we build the module together from scratch.",
  "Permit types, approval chains, document requirements, and access rules are all configured around your operation.",
  "Multi-site deployments run on a single platform configured differently per community, campus, or property.",
  "Active Directory, Salesforce, ANPR, and third-party systems can be connected on request.",
]

const enterpriseRows = [
  "20M+ secure interactions processed reliably at Atlantis and Aldar scale.",
  "GDPR and UAE PDPL aligned, meeting the data-protection bar that procurement teams expect.",
  "UAE Pass and ICP App integration provides government-verified identity at every check-in point.",
  "On-premises deployment is available for financial institutions and government entities with strict data residency requirements.",
]

const diffCards = [
  {
    icon: Layers, title: "10+ integrated modules",
    body: "Every module shares the same data and dashboard. You manage one vendor, one login, and one source of truth instead of stitching nine tools together.",
    link: { label: "See all modules \u2192", href: "/en/platform" },
  },
  {
    icon: Wrench, title: "Custom development on demand",
    body: "When Aldar needed a queue management system, we built it. Custom module development is available for enterprise clients with specific needs.",
  },
  {
    icon: Zap, title: "Live within days",
    body: "One Android tablet, cloud-hosted, no servers. Most deployments are live within days of the site assessment rather than months.",
  },
  {
    icon: MapPin, title: "GCC-native by design",
    body: "UAE Pass, ICP App, Emirates ID, Arabic language support, RERA compliance, and KHDA compliance. Built for the UAE from the ground up.",
  },
  {
    icon: Headphones, title: "We stay after go-live",
    body: "SLA-backed support, routine site visits, OTA updates, and over-the-air troubleshooting. We do not disappear the moment the contract is signed.",
  },
  {
    icon: TrendingUp, title: "Proven at Aldar scale",
    body: "71\u00D7 growth in secure access events from 2024 to 2025. If it works across Aldar\u2019s entire UAE portfolio, it works for your operation.",
  },
]

const clientRows = [
  {
    sector: "Hospitality",
    pills: ["Atlantis", "Fairmont", "Kempinski", "Hyatt", "Jumeirah"],
    linkLabel: "See sector \u2192",
    href: "/en/industries/hospitality",
  },
  {
    sector: "Real Estate",
    pills: ["Aldar", "Asteco", "DAMAC", "Azizi", "Al Barari", "Deyaar"],
    linkLabel: "See sector \u2192",
    href: "/en/industries/residential-real-estate",
  },
  {
    sector: "Education",
    pills: ["Taaleem", "Brighton College", "GEMS", "Rashid & Latifa", "Misk Schools"],
    linkLabel: "See sector \u2192",
    href: "/en/industries/education",
  },
]

const whySteps = [
  {
    number: "01",
    title: "We assess your premises",
    desc: "Our team visits your site, reviews your workflows, and maps your exact operational requirements. Everything is configured around how you actually work.",
  },
  {
    number: "02",
    title: "We configure and deploy",
    desc: "Cloud-hosted. No servers. One Android tablet to get started. Live within days, not months. No IT team needed on your side.",
  },
  {
    number: "03",
    title: "We stay with you",
    desc: "SLA-backed support, OTA updates, remote troubleshooting, and routine site visits. We do not disappear after go-live.",
  },
]

/* ─── Proof Card Component ─── */

function ProofCard({
  label, quote, stats, tag,
}: {
  label: string
  quote: string
  stats: { value: string; sub: string }[]
  tag: string
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--bg-proof)] p-7">
      <div className="pointer-events-none absolute right-0 top-0 h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.08)_0%,transparent_70%)]" />
      <div className="relative z-[1]">
        <p className="mb-3 font-heading text-[10px] font-bold uppercase tracking-wide text-amber-400">
          {label}
        </p>
        <p className="font-display text-[1.15rem] italic leading-[1.55] text-white">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="my-4 h-px bg-white/10" />
        <div className="flex gap-6">
          {stats.map((s) => (
            <div key={s.sub}>
              <p className="font-heading text-[1.25rem] font-bold text-amber-400">{s.value}</p>
              <p className="font-body text-[11px] font-light text-white/50">{s.sub}</p>
            </div>
          ))}
        </div>
        <span className="mt-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-0.5 font-heading text-[8px] font-bold text-amber-400">
          {tag}
        </span>
      </div>
    </div>
  )
}

/* ─── Evidence Rows Component ─── */

function EvidenceRows({ rows }: { rows: string[] }) {
  return (
    <StaggerGrid className="space-y-3.5" interval={0.08}>
      {rows.map((row) => (
        <StaggerItem key={row}>
          <div className="flex gap-3">
            <CheckCircle className="mt-[3px] h-4 w-4 shrink-0 text-[var(--text-brand)]" strokeWidth={1.5} />
            <p className="font-body text-[14px] leading-[1.55] text-[var(--text-secondary)]">{row}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGrid>
  )
}

/* ─── Page ─── */

export default function WhyBuzzinPage() {
  return (
    <>
      {/* JSON-LD — BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://buzzin.ae/en" },
              { "@type": "ListItem", position: 2, name: "Why Buzzin", item: "https://buzzin.ae/en/why-buzzin" },
            ],
          }),
        }}
      />

      <Navbar />

      <main>
        {/* ━━━ SECTION 1 — HERO ━━━ */}
        <section className="bg-[var(--bg-page)] pt-28 pb-16 md:pt-36 md:pb-20">
          <Container>
            <div className="mx-auto max-w-[760px] text-center">
              <SectionReveal>
                <nav className="mb-5 font-body text-[12px] text-[var(--text-muted)]">
                  <Link href="/en" className="hover:text-[var(--text-secondary)]">Home</Link>
                  <span className="mx-1.5">/</span>
                  <span>Why Buzzin</span>
                </nav>
              </SectionReveal>

              <SectionReveal>
                <p className="mb-5 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  Why Buzzin
                </p>
              </SectionReveal>

              <SectionReveal>
                <h1 className="mb-5 font-display text-[2.5rem] leading-[1.1] tracking-[-0.03em] text-[var(--text-primary)] md:text-[4rem]">
                  The platform that Aldar, Atlantis, and Taaleem all chose. For the same three&nbsp;reasons.
                </h1>
              </SectionReveal>

              <SectionReveal>
                <p className="mx-auto max-w-[600px] font-body text-[18px] font-light leading-[1.75] text-[var(--text-secondary)]">
                  Every client who has signed with Buzzin has cited the same combination: a system simple enough for a school receptionist, flexible enough to be built around their specific operation, and powerful enough for the most demanding enterprise portfolio in the UAE.
                </p>
              </SectionReveal>

              <StaggerGrid className="mt-7 flex flex-wrap justify-center gap-4" interval={0.1}>
                {reasonChips.map((chip) => (
                  <StaggerItem key={chip}>
                    <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-5 py-2.5 font-heading text-[13px] font-bold text-amber-700 transition-colors hover:bg-amber-500/15">
                      {chip}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 2 — STATS BAR ━━━ */}
        <StatsBar />

        {/* ━━━ SECTION 3 — REASON 01: SIMPLICITY ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div>
                <SectionReveal>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-heading text-[3rem] font-extrabold leading-none text-[var(--text-brand)]">01</span>
                    <div className="h-10 w-px bg-[var(--border-default)]" />
                    <span className="font-heading text-[11px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Simplicity</span>
                  </div>
                  <h2 className="mb-3.5 font-heading text-[2.25rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                    Complex operations should not require complex software.
                  </h2>
                  <p className="mb-6 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                    Buzzin is used daily by school receptionists, hotel security guards, and community gate officers, none of whom are software specialists. The system has to work for them on day one without training, IT support, or a manual.
                  </p>
                </SectionReveal>
                <EvidenceRows rows={simplicityRows} />
              </div>

              <SectionReveal>
                <ProofCard
                  label="Why Taaleem Chose Buzzin"
                  quote="They were attracted by the scalability and the level of control they could have across a large number of schools \u2014 with a system simple enough for every campus to use independently."
                  stats={[
                    { value: "40+", sub: "school campuses" },
                    { value: "1", sub: "unified dashboard" },
                    { value: "Day 1", sub: "operational from" },
                  ]}
                  tag="Education"
                />
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 4 — REASON 02: FLEXIBILITY ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <SectionReveal className="lg:order-last">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-heading text-[3rem] font-extrabold leading-none text-[var(--text-brand)]">02</span>
                  <div className="h-10 w-px bg-[var(--border-default)]" />
                  <span className="font-heading text-[11px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Flexibility</span>
                </div>
                <h2 className="mb-3.5 font-heading text-[2.25rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  No two premises are identical. Buzzin adapts to yours.
                </h2>
                <p className="mb-6 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  DAMAC has different operational requirements at each development. Aldar needed a queue management module that did not exist, so we built it. Flexibility is not a feature we advertise. It is how we operate day-to-day.
                </p>
                <EvidenceRows rows={flexibilityRows} />
              </SectionReveal>

              <SectionReveal>
                <ProofCard
                  label="Why DAMAC Chose Buzzin"
                  quote="They were impressed with all the features and how flexible Buzzin is to accommodate their various use cases across different developments."
                  stats={[
                    { value: "Multi-site", sub: "deployment" },
                    { value: "Custom", sub: "workflows built" },
                    { value: "One", sub: "platform, all sites" },
                  ]}
                  tag="Real Estate"
                />
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 5 — REASON 03: ENTERPRISE FEATURES ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div>
                <SectionReveal>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-heading text-[3rem] font-extrabold leading-none text-[var(--text-brand)]">03</span>
                    <div className="h-10 w-px bg-[var(--border-default)]" />
                    <span className="font-heading text-[10px] font-semibold uppercase tracking-wide text-[var(--text-brand)]">Enterprise Features</span>
                  </div>
                  <h2 className="mb-3.5 font-heading text-[2.25rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                    10+ modules sharing a single source of truth.
                  </h2>
                  <p className="mb-6 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                    Most premises management tools do one thing. Buzzin handles ten, and every module shares the same data, dashboard, and audit trail. When a visitor arrives, the queue system knows. When a permit expires, the gate knows. When a child is collected, the safeguarding log knows.
                  </p>
                </SectionReveal>
                <EvidenceRows rows={enterpriseRows} />
              </div>

              <SectionReveal>
                <ProofCard
                  label="Why Aldar Chose Buzzin"
                  quote="They were amazed by the system and how it simplifies the process while maintaining full access and features. They asked Buzzin to build them a new module \u2014 the Queue Management System."
                  stats={[
                    { value: "5 yr", sub: "exclusive partnership" },
                    { value: "71\u00D7", sub: "growth 2024\u21922025" },
                    { value: "Built", sub: "QMS for Aldar" },
                  ]}
                  tag="Real Estate"
                />
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 6 — THE COMPARISON ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                How We Are Different
              </p>
              <h2 className="mt-4 max-w-[540px] font-heading text-[2.25rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                What Buzzin offers that others do not.
              </h2>
              <p className="mt-3 mb-10 max-w-[520px] font-body text-[15px] font-light text-[var(--text-muted)]">
                This is not a feature comparison table. These are the specific capabilities that enterprise organisations in the UAE have cited as decisive in choosing Buzzin.
              </p>
            </SectionReveal>

            <StaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" interval={0.1}>
              {diffCards.map((c) => {
                const Icon = c.icon
                return (
                  <StaggerItem key={c.title}>
                    <div className="rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md">
                      <div className="mb-3.5 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10">
                        <Icon className="h-[18px] w-[18px] text-[var(--text-brand)]" strokeWidth={1.5} />
                      </div>
                      <p className="mb-2 font-heading text-[14px] font-bold text-[var(--text-primary)]">{c.title}</p>
                      <p className="font-body text-[13px] leading-[1.55] text-[var(--text-muted)]">{c.body}</p>
                      {c.link && (
                        <Link
                          href={c.link.href}
                          className="mt-3 inline-block font-body text-[12px] font-semibold text-[var(--text-brand)] hover:underline"
                        >
                          {c.link.label}
                        </Link>
                      )}
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 7 — THE EXCLUSIVITY ━━━ */}
        <WhyBuzzinExclusivityBlock />

        {/* ━━━ SECTION 8 — ALL CLIENTS ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-14 md:py-16">
          <Container>
            <SectionReveal className="text-center">
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Trusted By
              </p>
              <h2 className="mt-4 font-heading text-[2rem] font-bold text-[var(--text-primary)]">
                300+ organisations across four countries.
              </h2>
            </SectionReveal>

            <StaggerGrid className="mx-auto mt-8 flex max-w-[900px] flex-col gap-3" interval={0.08}>
              {clientRows.map((r) => (
                <StaggerItem key={r.sector}>
                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-surface)] px-5 py-3.5 transition-colors hover:border-[rgba(245,166,35,0.25)]">
                    <span className="min-w-[140px] font-heading text-[13px] font-bold text-[var(--text-primary)]">{r.sector}</span>
                    <div className="flex flex-wrap gap-2">
                      {r.pills.map((pill) => (
                        <span
                          key={pill}
                          className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3 py-1 font-body text-[11px] text-[var(--text-muted)]"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={r.href}
                      className="font-heading text-[12px] font-semibold text-[var(--text-brand)] hover:underline"
                    >
                      {r.linkLabel}
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 9 — HOW WE WORK ━━━ */}
        <HowItWorks steps={whySteps} />

        {/* ━━━ SECTION 10 — SECURITY ━━━ */}
        <SecurityBar />
        <div className="bg-[#141830] pb-4 text-center">
          <Link
            href="/en/security-compliance"
            className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
          >
            View full security documentation &rarr;
          </Link>
        </div>

        {/* ━━━ SECTION 11 — BOTTOM CTA ━━━ */}
        <CtaBanner
          content={{
            headline: "See why Aldar, Atlantis, and Taaleem all chose Buzzin.",
            subline:
              "Book a 30-minute demo tailored to your industry. We will show you the exact features that made your peers choose us.",
            primaryLabel: "Book a Free Demo",
            primaryHref: "/en/book-demo",
            whatsappLabel: "Chat on WhatsApp",
            whatsappHref:
              "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20the%20platform.",
            phone: "+971 4 320 1265",
          }}
        />
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 pb-6 text-center">
          <Link
            href="/en/about"
            className="font-body text-[13px] text-white/60 transition-colors hover:text-white"
          >
            Learn about our company &rarr;
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

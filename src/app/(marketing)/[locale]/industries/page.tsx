import type { Metadata } from "next"
import Link from "next/link"
import {
  Building2, Hotel, GraduationCap, Briefcase, Landmark, Shield,
} from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { StatsBar } from "@/components/marketing/stats-bar"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { SectionReveal, StaggerGrid, StaggerItem } from "@/components/marketing/hospitality-layout"
import { IndustriesHero } from "@/components/marketing/industries-hero"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Industries | Buzzin \u2014 Premises Intelligence for Hospitality, Real Estate, Education & More",
  description: "Buzzin serves hospitality, residential real estate, education, corporate, financial districts, and government across UAE and GCC. Trusted by Atlantis, Aldar, Taaleem, Fairmont, and 300+ organisations.",
  openGraph: {
    title: "Industries | Buzzin Premises Intelligence Platform UAE",
    description: "Six industries. One platform. Configured specifically for how each sector operates. Trusted by 300+ organisations across UAE and GCC.",
  },
}

/* ─── Proof card sub-component ─── */
function ProofCard({
  label, quote, stats, pill,
}: {
  label: string
  quote: string
  stats: [string, string, string, string]
  pill: string
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--bg-proof)] p-7">
      <HexagonPattern className="text-white/[0.04]" />
      <div className="relative z-[1]">
        <p className="mb-3 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
          {label}
        </p>
        <p className="font-display text-[1.1rem] italic leading-[1.55] text-white">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="my-3.5 h-px bg-white/10" />
        <div className="flex gap-6">
          <div>
            <p className="font-heading text-[1.25rem] font-bold text-[var(--text-brand)]">{stats[0]}</p>
            <p className="font-body text-[11px] font-light text-white/50">{stats[1]}</p>
          </div>
          <div>
            <p className="font-heading text-[1.25rem] font-bold text-[var(--text-brand)]">{stats[2]}</p>
            <p className="font-body text-[11px] font-light text-white/50">{stats[3]}</p>
          </div>
        </div>
        <span className="mt-3.5 inline-block rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-0.5 font-heading text-[8px] font-bold text-[var(--text-brand)]">
          {pill}
        </span>
      </div>
    </div>
  )
}

/* ─── Module pills ─── */
function ModulePills({ modules }: { modules: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {modules.map((m) => (
        <span
          key={m}
          className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-3 py-1 font-body text-[11px] text-[var(--text-muted)]"
        >
          {m}
        </span>
      ))}
    </div>
  )
}

export default function IndustriesPage() {
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
            ],
          }),
        }}
      />

      <Navbar />

      <main>
        {/* ━━━ SECTION 1 — HERO ━━━ */}
        <IndustriesHero />

        {/* ━━━ SECTION 2 — STATS BAR ━━━ */}
        <StatsBar />

        {/* ━━━ SECTION 3 — RESIDENTIAL ━━━ */}
        <section id="residential" className="border-b border-[var(--border-subtle)] bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
              {/* Left — text */}
              <SectionReveal>
                <div className="mb-4 flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
                  <span className="font-heading text-[11px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Residential &amp; Real Estate</span>
                </div>
                <h2 className="mb-3 font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  One dashboard across your entire portfolio.
                </h2>
                <p className="mb-5 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  Managing multiple communities from separate WhatsApp groups is not a strategy. Buzzin gives your operations team complete visibility across every gate, every contractor, and every visitor in your entire portfolio &mdash; from one dashboard.
                </p>
                <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Modules Used</p>
                <div className="mb-5">
                  <ModulePills modules={["VMS", "Work Permits", "Queue Management", "Booking", "Patrolling"]} />
                </div>
                <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Key Clients</p>
                <p className="mb-6 font-body text-[13px] text-[var(--text-muted)]">Aldar Properties &middot; Asteco &middot; DAMAC &middot; Azizi &middot; Al Barari &middot; Deyaar</p>
                <Link href="/en/industries/residential-real-estate" className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline">
                  See how it works for Residential &rarr;
                </Link>
              </SectionReveal>

              {/* Right — proof card */}
              <SectionReveal>
                <ProofCard
                  label="Aldar Properties"
                  quote="Selected as the exclusive multi-year partner across the entire Aldar UAE portfolio. 71\u00d7 growth in secure access events from 2024 to 2025."
                  stats={["5 yr", "exclusive deal", "71\u00d7", "growth 2024\u20132025"]}
                  pill="Real Estate & Communities"
                />
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 4 — HOSPITALITY ━━━ */}
        <section id="hospitality" className="border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
              {/* Left — proof card */}
              <SectionReveal>
                <ProofCard
                  label="Atlantis The Palm"
                  quote="Managing visitor flows, contractor access, and event check-in across one of the UAE\u2019s most visited luxury destinations."
                  stats={["5\u2605", "property standard", "3\u20135 sec", "guest check-in"]}
                  pill="Luxury Hospitality"
                />
              </SectionReveal>

              {/* Right — text */}
              <SectionReveal>
                <div className="mb-4 flex items-center gap-3">
                  <Hotel className="h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
                  <span className="font-heading text-[11px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Hospitality</span>
                </div>
                <h2 className="mb-3 font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  Every guest expected. Every contractor verified. Every event flawless.
                </h2>
                <p className="mb-5 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  For a 5-star property, operational precision is not optional. Buzzin gives your team complete visibility over every person, permit, and event &mdash; from lobby to loading bay.
                </p>
                <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Modules Used</p>
                <div className="mb-5">
                  <ModulePills modules={["VMS", "Work Permits", "Event Management", "Booking", "Patrolling"]} />
                </div>
                <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Key Clients</p>
                <p className="mb-6 font-body text-[13px] text-[var(--text-muted)]">Atlantis &middot; Fairmont &middot; Kempinski &middot; Hyatt &middot; Jumeirah Beach Hotel</p>
                <Link href="/en/industries/hospitality" className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline">
                  See how it works for Hospitality &rarr;
                </Link>
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 5 — EDUCATION ━━━ */}
        <section id="education" className="border-b border-[var(--border-subtle)] bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
              {/* Left — text */}
              <SectionReveal>
                <div className="mb-4 flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
                  <span className="font-heading text-[11px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Education</span>
                </div>
                <h2 className="mb-3 font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  Every child. Known. Verified. Safe.
                </h2>
                <p className="mb-4 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  UAE Federal Decree-Law No. 26/2025 requires every school to have auditable safeguarding records by January 2027. Buzzin is KHDA-ready &mdash; safeguarding, visitor management, and contractor permits built specifically for international schools across the UAE.
                </p>
                {/* Compliance urgency chip */}
                <div className="mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.08] px-3 py-1.5 font-heading text-[10px] font-semibold text-red-600">
                    <svg className="h-3 w-3 shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M6 1L11 10H1L6 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                      <path d="M6 5V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      <circle cx="6" cy="8.5" r="0.6" fill="currentColor"/>
                    </svg>
                    KHDA Compliance Deadline &mdash; Jan 2027
                  </span>
                </div>
                <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Modules Used</p>
                <div className="mb-5">
                  <ModulePills modules={["Safeguarding", "VMS", "Work Permits", "Attendance", "Event Management"]} />
                </div>
                <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Key Clients</p>
                <p className="mb-6 font-body text-[13px] text-[var(--text-muted)]">Taaleem &middot; Brighton College UAE &middot; GEMS Education &middot; Rashid &amp; Latifa &middot; Misk Schools KSA</p>
                <Link href="/en/industries/education" className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline">
                  See how it works for Education &rarr;
                </Link>
              </SectionReveal>

              {/* Right — proof card */}
              <SectionReveal>
                <ProofCard
                  label="Taaleem Group"
                  quote="Attracted by the scalability and control across a large number of schools \u2014 with a system simple enough for every campus to use independently."
                  stats={["40+", "school campuses", "Jan 2027", "compliance deadline"]}
                  pill="Education"
                />
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 6 — CORPORATE ━━━ */}
        <section id="corporate" className="border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
              {/* Left — proof card */}
              <SectionReveal>
                <ProofCard
                  label="Corporate Offices"
                  quote="Visitor management, contractor access, and attendance tracking \u2014 all connected on one platform for corporate headquarters and multi-tenant office buildings."
                  stats={["One", "tablet to start", "Days", "to go live"]}
                  pill="Corporate"
                />
              </SectionReveal>

              {/* Right — text */}
              <SectionReveal>
                <div className="mb-4 flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
                  <span className="font-heading text-[11px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Corporate</span>
                </div>
                <h2 className="mb-3 font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  Professional premises. Professional standard.
                </h2>
                <p className="mb-5 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  Corporate headquarters, business parks, and multi-tenant office buildings require visitor management, contractor access control, and meeting room booking &mdash; all without a complex IT project. Buzzin deploys in days and runs on one Android tablet.
                </p>
                <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Modules Used</p>
                <div className="mb-5">
                  <ModulePills modules={["VMS", "Work Permits", "Booking Management", "Attendance"]} />
                </div>
                <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Key Clients</p>
                <p className="mb-6 font-body text-[13px] text-[var(--text-muted)]">Central Park Towers DIFC &middot; Masdar City</p>
                <Link href="/en/book-demo" className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline">
                  Book a corporate demo &rarr;
                </Link>
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 7 — FINANCIAL DISTRICTS ━━━ */}
        <section id="financial" className="border-b border-[var(--border-subtle)] bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
              {/* Left — text */}
              <SectionReveal>
                <div className="mb-4 flex items-center gap-3">
                  <Landmark className="h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
                  <span className="font-heading text-[11px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Financial Districts</span>
                </div>
                <h2 className="mb-3 font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  Every visitor carries compliance weight.
                </h2>
                <p className="mb-5 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  At DIFC and equivalent financial addresses, every visitor interaction carries regulatory significance. Buzzin provides identity-verified check-in, complete audit trail, and on-premises deployment for organisations with strict data residency requirements.
                </p>
                {/* On-prem note */}
                <div className="mb-5 rounded-[10px] border border-amber-500/20 bg-amber-500/[0.08] px-4 py-3.5">
                  <p className="font-body text-[13px] leading-[1.55] text-[var(--text-primary)]">
                    On-premises deployment available &mdash; your data never leaves your infrastructure.
                  </p>
                </div>
                <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Modules Used</p>
                <div className="mb-5">
                  <ModulePills modules={["VMS", "Work Permits", "Attendance"]} />
                </div>
                <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Key Clients</p>
                <p className="mb-6 font-body text-[13px] text-[var(--text-muted)]">Central Park Towers DIFC</p>
                <Link href="/en/book-demo" className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline">
                  Book a financial district demo &rarr;
                </Link>
              </SectionReveal>

              {/* Right — proof card */}
              <SectionReveal>
                <ProofCard
                  label="Central Park Towers, DIFC"
                  quote="Every visitor at this address carries compliance weight. Absolute certainty is the only standard."
                  stats={["100%", "audit readiness", "On-prem", "deployment option"]}
                  pill="Financial Districts"
                />
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 8 — GOVERNMENT ━━━ */}
        <section id="government" className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
              {/* Left — proof card */}
              <SectionReveal>
                <ProofCard
                  label="Government Sector"
                  quote="KHDA will ask for the safeguarding log. A paper notebook is no longer acceptable evidence of duty of care."
                  stats={["UAE Pass", "integrated", "ICP App", "verified identity"]}
                  pill="Government"
                />
              </SectionReveal>

              {/* Right — text */}
              <SectionReveal>
                <div className="mb-4 flex items-center gap-3">
                  <Shield className="h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
                  <span className="font-heading text-[11px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Government</span>
                </div>
                <h2 className="mb-3 font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  Government-grade compliance. Government-verified identity.
                </h2>
                <p className="mb-5 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  Government schools, public institutions, and government-adjacent facilities require UAE Pass integration, ICP-verified identity, and on-premises deployment options. Buzzin integrates natively with UAE federal digital identity infrastructure.
                </p>
                <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Modules Used</p>
                <div className="mb-5">
                  <ModulePills modules={["VMS", "Safeguarding", "Work Permits", "Attendance"]} />
                </div>
                <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">Key Clients</p>
                <p className="mb-6 font-body text-[13px] text-[var(--text-muted)]">Rashid &amp; Latifa Schools &middot; Massar Sharjah</p>
                <Link href="/en/book-demo" className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline">
                  Book a government sector demo &rarr;
                </Link>
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 9 — CROSS-INDUSTRY PROOF ━━━ */}
        <section className="relative overflow-hidden bg-[var(--bg-proof)] py-14 md:py-16">
          <HexagonPattern className="text-white/[0.04]" />
          <Container className="relative z-[1]">
            <div className="mx-auto max-w-[800px] text-center">
              <SectionReveal>
                <p className="mb-4 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  &mdash; 300+ Organisations
                </p>
                <h2 className="font-heading text-[2rem] font-bold text-white">
                  Every sector. Every scale. One platform.
                </h2>
              </SectionReveal>
              <StaggerGrid className="mt-6 flex flex-wrap justify-center gap-3" interval={0.04}>
                {[
                  "Atlantis The Palm","Aldar Properties","Taaleem","Fairmont","Kempinski",
                  "Brighton College UAE","DAMAC","Asteco","GEMS Education","Hyatt",
                  "Rashid & Latifa","Azizi","Misk Schools KSA","Central Park Towers DIFC",
                ].map((c) => (
                  <StaggerItem key={c}>
                    <span className="rounded-full border border-white/[0.12] bg-white/[0.07] px-4 py-2 font-heading text-[11px] font-semibold text-white/70 transition-colors hover:bg-white/[0.12]">
                      {c}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGrid>
              <SectionReveal>
                <p className="mt-4 font-body text-[13px] text-white/40">
                  And 300+ organisations across UAE, KSA, Kuwait, and Lebanon.
                </p>
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 10 — BOTTOM CTA ━━━ */}
        <CtaBanner
          content={{
            headline: "Not sure which modules your industry needs? We will tell you.",
            subline: "Book a 30-minute call. Tell us about your operation. We will configure the right platform for your specific premises.",
            primaryLabel: "Book a Free Demo",
            primaryHref: "/en/book-demo",
            whatsappLabel: "Chat on WhatsApp",
            whatsappHref: "https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20the%20platform.",
            phone: "+971 4 320 1265",
          }}
        />
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 pb-6 text-center">
          <Link href="/en/platform" className="mr-6 font-body text-[13px] text-white/60 transition-colors hover:text-white">
            See all platform modules &rarr;
          </Link>
          <Link href="/en/why-buzzin" className="font-body text-[13px] text-white/60 transition-colors hover:text-white">
            Why organisations choose Buzzin &rarr;
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

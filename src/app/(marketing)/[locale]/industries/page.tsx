import type { Metadata } from "next"
import Link from "next/link"
import { Building2, Hotel, GraduationCap } from "lucide-react"
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
  title: "Industries | Buzzin \u2014 Premises Intelligence for Hospitality, Real Estate & Education",
  description: "Buzzin serves hospitality, residential real estate, and education across UAE and GCC. Trusted by Atlantis, Aldar, Taaleem, Fairmont, and 550+ organisations.",
  openGraph: {
    title: "Industries | Buzzin Platform UAE",
    description: "Three industries. One platform. Configured specifically for how each sector operates. Trusted by 550+ organisations across UAE and GCC.",
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
                  Running multiple communities from separate WhatsApp groups leaves your portfolio exposed. Buzzin gives your operations team a single view of every gate, contractor, and visitor across your entire portfolio.
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
                  quote="Selected as the multi-year premises management partner across the entire Aldar UAE portfolio. 71\u00d7 growth in secure access events from 2024 to 2025."
                  stats={["5 yr", "multi-year", "71\u00d7", "growth 2024\u20132025"]}
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
                  Guests, contractors, and events managed from a single dashboard.
                </h2>
                <p className="mb-5 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  For a 5-star property, operational precision is not optional. Buzzin gives your team a clear view of every person, permit, and event, from lobby to loading bay.
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
                  Safeguarding every child on your campus.
                </h2>
                <p className="mb-4 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  UAE Federal Decree-Law No. 26/2025 requires every school to have auditable safeguarding records by January 2027. Buzzin is KHDA-ready, with safeguarding, visitor management, and contractor permits built specifically for international schools across the UAE.
                </p>
                {/* Compliance urgency chip */}
                <div className="mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.08] px-3 py-1.5 font-heading text-[10px] font-semibold text-red-600">
                    <svg className="h-3 w-3 shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M6 1L11 10H1L6 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                      <path d="M6 5V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      <circle cx="6" cy="8.5" r="0.6" fill="currentColor"/>
                    </svg>
                    KHDA Compliance Deadline · Jan 2027
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

        {/* ━━━ SECTION 6 — CROSS-INDUSTRY PROOF ━━━ */}
        <section className="relative overflow-hidden bg-[var(--bg-proof)] py-14 md:py-16">
          <HexagonPattern className="text-white/[0.04]" />
          <Container className="relative z-[1]">
            <div className="mx-auto max-w-[800px] text-center">
              <SectionReveal>
                <p className="mb-4 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  550+ Organisations
                </p>
                <h2 className="font-heading text-[2rem] font-bold text-white">
                  One platform, configured for how each industry actually works.
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
                  And 550+ organisations across UAE, KSA, Kuwait, and Lebanon.
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

import type { Metadata } from "next"
import Link from "next/link"
import {
  Users, ClipboardCheck, ListOrdered, BookOpen, Shield, Car,
  XCircle, CheckCircle,
} from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { Button } from "@/components/ui/button"
import { SecurityBar } from "@/components/marketing/security-bar"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { TransformationShowcase } from "@/components/marketing/transformation-showcase"
import {
  HospitalityHero, HeroBlock,
  SectionReveal, StaggerGrid, StaggerItem,
} from "@/components/marketing/hospitality-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Residential Community Management Software UAE | Buzzin — Aldar & Asteco Partner",
  description:
    "Community management platform for UAE residential properties. Visitor management, contractor permits, queue management, and patrolling in one dashboard across your entire portfolio. Multi-year partner to Aldar Properties and Asteco.",
  openGraph: {
    title: "Residential Community Management UAE | Buzzin",
    description:
      "One platform across your entire UAE residential portfolio. Multi-year partner to Aldar Properties and Asteco. 550+ organisations. Book a free demo.",
  },
}

/* ─── Data ─── */

const heroChips = [
  "Aldar Properties",
  "Asteco",
  "DAMAC",
  "Azizi",
  "Al Barari",
  "Deyaar",
]

const heroStats = [
  { label: "Partnership term", value: "5 Years" },
  { label: "Portfolio coverage", value: "Entire UAE" },
  { label: "Access events 2024 \u2192 2025", value: "71\u00D7 growth" },
  { label: "Q1 2026 work permits", value: "81,085" },
]

const painPoints = [
  "No single view across communities, so each gate operates in complete isolation",
  "Contractors remain on site after permits expire because there is no automated gate denial",
  "Amenity double-bookings lead to resident complaints every weekend",
  "Paper records scattered across 12 sites make RERA compliance audits a scramble",
  "Security patrol logbooks are filled retrospectively with no verified checkpoints",
]

const modules = [
  {
    icon: Users,
    name: "Visitor Management",
    body: "Emirates ID and UAE Pass scanning at community gates. Resident pre-invites visitors via QR link. Delivery driver separate flow. Real-time headcount.",
    href: "/en/platform/visitor-management-system",
  },
  {
    icon: ClipboardCheck,
    name: "Work Permit System",
    body: "Contractors self-register remotely. Their QR permit is scanned at the gate and validated or denied in 2 seconds, with a RERA-ready audit trail across your entire portfolio.",
    href: "/en/platform/work-permit-system",
  },
  {
    icon: ListOrdered,
    name: "Queue Management",
    badge: "New",
    body: "Built first for Aldar Properties. VIP priority routing. WhatsApp tokens. Self-service Emirates ID kiosk for service centre queues.",
    href: "/en/platform/queue-management",
  },
  {
    icon: BookOpen,
    name: "Booking Management",
    badge: "New",
    body: "Pool, gym, tennis court, clubhouse. A live amenity calendar with auto-approve rules. QR access pass issued on booking, so no reception staff are needed.",
    href: "/en/platform/booking-management",
  },
  {
    icon: Shield,
    name: "Patrolling System",
    body: "NFC checkpoint scanning across community perimeter. Timestamped rounds. Missed checkpoint alerts to security management. Reports ready for the board.",
    href: "/en/platform/patrolling",
  },
  {
    icon: Car,
    name: "Parking Management",
    badge: "Coming Soon",
    body: "ANPR integration. Visitor parking linked to VMS check-in. Resident permit management. Coming to the platform soon.",
    href: "/en/platform/parking-management",
  },
]

const qmsFeatures = [
  "Residents with premium status bypass the standard queue automatically through VIP priority routing",
  "WhatsApp and SMS tokens let residents see their position and estimated wait time on their phone",
  "A self-service Emirates ID kiosk means residents can join the queue without speaking to any staff",
  "Queue events are logged directly to Salesforce so the service team can follow up in CRM",
]

const beforeAfter = [
  {
    before: "12 communities managed across 12 WhatsApp groups with no single view and no portfolio-level visibility",
    after: "One dashboard across all communities. Drill down to any gate, any contractor, or any visitor in real time.",
  },
  {
    before: "A contractor permit expires and security has no way to know, so the contractor keeps working unchallenged",
    after: "The gate scan denies entry automatically when a permit expires. No manual oversight required.",
  },
  {
    before: "Amenity booking by phone call leads to double-bookings, resident complaints, and overwhelmed reception staff every weekend",
    after: "A live booking calendar locks the slot, issues a QR access pass, and removes staff from routine bookings entirely.",
  },
  {
    before: "For a RERA compliance audit, staff search through months of paper permit records across 12 separate sites",
    after: "A complete portfolio audit export takes under 30 seconds. Timestamped, protected from edits, and RERA-ready.",
  },
]

const clients = [
  "Aldar Properties",
  "Asteco",
  "DAMAC Properties",
  "Azizi Developments",
  "Deyaar",
  "Al Barari",
  "Al-Futtaim",
]

/* ─── Page ─── */

export default function ResidentialRealEstatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://buzzin.ae/en" },
              { "@type": "ListItem", position: 2, name: "Industries", item: "https://buzzin.ae/en/industries" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Residential & Real Estate",
                item: "https://buzzin.ae/en/industries/residential-real-estate",
              },
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
            <nav className="mb-8 font-body text-[12px] text-white/40">
              <Link href="/en" className="hover:text-white/60">Home</Link>
              <span className="mx-1.5">/</span>
              <Link href="/en/industries" className="hover:text-white/60">Industries</Link>
              <span className="mx-1.5">/</span>
              <span>Residential &amp; Real Estate</span>
            </nav>

            <HospitalityHero
              left={
                <>
                  <HeroBlock className="mb-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-400">
                      Residential &amp; Real Estate
                    </span>
                    <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-400">
                      Aldar &amp; Asteco Partner
                    </span>
                  </HeroBlock>

                  <HeroBlock>
                    <h1 className="font-display text-display-lg leading-[1.1] tracking-[-0.03em] text-white md:text-display-xl lg:text-display-2xl">
                      Manage every community{"\n"}from a single dashboard.
                    </h1>
                  </HeroBlock>

                  <HeroBlock className="mt-4 max-w-[480px]">
                    <p className="font-body text-[18px] font-light leading-[1.7] text-white/70">
                      Running multiple communities from separate WhatsApp groups and paper logbooks leaves your portfolio exposed. Buzzin gives your operations team a single view of every gate, contractor, and visitor across your entire portfolio.
                    </p>
                  </HeroBlock>

                  <HeroBlock className="mt-7">
                    <p className="mb-2.5 font-heading text-[10px] font-semibold uppercase tracking-wide text-amber-400/60">
                      Trusted By
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {heroChips.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 font-heading text-[11px] font-semibold text-white/80 transition-colors hover:bg-white/[0.14]"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </HeroBlock>

                  <HeroBlock className="mt-8 flex flex-wrap gap-3">
                    <Button size="lg" asChild>
                      <Link href="/en/book-demo">Book a Demo &rarr;</Link>
                    </Button>
                  </HeroBlock>
                </>
              }
              right={
                <HeroBlock>
                  <div className="rounded-2xl border border-white/12 bg-white/[0.07] p-6">
                    <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                      Aldar Properties · Live
                    </p>
                    <StaggerGrid className="divide-y divide-white/[0.08]" interval={0.1}>
                      {heroStats.map((row) => (
                        <StaggerItem key={row.label}>
                          <div className="flex items-center justify-between py-3">
                            <span className="font-body text-[13px] text-white/60">{row.label}</span>
                            <span className="font-heading text-[14px] font-bold text-[var(--text-brand)]">{row.value}</span>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerGrid>
                  </div>
                </HeroBlock>
              }
            />
          </Container>
        </section>

        {/* ━━━ SECTION 2 — THE MONDAY MORNING PROBLEM ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The Problem
              </p>
              <h2 className="mt-4 max-w-[580px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                WhatsApp groups and paper logbooks cannot run a multi-community portfolio.
              </h2>
            </SectionReveal>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <SectionReveal>
                <p className="mb-3.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What a Community Manager Told Us
                </p>
                <blockquote className="border-l-[3px] border-[var(--text-brand)] pl-5 font-display text-[1.5rem] leading-[1.5] text-[var(--text-primary)]">
                  &ldquo;I manage 12 communities. I need one dashboard across all of them, not 12 WhatsApp groups, 12 paper logbooks, and 12 separate systems that don&apos;t talk to each other.&rdquo;
                </blockquote>
                <p className="mt-3 font-body text-[12px] text-[var(--text-muted)]">
                  Community Manager, Residential Portfolio, Abu Dhabi
                </p>
                <p className="mt-5 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  With hundreds of contractors on site across multiple communities every day, a single expired permit or unverified visitor is a security and compliance incident waiting to happen.
                </p>
              </SectionReveal>

              <SectionReveal>
                <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What This Costs Your Portfolio
                </p>
                <StaggerGrid className="space-y-3" interval={0.1}>
                  {painPoints.map((p) => (
                    <StaggerItem key={p}>
                      <div className="flex gap-3">
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={1.5} />
                        <p className="font-body text-[14px] leading-[1.55] text-[var(--text-secondary)]">{p}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGrid>
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 3 — MODULES FOR RESIDENTIAL ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The Platform
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Six modules built for residential communities.
              </h2>
              <p className="mt-3 mb-10 max-w-[520px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Every module shares the same dashboard and data across all your communities. A contractor permit issued at Community A is visible to security at Community B instantly.
              </p>
            </SectionReveal>

            <StaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" interval={0.1}>
              {modules.map((m) => (
                <StaggerItem key={m.name}>
                  <ModuleCard module={m} />
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 4 — QMS STORY ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Built for Aldar
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                When Aldar needed a queue management system, they asked Buzzin to build it.
              </h2>
            </SectionReveal>

            <div className="mt-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <SectionReveal>
                <p className="mb-6 max-w-[440px] font-body text-[16px] font-light text-[var(--text-tertiary)]">
                  The Queue Management System was not a generic product we adapted for residential. It was built from scratch in partnership with Aldar Properties to solve a specific operational challenge across their service centres.
                </p>
                <StaggerGrid className="space-y-3.5" interval={0.1}>
                  {qmsFeatures.map((row) => (
                    <StaggerItem key={row}>
                      <div className="flex gap-3">
                        <CheckCircle className="mt-[3px] h-4 w-4 shrink-0 text-[var(--text-brand)]" strokeWidth={1.5} />
                        <p className="font-body text-[14px] leading-[1.55] text-[var(--text-secondary)]">{row}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGrid>
                <div className="mt-7">
                  <Button size="lg" asChild>
                    <Link href="/en/platform/queue-management">See Queue Management &rarr;</Link>
                  </Button>
                </div>
                <p className="mt-4">
                  <Link
                    href="/en/industries/hospitality"
                    className="font-body text-[13px] text-[var(--text-muted)] hover:text-[var(--text-brand)] hover:underline"
                  >
                    See our hospitality clients &rarr;
                  </Link>
                </p>
              </SectionReveal>

              <SectionReveal>
                <div className="relative overflow-hidden rounded-2xl border-[1.5px] border-[rgba(245,166,35,0.2)] bg-[var(--bg-surface)] p-7">
                  <div className="pointer-events-none absolute right-0 top-0 h-[150px] w-[150px] bg-[radial-gradient(circle,rgba(245,166,35,0.08)_0%,transparent_70%)]" />
                  <div className="relative z-[1]">
                    <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                      Built First For
                    </p>
                    <p className="mb-4 font-heading text-[1.5rem] font-extrabold text-[var(--text-primary)]">
                      Aldar Properties
                    </p>
                    <p className="font-body text-[14px] leading-[1.65] text-[var(--text-secondary)]">
                      The Queue Management module was developed specifically to solve Aldar&apos;s operational challenge. It is now available across the entire Buzzin platform.
                    </p>

                    <div className="my-4 h-px bg-[var(--border-default)]" />

                    {[
                      { label: "Module status", value: "Live · New" },
                      { label: "Built for", value: "Aldar Properties" },
                      { label: "Now available to", value: "All clients" },
                    ].map((row) => (
                      <div key={row.label} className="mb-2.5 flex items-center justify-between">
                        <span className="font-body text-[13px] text-[var(--text-muted)]">{row.label}</span>
                        <span className="font-heading text-[13px] font-bold text-[var(--text-brand)]">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 6 — THE TRANSFORMATION ━━━ */}
        <TransformationShowcase
          rows={beforeAfter}
          title="What changes when your portfolio runs on Buzzin."
          subtitle={null}
        />

        {/* ━━━ SECTION 7 — ALL RESIDENTIAL CLIENTS ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-14 md:py-16">
          <Container>
            <SectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Real Estate Clients
              </p>
              <h2 className="mt-4 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Trusted by the UAE&apos;s leading property developers and managers.
              </h2>
            </SectionReveal>

            <StaggerGrid
              className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
              interval={0.06}
            >
              {clients.map((c) => (
                <StaggerItem key={c}>
                  <div className="flex min-h-[64px] items-center justify-center rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-5 py-4 transition-all duration-[220ms] hover:border-[rgba(245,166,35,0.35)] hover:-translate-y-[2px]">
                    <span className="font-heading text-[12px] font-bold text-[var(--text-muted)]">{c}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>

            <p className="mt-4 text-center font-body text-[12px] text-[var(--text-muted)]">
              Logo files will be placed here. Tiles sized and ready for SVG/PNG upload.
            </p>

            <p className="mt-3 text-center">
              <Link
                href="/en/industries/education"
                className="font-body text-[13px] text-[var(--text-brand)] hover:underline"
              >
                See our education clients &rarr;
              </Link>
            </p>
          </Container>
        </section>

        {/* ━━━ SECTION 8 — SECURITY ━━━ */}
        <SecurityBar />

        {/* ━━━ SECTION 9 — BOTTOM CTA ━━━ */}
        <CtaBanner
          content={{
            headline: "Ready to manage your entire portfolio from one dashboard?",
            subline:
              "We will show you exactly how Buzzin works across multiple communities: visitor management, contractor permits, amenity booking, and security patrols in one connected platform.",
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
            href="/en/industries"
            className="font-body text-[13px] text-white/60 transition-colors hover:text-white"
          >
            See all industries &rarr;
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

type ModuleItem = (typeof modules)[number]

function ModuleCard({ module: m }: { module: ModuleItem }) {
  const badgeClasses =
    m.badge === "Coming Soon"
      ? "border-white/20 bg-[var(--bg-canvas)] text-[var(--text-muted)]"
      : "border-emerald-500/30 bg-emerald-500/15 text-emerald-600"

  return (
    <div className="relative h-full rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-[22px] transition-all duration-[220ms] hover:border-[rgba(245,166,35,0.45)] hover:-translate-y-[3px] hover:shadow-md">
      {m.badge && (
        <span
          className={`absolute right-4 top-4 rounded-full border px-2 py-0.5 font-heading text-[8px] font-bold ${badgeClasses}`}
        >
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
      <Link
        href={m.href}
        className="font-body text-[12px] font-semibold text-[var(--text-brand)] hover:underline"
      >
        Learn more &rarr;
      </Link>
    </div>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import {
  Code2, Palette, BarChart3, Megaphone, Users, Sparkles,
  Rocket, ShieldCheck, Globe2, HeartHandshake, ArrowRight,
} from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { Button } from "@/components/ui/button"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { CareersForm } from "@/components/marketing/careers-form"
import {
  VmsSectionReveal, VmsStaggerGrid, VmsStaggerItem,
} from "@/components/marketing/vms-page-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Careers at Buzzin | Join the Team Behind Aldar, Atlantis & Taaleem",
  description:
    "Help us build the platform trusted by 550+ UAE and GCC organisations. Engineering, design, sales, marketing, and customer success roles. Dubai-based and remote-friendly.",
  openGraph: {
    title: "Careers at Buzzin",
    description:
      "Join the team building the platform trusted by Aldar, Atlantis, Taaleem, and 550+ organisations across the UAE and GCC.",
  },
}

/* ─── Data ─── */

const valueCards = [
  {
    icon: Rocket,
    title: "Ship to real clients, fast",
    body: "What you build is used by hotels, schools, and residential communities by the end of the week. No ivory tower. No vapourware. Real premises, real impact.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance is a feature, not a chore",
    body: "We build for KHDA, ADEK, RERA, and federal-grade requirements. Privacy and security are designed in, not bolted on. Our customers trust us with their most sensitive data.",
  },
  {
    icon: Globe2,
    title: "GCC scale, UAE-grounded",
    body: "Dubai HQ. Customers across UAE, KSA, Kuwait, and Lebanon. You will work on a product that crosses borders without losing local nuance.",
  },
  {
    icon: HeartHandshake,
    title: "Small team, big ownership",
    body: "You will own a surface end-to-end, from the customer conversation to the feature shipped. Decisions happen in days, not quarters.",
  },
]

const roles = [
  {
    icon: Code2,
    title: "Engineering",
    summary: "Full-stack, mobile, and infrastructure roles building the product that runs on a single Android tablet and a multi-tenant cloud.",
    stack: "TypeScript &middot; Next.js &middot; Android &middot; PostgreSQL &middot; AWS",
  },
  {
    icon: Palette,
    title: "Design",
    summary: "Product and visual designers shaping the customer-facing dashboard, the kiosk experience, and the brand that sits in front of 550+ properties.",
    stack: "Figma &middot; Design systems &middot; Motion &middot; Prototyping",
  },
  {
    icon: BarChart3,
    title: "Sales",
    summary: "Enterprise account executives and SDRs taking the platform to hotel groups, school networks, and large residential portfolios.",
    stack: "B2B SaaS &middot; Enterprise sales cycles &middot; Field demos",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    summary: "Content, growth, and brand roles telling the Buzzin story across UAE and GCC channels, search, and industry events.",
    stack: "SEO &middot; Lifecycle &middot; Brand &middot; Events",
  },
  {
    icon: Users,
    title: "Customer Success",
    summary: "Onboarding specialists and CSMs making sure every campus, tower, and hotel goes live cleanly and stays live.",
    stack: "Implementation &middot; Support &middot; Account growth",
  },
  {
    icon: Sparkles,
    title: "Something else",
    summary: "We are a small team and we hire for slope, not slot. If you are brilliant at something we have not listed, tell us anyway. We will figure out where you fit.",
    stack: "Open to anything outstanding",
  },
]

const clientChips = [
  "Atlantis The Palm", "Aldar Properties", "Taaleem", "Fairmont", "Kempinski",
  "Brighton College UAE", "DAMAC", "Asteco", "GEMS Education", "Hyatt",
  "Rashid & Latifa Schools", "Azizi", "Misk Schools KSA", "Central Park Towers DIFC",
]

/* ─── Page ─── */

export default function CareersPage() {
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
              { "@type": "ListItem", position: 2, name: "Careers", item: "https://buzzin.ae/en/careers" },
            ],
          }),
        }}
      />

      <Navbar />

      <main>
        {/* ━━━ SECTION 1 — HERO ━━━ */}
        <section className="relative overflow-hidden bg-[var(--bg-proof)] pt-28 pb-20 md:pt-36 md:pb-24">
          <HexagonPattern className="text-white/[0.04]" />

          <Container className="relative">
            <div className="mx-auto max-w-[820px] text-center">
              <nav className="mb-6 font-body text-[12px] text-white/40">
                <Link href="/en" className="hover:text-white/60">Home</Link>
                <span className="mx-1.5">/</span>
                <span>Careers</span>
              </nav>

              <div className="mb-6 flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-400">
                  Careers
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-heading text-[11px] font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  We are hiring
                </span>
              </div>

              <h1 className="mb-6 font-display text-[2.5rem] leading-[1.1] tracking-[-0.03em] text-white md:text-[4rem]">
                Build the platform behind Aldar, Atlantis, and Taaleem.
              </h1>

              <p className="mx-auto mb-8 max-w-[640px] font-body text-[18px] font-light leading-[1.75] text-white/70">
                  Buzzin is the operating system for how UAE and GCC premises actually run: visitor management, work permits, attendance, events, and more. We are a small Dubai team with big customers, looking for people who want to ship product that real properties depend on.
              </p>

              <div className="mb-8 flex flex-wrap justify-center gap-2">
                {["Dubai HQ", "Remote-friendly", "550+ clients", "7+ modules in production"].map((chip) => (
                  <span key={chip} className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1 font-heading text-[11px] font-semibold text-white/70">
                    {chip}
                  </span>
                ))}
              </div>

              <Button size="lg" asChild>
                <Link href="#apply">
                  See open roles &amp; apply <ArrowRight className="ml-1.5 h-4 w-4" strokeWidth={2} />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 2 — WHY BUZZIN ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              <VmsSectionReveal>
                <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  Why Buzzin
                </p>
                <h2 className="mt-4 mb-5 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  We build the boring infrastructure that runs the unglamorous reality of premises operations.
                </h2>
                <p className="mb-4 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  Paper logbooks at hotel receptions. Excel sheets at school gates. Spreadsheets tracking which contractor is on site. That is the reality Buzzin replaces across hotels, schools, residential communities, and corporate buildings.
                </p>
                <p className="mb-4 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  We are not building a generic SaaS for a generic market. Every customer has different compliance, different workflows, and different definitions of what good looks like. We build for the specifics, then unify them on one platform.
                </p>
                <p className="font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  If that sounds like work worth doing, you will fit in well. We hire for craft, ownership, and the kind of pragmatism that makes complex operational systems feel obvious in hindsight.
                </p>
              </VmsSectionReveal>

              <VmsStaggerGrid className="grid grid-cols-1 gap-4 sm:grid-cols-2" interval={0.1}>
                {valueCards.map((v) => (
                  <VmsStaggerItem key={v.title}>
                    <div className="h-full rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-5 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10">
                        <v.icon className="h-[18px] w-[18px] text-[var(--text-brand)]" strokeWidth={1.5} />
                      </div>
                      <h3 className="mb-1.5 font-heading text-[15px] font-bold text-[var(--text-primary)]">{v.title}</h3>
                      <p className="font-body text-[13px] leading-[1.6] text-[var(--text-muted)]">{v.body}</p>
                    </div>
                  </VmsStaggerItem>
                ))}
              </VmsStaggerGrid>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 3 — OPEN ROLES ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Open Roles
              </p>
              <h2 className="mt-4 max-w-[600px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Where we are looking, and where we are flexible.
              </h2>
              <p className="mt-3 mb-10 max-w-[560px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                We hire opportunistically. If you are exceptional, the role description is negotiable. Tell us what you do and where you want to go.
              </p>
            </VmsSectionReveal>

            <VmsStaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" interval={0.08}>
              {roles.map((r) => (
                <VmsStaggerItem key={r.title}>
                  <a href="#apply" className="group block h-full rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                      <r.icon className="h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 font-heading text-[16px] font-bold text-[var(--text-primary)]">{r.title}</h3>
                    <p className="mb-4 font-body text-[13px] leading-[1.6] text-[var(--text-muted)]">{r.summary}</p>
                    <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                      <span dangerouslySetInnerHTML={{ __html: r.stack }} />
                    </p>
                    <span className="inline-flex items-center gap-1 font-body text-[12px] font-semibold text-[var(--text-brand)] transition-transform duration-200 group-hover:translate-x-0.5">
                      Apply for {r.title} <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                  </a>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 4 — CLIENT STRIP ━━━ */}
        <section className="relative overflow-hidden bg-[var(--bg-proof)] py-12 md:py-14">
          <HexagonPattern className="text-white/[0.04]" />
          <Container className="relative">
            <VmsSectionReveal>
              <p className="text-center font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The Premises You Will Build For
              </p>
              <h2 className="mx-auto mt-4 mb-8 max-w-[680px] text-center font-heading text-[1.75rem] font-bold tracking-[-0.02em] text-white md:text-[2rem]">
                550+ organisations across UAE and GCC, and counting.
              </h2>
            </VmsSectionReveal>

            <div className="flex flex-wrap justify-center gap-2">
              {clientChips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1.5 font-heading text-[11px] font-semibold text-white/60"
                >
                  {c}
                </span>
              ))}
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 5 — APPLICATION FORM ━━━ */}
        <section id="apply" className="bg-[var(--bg-page)] py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <VmsSectionReveal>
                <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  Apply
                </p>
                <h2 className="mt-4 mb-5 font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  Send us your CV and a few lines about what you want to build.
                </h2>
                <p className="mb-4 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  Every application is read by a person, not a filter. If your background fits what we are looking for, we will be in touch within 5 business days.
                </p>
                <p className="mb-6 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  Not seeing the right role? Pick &ldquo;Something else.&rdquo; We hire for slope, not slot.
                </p>

                <div className="space-y-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5">
                  <p className="font-heading text-[11px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                    Prefer to email us?
                  </p>
                  <a href="mailto:talents@buzzin.ae" className="block font-body text-[14px] font-semibold text-[var(--text-primary)] hover:underline">
                    talents@buzzin.ae
                  </a>
                  <p className="font-body text-[12px] text-[var(--text-muted)]">
                    Attach your CV and tell us a bit about you. We respond to every email.
                  </p>
                </div>
              </VmsSectionReveal>

              <VmsSectionReveal>
                <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 shadow-[0_24px_60px_rgba(30,37,71,0.08)] md:p-8">
                  <CareersForm />
                </div>
              </VmsSectionReveal>
            </div>
          </Container>
        </section>

        {/* ━━━ SECTION 6 — BOTTOM CTA ━━━ */}
        <CtaBanner
          content={{
            headline: "Not ready to apply yet? Let's keep in touch.",
            subline:
              "Drop us a note at talents@buzzin.ae and we will reach out the next time a role opens that fits your background.",
            primaryLabel: "Email talents@buzzin.ae",
            primaryHref: "mailto:talents@buzzin.ae",
            whatsappLabel: "Chat on WhatsApp",
            whatsappHref:
              "https://wa.me/97143201265?text=Hi%2C%20I%20saw%20the%20Buzzin%20careers%20page%20and%20would%20like%20to%20get%20in%20touch.",
            phone: "+971 4 320 1265",
          }}
        />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

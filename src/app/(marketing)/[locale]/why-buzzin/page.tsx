import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Layers,
  Workflow,
  Globe2,
  ShieldCheck,
  Sparkles,
  Building2,
  HeartHandshake,
} from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { PageHero } from "@/components/marketing/page-hero"
import { StrategicCta } from "@/components/marketing/strategic-cta"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import {
  AnimateOnScroll,
  StaggerOnScroll,
} from "@/components/ui/animate-on-scroll"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Why Buzzin",
  description:
    "Stop running your premises on six disconnected tools. Buzzin replaces the fragmented stack with one platform built for enterprise UAE & GCC \u2014 trusted by Atlantis, Aldar, Taaleem and 300+ organisations.",
}

const fragmentedStack = [
  "Paper visitor logbooks at reception",
  "WhatsApp groups for contractor permits",
  "Excel sheets for amenity bookings",
  "Walkie-talkies for guard patrols",
  "Email chains for event invitations",
  "Separate HR system for attendance",
]

const unifiedOutcomes = [
  "One platform, one login, one audit trail",
  "Zero data silos between security, HR, and operations",
  "Pre-integrated with UAE Pass and Emirates ID",
  "SLA-backed support on phone, email, and WhatsApp",
  "Cloud or on-prem \u2014 your residency, your call",
  "Live within days, not multi-quarter rollouts",
]

const reasons = [
  {
    icon: Layers,
    title: "One platform, every premises function",
    desc: "Visitor management, work permits, queues, events, attendance, booking, safeguarding, and patrolling \u2014 nine modules sharing a single source of truth.",
  },
  {
    icon: Globe2,
    title: "Built for the GCC, not retrofitted to it",
    desc: "Native Arabic, RTL, UAE Pass, Emirates ID, KHDA-aligned safeguarding, and on-prem options for sovereign deployments. Not bolted on \u2014 designed in.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise security from day one",
    desc: "ISO 27001, SOC 1/2/3, GDPR aligned, encryption in transit and at rest, role-based access, and tamper-proof audit logs that pass any inspection.",
  },
  {
    icon: Workflow,
    title: "Operational depth, not a demo dashboard",
    desc: "Patrol routes that prove every checkpoint. Permits with QR verification at the gate. Queues with VIP routing. Real workflows that survive a busy Monday.",
  },
  {
    icon: Building2,
    title: "Trusted at the standard-setting accounts",
    desc: "Selected as the exclusive multi-year premises partner for Aldar Properties and Asteco. Operating across Atlantis, Fairmont, Kempinski, Hyatt, Taaleem, Brighton, GEMS, and DIFC.",
  },
  {
    icon: HeartHandshake,
    title: "A long-term partner, not a vendor",
    desc: "On-site discovery before deployment. Over-the-air updates after go-live. Strategic reviews quarterly. Partnership that does not end at the signature.",
  },
]

const proofRow = [
  { value: "20M+", label: "Secure interactions processed" },
  { value: "300+", label: "Active organisations" },
  { value: "4", label: "Countries operated" },
  { value: "9", label: "Integrated modules" },
  { value: "71\u00d7", label: "YoY scale in 2025" },
]

export default function WhyBuzzinPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Why Buzzin"
          title="Stop running enterprise premises on six disconnected tools."
          description="Most operators are paying for a fragmented stack: paper at reception, WhatsApp for permits, Excel for bookings, walkie-talkies for patrols. Buzzin replaces all of it with one premises intelligence platform \u2014 built for the GCC, trusted by 300+ organisations across 5 countries."
        >
          <Button size="lg" asChild>
            <Link href="/book-demo" className="flex items-center gap-2">
              Book a Strategic Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <Link href="/platform">Explore the platform</Link>
          </Button>
        </PageHero>

        {/* ──────────────────────────── PROOF ROW ──────────────────────────── */}
        <section className="bg-[var(--bg-proof)] py-14 text-white md:py-16">
          <Container>
            <StaggerOnScroll className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-10">
              {proofRow.map((s) => (
                <AnimateOnScroll
                  key={s.label}
                  className="text-center"
                  duration={0.5}
                >
                  <div className="font-display text-display-md leading-none text-amber-400 md:text-display-lg">
                    {s.value}
                  </div>
                  <p className="mt-2 text-body-sm text-gray-300">{s.label}</p>
                </AnimateOnScroll>
              ))}
            </StaggerOnScroll>
          </Container>
        </section>

        {/* ──────────────────────────── BEFORE / AFTER ──────────────────────────── */}
        <section className="bg-[var(--bg-page)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The repositioning
              </p>
              <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                From fragmented stack to one premises intelligence platform.
              </h2>
              <p className="mt-4 text-body-lg text-[var(--text-secondary)]">
                What it costs to keep the old setup vs. what changes the day Buzzin goes live.
              </p>
            </AnimateOnScroll>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <AnimateOnScroll direction="left">
                <div className="h-full rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface-sunken)] p-8 md:p-10">
                  <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-tertiary)]">
                    Before · the fragmented stack
                  </p>
                  <h3 className="mt-3 font-heading text-heading-xl font-bold text-[var(--text-primary)]">
                    Six tools. Three vendors. Zero accountability.
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {fragmentedStack.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-body-md text-[var(--text-secondary)]"
                      >
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-tertiary)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll direction="right">
                <div className="relative h-full overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-[var(--bg-surface)] to-amber-500/[0.04] p-8 md:p-10">
                  <Sparkles className="absolute right-6 top-6 h-6 w-6 text-amber-500" />
                  <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                    After · the unified platform
                  </p>
                  <h3 className="mt-3 font-heading text-heading-xl font-bold text-[var(--text-primary)]">
                    One Buzzin tenant. One audit log. One support team.
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {unifiedOutcomes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-body-md text-[var(--text-secondary)]"
                      >
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </Container>
        </section>

        {/* ──────────────────────────── 6 REASONS GRID ──────────────────────────── */}
        <section className="bg-[var(--bg-canvas)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Why Buzzin wins
              </p>
              <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                Six reasons enterprise leaders standardise on Buzzin.
              </h2>
            </AnimateOnScroll>

            <StaggerOnScroll
              interval={0.07}
              className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {reasons.map((r) => (
                <AnimateOnScroll
                  key={r.title}
                  className="group h-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-brand"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/20 transition-colors group-hover:bg-amber-500/15">
                    <r.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-heading text-heading-md font-semibold text-[var(--text-primary)]">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-body-md leading-relaxed text-[var(--text-secondary)]">
                    {r.desc}
                  </p>
                </AnimateOnScroll>
              ))}
            </StaggerOnScroll>
          </Container>
        </section>

        {/* ──────────────────────────── CLIENT PROOF ──────────────────────────── */}
        <section className="bg-[var(--bg-page)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Standard-setting accounts
              </p>
              <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                When the GCC's most demanding operators choose one platform, that's a standard.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
              {[
                "Atlantis The Palm",
                "Fairmont",
                "Kempinski",
                "Grand Hyatt",
                "Aldar",
                "Asteco",
                "DAMAC",
                "Taaleem",
                "Brighton College",
                "GEMS Education",
                "DIFC",
                "Masdar City",
              ].map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-2 font-heading text-body-sm font-medium text-[var(--text-secondary)]"
                >
                  {name}
                </span>
              ))}
            </AnimateOnScroll>
          </Container>
        </section>

        <StrategicCta
          headline="See exactly where Buzzin fits in your stack."
          subline="A 30-minute working session with a Buzzin specialist. We'll map your current tools and show you what one platform looks like for your operation."
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

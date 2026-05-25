import type { Metadata } from "next"
import Link from "next/link"
import {
  MapPin, Clock, Bell, BarChart2, Shield, Users,
  Building2, Hotel, GraduationCap,
  XCircle,
} from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { Button } from "@/components/ui/button"
import {
  VmsSectionReveal, VmsStaggerGrid, VmsStaggerItem,
} from "@/components/marketing/vms-page-layout"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Patrolling System | Buzzin \u2014 NFC Checkpoint Scanning, Coming Soon",
  description:
    "Buzzin Patrolling System \u2014 NFC checkpoint scanning, timestamped rounds, missed patrol alerts, and board-ready security reports. Coming soon to the Buzzin platform.",
  openGraph: {
    title: "Patrolling System | Buzzin (Coming Soon)",
    description:
      "NFC checkpoint scanning, timestamped patrol rounds, missed checkpoint alerts, and board-ready reports. Coming soon.",
  },
  robots: { index: true, follow: true },
}

/* ─── Data ─── */

const consequences = [
  "Guard skips a checkpoint and the logbook shows it completed anyway. Management never knows.",
  "Incident occurs in an area that should have been patrolled, but there is no verified timestamped proof the guard was ever there",
  "An insurance claim or legal investigation surfaces. The paper log is challenged because it cannot be verified independently.",
  "No missed-checkpoint alert. Management finds out about a skipped round the next morning, not the moment it happens.",
  "The security report to the board is narrative, not data, with no automated reporting across multiple properties",
]

const features = [
  {
    icon: MapPin,
    title: "NFC Checkpoint Network",
    body: "NFC tags installed at every required checkpoint across your property perimeter. Guard taps phone or card at each point, and the timestamp is recorded automatically.",
  },
  {
    icon: Clock,
    title: "Timestamped Patrol Rounds",
    body: "Every round logged with precise start time, checkpoint sequence, and completion time. Records cannot be entered retrospectively from a desk.",
  },
  {
    icon: Bell,
    title: "Missed Checkpoint Alerts",
    body: "If a checkpoint is not scanned within its scheduled window, an automated alert fires immediately to the security supervisor. Not the next morning.",
  },
  {
    icon: BarChart2,
    title: "Reports for Management and Insurers",
    body: "Automated patrol compliance reports by shift, by guard, by property. Ready for management reviews, insurance documentation, or incident investigation in under 30 seconds.",
  },
  {
    icon: Shield,
    title: "Multi-Property Dashboard",
    body: "All patrol activity across your entire portfolio visible in one dashboard. Drill down by community, building, or guard.",
  },
  {
    icon: Users,
    title: "Guard Management",
    body: "Assign guards to patrol routes. Configure checkpoint sequences and timing windows. Track individual guard compliance over time.",
  },
]

const steps = [
  {
    title: "Guard starts patrol round",
    body: "Guard begins their route. The app or NFC card is ready. Management dashboard shows patrol started.",
  },
  {
    title: "NFC tap at each checkpoint",
    body: "Guard taps their phone or card at each NFC point. Timestamp recorded immediately. Location confirmed.",
  },
  {
    title: "Round completed or alert fires",
    body: "Completed round logged to dashboard. Missed checkpoint triggers instant alert to supervisor. No manual review required.",
  },
  {
    title: "Reports generated automatically",
    body: "Daily, weekly, monthly patrol compliance reports generated without manual effort. Always ready for inspection.",
  },
]

const sectors = [
  {
    icon: Building2,
    title: "Residential Communities",
    body: "Multiple community perimeters, multiple guards, one dashboard. Patrol compliance reporting for strata boards and community managers.",
  },
  {
    icon: Hotel,
    title: "Hospitality Properties",
    body: "Back-of-house and perimeter patrols. Night security coverage verified. Incident investigation supported by round records that cannot be altered after the fact.",
  },
  {
    icon: GraduationCap,
    title: "Schools & Campuses",
    body: "Campus perimeter security verified. Out-of-hours patrol compliance tracked and reported. Every area confirmed checked at every required time.",
  },
]

/* ─── Page ─── */

export default function PatrollingPage() {
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
              { "@type": "ListItem", position: 2, name: "Platform", item: "https://buzzin.ae/en/platform" },
              { "@type": "ListItem", position: 3, name: "Patrolling System", item: "https://buzzin.ae/en/platform/patrolling" },
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
            <nav className="mb-8 font-body text-[12px] text-white/50 text-center">
              <Link href="/en" className="hover:text-white/80">Home</Link>
              <span className="mx-1.5">/</span>
              <Link href="/en/platform" className="hover:text-white/80">Platform</Link>
              <span className="mx-1.5">/</span>
              <span className="text-white/70">Patrolling System</span>
            </nav>

            <VmsSectionReveal className="mx-auto max-w-[680px] text-center">
              <div className="mb-5 flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-amber-400">
                  Patrolling System
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-heading text-[11px] font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Coming Soon
                </span>
              </div>

              <h1 className="font-display text-display-lg md:text-display-xl lg:text-display-2xl text-white">
                Every patrol verified, timestamped, and reported automatically.
              </h1>

              <p className="mx-auto mt-4 max-w-[560px] font-body text-[17px] font-light leading-[1.75] text-white/70">
                Manual patrol logbooks can be filled retrospectively. NFC checkpoint scanning cannot. Buzzin Patrolling gives security management verified proof of every round, without relying on a signature in a notebook.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button size="lg" asChild>
                  <Link href="/en/book-demo">Notify Me When Live &rarr;</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  asChild
                  className="border-white/30 !text-white hover:bg-white/10"
                >
                  <Link href="/en/platform">See Live Modules</Link>
                </Button>
              </div>
            </VmsSectionReveal>
          </Container>
        </section>

        {/* ━━━ SECTION 2 — THE PROBLEM ━━━ */}
        <section className="bg-[var(--bg-page)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The Problem
              </p>
              <h2 className="mt-4 max-w-[540px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                A patrol logbook filled at a desk is not evidence. It is fiction.
              </h2>
            </VmsSectionReveal>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <VmsSectionReveal>
                <p className="mb-3.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What a Head of Security Told Us
                </p>
                <blockquote className="border-l-[3px] border-[var(--text-brand)] pl-5 font-display text-[1.4rem] italic leading-[1.5] text-[var(--text-primary)]">
                  &ldquo;During an insurance investigation we were asked to prove our guards had completed overnight patrols. The paper logbook showed every checkpoint at perfectly regular intervals. The insurer did not believe it. We could not prove it either.&rdquo;
                </blockquote>
                <p className="mt-3 font-body text-[12px] text-[var(--text-muted)]">
                  Head of Security, Residential Portfolio, Dubai
                </p>
                <p className="mt-5 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  Paper patrol logs are the last unverified record in a professional security operation. When an incident happens, when an insurance claim is filed, or when the board asks for accountability, you need timestamped proof that cannot be altered after the fact.
                </p>
              </VmsSectionReveal>

              <VmsSectionReveal>
                <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
                  What Unverified Patrols Cost You
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

        {/* ━━━ SECTION 3 — WHAT THE MODULE WILL DO ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Coming to Buzzin
              </p>
              <h2 className="mt-4 max-w-[520px] font-heading text-display-md font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                NFC checkpoint scanning that produces verified, timestamped evidence on every round.
              </h2>
              <p className="mt-3 mb-10 max-w-[500px] font-body text-[15px] font-light text-[var(--text-tertiary)]">
                Six capabilities arriving together on day one. A patrol module designed to produce evidence, not paper.
              </p>
            </VmsSectionReveal>

            <VmsStaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" interval={0.1}>
              {features.map((f) => (
                <VmsStaggerItem key={f.title}>
                  <div className="relative h-full overflow-hidden rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md">
                    <span className="absolute right-3 top-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-heading text-[8px] font-bold uppercase tracking-wide text-emerald-600">
                      Coming Soon
                    </span>
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10">
                      <f.icon className="h-[18px] w-[18px] text-[var(--text-brand)]" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 font-heading text-[14px] font-bold text-[var(--text-primary)]">{f.title}</h3>
                    <p className="font-body text-[13px] leading-[1.55] text-[var(--text-muted)]">{f.body}</p>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 4 — HOW IT WILL WORK ━━━ */}
        <section className="bg-[var(--bg-page)] py-14 md:py-16">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                How It Works
              </p>
              <h2 className="mt-4 font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Simple for guards. Powerful for management.
              </h2>
            </VmsSectionReveal>

            <VmsStaggerGrid className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2" interval={0.15}>
              {steps.map((s, i) => (
                <VmsStaggerItem key={s.title}>
                  <div className="rounded-xl border border-amber-500/15 bg-[var(--bg-canvas)] p-6 transition-all duration-[220ms] hover:border-amber-500/35 hover:bg-[var(--bg-surface)]">
                    <span className="block font-heading text-[3rem] font-extrabold leading-none text-[var(--border-default)] opacity-50 -mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 mb-2 font-heading text-[15px] font-bold text-[var(--text-primary)]">{s.title}</h3>
                    <p className="font-body text-[13px] leading-[1.6] text-[var(--text-muted)]">{s.body}</p>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 5 — WHO IT IS FOR ━━━ */}
        <section className="bg-[var(--bg-canvas)] py-14 md:py-16">
          <Container>
            <VmsSectionReveal>
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Who It Serves
              </p>
              <h2 className="mt-4 max-w-[480px] font-heading text-[2rem] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                Built for any property with a security patrol requirement.
              </h2>
            </VmsSectionReveal>

            <VmsStaggerGrid className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3" interval={0.1}>
              {sectors.map((s) => (
                <VmsStaggerItem key={s.title}>
                  <div className="h-full rounded-[14px] border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-all duration-[220ms] hover:-translate-y-[2px] hover:border-[rgba(245,166,35,0.35)]">
                    <s.icon className="mb-3 h-[22px] w-[22px] text-[var(--text-brand)]" strokeWidth={1.5} />
                    <h3 className="mb-2 font-heading text-[14px] font-bold text-[var(--text-primary)]">{s.title}</h3>
                    <p className="font-body text-[13px] leading-[1.55] text-[var(--text-muted)]">{s.body}</p>
                  </div>
                </VmsStaggerItem>
              ))}
            </VmsStaggerGrid>
          </Container>
        </section>

        {/* ━━━ SECTION 6 — NOTIFY CTA (navy) ━━━ */}
        <section className="relative overflow-hidden bg-[var(--bg-proof)] py-16 md:py-20">
          <HexagonPattern className="text-white/[0.04]" />

          <Container className="relative z-[1]">
            <VmsSectionReveal className="mx-auto max-w-[620px] text-center">
              <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Coming Soon
              </p>
              <h2 className="mt-4 font-display text-[2.5rem] leading-[1.2] text-white">
                Patrolling is in final development. Be the first to know when it goes live.
              </h2>
              <p className="mx-auto mt-4 mb-8 max-w-[500px] font-body text-[15px] font-light leading-[1.75] text-white/60">
                Register your interest now and we will notify you the moment Patrolling is available, with a tailored demo for your specific property type.
              </p>

              <Button size="lg" asChild>
                <Link href="/en/book-demo">Register Interest &rarr;</Link>
              </Button>

              <p className="mt-4 font-body text-[13px] text-white/40">
                Or{" "}
                <Link href="/en/platform" className="font-semibold text-[var(--text-brand)] hover:underline">
                  see all live modules &rarr;
                </Link>
              </p>
            </VmsSectionReveal>
          </Container>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

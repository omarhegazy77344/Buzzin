import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Star, Clock } from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { PageHero } from "@/components/marketing/page-hero"
import { StrategicCta } from "@/components/marketing/strategic-cta"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll, StaggerOnScroll } from "@/components/ui/animate-on-scroll"
import { defaultModules } from "@/lib/content-defaults"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Nine fully integrated modules on one premises intelligence platform. Visitor Management, Work Permit, QMS, Events, Attendance, Booking, Safeguarding, Patrolling, and NFC Access.",
}

const allModules = [
  ...defaultModules,
  {
    name: "Patrolling",
    shortName: "Patrol",
    slug: "patrolling",
    desc: "NFC checkpoint scanning. Timestamped patrol rounds. Every missed station flagged automatically.",
    shortDesc: "NFC patrol rounds",
    hoverLine: "Prove every patrol round with tamper-proof NFC scans.",
    longDesc: "Replace unverifiable patrol logbooks with GPS-timestamped NFC checkpoint scans. Guards scan each station on their route; missed checkpoints are flagged in real time and managers are alerted. Every round is provable, every escalation is automatic.",
    benefits: [
      "NFC checkpoint scans that can\u2019t be backdated or fabricated",
      "Real-time alerts when a checkpoint is missed or overdue",
      "Patrol route management across multiple sites from one console",
      "Historical patrol data available for audit and incident review",
      "Guard performance dashboards for operations managers",
    ],
    status: "live" as const,
    badge: null,
  },
  {
    name: "NFC Access Control",
    shortName: "NFC Access",
    slug: "nfc-access",
    desc: "NFC and RFID badge management. Turnstile integration. Real-time access logs.",
    shortDesc: "Badge & turnstile",
    hoverLine: "Issue and revoke NFC badges with real-time access logs.",
    longDesc: "Manage NFC and RFID badge issuance, revocation, and access rights from a single admin console. Integrate with turnstiles, boom gates, and door controllers. Every access event is logged with timestamp, location, and badge ID for a complete audit trail.",
    benefits: [
      "Issue and revoke NFC badges instantly without physical retrieval",
      "Turnstile and boom gate integration with major access control systems",
      "Real-time access logs with filterable audit trail",
      "Time-restricted access rights for contractors and temporary staff",
      "Automatic deactivation of expired contractor badges",
    ],
    status: "comingSoon" as const,
    badge: null,
  },
]

export default function PlatformPage() {
  const liveModules = allModules.filter((m) => m.status === "live" || m.status === "new")
  const comingSoon = allModules.filter((m) => m.status === "comingSoon")

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="The platform"
          title="One platform. Nine integrated modules. Zero silos."
          description="Every Buzzin module shares a single audit log, single identity layer, and single admin console. Visitor management, work permits, queues, events, attendance, booking, safeguarding, patrolling, and NFC access \u2014 built to work together."
        >
          <Button size="lg" asChild>
            <Link href="/book-demo" className="flex items-center gap-2">
              Book a Platform Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <Link href="/why-buzzin">Why one platform matters</Link>
          </Button>
        </PageHero>

        {/* ── LIVE MODULES ── */}
        <section className="bg-[var(--bg-page)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Live modules
              </p>
              <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                Seven modules live across 300+ organisations today.
              </h2>
            </AnimateOnScroll>

            <StaggerOnScroll className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" interval={0.07}>
              {liveModules.map((mod) => (
                <AnimateOnScroll key={mod.slug}>
                  <Link
                    href={`/platform/${mod.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-brand"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading text-heading-md font-semibold text-[var(--text-primary)]">
                        {mod.name}
                      </h3>
                      <div className="flex shrink-0 flex-col items-end gap-1.5">
                        {mod.badge === "star" && (
                          <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-body-xs font-semibold text-amber-600">
                            <Star className="h-3 w-3 fill-current" /> Flagship
                          </span>
                        )}
                        {mod.status === "new" && (
                          <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-body-xs font-semibold text-emerald-600">
                            New
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="mt-3 flex-1 text-body-sm leading-relaxed text-[var(--text-secondary)]">
                      {mod.desc}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 font-heading text-body-sm font-semibold text-[var(--text-brand)] transition-transform group-hover:translate-x-1">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </AnimateOnScroll>
              ))}
            </StaggerOnScroll>
          </Container>
        </section>

        {/* ── COMING SOON ── */}
        {comingSoon.length > 0 && (
          <section className="bg-[var(--bg-canvas)] py-16 md:py-20">
            <Container>
              <AnimateOnScroll className="mx-auto max-w-3xl text-center">
                <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-tertiary)]">
                  Coming soon
                </p>
                <h2 className="font-display text-display-md font-bold text-[var(--text-primary)]">
                  Two modules on the roadmap.
                </h2>
              </AnimateOnScroll>

              <StaggerOnScroll className="mt-10 grid gap-5 md:grid-cols-2" interval={0.08}>
                {comingSoon.map((mod) => (
                  <AnimateOnScroll key={mod.slug}>
                    <div className="flex h-full flex-col rounded-2xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-surface-sunken)] p-7 opacity-70">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-heading text-heading-md font-semibold text-[var(--text-primary)]">
                          {mod.name}
                        </h3>
                        <span className="flex shrink-0 items-center gap-1 rounded-full border border-[var(--border-default)] px-2.5 py-0.5 text-body-xs font-semibold text-[var(--text-tertiary)]">
                          <Clock className="h-3 w-3" /> Coming soon
                        </span>
                      </div>
                      <p className="mt-3 flex-1 text-body-sm leading-relaxed text-[var(--text-tertiary)]">
                        {mod.desc}
                      </p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </StaggerOnScroll>
            </Container>
          </section>
        )}

        {/* ── INTEGRATION PROOF ── */}
        <section className="bg-[var(--bg-page)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                One shared foundation
              </p>
              <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                Every module shares a single identity layer, audit log, and admin console.
              </h2>
              <p className="mt-4 text-body-lg text-[var(--text-secondary)]">
                When a visitor is flagged in VMS, that flag appears in Patrolling, Attendance, and Booking automatically. One platform, one source of truth \u2014 no manual syncing between systems.
              </p>
            </AnimateOnScroll>

            <StaggerOnScroll className="mx-auto mt-12 grid max-w-3xl gap-4 md:grid-cols-3" interval={0.07}>
              {[
                { title: "Single audit log", desc: "Every action across every module in one tamper-proof trail." },
                { title: "Shared identity", desc: "A person flagged in one module is flagged everywhere immediately." },
                { title: "One admin console", desc: "Manage every site, module, and user from a single dashboard." },
              ].map((f) => (
                <AnimateOnScroll
                  key={f.title}
                  className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 text-center"
                >
                  <h3 className="font-heading text-heading-sm font-semibold text-[var(--text-primary)]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-[var(--text-secondary)]">{f.desc}</p>
                </AnimateOnScroll>
              ))}
            </StaggerOnScroll>
          </Container>
        </section>

        <StrategicCta
          headline="See all nine modules running together."
          subline="A 30-minute platform walk-through with a Buzzin specialist who knows your industry."
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

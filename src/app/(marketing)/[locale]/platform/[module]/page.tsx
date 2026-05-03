import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, Star, Clock } from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { StrategicCta } from "@/components/marketing/strategic-cta"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll, StaggerOnScroll } from "@/components/ui/animate-on-scroll"
import { defaultModules } from "@/lib/content-defaults"

export const dynamic = "force-static"

/* ── All 9 slugs (7 in defaultModules + patrolling + nfc-access) ── */
const extendedModules = [
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

export function generateStaticParams() {
  return extendedModules.map((m) => ({ module: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ module: string }>
}): Promise<Metadata> {
  const { module: slug } = await params
  const mod = extendedModules.find((m) => m.slug === slug)
  if (!mod) return {}
  return {
    title: `${mod.name} | Platform`,
    description: mod.longDesc,
  }
}

const industryFit: Record<string, string[]> = {
  "visitor-management-system": ["Hospitality", "Real Estate", "Corporate", "Education", "Government"],
  "work-permit-system": ["Real Estate", "Hospitality", "Corporate", "Government"],
  "queue-management": ["Hospitality", "Government", "Financial Districts"],
  "event-management": ["Hospitality", "Education", "Real Estate"],
  "attendance-management": ["Education", "Corporate", "Real Estate"],
  "booking-management": ["Real Estate", "Hospitality", "Corporate"],
  "safeguarding": ["Education"],
  "patrolling": ["Hospitality", "Real Estate", "Corporate", "Government"],
  "nfc-access": ["Corporate", "Financial Districts", "Real Estate"],
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ module: string }>
}) {
  const { module: slug } = await params
  const mod = extendedModules.find((m) => m.slug === slug)
  if (!mod) notFound()

  const isComingSoon = mod.status === "comingSoon"
  const fits = industryFit[slug] ?? []
  const otherModules = extendedModules.filter((m) => m.slug !== slug).slice(0, 4)

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          <Container>
            <AnimateOnScroll>
              <Link
                href="/platform"
                className="mb-6 inline-flex items-center gap-2 font-heading text-body-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <ArrowLeft className="h-4 w-4" /> All modules
              </Link>
            </AnimateOnScroll>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <AnimateOnScroll direction="left">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                    Buzzin Platform
                  </span>
                  {mod.badge === "star" && (
                    <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-body-xs font-semibold text-amber-600">
                      <Star className="h-3 w-3 fill-current" /> Flagship
                    </span>
                  )}
                  {mod.status === "new" && (
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-body-xs font-semibold text-emerald-600">
                      Newly released
                    </span>
                  )}
                  {isComingSoon && (
                    <span className="flex items-center gap-1 rounded-full border border-[var(--border-default)] px-2.5 py-0.5 text-body-xs font-semibold text-[var(--text-tertiary)]">
                      <Clock className="h-3 w-3" /> Coming soon
                    </span>
                  )}
                </div>

                <h1 className="mt-3 font-display text-display-lg font-bold leading-[1.05] text-[var(--text-primary)] md:text-display-xl">
                  {mod.name}
                </h1>
                <p className="mt-5 text-body-lg text-[var(--text-secondary)]">{mod.longDesc}</p>

                {!isComingSoon && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button size="lg" asChild>
                      <Link href="/book-demo" className="flex items-center gap-2">
                        Book a Demo
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="ghost" asChild>
                      <Link href="/platform">All modules</Link>
                    </Button>
                  </div>
                )}

                {isComingSoon && (
                  <div className="mt-8">
                    <Button size="lg" variant="ghost" asChild>
                      <Link href="/contact" className="flex items-center gap-2">
                        Join the waitlist
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </AnimateOnScroll>

              {/* BENEFITS */}
              <AnimateOnScroll direction="right">
                <div className="rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-7 md:p-9">
                  <h2 className="font-heading text-heading-lg font-bold text-[var(--text-primary)]">
                    Why operators choose {mod.shortName}
                  </h2>
                  <ul className="mt-6 space-y-4">
                    {mod.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" strokeWidth={1.5} />
                        <span className="text-body-md text-[var(--text-secondary)]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </Container>
        </section>

        {/* ── INDUSTRY FIT ── */}
        {fits.length > 0 && (
          <section className="bg-[var(--bg-page)] py-20 md:py-28">
            <Container>
              <AnimateOnScroll className="mx-auto max-w-3xl text-center">
                <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  Industry fit
                </p>
                <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                  Which operations run {mod.shortName} today.
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3" delay={0.1}>
                {fits.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] px-5 py-2 font-heading text-body-sm font-medium text-[var(--text-secondary)]"
                  >
                    {f}
                  </span>
                ))}
              </AnimateOnScroll>
            </Container>
          </section>
        )}

        {/* ── OTHER MODULES ── */}
        <section className="bg-[var(--bg-canvas)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                The full platform
              </p>
              <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                {mod.shortName} is one of nine integrated modules.
              </h2>
            </AnimateOnScroll>

            <StaggerOnScroll className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" interval={0.06}>
              {otherModules.map((m) => (
                <AnimateOnScroll key={m.slug}>
                  <Link
                    href={`/platform/${m.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 transition-all hover:-translate-y-0.5 hover:border-amber-500/30 hover:shadow-brand"
                  >
                    <h3 className="font-heading text-heading-sm font-semibold text-[var(--text-primary)]">
                      {m.name}
                    </h3>
                    <p className="mt-2 flex-1 text-body-xs leading-relaxed text-[var(--text-secondary)]">
                      {m.shortDesc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 font-heading text-body-xs font-semibold text-[var(--text-brand)] transition-transform group-hover:translate-x-1">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </AnimateOnScroll>
              ))}
            </StaggerOnScroll>

            <AnimateOnScroll className="mt-8 text-center" delay={0.2}>
              <Button variant="ghost" asChild>
                <Link href="/platform">View all 9 modules</Link>
              </Button>
            </AnimateOnScroll>
          </Container>
        </section>

        <StrategicCta
          headline={`See ${mod.shortName} running live.`}
          subline={`A 30-minute demo with a specialist who has deployed ${mod.name} at properties like yours across the GCC.`}
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

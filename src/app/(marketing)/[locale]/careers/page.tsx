import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Zap, Globe2, HeartHandshake, Mail } from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { PageHero } from "@/components/marketing/page-hero"
import { StrategicCta } from "@/components/marketing/strategic-cta"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll, StaggerOnScroll } from "@/components/ui/animate-on-scroll"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Careers at Buzzin",
  description:
    "Join the team building the GCC\u2019s leading premises intelligence platform. Based at Dtec, Dubai Silicon Oasis.",
}

const values = [
  {
    icon: Zap,
    title: "Move fast with real accountability",
    desc: "We ship features that go live at Atlantis, Aldar, and 300+ organisations. Speed matters \u2014 and so does not breaking things. You own your work end-to-end.",
  },
  {
    icon: Globe2,
    title: "Build for the GCC, think globally",
    desc: "Arabic-first design, UAE regulatory depth, sovereign deployment options. We solve hard regional problems in ways that no global SaaS vendor bothers to. That is the advantage.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term thinking in everything",
    desc: "We sign multi-year exclusives with Aldar and Asteco because we build trust over time \u2014 internally and externally. We invest in people, not just sprints.",
  },
]

const openRoles = [
  {
    title: "Senior Full-Stack Engineer (Next.js / Node)",
    team: "Engineering",
    location: "Dubai \u00b7 Hybrid",
    type: "Full-time",
  },
  {
    title: "Product Designer (B2B SaaS)",
    team: "Design",
    location: "Dubai \u00b7 Hybrid",
    type: "Full-time",
  },
  {
    title: "Enterprise Account Executive \u2014 KSA",
    team: "Sales",
    location: "Riyadh \u00b7 On-site",
    type: "Full-time",
  },
  {
    title: "Customer Success Manager \u2014 Education",
    team: "Customer Success",
    location: "Dubai \u00b7 Hybrid",
    type: "Full-time",
  },
  {
    title: "Implementation Specialist",
    team: "Delivery",
    location: "Dubai \u00b7 Client-site travel required",
    type: "Full-time",
  },
]

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Careers"
          title="Help us build the GCC\u2019s premises intelligence platform."
          description="We are a tight team building enterprise software trusted at Atlantis, Aldar, Taaleem, and 300+ organisations. Based at Dtec, Dubai Silicon Oasis \u2014 we move fast, ship real products, and look after the people doing the work."
        />

        {/* ── VALUES ── */}
        <section className="bg-[var(--bg-page)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                How we work
              </p>
              <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                Three things that are true about working at Buzzin.
              </h2>
            </AnimateOnScroll>

            <StaggerOnScroll className="mt-14 grid gap-6 md:grid-cols-3" interval={0.08}>
              {values.map((v) => (
                <AnimateOnScroll
                  key={v.title}
                  className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-brand"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/20">
                    <v.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-heading text-heading-md font-semibold text-[var(--text-primary)]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-body-md leading-relaxed text-[var(--text-secondary)]">
                    {v.desc}
                  </p>
                </AnimateOnScroll>
              ))}
            </StaggerOnScroll>
          </Container>
        </section>

        {/* ── OPEN ROLES ── */}
        <section className="bg-[var(--bg-canvas)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Open roles
              </p>
              <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                Current openings.
              </h2>
            </AnimateOnScroll>

            <div className="mx-auto mt-12 max-w-3xl space-y-3">
              {openRoles.map((role, i) => (
                <AnimateOnScroll key={role.title} delay={i * 0.05}>
                  <a
                    href={`mailto:hello@buzzin.ae?subject=Application: ${encodeURIComponent(role.title)}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 transition-all duration-200 hover:border-amber-500/30 hover:-translate-y-0.5 hover:shadow-brand md:p-6"
                  >
                    <div>
                      <h3 className="font-heading text-heading-sm font-semibold text-[var(--text-primary)]">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-body-sm text-[var(--text-tertiary)]">
                        {role.team} · {role.location} · {role.type}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-amber-500 transition-transform group-hover:translate-x-1" />
                  </a>
                </AnimateOnScroll>
              ))}
            </div>
          </Container>
        </section>

        {/* ── SPECULATIVE CV ── */}
        <section className="bg-[var(--bg-page)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-2xl rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-10 text-center md:p-14">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/20">
                <Mail className="h-7 w-7" strokeWidth={1.5} />
              </span>
              <h2 className="mt-6 font-display text-display-md font-bold text-[var(--text-primary)]">
                Don&apos;t see your role? Send your CV anyway.
              </h2>
              <p className="mt-4 text-body-lg text-[var(--text-secondary)]">
                We hire for exceptional people ahead of the role. If you believe in building real enterprise software for the GCC and want to work alongside a team that has already scaled to 300+ organisations and 20M+ interactions \u2014 we want to hear from you.
              </p>
              <Button size="lg" className="mt-8" asChild>
                <a
                  href="mailto:hello@buzzin.ae?subject=Speculative Application"
                  className="flex items-center gap-2"
                >
                  Send your CV
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </AnimateOnScroll>
          </Container>
        </section>

        <StrategicCta
          headline="Build the platform the GCC relies on."
          subline="Questions about working at Buzzin? Email hello@buzzin.ae and we will reply within one business day."
          primaryLabel="Book a Demo"
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

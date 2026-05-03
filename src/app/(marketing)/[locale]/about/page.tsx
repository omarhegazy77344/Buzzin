import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, Mail, ArrowRight, Lightbulb, Users, Globe2, ShieldCheck } from "lucide-react"
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
  title: "About Buzzin",
  description:
    "Buzzin FZCO — the premises intelligence platform trusted by 300+ organisations across the GCC. Founded at Dtec, Dubai Silicon Oasis.",
}

const beliefs = [
  {
    icon: Lightbulb,
    title: "Premises intelligence is a business function, not an IT ticket",
    desc: "Security, reception, FM, and HR converge at the door. The platform that manages that moment creates competitive and compliance advantage \u2014 or costs you both.",
  },
  {
    icon: Users,
    title: "The best enterprise software makes people more effective, not just auditable",
    desc: "A guard completing their patrol round. A school administrator knowing every authorised guardian on pick-up day. A front-of-house team that never asks a VIP to wait. That is the measure of good premises software.",
  },
  {
    icon: Globe2,
    title: "GCC operators deserve software designed for the GCC",
    desc: "Not a global product translated into Arabic and sold as \u2018regional\u2019. UAE Pass, Emirates ID, KHDA compliance, dual-language UI, and data residency are table stakes \u2014 not premium add-ons.",
  },
  {
    icon: ShieldCheck,
    title: "Partnership does not end at deployment",
    desc: "On-site discovery before go-live. Over-the-air updates after. Quarterly strategic reviews. An SLA with a real phone number. We are still here when you are scaling to your 50th site.",
  },
]

const milestones = [
  { year: "2018", event: "Buzzin founded at Dtec, Dubai Silicon Oasis, UAE" },
  { year: "2020", event: "First enterprise hospitality deployment \u2014 Atlantis The Palm" },
  { year: "2021", event: "Expanded to education with Taaleem and Brighton College Abu Dhabi" },
  { year: "2022", event: "Signed exclusive multi-year agreement with Aldar Properties and Asteco" },
  { year: "2023", event: "Crossed 100 active organisations across UAE, KSA, and Lebanon" },
  { year: "2024", event: "Launched Queue Management, Booking, and Safeguarding modules" },
  { year: "2025", event: "Processed more events than all prior years combined \u2014 71\u00d7 YoY scale" },
  { year: "2026", event: "300+ organisations, 20M+ interactions, 9 integrated modules" },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About Buzzin"
          title="We\u00a0started because enterprise premises management was a problem nobody had properly\u00a0solved."
          description="Buzzin FZCO was founded at Dtec, Dubai Silicon Oasis \u2014 the UAE\u2019s leading technology free zone \u2014 with one goal: build the premises intelligence platform that enterprise GCC operators actually deserve. Not a global tool retrofitted. Not a paper process digitised. A platform built ground-up for how real UAE and GCC organisations operate."
        >
          <Button size="lg" asChild>
            <Link href="/book-demo" className="flex items-center gap-2">
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <Link href="/why-buzzin">Why Buzzin</Link>
          </Button>
        </PageHero>

        {/* ── STATS ── */}
        <section className="bg-[var(--bg-proof)] py-14 text-white md:py-16">
          <Container>
            <StaggerOnScroll className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
              {[
                { v: "2018", l: "Founded at Dtec, Dubai Silicon Oasis" },
                { v: "300+", l: "Active organisations across 5 countries" },
                { v: "20M+", l: "Secure interactions processed to date" },
                { v: "71\u00d7", l: "Year-on-year scale in 2025" },
              ].map((s) => (
                <AnimateOnScroll key={s.l} className="text-center" duration={0.5}>
                  <div className="font-display text-display-md leading-none text-amber-400 md:text-display-lg">
                    {s.v}
                  </div>
                  <p className="mt-2 text-body-sm text-gray-300">{s.l}</p>
                </AnimateOnScroll>
              ))}
            </StaggerOnScroll>
          </Container>
        </section>

        {/* ── WHAT WE BELIEVE ── */}
        <section className="bg-[var(--bg-page)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                What we believe
              </p>
              <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                Four principles that shaped every decision since 2018.
              </h2>
            </AnimateOnScroll>

            <StaggerOnScroll className="mt-14 grid gap-6 md:grid-cols-2" interval={0.08}>
              {beliefs.map((b) => (
                <AnimateOnScroll
                  key={b.title}
                  className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-brand"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/20">
                    <b.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-heading text-heading-md font-semibold text-[var(--text-primary)]">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-body-md leading-relaxed text-[var(--text-secondary)]">
                    {b.desc}
                  </p>
                </AnimateOnScroll>
              ))}
            </StaggerOnScroll>
          </Container>
        </section>

        {/* ── MILESTONES ── */}
        <section className="bg-[var(--bg-canvas)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Our journey
              </p>
              <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                From a single site in 2018 to 300+ organisations across the GCC.
              </h2>
            </AnimateOnScroll>

            <div className="mx-auto mt-14 max-w-2xl">
              <div className="relative border-l-2 border-[var(--border-brand)] pl-8">
                {milestones.map((m, i) => (
                  <AnimateOnScroll key={m.year} delay={i * 0.05} className="relative mb-8 last:mb-0">
                    <span className="absolute -left-[2.85rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[var(--border-brand)] bg-[var(--bg-surface)]" />
                    <span className="font-heading text-overline font-bold uppercase tracking-wider text-[var(--text-brand)]">
                      {m.year}
                    </span>
                    <p className="mt-1 text-body-md text-[var(--text-secondary)]">{m.event}</p>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ── CONTACT BLOCK ── */}
        <section className="bg-[var(--bg-page)] py-20 md:py-28">
          <Container>
            <AnimateOnScroll className="mx-auto max-w-3xl text-center">
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                Find us
              </p>
              <h2 className="font-display text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                Headquartered in Dubai Silicon Oasis, operating across the GCC.
              </h2>
            </AnimateOnScroll>

            <StaggerOnScroll className="mx-auto mt-10 grid max-w-2xl gap-4 md:grid-cols-3" interval={0.08}>
              <AnimateOnScroll className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 text-center">
                <MapPin className="h-5 w-5 text-amber-500" />
                <p className="text-body-sm text-[var(--text-secondary)]">Dtec, Dubai Silicon Oasis, Dubai, UAE</p>
              </AnimateOnScroll>
              <AnimateOnScroll className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 text-center">
                <Phone className="h-5 w-5 text-amber-500" />
                <a href="tel:+97143201265" className="text-body-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                  +971 4 320 1265
                </a>
              </AnimateOnScroll>
              <AnimateOnScroll className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 text-center">
                <Mail className="h-5 w-5 text-amber-500" />
                <a href="mailto:hello@buzzin.ae" className="text-body-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                  hello@buzzin.ae
                </a>
              </AnimateOnScroll>
            </StaggerOnScroll>
          </Container>
        </section>

        <StrategicCta
          headline="Ready to see Buzzin in your premises?"
          subline="30 minutes with a specialist who has deployed at properties like yours across the UAE."
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

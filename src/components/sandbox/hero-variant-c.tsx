"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Hexagon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { OrbitalCarousel } from "@/components/marketing/orbital-carousel"
import { type CarouselImage } from "@/lib/content-defaults"

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as const } },
}

const modules = [
  "Visitor Management",
  "Work Permits",
  "Queue Ops",
  "Events",
  "Attendance",
  "Booking",
  "Safeguarding",
  "Patrolling",
]

const liveNumbers = [
  { value: "20M+", unit: "secure interactions", suffix: "processed" },
  { value: "9", unit: "integrated modules", suffix: "one platform" },
  { value: "300+", unit: "organisations", suffix: "5 countries" },
]

type Props = { images: CarouselImage[] }

export function HeroVariantC({ images }: Props) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden [background:var(--bg-hero)]">
      <HexagonPattern className="text-amber-500/[0.14] dark:text-navy-300/[0.07]" />

      {/* Radial gradient anchor — asymmetric, top-left */}
      <div
        className="pointer-events-none absolute -left-[10%] -top-[15%] h-[70vh] w-[70vh] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(245,166,35,0.3) 0%, transparent 70%)" }}
      />

      <Container className="relative flex min-h-[90vh] items-center pt-20 pb-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* ── Left: future-forward message ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-8 lg:py-16"
          >
            {/* Module orbit label */}
            <motion.div variants={fadeUp} className="mb-5 flex items-center gap-2">
              <Hexagon className="h-3.5 w-3.5 text-amber-500" />
              <span className="font-heading text-overline font-semibold uppercase tracking-[0.14em] text-[var(--text-brand)]">
                9 Modules. One Intelligent Core.
              </span>
            </motion.div>

            {/* Systems-metaphor headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-display-md leading-[1.06] md:text-display-lg lg:text-display-xl text-[var(--text-primary)]"
            >
              The operating system for{" "}
              <span className="relative inline-block">
                <span className="relative z-10">premises intelligence</span>
                <span
                  className="absolute bottom-1 left-0 z-0 h-3 w-full bg-amber-500/15"
                  aria-hidden="true"
                />
              </span>
            </motion.h1>

            {/* Outcome sub-line */}
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-lg text-body-md text-[var(--text-secondary)] md:text-body-lg"
            >
              Every visitor, contractor, patrol round, and queue event{"\u00a0"}{"\u2014"}{" "}
              captured, verified, and auditable. Built for the enterprises
              that run UAE{"\u00a0"}&{"\u00a0"}GCC.
            </motion.p>

            {/* Module ticker row */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-2">
              {modules.map((mod) => (
                <span
                  key={mod}
                  className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)]/50 px-2.5 py-1 text-body-xs font-medium text-[var(--text-secondary)] backdrop-blur-sm"
                >
                  {mod}
                </span>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <Link href="/book-demo" className="gap-2">
                  Explore the Platform
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/book-demo">Book a Demo</Link>
              </Button>
            </motion.div>

            {/* Live data strip */}
            <motion.div
              variants={fadeUp}
              className="mt-9 grid grid-cols-3 gap-4"
            >
              {liveNumbers.map(({ value, unit, suffix }) => (
                <div key={unit} className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 px-4 py-3 backdrop-blur-sm">
                  <p className="font-display text-heading-lg text-[var(--text-brand)]">{value}</p>
                  <p className="text-body-xs font-medium text-[var(--text-secondary)]">{unit}</p>
                  <p className="text-body-xs text-[var(--text-muted)]">{suffix}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: orbital carousel ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="flex items-center justify-center"
          >
            <OrbitalCarousel images={images} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

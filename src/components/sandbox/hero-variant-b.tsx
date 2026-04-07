"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { OrbitalCarousel } from "@/components/marketing/orbital-carousel"
import { type CarouselImage } from "@/lib/content-defaults"

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } },
}

const stats = [
  { value: "300+", label: "Organisations" },
  { value: "5", label: "Countries" },
  { value: "20M+", label: "Interactions" },
]

type Props = { images: CarouselImage[] }

export function HeroVariantB({ images }: Props) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden [background:var(--bg-hero)]">
      <HexagonPattern className="text-amber-500/[0.08] dark:text-navy-300/[0.04]" />

      {/* Vertical accent line */}
      <div className="pointer-events-none absolute left-[7%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent lg:block" />

      <Container className="relative flex min-h-[90vh] items-center pt-20 pb-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: refined message ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-8 lg:py-20"
          >
            {/* Micro-label */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/5 px-3.5 py-1 text-body-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-brand)]">
                Premises Intelligence
              </span>
            </motion.div>

            {/* Headline — single powerful statement */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-display-md leading-[1.08] md:text-display-lg lg:text-[4rem] lg:leading-[1.06] text-[var(--text-primary)]"
            >
              Your premises.{" "}
              <br className="hidden md:block" />
              <span className="text-[var(--text-brand)]">Fully commanded.</span>
            </motion.h1>

            {/* Elegant sub-line */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-body-md leading-relaxed text-[var(--text-secondary)] md:text-body-lg"
            >
              The single platform for visitor management, contractor compliance,
              queue operations, and guard patrols{"\u00a0"}{"\u2014"}{" "}
              trusted by the GCC{"\u2019"}s most demanding enterprises.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <Link href="/book-demo" className="gap-2.5">
                  Request a Private Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <span className="text-body-sm text-[var(--text-muted)]">
                Tailored to your sector
              </span>
            </motion.div>

            {/* Quiet stat strip — proof without noise */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center gap-6 border-t border-[var(--border-subtle)] pt-6"
            >
              {stats.map(({ value, label }, i) => (
                <div key={label} className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="font-display text-heading-lg text-[var(--text-primary)]">{value}</p>
                    <p className="text-body-xs text-[var(--text-tertiary)]">{label}</p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="h-8 w-px bg-[var(--border-subtle)]" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Compliance whisper */}
            <motion.p variants={fadeUp} className="mt-5 text-body-xs text-[var(--text-muted)]">
              ISO 27001{" "}&bull;{" "}SOC 1/2/3{" "}&bull;{" "}UAE Pass{" "}&bull;{" "}On-Prem Available
            </motion.p>
          </motion.div>

          {/* ── Right: orbital carousel ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="flex items-center justify-center"
          >
            <OrbitalCarousel images={images} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

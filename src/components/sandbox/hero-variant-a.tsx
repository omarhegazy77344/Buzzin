"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Shield, Building2, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { OrbitalCarousel } from "@/components/marketing/orbital-carousel"
import { type CarouselImage } from "@/lib/content-defaults"

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as const } },
}

const proofChips = [
  { icon: Building2, label: "300+ Organisations" },
  { icon: Globe, label: "UAE, KSA, Lebanon" },
  { icon: Users, label: "20M+ Secure Interactions" },
  { icon: Shield, label: "ISO 27001 & SOC Aligned" },
]

const trustedNames = ["Atlantis", "Aldar", "Taaleem", "Fairmont", "DAMAC", "Kempinski"]

type Props = { images: CarouselImage[] }

export function HeroVariantA({ images }: Props) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden [background:var(--bg-hero)]">
      <HexagonPattern className="text-amber-500/[0.12] dark:text-navy-300/[0.06]" />

      <Container className="relative flex min-h-[90vh] items-center pt-20 pb-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* ── Left: message stack ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-8 lg:py-16"
          >
            {/* Authority overline */}
            <motion.div variants={fadeUp} className="mb-5 flex items-center gap-2.5">
              <span className="h-px w-8 bg-amber-500" />
              <span className="font-heading text-overline font-semibold uppercase tracking-[0.14em] text-[var(--text-brand)]">
                Enterprise Premises Intelligence
              </span>
            </motion.div>

            {/* Outcome-led headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-display-md leading-[1.08] md:text-display-lg lg:text-display-xl text-[var(--text-primary)]"
            >
              One platform to secure, manage, and audit every premises
              {" "}
              <span className="text-[var(--text-brand)]">across your portfolio</span>
            </motion.h1>

            {/* Operational subheadline */}
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-lg text-body-md text-[var(--text-secondary)] md:text-body-lg"
            >
              From visitor check-in to contractor permits, queue management to guard
              patrols{"\u00a0"}{"\u2014"} the command layer for serious operations
              in UAE{"\u00a0"}&{"\u00a0"}GCC.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <Link href="/book-demo" className="gap-2">
                  Book a Strategic Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="#overview">See the Platform</Link>
              </Button>
            </motion.div>

            {/* ── Proof rail ── */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {proofChips.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon className="h-3.5 w-3.5 text-amber-500/70" />
                  <span className="text-body-xs font-medium text-[var(--text-tertiary)]">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* ── Compact trust names ── */}
            <motion.div
              variants={fadeUp}
              className="mt-5 flex flex-wrap items-center gap-1.5"
            >
              <span className="text-body-xs text-[var(--text-muted)]">Trusted by</span>
              {trustedNames.map((name, i) => (
                <span key={name} className="text-body-xs font-semibold text-[var(--text-secondary)]">
                  {name}{i < trustedNames.length - 1 && <span className="ml-1.5 text-[var(--text-muted)]">/</span>}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: orbital carousel ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
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

"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Hexagon, Shield, Globe, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { OrbitalCarousel } from "@/components/marketing/orbital-carousel"
import { type CarouselImage } from "@/lib/content-defaults"
import { BRAND_EASE } from "@/lib/motion"

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
}

const heroHeadline = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: BRAND_EASE },
  },
}

const heroSub = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15, ease: BRAND_EASE },
  },
}

const heroCta = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.25, ease: BRAND_EASE },
  },
}

const heroFadeUpSoft = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: BRAND_EASE },
  },
}

/* ═══════════════════════════════════════
   PROOF DATA — surgical, non-redundant
   ═══════════════════════════════════════ */

const proofChips = [
  { icon: Shield, text: "ISO 27001 & SOC Aligned" },
  { icon: Globe, text: "UAE, KSA, Lebanon" },
  { icon: CheckCircle2, text: "Deployed in days, not months" },
]

type Props = { images: CarouselImage[] }

export function HeroVariantD({ images }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const glowOpacity = useTransform(scrollYProgress, [0, 0.4], [0.2, 0])
  const carouselY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden [background:var(--bg-hero)]"
    >
      <HexagonPattern className="text-amber-500/[0.12] dark:text-navy-300/[0.06]" />

      {/* Ambient glow — once:true to avoid distracting reverse flicker on a decorative bg layer */}
      <motion.div
        className="pointer-events-none absolute -left-[8%] -top-[8%] h-[60vh] w-[60vh] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(245,166,35,0.25) 0%, transparent 70%)",
          opacity: glowOpacity,
        }}
      />

      <Container className="relative pt-28 pb-12 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            variants={heroStagger}
            initial="hidden"
            {...(reduced ? { animate: "visible" } : { whileInView: "visible", viewport: { once: false, amount: 0.2 } })}
          >
            <motion.div variants={heroHeadline} className="mb-5 flex items-center justify-center gap-2">
              <Hexagon className="h-3.5 w-3.5 text-amber-500" />
              <span className="font-heading text-overline font-semibold uppercase tracking-[0.14em] text-[var(--text-brand)]">
                9 Modules. One Intelligent Core.
              </span>
            </motion.div>

            <motion.h1
              variants={heroHeadline}
              className="font-display text-display-md leading-[1.06] md:text-display-lg lg:text-[4.5rem] lg:leading-[1.04] text-[var(--text-primary)]"
            >
              The operating system for{" "}
              <span className="relative inline-block">
                <span className="relative z-10">premises intelligence</span>
                <motion.span
                  className="absolute bottom-1 left-0 z-0 h-3 w-full origin-left bg-amber-500/15"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: BRAND_EASE }}
                  aria-hidden="true"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={heroSub}
              className="mx-auto mt-6 max-w-2xl text-body-md text-[var(--text-secondary)] md:text-body-lg"
            >
              Every visitor, contractor, patrol round, and queue event{"\u00a0"}{"\u2014"}{" "}
              captured, verified, and auditable in real time.
              Built for the enterprises that run UAE{"\u00a0"}&{"\u00a0"}GCC.
            </motion.p>

            <motion.div
              variants={heroCta}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
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
          </motion.div>
        </div>

        <motion.div
          className="mt-10 flex items-center justify-center lg:mt-14"
          style={{ y: carouselY }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0, scale: 0.92 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, ease: BRAND_EASE },
            },
          }}
        >
          <OrbitalCarousel images={images} />
        </motion.div>

        <motion.div
          variants={heroStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mx-auto mt-12 max-w-3xl lg:mt-16"
        >
          <motion.div
            variants={heroFadeUpSoft}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {proofChips.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 px-3.5 py-1.5 backdrop-blur-sm"
              >
                <Icon className="h-3.5 w-3.5 text-amber-500/70" />
                <span className="text-body-xs font-medium text-[var(--text-secondary)]">{text}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={heroFadeUpSoft}
            className="mt-5 text-center text-body-xs text-[var(--text-muted)]"
          >
            Trusted by Atlantis, Aldar, Taaleem, Fairmont, DAMAC, Kempinski, and 300+ organisations
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}

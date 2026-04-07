"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { OrbitalCarousel } from "./orbital-carousel"
import { defaultHero, defaultHeroCarouselImages, type CarouselImage } from "@/lib/content-defaults"

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
}

type HeroProps = {
  images?: CarouselImage[]
  overline?: string
  headline?: string
  subheadline?: string
}

export function Hero({ images, overline, headline, subheadline }: HeroProps) {
  const carouselImages = images && images.length > 0 ? images : defaultHeroCarouselImages
  const content = {
    overline: overline || defaultHero.overline,
    headline: headline || defaultHero.headline,
    subheadline: subheadline || defaultHero.subheadline,
  }

  return (
    <section className="relative min-h-[90vh] overflow-hidden [background:var(--bg-hero)]">
      <HexagonPattern className="text-amber-500/[0.12] dark:text-navy-300/[0.06]" />

      <Container className="relative flex min-h-[90vh] items-center pt-16">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="py-12 text-center lg:py-24 lg:text-left"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]"
            >
              {content.overline}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-display-md md:text-display-lg lg:text-display-xl text-[var(--text-primary)]"
            >
              {content.headline}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-xl text-body-md text-[var(--text-secondary)] md:text-body-lg lg:mx-0"
            >
              {content.subheadline}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button size="lg" asChild>
                <Link href={defaultHero.primaryCtaHref}>{defaultHero.primaryCtaLabel}</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href={defaultHero.secondaryCtaHref} className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  {defaultHero.secondaryCtaLabel}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="flex items-center justify-center"
          >
            <OrbitalCarousel images={carouselImages} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

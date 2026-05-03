"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

type StrategicCtaProps = {
  eyebrow?: string
  headline?: string
  subline?: string
  primaryLabel?: string
  primaryHref?: string
}

export function StrategicCta({
  eyebrow = "Talk to a strategist",
  headline = "Book a Strategic Demo.",
  subline = "30 minutes with a Buzzin specialist who knows GCC operations. We respond to all demo requests within four business hours.",
  primaryLabel = "Book a Strategic Demo",
  primaryHref = "/book-demo",
}: StrategicCtaProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 to-amber-600 py-20 md:py-28">
      <HexagonPattern className="text-white/[0.08]" />

      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: BRAND_EASE }}
          className="mx-auto max-w-2xl"
        >
          <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-white/80">
            {eyebrow}
          </p>
          <h2 className="font-display text-display-md text-white md:text-display-lg">
            {headline}
          </h2>
          <p className="mt-4 text-body-lg text-white/85">{subline}</p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, delay: 0.2, ease: BRAND_EASE }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            >
              <Link href={primaryHref} className="flex items-center gap-2">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="whatsapp"
              asChild
              className="transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <a
                href="https://wa.me/97143201265?text=Hi%2C%20I%20visited%20buzzin.ae%20and%20would%20like%20to%20learn%20more%20about%20the%20platform."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, delay: 0.35, ease: BRAND_EASE }}
            className="mt-6 inline-flex items-center gap-2 font-heading text-body-md font-medium text-white/80"
          >
            <Phone className="h-4 w-4" />
            <a
              href="tel:+97143201265"
              className="underline underline-offset-4 hover:text-white"
            >
              +971 4 320 1265
            </a>
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { SectionBackground } from "@/components/ui/SectionBackground"
import { defaultCtaBanner } from "@/lib/content-defaults"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

type CtaBannerContent = typeof defaultCtaBanner & {
  phoneCalloutPrefix?: string
}

type CtaBannerProps = {
  content?: CtaBannerContent
}

export function CtaBanner({ content }: CtaBannerProps) {
  const d: CtaBannerContent = content ?? defaultCtaBanner

  return (
    <motion.section
      initial={{ opacity: 0.7, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.6, ease: BRAND_EASE }}
      className="relative overflow-hidden bg-gradient-to-br from-[#EBF5FB] via-white to-[#FDF6E8] py-20 md:py-24 dark:from-[#161B35] dark:via-[#0D1023] dark:to-[#1E2547]"
    >
      {/* Soft radial dot grid - replaces honeycomb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(30,37,71,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Layered amber gradient orbs for warmth */}
      <SectionBackground
        variant="light"
        hexGrid={false}
        gradientOrb={[
          { x: "20%", y: "30%", size: 380, color: "amber", opacity: 0.1 },
          { x: "85%", y: "70%", size: 300, color: "amber", opacity: 0.08 },
          { x: "50%", y: "50%", size: 280, color: "sky", opacity: 0.18 },
        ]}
      />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: BRAND_EASE }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="font-display text-display-md text-[var(--text-primary)] md:text-display-lg">
            {d.headline}
          </h2>
          <p className="mt-4 text-body-lg text-[var(--text-secondary)]">{d.subline}</p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, delay: 0.2, ease: BRAND_EASE }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" asChild className="transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(245,166,35,0.35)]">
              <Link href={d.primaryHref}>{d.primaryLabel}</Link>
            </Button>
            <Button size="lg" variant="whatsapp" asChild className="transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]">
              <Link href={d.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                {d.whatsappLabel}
              </Link>
            </Button>
          </motion.div>

          {d.phoneCalloutPrefix ? (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, delay: 0.35, ease: BRAND_EASE }}
              className="mt-6 text-center font-body text-[13px] text-[var(--text-secondary)]"
            >
              {d.phoneCalloutPrefix}{" "}
              <a
                href={`tel:${d.phone.replace(/\s/g, "")}`}
                className="font-heading text-[13px] font-bold text-[var(--text-primary)] hover:underline"
              >
                {d.phone}
              </a>
            </motion.p>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, delay: 0.35, ease: BRAND_EASE }}
              className="mt-6 font-heading text-body-md font-medium text-[var(--text-tertiary)]"
            >
              <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="underline underline-offset-4 hover:text-[var(--text-primary)]">
                {d.phone}
              </a>
            </motion.p>
          )}
        </motion.div>
      </Container>
    </motion.section>
  )
}

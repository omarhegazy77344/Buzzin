"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { defaultCtaBanner } from "@/lib/content-defaults"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

type CtaBannerProps = {
  content?: typeof defaultCtaBanner
}

export function CtaBanner({ content }: CtaBannerProps) {
  const d = content || defaultCtaBanner

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 to-amber-600 py-20 md:py-24">
      <HexagonPattern className="text-white/[0.08]" />

      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: BRAND_EASE }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="font-display text-display-md text-white md:text-display-lg">
            {d.headline}
          </h2>
          <p className="mt-4 text-body-lg text-white/80">{d.subline}</p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, delay: 0.2, ease: BRAND_EASE }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" variant="secondary" asChild className="transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]">
              <Link href={d.primaryHref}>{d.primaryLabel}</Link>
            </Button>
            <Button size="lg" variant="whatsapp" asChild className="transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]">
              <Link href={d.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                {d.whatsappLabel}
              </Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, delay: 0.35, ease: BRAND_EASE }}
            className="mt-6 font-heading text-body-md font-medium text-white/70"
          >
            <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="underline underline-offset-4 hover:text-white">
              {d.phone}
            </a>
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

const CLIENTS = [
  "Atlantis The Palm", "Aldar Properties", "Taaleem", "Fairmont", "Kempinski",
  "Brighton College UAE", "DAMAC", "Asteco", "GEMS Education", "Hyatt",
  "Rashid & Latifa", "Azizi", "Misk Schools KSA", "Central Park Towers DIFC",
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: BRAND_EASE },
  },
})

export function IndustriesHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-proof)] pt-28 pb-0 md:pt-36">
      <HexagonPattern className="text-white/[0.03]" />

      <Container className="relative z-[1]">
        <div className="mx-auto max-w-[760px] text-center">
          <motion.nav
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mb-5 font-body text-[12px] text-white/40"
          >
            <Link href="/en" className="hover:text-white/60">Home</Link>
            <span className="mx-1.5">/</span>
            <span>Industries</span>
          </motion.nav>

          <motion.p
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mb-5 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]"
          >
            Industries
          </motion.p>

          <motion.h1
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mb-5 font-display text-[2.5rem] leading-[1.1] tracking-[-0.03em] text-white md:text-[4rem]"
          >
            Configured for the way your industry really works.
          </motion.h1>

          <motion.p
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mx-auto mb-8 max-w-[620px] font-body text-[18px] font-light leading-[1.75] text-white/70"
          >
            Most premises software ships the same setup to every client.
            Buzzin doesn&apos;t. Compliance rules differ between hospitality and
            education, and so do day-to-day operations. We configure the
            platform around those realities, not the other way around.
          </motion.p>
        </div>
      </Container>

      {/* Marquee client strip */}
      <div className="mt-14 overflow-hidden border-t border-white/[0.08] py-4">
        <div
          className="flex animate-marquee whitespace-nowrap"
          style={{ "--marquee-duration": "35s" } as React.CSSProperties}
        >
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <span
              key={i}
              className="mx-2 inline-block rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 font-heading text-[11px] font-semibold text-white/60"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

const STATS = [
  { num: "10", label: "Modules" },
  { num: "20M+", label: "Interactions" },
  { num: "300+", label: "Organisations" },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: BRAND_EASE },
  },
})

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}

const staggerChild = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: BRAND_EASE },
  },
}

export function PlatformHero() {
  return (
    <section className="bg-[var(--bg-page)] pt-28 pb-16 md:pt-36 md:pb-20">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <motion.nav
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mb-5 font-body text-[12px] text-[var(--text-muted)]"
          >
            <Link href="/en" className="hover:text-[var(--text-secondary)]">Home</Link>
            <span className="mx-1.5">/</span>
            <span>Platform</span>
          </motion.nav>

          <motion.p
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mb-5 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]"
          >
            The Platform
          </motion.p>

          <motion.h1
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mb-5 font-display text-[2.5rem] leading-[1.1] tracking-[-0.03em] text-[var(--text-primary)] md:text-[4rem]"
          >
            10+ modules, one shared core. Everything&nbsp;connected.
          </motion.h1>

          <motion.p
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mx-auto mb-10 max-w-[600px] font-body text-[18px] font-light leading-[1.75] text-[var(--text-secondary)]"
          >
            Buzzin modules share one data layer, one dashboard, and one audit
            trail. A visitor checks in and the queue updates automatically. A
            permit lapses and the gate locks in real time. A child is collected
            and the safeguarding log records every detail. No copy-pasting
            between systems, no gaps.
          </motion.p>

          {/* Stat rail — large inline figures with dividers */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mx-auto flex max-w-[540px] items-center justify-center divide-x divide-[var(--border-default)] rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] py-6"
          >
            {STATS.map((s) => (
              <motion.div
                key={s.label}
                variants={staggerChild}
                className="flex flex-1 flex-col items-center gap-1 px-4"
              >
                <span className="font-heading text-[2.5rem] font-extrabold leading-none text-[var(--text-brand)] md:text-[3rem]">
                  {s.num}
                </span>
                <span className="font-body text-[12px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

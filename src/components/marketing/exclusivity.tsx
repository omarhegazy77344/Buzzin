"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { defaultExclusivity } from "@/lib/content-defaults"

type ExclusivityProps = {
  content?: typeof defaultExclusivity
}

export function Exclusivity({ content }: ExclusivityProps) {
  const d = content || defaultExclusivity

  return (
    <section className="relative overflow-hidden bg-[var(--bg-proof)] py-20 md:py-28">
      <HexagonPattern className="text-white/[0.06]" />

      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mx-auto max-w-4xl"
        >
          <p className="mb-4 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-amber-400">
            {d.overline}
          </p>

          <h2 className="font-display text-display-md text-white md:text-display-lg">
            {d.headline}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-gray-300">
            {d.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
            {d.partners.map((p) => (
              <span key={p} className="font-heading text-heading-lg font-bold text-white/90">{p}</span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-12 max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <p className="font-heading text-display-md font-bold text-amber-400">{d.growthMultiplier}</p>
            <p className="mt-1 text-body-sm text-gray-300">{d.growthLabel}</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

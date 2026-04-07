"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { defaultHowItWorks } from "@/lib/content-defaults"

type HowItWorksProps = {
  steps?: typeof defaultHowItWorks
}

export function HowItWorks({ steps }: HowItWorksProps) {
  const data = steps && steps.length > 0 ? steps : defaultHowItWorks

  return (
    <Section bg="page" spacing="lg">
      <SectionHeader overline="Getting Started" title="Simple to start. Powerful at scale." />

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 md:gap-8">
        {data.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8"
          >
            <span className="absolute -top-5 left-6 font-heading text-[4.5rem] font-bold leading-none text-[var(--border-subtle)] select-none">
              {step.number}
            </span>
            <h3 className="relative z-10 mt-4 font-heading text-heading-md font-semibold text-[var(--text-primary)]">
              {step.title}
            </h3>
            <p className="relative z-10 mt-3 text-body-sm text-[var(--text-secondary)]">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

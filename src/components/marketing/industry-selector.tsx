"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { cn } from "@/lib/cn"
import { defaultIndustries } from "@/lib/content-defaults"

type IndustrySelectorProps = {
  industries?: typeof defaultIndustries
}

type IndustrySelectorBlockProps = IndustrySelectorProps & {
  headerClassName?: string
  cardClassName?: string
  centered?: boolean
}

export function IndustrySelectorBlock({
  industries,
  headerClassName,
  cardClassName,
  centered,
}: IndustrySelectorBlockProps) {
  const data = industries && industries.length > 0 ? industries : defaultIndustries
  const [active, setActive] = useState(0)
  const current = data[active]

  return (
    <>
      <SectionHeader
        overline="Industries"
        title="Built around how your industry actually operates"
        description="Not a generic product configured for everyone."
        centered={centered}
        className={headerClassName}
      />
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {data.map((ind, i) => (
          <button
            key={ind.key}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full px-5 py-2 font-heading text-body-sm font-semibold transition-all duration-200",
              i === active
                ? "bg-amber-500 text-white shadow-brand"
                : "bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]",
            )}
          >
            {ind.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
          className={cn(
            "mx-auto max-w-4xl rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 md:p-12",
            cardClassName,
          )}
        >
          <p className="font-display text-heading-xl italic text-[var(--text-primary)] md:text-display-md">
            &ldquo;{current.problem}&rdquo;
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {current.modules.map((m) => (
              <span key={m} className="rounded-full bg-amber-500/10 px-3 py-1 text-body-sm font-medium text-[var(--text-brand)]">
                {m}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="text-body-sm text-[var(--text-muted)]">Trusted by:</span>
            {current.clients.map((c) => (
              <span key={c} className="font-heading text-body-sm font-semibold text-[var(--text-secondary)]">{c}</span>
            ))}
          </div>

          <Link
            href={current.href}
            className="mt-8 inline-flex items-center gap-2 font-heading text-body-md font-semibold text-[var(--text-brand)] transition-transform hover:translate-x-1"
          >
            See how it works for {current.label} <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export function IndustrySelector({ industries }: IndustrySelectorProps) {
  return (
    <Section bg="canvas" spacing="lg">
      <IndustrySelectorBlock industries={industries} />
    </Section>
  )
}

"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { defaultBeforeAfterRows } from "@/lib/content-defaults"
import { cn } from "@/lib/cn"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

type BeforeAfterProps = {
  rows?: typeof defaultBeforeAfterRows
}

type BeforeAfterBlockProps = BeforeAfterProps & {
  headerClassName?: string
  rowsClassName?: string
  centered?: boolean
}

export function BeforeAfterBlock({
  rows,
  headerClassName,
  rowsClassName,
  centered,
}: BeforeAfterBlockProps) {
  const data = rows && rows.length > 0 ? rows : defaultBeforeAfterRows

  return (
    <>
      <SectionHeader
        overline="The Transformation"
        title="Your premises is still running on paper. Here&#x2019;s what that&#x2019;s costing you."
        centered={centered}
        className={headerClassName}
      />

      <div className={cn("mx-auto max-w-5xl space-y-4", rowsClassName)}>
        {data.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.4, delay: i * 0.06, ease: BRAND_EASE }}
            className="grid gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 md:grid-cols-2 md:gap-6 md:p-6"
          >
            <div className="flex gap-3">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                <X className="h-3.5 w-3.5" />
              </div>
              <p className="text-body-sm text-[var(--text-tertiary)] line-through decoration-red-400/40">{row.before}</p>
            </div>
            <div className="flex gap-3">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <Check className="h-3.5 w-3.5" />
              </div>
              <p className="text-body-sm font-medium text-[var(--text-primary)]">{row.after}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export function BeforeAfter({ rows }: BeforeAfterProps) {
  return (
    <Section bg="canvas" spacing="lg">
      <BeforeAfterBlock rows={rows} />
    </Section>
  )
}

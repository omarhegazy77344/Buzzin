"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"
import { slideX, fadeUp } from "@/lib/motion"

const leftVariants = slideX("left", 24, 0.7, 0)
const rightVariants = fadeUp(20, 0.7, 0.15)
const trustRowVariants = fadeUp(16, 0.5)

export function BookDemoLayout({
  leftTop,
  trustRows,
  leftBottom,
  right,
}: {
  leftTop: ReactNode
  trustRows: { name: string; outcome: string; initial: string }[]
  leftBottom: ReactNode
  right: ReactNode
}) {
  return (
    <div className="grid gap-12 py-16 md:py-24 lg:grid-cols-[55fr_45fr] lg:gap-16 lg:items-start">
      <motion.div
        className="order-2 lg:order-1 lg:sticky lg:top-28"
        initial="hidden"
        animate="visible"
        variants={leftVariants}
      >
        {leftTop}

        <div className="mt-5 space-y-5">
          {trustRows.map((row, i) => (
            <motion.div
              key={row.name}
              className="flex items-start gap-4"
              initial="hidden"
              animate="visible"
              variants={trustRowVariants}
              custom={i}
              transition={{ delay: 0.4 + i * 0.08 }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--bg-surface-sunken)] border border-[var(--border-subtle)]">
                <span className="font-heading text-[11px] font-bold text-[var(--text-muted)]">
                  {row.initial}
                </span>
              </div>
              <div>
                <p className="font-heading text-[14px] font-semibold text-[var(--text-primary)]">
                  {row.name}
                </p>
                <p className="mt-0.5 font-body text-[13px] text-[var(--text-tertiary)]">
                  {row.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {leftBottom}
      </motion.div>

      <motion.div
        className="order-1 lg:order-2"
        initial="hidden"
        animate="visible"
        variants={rightVariants}
      >
        {right}
      </motion.div>
    </div>
  )
}

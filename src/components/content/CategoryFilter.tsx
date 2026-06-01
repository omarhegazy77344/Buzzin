"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/cn"

export type FilterOption = {
  value: string
  label: string
}

export function CategoryFilter({
  options,
  active,
  onChange,
}: {
  options: FilterOption[]
  active: string
  onChange: (value: string) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-wrap justify-center gap-3"
    >
      {options.map((opt) => {
        const isActive = opt.value === active
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={cn(
              "rounded-full border px-4 py-2 font-heading text-[12px] font-semibold transition-all duration-200",
              isActive
                ? "border-[var(--text-brand)] bg-[var(--text-brand)] text-[var(--text-primary)]"
                : "border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[rgba(245,166,35,0.4)]",
            )}
          >
            {opt.label}
          </button>
        )
      })}
    </motion.div>
  )
}

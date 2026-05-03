"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { BRAND_EASE } from "@/lib/motion"

type FaqItem = { q: string; a: string }

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-[var(--border-subtle)] rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[var(--bg-surface-raised)]"
            aria-expanded={open === i}
          >
            <span className="font-heading text-heading-sm font-semibold text-[var(--text-primary)]">
              {item.q}
            </span>
            <span className="shrink-0 text-amber-500">
              {open === i ? (
                <Minus className="h-4 w-4" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: BRAND_EASE }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-body-md leading-relaxed text-[var(--text-secondary)]">
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

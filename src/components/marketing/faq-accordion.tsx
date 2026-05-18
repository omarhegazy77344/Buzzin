"use client"

import { type ReactNode, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { BRAND_EASE } from "@/lib/motion"

type FaqItem = { q: string; a: ReactNode }

export function FaqAccordion({
  category,
  categoryId,
  items,
}: {
  category: string
  categoryId: string
  items: FaqItem[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div id={categoryId} className="scroll-mt-28">
      <p className="mb-4 border-b-2 border-amber-500/20 pb-3 font-heading text-[16px] font-bold text-[var(--text-primary)]">
        {category}
      </p>
      <div className="flex flex-col gap-2">
        {items.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className={`overflow-hidden rounded-[10px] border transition-colors duration-200 ${
                isOpen
                  ? "border-[rgba(245,166,35,0.3)] bg-amber-500/[0.02]"
                  : "border-[var(--border-default)] bg-[var(--bg-surface)]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left"
              >
                <span
                  className={`flex-1 pr-3 font-heading text-[14px] font-semibold transition-colors duration-200 ${
                    isOpen ? "text-[var(--text-brand)]" : "text-[var(--text-primary)]"
                  }`}
                >
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: BRAND_EASE }}
                >
                  <ChevronDown className="h-[18px] w-[18px] text-[var(--text-muted)]" strokeWidth={1.5} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: BRAND_EASE }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 font-body text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}

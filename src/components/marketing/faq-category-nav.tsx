"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

const categories = [
  { label: "Getting Started", id: "getting-started", count: 5 },
  { label: "Implementation", id: "implementation", count: 4 },
  { label: "Security & Data", id: "security-data", count: 5 },
  { label: "Integrations", id: "integrations", count: 4 },
  { label: "Support", id: "support", count: 3 },
  { label: "Pricing", id: "pricing", count: 3 },
]

export function FaqCategoryNav() {
  const [active, setActive] = useState("getting-started")

  function scrollTo(id: string) {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.5, ease: BRAND_EASE }}
      className="sticky top-24 rounded-[14px] border border-[var(--border-default)] bg-[var(--bg-surface)] p-5"
    >
      <p className="mb-3.5 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
        Categories
      </p>
      <div className="flex flex-col gap-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => scrollTo(cat.id)}
            className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-left transition-all duration-200 ${
              active === cat.id
                ? "bg-amber-500/[0.08] font-semibold text-[var(--text-primary)]"
                : "text-[var(--text-muted)] hover:bg-amber-500/[0.04]"
            }`}
          >
            <span className="font-body text-[14px]">{cat.label}</span>
            <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-2 py-0.5 font-heading text-[10px] font-semibold text-[var(--text-muted)]">
              {cat.count}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  )
}

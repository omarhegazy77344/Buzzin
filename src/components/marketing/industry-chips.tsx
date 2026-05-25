"use client"
import { motion } from "framer-motion"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

const chips = [
  { label: "Residential & Real Estate", id: "residential" },
  { label: "Hospitality",               id: "hospitality" },
  { label: "Education",                 id: "education"   },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: BRAND_EASE } },
}

export function IndustryChips() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="flex flex-wrap justify-center gap-3"
    >
      {chips.map((c) => (
        <motion.button
          key={c.id}
          variants={item}
          onClick={() => scrollTo(c.id)}
          className="cursor-pointer rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-4 py-2 font-heading text-[12px] font-semibold text-amber-700 transition-colors hover:bg-amber-500/[0.15]"
        >
          {c.label}
        </motion.button>
      ))}
    </motion.div>
  )
}

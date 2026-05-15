"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"
import { BRAND_EASE } from "@/lib/motion"

/* ─── Shared variants ─── */

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: BRAND_EASE } },
}

/* ─── HospitalityHero ─── */

export function HospitalityHero({
  left,
  right,
}: {
  left: ReactNode
  right: ReactNode
}) {
  return (
    <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="order-1"
      >
        {left}
      </motion.div>
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="order-2"
      >
        {right}
      </motion.div>
    </div>
  )
}

export function HeroBlock({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div variants={fadeUp} className={className}>{children}</motion.div>
}

/* ─── Section reveal wrappers ─── */

export function SectionReveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: BRAND_EASE }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGrid({
  children,
  className,
  interval = 0.1,
}: {
  children: ReactNode
  className?: string
  interval?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: interval } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: BRAND_EASE } },
      }}
    >
      {children}
    </motion.div>
  )
}

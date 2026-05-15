"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"
import { fadeUp, fadeUpScale, slideX, stagger } from "@/lib/motion"
import { VIEWPORT } from "@/lib/motion"

const heroVariants = fadeUp(24, 0.7)
const cardVariants = fadeUpScale(20, 0.97, 0.5)
const staggerContainer = stagger(0.1, 0.15)
const leftVariants = slideX("left", 24, 0.7)
const rightVariants = fadeUp(20, 0.7, 0.15)

export function ContactHeroAnimated({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={heroVariants}
    >
      {children}
    </motion.div>
  )
}

export function ContactCardsAnimated({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-6 md:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}

export function ContactCardItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={cardVariants} className={className}>
      {children}
    </motion.div>
  )
}

export function ContactAddressAnimated({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fadeUp(12, 0.5, 0.3)}
    >
      {children}
    </motion.div>
  )
}

export function ContactFormSection({
  left,
  right,
}: {
  left: ReactNode
  right: ReactNode
}) {
  return (
    <div className="grid grid-cols-1 gap-12 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={leftVariants}
      >
        {left}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={rightVariants}
      >
        {right}
      </motion.div>
    </div>
  )
}

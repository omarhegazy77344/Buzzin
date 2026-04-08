"use client"

import { type ReactNode } from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { cn } from "@/lib/cn"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

type Direction = "up" | "left" | "right" | "none"

type AnimateOnScrollProps = {
  children: ReactNode
  className?: string
  direction?: Direction
  delay?: number
  duration?: number
  amount?: number
  once?: boolean
  scale?: number
}

function buildVariants(direction: Direction, duration: number, delay: number, scale?: number): Variants {
  const hidden: Record<string, number> = { opacity: 0 }
  const visible: Record<string, number> = { opacity: 1 }

  switch (direction) {
    case "up":
      hidden.y = 30
      visible.y = 0
      break
    case "left":
      hidden.x = -20
      visible.x = 0
      break
    case "right":
      hidden.x = 20
      visible.x = 0
      break
  }

  if (scale !== undefined) {
    hidden.scale = scale
    visible.scale = 1
  }

  return {
    hidden,
    visible: { ...visible, transition: { duration, delay, ease: BRAND_EASE } },
  }
}

export function AnimateOnScroll({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  amount = VIEWPORT.amount,
  once = VIEWPORT.once,
  scale,
}: AnimateOnScrollProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={buildVariants(direction, duration, delay, scale)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  )
}

type StaggerOnScrollProps = {
  children: ReactNode
  className?: string
  interval?: number
  delay?: number
  amount?: number
  once?: boolean
}

export function StaggerOnScroll({
  children,
  className,
  interval = 0.08,
  delay = 0,
  amount = VIEWPORT.amount,
  once = VIEWPORT.once,
}: StaggerOnScrollProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: interval, delayChildren: delay } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  )
}

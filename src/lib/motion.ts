import { type Variants } from "framer-motion"

export const BRAND_EASE = [0.25, 0.1, 0.25, 1] as const

export const VIEWPORT = { once: false, amount: 0.2 } as const

export function fadeUp(y = 30, duration = 0.6, delay = 0): Variants {
  return {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { duration, delay, ease: BRAND_EASE } },
  }
}

export function fadeUpScale(y = 40, scale = 0.96, duration = 0.6, delay = 0): Variants {
  return {
    hidden: { opacity: 0, y, scale },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration, delay, ease: BRAND_EASE } },
  }
}

export function scaleIn(from = 0.75, duration = 0.5, delay = 0): Variants {
  return {
    hidden: { opacity: 0, scale: from },
    visible: { opacity: 1, scale: 1, transition: { duration, delay, ease: BRAND_EASE } },
  }
}

export function slideX(direction: "left" | "right", offset = 20, duration = 0.5, delay = 0): Variants {
  const x = direction === "left" ? -offset : offset
  return {
    hidden: { opacity: 0, x },
    visible: { opacity: 1, x: 0, transition: { duration, delay, ease: BRAND_EASE } },
  }
}

export function stagger(interval = 0.08, delay = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: interval, delayChildren: delay } },
  }
}

export const hexReveal: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: (ring: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: Math.min(ring * 0.08, 0.5),
      ease: BRAND_EASE,
    },
  }),
}

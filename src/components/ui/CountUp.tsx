"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/cn"

type CountUpProps = {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  underlineClassName?: string
  showUnderline?: boolean
  format?: (n: number) => string
}

export function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 1800,
  className,
  underlineClassName,
  showUnderline = true,
  format,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const reducedMotion = useReducedMotion()
  const [count, setCount] = useState(target)
  const [done, setDone] = useState(false)
  const hasFirstView = useRef(false)

  useEffect(() => {
    if (!isInView) {
      if (hasFirstView.current) {
        setCount(0)
        setDone(false)
      }
      return
    }

    hasFirstView.current = true

    if (reducedMotion) {
      setCount(target)
      setDone(true)
      return
    }

    let rafId: number
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      } else {
        setCount(target)
        setDone(true)
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [isInView, target, duration, reducedMotion])

  const display = format ? format(count) : `${prefix}${count}${suffix}`

  return (
    <span ref={ref} className={cn("relative inline-block", className)}>
      {display}
      {showUnderline && (
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: done ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className={cn(
            "absolute -bottom-1 left-0 block h-[2px] w-8 origin-left bg-amber-500",
            underlineClassName,
          )}
        />
      )}
    </span>
  )
}

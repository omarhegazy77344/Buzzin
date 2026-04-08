"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { defaultStats } from "@/lib/content-defaults"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const reduced = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (reduced) {
      setCount(target)
      return
    }

    if (!isInView) {
      setCount(0)
      return
    }

    const duration = 1400
    const steps = 50
    const increment = target / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(interval)
  }, [target, isInView, reduced])

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

type StatsBarProps = {
  stats?: typeof defaultStats
}

export function StatsBar({ stats }: StatsBarProps) {
  const data = stats && stats.length > 0 ? stats : defaultStats
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section className="bg-[var(--bg-proof)] py-16 md:py-20">
      <Container>
        <div ref={ref} className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {data.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, delay: i * 0.1, ease: BRAND_EASE }}
              className="text-center"
            >
              <div className="font-heading text-[2.5rem] font-bold leading-none text-white md:text-[3.5rem]">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: BRAND_EASE }}
                className="mx-auto mt-2 h-[3px] w-10 origin-left rounded-full bg-amber-500"
              />
              <p className="mt-3 text-body-sm text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

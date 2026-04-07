"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { defaultStats } from "@/lib/content-defaults"

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 1800
    const steps = 60
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
  }, [target])

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

  return (
    <section className="bg-[var(--bg-proof)] py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {data.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="text-center"
            >
              <div className="font-heading text-[2.5rem] font-bold leading-none text-white md:text-[3.5rem]">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mx-auto mt-2 h-[3px] w-10 rounded-full bg-amber-500" />
              <p className="mt-3 text-body-sm text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

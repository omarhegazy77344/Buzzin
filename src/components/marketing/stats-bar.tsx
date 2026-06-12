"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionBackground } from "@/components/ui/SectionBackground"
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

    const duration = 1800
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
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
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
    <section className="relative overflow-hidden bg-[var(--bg-proof)] py-16 md:py-20">
      <SectionBackground
        variant="dark"
        hexGrid
        floatingElements={[
          { type: "hexagon", size: 100, x: "94%", y: "30%", delay: 0, duration: 9, color: "white" },
          { type: "hexagon", size: 70, x: "3%", y: "70%", delay: 2, duration: 8, color: "amber" },
        ]}
        gradientOrb={{ x: "50%", y: "50%", size: 400, color: "amber", opacity: 0.03 }}
      />
      <Container className="relative z-10">
        <div ref={ref} className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {data.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, delay: i * 0.1, ease: BRAND_EASE }}
              className="rounded-2xl px-4 py-3 text-center transition-colors duration-200 hover:bg-white/[0.04]"
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

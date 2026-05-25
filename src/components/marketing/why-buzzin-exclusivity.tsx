"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

function AnimatedStat({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const reduced = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (reduced || !isInView) return

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

  const displayed = reduced ? target : count

  return (
    <span className="tabular-nums">
      {displayed}
      {suffix}
    </span>
  )
}

const barHeights = [8, 12, 16, 22, 48]
const proofDots = [
  "20M+ interactions processed",
  "4 countries",
  "81,085 permits in Q1 2026",
]

export function WhyBuzzinExclusivityBlock() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section className="relative overflow-hidden bg-[var(--bg-proof)] py-16 md:py-20">
      <HexagonPattern className="text-white/[0.04]" />

      <Container className="relative z-[1]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: BRAND_EASE }}
          className="mx-auto max-w-[780px] text-center"
        >
          <p className="mb-4 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-amber-400">
            The Proof
          </p>

          <h2 className="mb-5 font-display text-[2rem] leading-[1.2] tracking-[-0.02em] text-white md:text-[2.75rem]">
            The UAE&apos;s largest property developer chose one platform for their entire national portfolio. That kind of commitment goes beyond features. It comes down to trust.
          </h2>

          <p className="mx-auto mb-7 max-w-[620px] font-body text-[16px] font-light leading-[1.75] text-white/60">
            Aldar Properties selected Buzzin as their exclusive multi-year premises management partner across their entire UAE portfolio. In 2025, Buzzin processed more secure access events than in all previous years combined, exceeding them by more than 71 times.
          </p>

          <div className="mb-7 flex flex-wrap items-center justify-center gap-4">
            {["Aldar Properties", "Asteco"].map((name) => (
              <span
                key={name}
                className="rounded-lg border border-amber-500/35 px-6 py-2.5 font-heading text-[13px] font-bold uppercase tracking-wide text-amber-400 transition-colors hover:bg-amber-500/[0.08]"
              >
                {name}
              </span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, delay: 0.2, ease: BRAND_EASE }}
            className="mx-auto inline-flex items-center gap-16 rounded-[14px] border border-white/[0.08] bg-white/[0.05] px-8 py-5"
          >
            <div className="flex flex-col items-start">
              <p className="font-heading text-[48px] font-extrabold leading-none tracking-[-2px] text-[var(--text-brand)]">
                <AnimatedStat target={71} suffix={"\u00D7"} isInView={isInView} />
              </p>
              <div className="mt-2 flex items-end gap-2">
                {barHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: BRAND_EASE }}
                    style={{ width: 12, height: h, transformOrigin: "bottom" }}
                    className={
                      i === barHeights.length - 1
                        ? "rounded-t-[2px] bg-[var(--text-brand)]"
                        : "rounded-t-[2px] bg-amber-500/25"
                    }
                  />
                ))}
              </div>
            </div>

            <div className="text-left">
              <p className="mb-1 font-body text-[14px] font-semibold text-white/80">
                Growth in secure access events
              </p>
              <p className="font-body text-[13px] font-light text-white/45">2024 &rarr; 2025</p>
            </div>
          </motion.div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-8">
            {proofDots.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-[5px] w-[5px] rounded-full bg-[var(--text-brand)]" />
                <p className="font-body text-[13px] font-light text-white/50">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-5">
            <Link
              href="/en/industries/residential-real-estate"
              className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
            >
              See the full residential story &rarr;
            </Link>
          </p>
        </motion.div>
      </Container>
    </section>
  )
}

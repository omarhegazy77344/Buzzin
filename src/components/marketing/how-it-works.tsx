"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Rocket, Handshake, type LucideIcon } from "lucide-react"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section"
import { SectionBackground } from "@/components/ui/SectionBackground"
import { defaultHowItWorks } from "@/lib/content-defaults"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

type HowItWorksProps = {
  steps?: typeof defaultHowItWorks
}

const stepIcons: LucideIcon[] = [MapPin, Rocket, Handshake]

export function HowItWorks({ steps }: HowItWorksProps) {
  const data = steps && steps.length > 0 ? steps : defaultHowItWorks
  const lineRef = useRef<SVGPathElement>(null)
  const inViewRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(inViewRef, { once: false, amount: 0.3 })

  return (
    <section className="relative overflow-hidden bg-[var(--bg-page)] py-20 md:py-24">
      <SectionBackground
        variant="light"
        hexGrid
        floatingElements={[
          { type: "icon", icon: "Rocket", size: 18, x: "4%", y: "30%", delay: 0, duration: 9, color: "amber" },
          { type: "icon", icon: "CheckCircle", size: 16, x: "95%", y: "70%", delay: 2, duration: 8, color: "navy" },
          { type: "hexagon", size: 80, x: "92%", y: "20%", delay: 1, duration: 10, color: "amber" },
        ]}
      />

      <Container className="relative z-10">
        <SectionHeader
          overline="Getting Started"
          title="Your journey from first call to full&nbsp;operation."
        />

        <div ref={inViewRef} className="relative mx-auto max-w-4xl">
          {/* ── Dashed amber connecting line (desktop only) ── */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-[24px] hidden h-[1px] w-full md:block"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <motion.path
              ref={lineRef}
              d="M 8 0.5 L 92 0.5"
              fill="none"
              stroke="rgb(245 166 35)"
              strokeWidth="0.4"
              strokeDasharray="2 1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isInView ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </svg>

          <div className="flex flex-col gap-12 md:flex-row md:gap-0">
            {data.map((step, i) => {
              const isLast = i === data.length - 1
              const Icon = stepIcons[i % stepIcons.length]

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.55, delay: i * 0.15, ease: BRAND_EASE }}
                  className="group relative flex flex-1 gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
                >
                  {/* ── Milestone marker ── */}
                  <div className="relative z-10 flex shrink-0 items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--border-brand)] bg-[var(--bg-surface)] font-heading text-body-sm font-bold text-[var(--text-brand)] shadow-[var(--shadow-brand)] transition-transform duration-300 group-hover:scale-110">
                      {step.number}
                    </span>
                  </div>

                  {/* ── Mobile vertical connector ── */}
                  {!isLast && (
                    <div
                      aria-hidden
                      className="absolute left-6 top-14 h-[calc(100%+48px-56px)] w-px -translate-x-1/2 bg-gradient-to-b from-[var(--border-brand)] to-[var(--border-brand)]/30 md:hidden"
                    />
                  )}

                  {/* ── Step content ── */}
                  <div className="flex-1 pt-0.5 md:mt-6 md:px-3">
                    <div className="mb-3 flex items-center gap-2 md:justify-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 transition-colors duration-300 group-hover:bg-amber-500/20">
                        <Icon
                          className="h-5 w-5 text-[var(--text-primary)] transition-colors duration-300 group-hover:text-amber-600 dark:text-amber-400 dark:group-hover:text-amber-300"
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                    <h3 className="font-heading text-heading-md font-semibold text-[var(--text-primary)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-body-sm leading-relaxed text-[var(--text-secondary)]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

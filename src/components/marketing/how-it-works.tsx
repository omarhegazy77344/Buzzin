"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { defaultHowItWorks } from "@/lib/content-defaults"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

type HowItWorksProps = {
  steps?: typeof defaultHowItWorks
}

export function HowItWorks({ steps }: HowItWorksProps) {
  const data = steps && steps.length > 0 ? steps : defaultHowItWorks

  return (
    <Section bg="page" spacing="lg">
      <SectionHeader
        overline="Getting Started"
        title="Your journey from first call to full&nbsp;operation."
      />

      <div className="relative mx-auto max-w-4xl">
        {/* ── Connecting path (desktop: horizontal, mobile: vertical) ── */}
        <div
          aria-hidden
          className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[var(--border-brand)] via-[var(--border-brand)] to-transparent md:left-0 md:right-0 md:top-[27px] md:bottom-auto md:mx-[calc(100%/6)] md:h-px md:w-auto"
        />

        <div className="flex flex-col gap-12 md:flex-row md:gap-0">
          {data.map((step, i) => {
            const isLast = i === data.length - 1

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

                {/* ── Desktop connector arrow ── */}
                {!isLast && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-[27px] hidden h-px w-full -translate-y-1/2 md:block"
                    style={{ left: "calc(50% + 28px)", width: "calc(100% - 56px)" }}
                  >
                    <div className="h-full w-full bg-[var(--border-brand)]" />
                    <div className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-[var(--border-brand)]" />
                  </div>
                )}

                {/* ── Mobile vertical connector ── */}
                {!isLast && (
                  <div
                    aria-hidden
                    className="absolute left-6 top-14 h-[calc(100%+48px-56px)] w-px -translate-x-1/2 bg-gradient-to-b from-[var(--border-brand)] to-[var(--border-brand)]/30 md:hidden"
                  />
                )}

                {/* ── Step content ── */}
                <div className="flex-1 pt-0.5 md:mt-6 md:px-3">
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
    </Section>
  )
}

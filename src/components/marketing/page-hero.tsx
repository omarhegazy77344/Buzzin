"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { HexagonPattern } from "@/components/ui/hexagon-pattern"
import { cn } from "@/lib/cn"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "center" | "left"
  className?: string
  children?: React.ReactNode
}

export function PageHero({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  children,
}: PageHeroProps) {
  const isCenter = align === "center"

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] pt-32 pb-20 md:pt-40 md:pb-28",
        className,
      )}
    >
      <HexagonPattern className="text-[var(--text-brand)]/[0.05]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <Container className="relative">
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: VIEWPORT.once, amount: 0.3 }}
          className={cn(
            "max-w-3xl",
            isCenter ? "mx-auto text-center" : "text-left",
          )}
        >
          {eyebrow && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: BRAND_EASE },
                },
              }}
              className="mb-4 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: BRAND_EASE },
              },
            }}
            className="font-display text-display-lg font-bold leading-[1.05] text-[var(--text-primary)] md:text-display-xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: BRAND_EASE },
                },
              }}
              className="mt-5 text-body-lg text-[var(--text-secondary)] md:text-body-lg"
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: BRAND_EASE },
                },
              }}
              className={cn("mt-8", isCenter && "flex flex-wrap justify-center gap-3")}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}

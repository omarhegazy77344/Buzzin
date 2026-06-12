"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"
import {
  UserX,
  UserCheck,
  FileWarning,
  QrCode,
  ClipboardX,
  Wifi,
  AlertTriangle,
  ListChecks,
  FolderSearch,
  Download,
  PhoneOff,
  CalendarCheck,
  ArrowRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import { Container } from "@/components/ui/container"
import { SectionBackground } from "@/components/ui/SectionBackground"
import { defaultBeforeAfterRows } from "@/lib/content-defaults"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

type TransformationShowcaseProps = {
  rows?: typeof defaultBeforeAfterRows
  overline?: string
  title?: ReactNode
  subtitle?: ReactNode | null
}

const defaultTitle = (
  <>
    Your premises is still running on paper.
    <br />
    <span className="text-white/60">Here&rsquo;s what that&rsquo;s costing you.</span>
  </>
)

const defaultSubtitle =
  "Six everyday operations. Six paper-based gaps replaced with verified, audit-ready digital workflows."

const rowIcons: { before: LucideIcon; after: LucideIcon }[] = [
  { before: UserX, after: UserCheck },
  { before: FileWarning, after: QrCode },
  { before: ClipboardX, after: Wifi },
  { before: AlertTriangle, after: ListChecks },
  { before: FolderSearch, after: Download },
  { before: PhoneOff, after: CalendarCheck },
]

export function TransformationShowcase({
  rows,
  overline = "The Transformation",
  title = defaultTitle,
  subtitle = defaultSubtitle,
}: TransformationShowcaseProps) {
  const data = rows && rows.length > 0 ? rows : defaultBeforeAfterRows

  return (
    <section className="relative overflow-hidden bg-[var(--bg-proof)] py-20 md:py-24">
      <SectionBackground
        variant="dark"
        hexGrid
        floatingElements={[
          { type: "hexagon", size: 110, x: "4%", y: "20%", delay: 0, duration: 9, color: "white" },
          { type: "hexagon", size: 80, x: "94%", y: "70%", delay: 3, duration: 8, color: "amber" },
          { type: "hexagon", size: 60, x: "92%", y: "18%", delay: 5, duration: 10, color: "white" },
          { type: "hexagon", size: 90, x: "6%", y: "78%", delay: 1.5, duration: 9, color: "amber" },
        ]}
        gradientOrb={[
          { x: "50%", y: "20%", size: 360, color: "amber", opacity: 0.06 },
          { x: "50%", y: "85%", size: 280, color: "amber", opacity: 0.04 },
        ]}
      />

      <Container className="relative z-10">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: BRAND_EASE }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span className="font-heading text-overline font-semibold uppercase tracking-[0.14em] text-amber-300">
              {overline}
            </span>
          </div>
          <h2 className="font-display text-display-md leading-[1.08] text-white md:text-display-lg">
            {title}
          </h2>
          {subtitle ? (
            <p className="mx-auto mt-5 max-w-2xl font-body text-body-md text-white/55">
              {subtitle}
            </p>
          ) : null}
        </motion.div>

        {/* ─── Column header bars ─── */}
        <div className="mx-auto hidden max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-6 md:grid">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, ease: BRAND_EASE }}
            className="flex items-center justify-center rounded-xl border border-red-500/20 bg-red-500/5 px-5 py-3"
          >
            <span className="font-heading text-[12px] font-bold uppercase tracking-[0.16em] text-red-300/80">
              Before Buzzin
            </span>
          </motion.div>

          <div aria-hidden="true" className="h-6 w-12" />

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, ease: BRAND_EASE }}
            className="flex items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/5 px-5 py-3"
          >
            <span className="font-heading text-[12px] font-bold uppercase tracking-[0.16em] text-emerald-300">
              With Buzzin
            </span>
          </motion.div>
        </div>

        {/* ─── Center glowing divider ─── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[18rem] hidden h-[42rem] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-amber-400/40 to-transparent md:block"
        />

        {/* ─── Rows ─── */}
        <div className="mx-auto mt-6 max-w-6xl space-y-4">
          {data.map((row, i) => {
            const icons = rowIcons[i % rowIcons.length]
            const BeforeIcon = icons.before
            const AfterIcon = icons.after
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: i * 0.12,
                    },
                  },
                }}
                className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-6"
              >
                {/* BEFORE card */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -24 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, ease: BRAND_EASE },
                    },
                  }}
                  className="group flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-400/25 hover:bg-red-500/[0.04]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-red-400/20 bg-red-500/10 text-red-300">
                    <BeforeIcon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <p className="text-body-sm leading-relaxed text-white/45 line-through decoration-red-400/30 decoration-2">
                    {row.before}
                  </p>
                </motion.div>

                {/* CENTER ARROW */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.4, delay: 0.1, ease: BRAND_EASE },
                    },
                  }}
                  aria-hidden="true"
                  className="relative hidden h-full items-center justify-center md:flex"
                >
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 shadow-[0_0_24px_rgba(245,166,35,0.5)]">
                    <ArrowRight className="h-4 w-4 text-navy-900" strokeWidth={2.5} />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-amber-400/40 blur-md"
                    />
                  </div>
                </motion.div>

                {/* AFTER card */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, ease: BRAND_EASE },
                    },
                  }}
                  className="group flex items-start gap-4 rounded-xl border border-emerald-400/15 bg-gradient-to-br from-emerald-500/[0.06] to-transparent p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/35 hover:shadow-[0_8px_32px_rgba(16,185,129,0.12)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-500/15 text-emerald-300">
                    <AfterIcon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <p className="text-body-sm font-medium leading-relaxed text-white">
                    {row.after}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

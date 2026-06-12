"use client"

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
  type LucideIcon,
} from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { defaultBeforeAfterRows } from "@/lib/content-defaults"
import { cn } from "@/lib/cn"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

type BeforeAfterProps = {
  rows?: typeof defaultBeforeAfterRows
}

type BeforeAfterBlockProps = BeforeAfterProps & {
  headerClassName?: string
  rowsClassName?: string
  centered?: boolean
}

const rowIcons: { before: LucideIcon; after: LucideIcon }[] = [
  { before: UserX, after: UserCheck },
  { before: FileWarning, after: QrCode },
  { before: ClipboardX, after: Wifi },
  { before: AlertTriangle, after: ListChecks },
  { before: FolderSearch, after: Download },
  { before: PhoneOff, after: CalendarCheck },
]

export function BeforeAfterBlock({
  rows,
  headerClassName,
  rowsClassName,
  centered,
}: BeforeAfterBlockProps) {
  const data = rows && rows.length > 0 ? rows : defaultBeforeAfterRows

  return (
    <>
      <SectionHeader
        overline="The Transformation"
        title="Your premises is still running on paper. Here&#x2019;s what that&#x2019;s costing you."
        centered={centered}
        className={headerClassName}
      />

      <div className={cn("mx-auto max-w-5xl space-y-4", rowsClassName)}>
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
              className="relative grid gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-lg md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:p-6"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: BRAND_EASE } },
                }}
                className="flex gap-3"
              >
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  <BeforeIcon className="h-4 w-4" strokeWidth={2} />
                </div>
                <p className="text-body-sm text-[var(--text-tertiary)] line-through decoration-red-400/40">
                  {row.before}
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.2, ease: BRAND_EASE } },
                }}
                aria-hidden="true"
                className="hidden h-6 w-6 items-center justify-center rounded-full bg-amber-500/15 text-amber-600 md:flex dark:text-amber-400"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: BRAND_EASE } },
                }}
                className="flex gap-3"
              >
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <AfterIcon className="h-4 w-4" strokeWidth={2} />
                </div>
                <p className="text-body-sm font-medium text-[var(--text-primary)]">
                  {row.after}
                </p>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </>
  )
}

export function BeforeAfter({ rows }: BeforeAfterProps) {
  return (
    <Section bg="canvas" spacing="lg">
      <BeforeAfterBlock rows={rows} />
    </Section>
  )
}

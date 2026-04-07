"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { Star } from "lucide-react"
import { cn } from "@/lib/cn"
import { defaultModules, type PlatformModule } from "@/lib/content-defaults"

/* ═══════════════════════════════════════
   AXIAL HEX GRID — radius-2 (19 cells)
   ═══════════════════════════════════════ */

const S3 = 1.7320508
const S3H = 0.8660254
const HEX_CLIP = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
const RADIUS = 2
const GRID_W = 3 * RADIUS + 2
const GRID_H = +(S3 * (2 * RADIUS + 1)).toFixed(4)

type HexCell = { q: number; r: number; ring: number; mod: PlatformModule | null }

function buildCluster(): { q: number; r: number; ring: number }[] {
  const cells: { q: number; r: number; ring: number }[] = []
  for (let q = -RADIUS; q <= RADIUS; q++) {
    for (let r = Math.max(-RADIUS, -q - RADIUS); r <= Math.min(RADIUS, -q + RADIUS); r++) {
      const ring = (Math.abs(q) + Math.abs(r) + Math.abs(-q - r)) / 2
      cells.push({ q, r, ring })
    }
  }
  return cells
}

const CLUSTER = buildCluster()

function placeModules(modules: PlatformModule[]): HexCell[] {
  const cells: HexCell[] = CLUSTER.map((c) => ({ ...c, mod: null }))
  const sorted = [...cells].sort((a, b) => a.ring - b.ring)
  modules.forEach((mod, i) => {
    if (i < sorted.length) sorted[i].mod = mod
  })
  return cells
}

/* ═══════════════════════════════════════
   ANIMATIONS
   ═══════════════════════════════════════ */

const cellReveal = {
  hidden: { opacity: 0, scale: 0.84 },
  visible: (ring: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: Math.min(ring * 0.09, 0.5),
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
}

const LINE_TEXTURE =
  "repeating-linear-gradient(40deg, transparent 0 5px, currentColor 5px 5.35px)"

/* ═══════════════════════════════════════
   BADGE COMPONENTS
   ═══════════════════════════════════════ */

function StarBadge({ hovered }: { hovered: boolean }) {
  return (
    <div className="absolute top-[12%] left-1/2 z-20 flex -translate-x-1/2 items-center gap-[3px]">
      <Star
        className="h-[clamp(8px,10%,14px)] w-[clamp(8px,10%,14px)] shrink-0 fill-amber-400 text-amber-400 dark:fill-amber-500 dark:text-amber-500"
        strokeWidth={1.5}
      />
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden whitespace-nowrap text-[0.42rem] font-semibold leading-none text-amber-500 dark:text-amber-400 sm:text-[0.48rem]"
          >
            Most Popular
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}

function GreenDotBadge({ hovered }: { hovered: boolean }) {
  /* Dot always mounted: fades out only while hovered when label shows; returns to full opacity when idle */
  return (
    <div className="pointer-events-none absolute top-[12%] left-1/2 z-20 -translate-x-1/2">
      <div className="relative h-5 w-[7.25rem] max-w-[92%]">
        <motion.span
          aria-hidden={hovered}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 dark:bg-emerald-500"
          style={{ width: 6, height: 6 }}
          initial={false}
          animate={{
            opacity: hovered ? 0 : 1,
            scale: hovered ? 0.5 : 1,
          }}
          transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <motion.span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-emerald-400/15 px-1.5 py-[1px] text-center text-[0.42rem] font-semibold leading-none text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 sm:text-[0.48rem]"
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            scale: hovered ? 1 : 0.96,
          }}
          transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Newly Released
        </motion.span>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════
   HEX TILE — module variant
   ═══════════════════════════════════════ */

function ModuleHexTile({ cell }: { cell: HexCell }) {
  const mod = cell.mod
  const isLive = mod !== null && mod.status !== "comingSoon"
  const isComingSoon = mod !== null && mod.status === "comingSoon"
  const isEmpty = mod === null
  const [hovered, setHovered] = useState(false)

  const contentClass = cn(
    "relative z-10 flex h-full w-full flex-col items-center justify-center px-[12%] py-[16%]",
    isLive && "cursor-pointer",
    isComingSoon && "cursor-default opacity-40",
  )

  const nameEl = mod && (
    <span
      className={cn(
        "text-center font-heading text-[0.65rem] font-semibold leading-tight sm:text-[0.72rem] md:text-[0.8rem] lg:text-[0.88rem]",
        isLive && "text-[var(--text-primary)] group-hover:text-[var(--text-brand)]",
        isComingSoon && "text-[var(--text-muted)]",
      )}
    >
      {mod.shortName}
    </span>
  )

  const descEl = mod && (
    <span
      className={cn(
        "mt-0.5 text-center text-[0.5rem] leading-tight sm:text-[0.55rem] md:text-[0.6rem]",
        isLive && "text-[var(--text-tertiary)]",
        isComingSoon && "text-[var(--text-muted)]",
      )}
    >
      {isComingSoon ? "Coming soon" : mod.shortDesc}
    </span>
  )

  return (
    <motion.div
      variants={cellReveal}
      custom={cell.ring}
      className={cn("relative h-full w-full", isLive && "group")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Wall rim */}
      <div
        className={cn(
          "absolute inset-0 transition-colors duration-300",
          isEmpty && "bg-amber-200/[.06] dark:bg-amber-800/[.04]",
          isLive && "bg-amber-300/[.15] group-hover:bg-amber-400/[.45] dark:bg-amber-600/10 dark:group-hover:bg-amber-500/30",
          isComingSoon && "bg-slate-300/[.10] dark:bg-slate-600/[.06]",
        )}
        style={{ clipPath: HEX_CLIP }}
      />

      {/* Fill */}
      <div
        className={cn(
          "absolute inset-[1px]",
          isEmpty && "bg-[#f9f5ee] dark:bg-[#11152a]",
          isLive && "bg-white dark:bg-[#151a34]",
          isComingSoon && "bg-slate-50/80 dark:bg-slate-900/40",
        )}
        style={{ clipPath: HEX_CLIP }}
      />

      {/* Texture — neutral diagonal lines */}
      <div
        className={cn(
          "pointer-events-none absolute inset-[1px]",
          isEmpty
            ? "text-black/[.015] dark:text-white/[.02]"
            : isComingSoon
              ? "text-slate-400/[.025] dark:text-slate-500/[.03]"
              : "text-black/[.03] dark:text-white/[.035]",
        )}
        style={{ clipPath: HEX_CLIP, backgroundImage: LINE_TEXTURE }}
      />

      {/* Texture — amber lines on hover (live tiles only) */}
      {isLive && (
        <div
          className="pointer-events-none absolute inset-[1px] text-amber-500/[.10] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ clipPath: HEX_CLIP, backgroundImage: LINE_TEXTURE }}
        />
      )}

      {/* Badges */}
      {mod?.badge === "star" && <StarBadge hovered={hovered} />}
      {mod?.badge === "greenDot" && <GreenDotBadge hovered={hovered} />}

      {/* Content */}
      {mod && isLive && (
        <Link href={`/platform/${mod.slug}`} className={contentClass}>
          {nameEl}
          {descEl}
        </Link>
      )}
      {mod && !isLive && (
        <div className={contentClass}>
          {nameEl}
          {descEl}
        </div>
      )}
    </motion.div>
  )
}

/* ═══════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════ */

type PlatformOverviewProps = {
  modules?: PlatformModule[]
}

export function PlatformOverview({ modules }: PlatformOverviewProps) {
  const data = modules && modules.length > 0 ? modules : defaultModules
  const grid = placeModules(data)

  return (
    <section
      className="relative overflow-hidden py-16 pb-24 md:py-24 md:pb-36 bg-[#faf5ec] dark:bg-[#0e1126]"
      id="overview"
    >
      {/* Shared container — header and hive both center within the same padded box */}
      <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 max-w-3xl text-center md:mb-8"
        >
          <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.08em] text-[var(--text-brand)]">
            The Platform
          </p>
          <h2 className="font-heading text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
            One platform. Seven integrated modules. Zero&nbsp;silos.
          </h2>
          <p className="mt-4 text-body-lg text-[var(--text-secondary)]">
            Every module shares the same data, dashboard, and subscription.
            When a visitor arrives, the queue system knows. When a permit expires, the gate&nbsp;knows.
          </p>
        </motion.div>

        <div
          className="hex-grid hex-grid-platform relative mx-auto"
          style={{
            width: `calc(var(--hex-s) * ${GRID_W})`,
            height: `calc(var(--hex-s) * ${GRID_H})`,
            transform: "translate(-36px, -24px)",
          }}
        >
          {grid.map((cell) => {
            const cx = (1.5 * cell.q).toFixed(4)
            const cy = (S3 * cell.r + S3H * cell.q).toFixed(4)
            return (
              <motion.div
                key={`${cell.q},${cell.r}`}
                variants={cellReveal}
                custom={cell.ring}
                initial="hidden"
                animate="visible"
                className={cn(
                  "hex-cell-wrapper absolute",
                  cell.mod && cell.mod.status !== "comingSoon" && "hex-cell-module",
                )}
                style={{
                  left: `calc(50% + var(--hex-s) * ${cx})`,
                  top: `calc(50% + var(--hex-s) * ${cy})`,
                  width: "calc(var(--hex-s) * 2)",
                  height: `calc(var(--hex-s) * ${S3.toFixed(4)})`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <ModuleHexTile cell={cell} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

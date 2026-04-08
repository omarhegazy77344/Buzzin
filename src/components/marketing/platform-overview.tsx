"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useMemo, useState, useCallback, useRef } from "react"
import { Star, X, ChevronRight, Clock } from "lucide-react"
import { cn } from "@/lib/cn"
import { defaultModules, type PlatformModule } from "@/lib/content-defaults"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

/* ═══════════════════════════════════════
   AXIAL HEX GRID — radius-2 (19 cells)
   ═══════════════════════════════════════ */

const S3 = 1.7320508
const S3H = 0.8660254
const HEX_CLIP = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
const RADIUS = 2

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
  hidden: { opacity: 0, scale: 0.75 },
  visible: (ring: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: Math.min(ring * 0.08, 0.5),
      ease: BRAND_EASE,
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
    <div className="absolute top-[10%] left-1/2 z-20 flex -translate-x-1/2 items-center gap-1">
      <Star
        className="h-[clamp(10px,12%,18px)] w-[clamp(10px,12%,18px)] shrink-0 fill-amber-400 text-amber-400 dark:fill-amber-500 dark:text-amber-500"
        strokeWidth={1.5}
      />
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: BRAND_EASE }}
            className="overflow-hidden whitespace-nowrap text-[0.55rem] font-semibold leading-none text-amber-500 dark:text-amber-400 sm:text-[0.62rem]"
          >
            Most Popular
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}

function GreenDotBadge({ hovered }: { hovered: boolean }) {
  return (
    <div className="pointer-events-none absolute top-[10%] left-1/2 z-20 -translate-x-1/2">
      <div className="relative h-6 w-[8.5rem] max-w-[92%]">
        <motion.span
          aria-hidden={hovered}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 dark:bg-emerald-500"
          style={{ width: 8, height: 8 }}
          initial={false}
          animate={{ opacity: hovered ? 0 : 1, scale: hovered ? 0.5 : 1 }}
          transition={{ duration: 0.22, ease: BRAND_EASE }}
        />
        <motion.span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-emerald-400/15 px-2.5 py-[3px] text-center text-[0.65rem] font-semibold leading-none text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 sm:text-xs"
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.96 }}
          transition={{ duration: 0.22, ease: BRAND_EASE }}
        >
          Newly Released
        </motion.span>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════
   STATUS PILL (for expanded view)
   ═══════════════════════════════════════ */

function StatusPill({ status }: { status: PlatformModule["status"] }) {
  if (status === "comingSoon") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-500/10 px-3 py-1 text-xs font-semibold text-slate-500 dark:bg-slate-400/10 dark:text-slate-400">
        <Clock className="h-3 w-3" /> Coming Soon
      </span>
    )
  }
  if (status === "new") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
        <span className="h-1.5 w-1.5 rounded-full bg-current" /> Newly Released
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
      <Star className="h-3 w-3 fill-current" /> Live
    </span>
  )
}

/* ═══════════════════════════════════════
   HEX TILE — smooth crossfade on hover
   ═══════════════════════════════════════ */

function ModuleHexTile({
  cell,
  onSelect,
}: {
  cell: HexCell
  onSelect: (mod: PlatformModule, tileCenter: { x: number; y: number }) => void
}) {
  const mod = cell.mod
  const isLive = mod !== null && mod.status !== "comingSoon"
  const isComingSoon = mod !== null && mod.status === "comingSoon"
  const isEmpty = mod === null
  const [hovered, setHovered] = useState(false)

  const contentClass = cn(
    "relative z-10 flex h-full w-full flex-col items-center justify-center px-[12%] py-[16%]",
    mod && "cursor-pointer",
    isComingSoon && "opacity-40",
  )

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (mod) {
        const rect = e.currentTarget.getBoundingClientRect()
        onSelect(mod, {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        })
      }
    },
    [mod, onSelect],
  )

  const nameEl = mod && (
    <span
      className={cn(
        "text-center font-heading text-[0.88rem] font-semibold leading-tight sm:text-base md:text-lg lg:text-xl",
        isLive && "text-[var(--text-primary)] group-hover:text-[var(--text-brand)]",
        isComingSoon && "text-[var(--text-muted)]",
      )}
    >
      {mod.shortName}
    </span>
  )

  const showHover = hovered && !isComingSoon

  const subtitleClass = cn(
    "text-center text-[0.65rem] leading-tight sm:text-xs md:text-[0.85rem] lg:text-sm",
    isLive && "text-[var(--text-tertiary)]",
    isComingSoon && "text-[var(--text-muted)]",
  )

  return (
    <motion.div
      variants={cellReveal}
      custom={cell.ring}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={cn("relative h-full w-full", mod && "group")}
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

      {/* Texture */}
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

      {/* Amber hover texture */}
      {isLive && (
        <div
          className="pointer-events-none absolute inset-[1px] text-amber-500/[.10] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ clipPath: HEX_CLIP, backgroundImage: LINE_TEXTURE }}
        />
      )}

      {/* Badges */}
      {mod?.badge === "star" && <StarBadge hovered={hovered} />}
      {mod?.badge === "greenDot" && <GreenDotBadge hovered={hovered} />}

      {/* Content — stacked crossfade for subtitle text */}
      {mod && (
        <button type="button" onClick={handleClick} className={contentClass}>
          {nameEl}
          <div className="relative mt-1.5 w-full">
            {/* Default text — sets the container height */}
            <motion.span
              initial={false}
              animate={{ opacity: showHover ? 0 : 1 }}
              transition={{ duration: 0.25, ease: BRAND_EASE }}
              className={cn("block", subtitleClass)}
            >
              {isComingSoon ? "Coming soon" : mod.shortDesc}
            </motion.span>
            {/* Hover text — overlaid with crossfade */}
            {!isComingSoon && (
              <motion.span
                initial={false}
                animate={{ opacity: showHover ? 1 : 0 }}
                transition={{ duration: 0.25, ease: BRAND_EASE }}
                className={cn(
                  "absolute inset-x-0 top-0 block",
                  subtitleClass,
                )}
              >
                {mod.hoverLine}
              </motion.span>
            )}
          </div>
        </button>
      )}
    </motion.div>
  )
}

/* ═══════════════════════════════════════
   EXPANDED HEX — grows from clicked tile
   ═══════════════════════════════════════ */

function ExpandedHex({
  mod,
  onClose,
  hexW,
  hexH,
  origin,
}: {
  mod: PlatformModule
  onClose: () => void
  hexW: number
  hexH: number
  origin: { x: number; y: number }
}) {
  const isComingSoon = mod.status === "comingSoon"
  const topBenefits = mod.benefits.slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.35 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.35 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: `${origin.x}% ${origin.y}%` }}
      className="absolute inset-0 z-30"
    >
      {/* Backdrop — dims the grid, click-outside closes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 rounded-sm bg-black/[.06] backdrop-blur-[1px] dark:bg-black/[.14]"
        onClick={onClose}
      />

      {/* Oversized hex, centred in the stage */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: `calc(var(--hex-s) * ${hexW.toFixed(4)})`,
          height: `calc(var(--hex-s) * ${hexH.toFixed(4)})`,
        }}
      >
        {/* Hex rim */}
        <div
          className={cn(
            "absolute inset-0",
            isComingSoon
              ? "bg-slate-300/20 dark:bg-slate-600/10"
              : "bg-amber-300/30 dark:bg-amber-600/20",
          )}
          style={{ clipPath: HEX_CLIP }}
        />

        {/* Hex fill */}
        <div
          className={cn(
            "absolute inset-[2px]",
            isComingSoon
              ? "bg-slate-50 dark:bg-slate-900/90"
              : "bg-white dark:bg-[#151a34]",
          )}
          style={{ clipPath: HEX_CLIP }}
        />

        {/* Hex texture */}
        <div
          className={cn(
            "pointer-events-none absolute inset-[2px]",
            isComingSoon
              ? "text-slate-400/[.02] dark:text-slate-500/[.025]"
              : "text-black/[.02] dark:text-white/[.025]",
          )}
          style={{ clipPath: HEX_CLIP, backgroundImage: LINE_TEXTURE }}
        />

        {/* Content area — confined to hex shape */}
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          style={{ clipPath: HEX_CLIP }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close X — inside the hex's safe upper region */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-[12%] right-[30%] z-20 flex h-7 w-7 items-center justify-center rounded-full text-[var(--text-muted)] transition-colors hover:bg-black/5 hover:text-[var(--text-primary)] dark:hover:bg-white/10 sm:h-8 sm:w-8"
            aria-label="Close"
          >
            <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>

          {/* Centred content column */}
          <div className="w-[54%] max-w-md text-center">
            <h3 className="font-heading text-sm font-bold text-[var(--text-primary)] sm:text-lg md:text-xl lg:text-2xl">
              {mod.name}
            </h3>

            <div className="mt-1.5 sm:mt-2">
              <StatusPill status={mod.status} />
            </div>

            <p
              className={cn(
                "mt-2.5 text-[0.6rem] leading-relaxed sm:mt-3 sm:text-xs md:text-sm",
                isComingSoon
                  ? "text-[var(--text-muted)]"
                  : "text-[var(--text-secondary)]",
              )}
            >
              {mod.longDesc}
            </p>

            {!isComingSoon && (
              <ul className="mt-2.5 space-y-1 text-left sm:mt-3">
                {topBenefits.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: 0.2 + i * 0.06,
                      ease: BRAND_EASE,
                    }}
                    className="flex items-start gap-1.5"
                  >
                    <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-[var(--text-brand)]" />
                    <span className="text-[0.55rem] leading-snug text-[var(--text-secondary)] sm:text-[0.65rem] md:text-xs">
                      {b}
                    </span>
                  </motion.li>
                ))}
              </ul>
            )}

            {!isComingSoon && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.25 }}
                className="mt-3 sm:mt-4"
              >
                <a
                  href="/book-demo"
                  className="inline-flex items-center gap-1.5 rounded-md bg-[var(--text-brand)] px-3 py-1.5 font-heading text-[0.6rem] font-semibold text-white shadow-[var(--shadow-brand)] transition-transform hover:scale-[1.02] sm:px-4 sm:py-2 sm:text-xs"
                >
                  Book a Demo
                  <ChevronRight className="h-3 w-3" />
                </a>
              </motion.div>
            )}

            {isComingSoon && (
              <div className="mt-3 rounded border border-dashed border-[var(--border-default)] px-3 py-2 sm:mt-4">
                <p className="text-[0.55rem] text-[var(--text-muted)] sm:text-xs">
                  In development. Join the waitlist for early access.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
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
  const [selectedModule, setSelectedModule] = useState<PlatformModule | null>(null)
  const [expandOrigin, setExpandOrigin] = useState({ x: 50, y: 50 })
  const stageRef = useRef<HTMLDivElement>(null)

  const { moduleCells, gridW, gridH, centerX, centerY, hexW, hexH } = useMemo(() => {
    const allCells = placeModules(data)
    const filled = allCells.filter((c) => c.mod !== null)

    let minX = Infinity,
      maxX = -Infinity,
      minY = Infinity,
      maxY = -Infinity
    for (const cell of filled) {
      const px = 1.5 * cell.q
      const py = S3 * cell.r + S3H * cell.q
      minX = Math.min(minX, px - 1)
      maxX = Math.max(maxX, px + 1)
      minY = Math.min(minY, py - S3 / 2)
      maxY = Math.max(maxY, py + S3 / 2)
    }

    const gW = maxX - minX
    const gH = maxY - minY

    return {
      moduleCells: filled,
      gridW: gW,
      gridH: gH,
      centerX: (minX + maxX) / 2,
      centerY: (minY + maxY) / 2,
      hexW: gW,
      hexH: gW * (S3 / 2),
    }
  }, [data])

  const handleSelect = useCallback(
    (mod: PlatformModule, tileCenter: { x: number; y: number }) => {
      const stage = stageRef.current
      if (stage) {
        const rect = stage.getBoundingClientRect()
        setExpandOrigin({
          x: ((tileCenter.x - rect.left) / rect.width) * 100,
          y: ((tileCenter.y - rect.top) / rect.height) * 100,
        })
      }
      setSelectedModule(mod)
    },
    [],
  )

  const handleClose = useCallback(() => {
    setSelectedModule(null)
  }, [])

  return (
    <section
      className="relative overflow-hidden bg-[#faf5ec] py-16 pb-24 dark:bg-[#0e1126] md:py-24 md:pb-36"
      id="overview"
    >
      <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-0">
          {/* ── Left: grid stage (dimensions stay fixed) ── */}
          <div className="flex w-full flex-1 items-center justify-center lg:justify-start">
            <div
              ref={stageRef}
              className="hex-grid hex-grid-platform relative"
              style={{
                width: `calc(var(--hex-s) * ${gridW.toFixed(4)})`,
                height: `calc(var(--hex-s) * ${gridH.toFixed(4)})`,
              }}
            >
              {/* Grid tiles — always rendered so they stay visible under the overlay */}
              {moduleCells.map((cell) => {
                const cx = (1.5 * cell.q - centerX).toFixed(4)
                const cy = (
                  S3 * cell.r +
                  S3H * cell.q -
                  centerY
                ).toFixed(4)
                return (
                  <div
                    key={`${cell.q},${cell.r}`}
                    className={cn(
                      "hex-cell-wrapper absolute",
                      cell.mod &&
                        cell.mod.status !== "comingSoon" &&
                        "hex-cell-module",
                    )}
                    style={{
                      left: `calc(50% + var(--hex-s) * ${cx})`,
                      top: `calc(50% + var(--hex-s) * ${cy})`,
                      width: "calc(var(--hex-s) * 2)",
                      height: `calc(var(--hex-s) * ${S3.toFixed(4)})`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <ModuleHexTile cell={cell} onSelect={handleSelect} />
                  </div>
                )
              })}

              {/* Expanded hex overlay — grows from the clicked tile's position */}
              <AnimatePresence>
                {selectedModule && (
                  <ExpandedHex
                    key={selectedModule.slug}
                    mod={selectedModule}
                    onClose={handleClose}
                    hexW={hexW}
                    hexH={hexH}
                    origin={expandOrigin}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Right: heading + description (always visible) ── */}
          <div className="w-full text-center lg:w-[35%] lg:shrink-0 lg:pl-10 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, ease: BRAND_EASE }}
            >
              <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.08em] text-[var(--text-brand)]">
                The Platform
              </p>
              <h2 className="font-heading text-display-md font-bold text-[var(--text-primary)] md:text-display-lg">
                One platform. Seven integrated modules. Zero&nbsp;silos.
              </h2>
              <p className="mt-4 text-body-lg text-[var(--text-secondary)]">
                Every module shares the same data, dashboard, and subscription.
                When a visitor arrives, the queue system knows. When a permit
                expires, the gate&nbsp;knows.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/cn"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

/* ═══════════════════════════════════════
   DATA
   ═══════════════════════════════════════ */

type Client = { name: string; logo: string }
type Sector = { key: string; label: string; clients: Client[] }

const sectors: Sector[] = [
  {
    key: "hospitality-other",
    label: "Hospitality & Other",
    clients: [
      { name: "Atlantis The Palm", logo: "/images/clients/atlantis-palm.png" },
      { name: "Grand Hyatt Dubai", logo: "/images/clients/grand-hyatt-dubai.png" },
      { name: "Kempinski Central Avenue", logo: "/images/clients/kempinski-central-avenue.png" },
      { name: "Paramount Hotel Midtown", logo: "/images/clients/paramount.jpg" },
      { name: "Central Park Towers DIFC", logo: "/images/clients/central-park-difc.png" },
      { name: "Masdar City", logo: "/images/clients/masdar-city.png" },
      { name: "Al-Futtaim", logo: "/images/clients/Al futaim.png" },
    ],
  },
  {
    key: "realestate",
    label: "Real Estate",
    clients: [
      { name: "Aldar", logo: "/images/clients/aldar.png" },
      { name: "Al Barari", logo: "/images/clients/al-barari.png" },
      { name: "Asteco", logo: "/images/clients/asteco.png" },
      { name: "Azizi Developments", logo: "/images/clients/azizi.png" },
      { name: "Deyaar", logo: "/images/clients/deyaar.png" },
      { name: "Masaar", logo: "/images/clients/masaar.jpg" },
      { name: "LOAMS", logo: "/images/clients/loams.png" },
    ],
  },
  {
    key: "education",
    label: "Education",
    clients: [
      { name: "GEMS Education", logo: "/images/clients/Gems.png" },
      { name: "Brighton College", logo: "/images/clients/brighton-college.png" },
      { name: "Bloom World Academy", logo: "/images/clients/Bloom.png" },
      { name: "Citizens School", logo: "/images/clients/citizens-school.png" },
      { name: "Taaleem", logo: "/images/clients/Taaleem.png" },
      { name: "Rashid & Latifa School", logo: "/images/clients/Rashid and Latifa school.jpg" },
      { name: "VISS", logo: "/images/clients/viss.png" },
    ],
  },
]

/* ═══════════════════════════════════════
   AXIAL HEX GRID

   True flat-top hexagonal tiling using cube coordinates.
   Every cell shares an exact edge with its neighbours.
   The cluster itself forms a hexagon (radius-2 = 19 cells).

   Circumradius s = CSS --hex-s
     hex width   = 2s
     hex height  = s * sqrt(3)
     axial → px:
       x = 1.5 * s * q
       y = s * (sqrt3 * r + sqrt3/2 * q)
   ═══════════════════════════════════════ */

const S3 = 1.7320508
const S3H = 0.8660254
const HEX_CLIP = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
const RADIUS = 2

type HexCell = { q: number; r: number; ring: number; client: Client | null }

function buildCluster(radius: number) {
  const cells: { q: number; r: number; ring: number }[] = []
  for (let q = -radius; q <= radius; q++) {
    for (let r = Math.max(-radius, -q - radius); r <= Math.min(radius, -q + radius); r++) {
      const ring = (Math.abs(q) + Math.abs(r) + Math.abs(-q - r)) / 2
      cells.push({ q, r, ring })
    }
  }
  return cells
}

const CLUSTER = buildCluster(RADIUS)

function placeLogos(cluster: typeof CLUSTER, clients: Client[]): HexCell[] {
  const cells: HexCell[] = cluster.map((c) => ({ ...c, client: null }))
  const sorted = [...cells].sort((a, b) => a.ring - b.ring)
  clients.forEach((client, i) => {
    if (i < sorted.length) sorted[i].client = client
  })
  return cells
}

/* ═══════════════════════════════════════
   ANIMATIONS
   ═══════════════════════════════════════ */

const panelWrap = {
  hidden: {},
  visible: {},
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

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

/* ═══════════════════════════════════════
   TEXTURE PATTERN — thin diagonal lines
   Uses currentColor so the parent element's
   `color` (set via Tailwind) controls the hue.
   ═══════════════════════════════════════ */

const LINE_TEXTURE =
  "repeating-linear-gradient(40deg, transparent 0 5px, currentColor 5px 5.35px)"

/* ═══════════════════════════════════════
   HEX TILE
   ═══════════════════════════════════════ */

function HexTile({ cell }: { cell: HexCell }) {
  const logo = cell.client !== null

  return (
    <motion.div
      variants={cellReveal}
      custom={cell.ring}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={cn("relative h-full w-full", logo && "group")}
    >
      {/* Wall rim — warm amber, visible as a 1px edge around the fill */}
      <div
        className={cn(
          "absolute inset-0 transition-colors duration-300",
          logo
            ? "bg-amber-300/[.15] group-hover:bg-amber-400/[.45] dark:bg-amber-600/10 dark:group-hover:bg-amber-500/30"
            : "bg-amber-200/[.08] dark:bg-amber-800/[.05]",
        )}
        style={{ clipPath: HEX_CLIP }}
      />

      {/* Fill — inset 1px so the wall rim peeks through at the edge */}
      <div
        className={cn(
          "absolute inset-[1px]",
          logo
            ? "bg-white dark:bg-[#151a34]"
            : "bg-[#faf8f3] dark:bg-[#12162d]",
        )}
        style={{ clipPath: HEX_CLIP }}
      />

      {/* Texture — neutral diagonal lines */}
      <div
        className={cn(
          "pointer-events-none absolute inset-[1px]",
          logo
            ? "text-black/[.035] dark:text-white/[.04]"
            : "text-black/[.018] dark:text-white/[.02]",
        )}
        style={{ clipPath: HEX_CLIP, backgroundImage: LINE_TEXTURE }}
      />

      {/* Texture — amber lines, fade in on hover */}
      {logo && (
        <div
          className="pointer-events-none absolute inset-[1px] text-amber-500/[.12] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ clipPath: HEX_CLIP, backgroundImage: LINE_TEXTURE }}
        />
      )}

      {/* Logo */}
      {cell.client && (
        <div className="relative z-10 flex h-full w-full items-center justify-center p-[18%]">
          <Image
            src={cell.client.logo}
            alt={cell.client.name}
            width={200}
            height={120}
            className="h-full w-full object-contain"
          />
        </div>
      )}

      {/* Tooltip */}
      {cell.client && (
        <span className="pointer-events-none absolute -bottom-5 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded bg-[var(--bg-surface-raised)] px-2 py-0.5 text-[10px] font-medium text-[var(--text-secondary)] opacity-0 shadow-md transition-all duration-200 group-hover:-bottom-7 group-hover:opacity-100">
          {cell.client.name}
        </span>
      )}
    </motion.div>
  )
}

/* ═══════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════ */

export function ClientsVariantD({ className }: { className?: string }) {
  const [activeKey, setActiveKey] = useState(sectors[0].key)
  const active = sectors.find((s) => s.key === activeKey)!

  const { logoCells, gridW, gridH, centerX, centerY } = useMemo(() => {
    const allCells = placeLogos(CLUSTER, active.clients)
    const filled = allCells.filter((c) => c.client !== null)

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity
    for (const cell of filled) {
      const px = 1.5 * cell.q
      const py = S3 * cell.r + S3H * cell.q
      minX = Math.min(minX, px - 1)
      maxX = Math.max(maxX, px + 1)
      minY = Math.min(minY, py - S3 / 2)
      maxY = Math.max(maxY, py + S3 / 2)
    }

    return {
      logoCells: filled,
      gridW: maxX - minX,
      gridH: maxY - minY,
      centerX: (minX + maxX) / 2,
      centerY: (minY + maxY) / 2,
    }
  }, [active.clients])

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 md:py-24",
        "bg-[#faf7f1] dark:bg-[#0e1126]",
        className,
      )}
    >
      <div className="relative mx-auto max-w-site px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-0">
          {/* ── Left: heading + sector navigation ── */}
          <div className="w-full text-center lg:w-[30%] lg:shrink-0 lg:pr-10 lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, ease: BRAND_EASE }}
              className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)] md:text-base"
            >
              Some members of our Buzzin Hive
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, delay: 0.1, ease: BRAND_EASE }}
              className="mb-8 text-base text-[var(--text-tertiary)] md:text-lg"
            >
              Trusted across hospitality, real estate, education, and
              other sectors
            </motion.p>

            {/* Desktop — vertical tab list with sliding amber indicator */}
            <nav className="hidden lg:flex lg:flex-col lg:gap-0.5">
              {sectors.map((s, i) => {
                const on = activeKey === s.key
                return (
                  <motion.button
                    key={s.key}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: BRAND_EASE }}
                    onClick={() => setActiveKey(s.key)}
                    className={cn(
                      "relative py-3 pl-5 text-left text-base font-medium transition-colors duration-300 lg:text-lg",
                      on
                        ? "text-[var(--text-primary)]"
                        : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]",
                    )}
                  >
                    {on && (
                      <motion.div
                        layoutId="hive-tab-line"
                        className="absolute bottom-0 left-0 top-0 w-[2px] rounded-full bg-amber-500"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    {s.label}
                  </motion.button>
                )
              })}
            </nav>

            {/* Mobile — horizontal pills */}
            <div className="flex flex-wrap justify-center gap-2 lg:hidden">
              {sectors.map((s) => {
                const on = activeKey === s.key
                return (
                  <button
                    key={s.key}
                    onClick={() => setActiveKey(s.key)}
                    className={cn(
                      "relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300",
                      on
                        ? "text-white"
                        : "border border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-amber-500/25 hover:text-[var(--text-secondary)]",
                    )}
                  >
                    {on && (
                      <motion.span
                        layoutId="hive-pill"
                        className="absolute inset-0 rounded-full bg-amber-500 shadow-sm shadow-amber-500/25"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{s.label}</span>
                  </button>
                )
              })}
            </div>

          </div>

          {/* ── Right: hexagonal hive ── */}
          <div className="flex w-full flex-1 items-center justify-center lg:justify-end">
            <div
              className="hex-grid relative"
              style={{
                width: `calc(var(--hex-s) * ${gridW.toFixed(4)})`,
                height: `calc(var(--hex-s) * ${gridH.toFixed(4)})`,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeKey}
                  variants={panelWrap}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  exit="exit"
                  className="absolute inset-0"
                >
                  {logoCells.map((cell) => {
                    const cx = (1.5 * cell.q - centerX).toFixed(4)
                    const cy = (S3 * cell.r + S3H * cell.q - centerY).toFixed(4)
                    return (
                      <div
                        key={`${cell.q},${cell.r}`}
                        className="hex-cell-wrapper hex-cell-has-logo absolute"
                        style={{
                          left: `calc(50% + var(--hex-s) * ${cx})`,
                          top: `calc(50% + var(--hex-s) * ${cy})`,
                          width: "calc(var(--hex-s) * 2)",
                          height: `calc(var(--hex-s) * ${S3.toFixed(4)})`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <HexTile cell={cell} />
                      </div>
                    )
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/cn"

/* ═══════════════════════════════════════
   DATA
   ═══════════════════════════════════════ */

type Client = {
  name: string
  logo: string
  region: "uae" | "intl"
}

type Sector = {
  key: string
  label: string
  clients: Client[]
}

const sectors: Sector[] = [
  {
    key: "hospitality-other",
    label: "Hospitality & Other",
    clients: [
      { name: "Atlantis The Palm", logo: "/images/clients/atlantis-palm.png", region: "uae" },
      { name: "Grand Hyatt Dubai", logo: "/images/clients/grand-hyatt-dubai.png", region: "uae" },
      { name: "Kempinski Central Avenue", logo: "/images/clients/kempinski-central-avenue.png", region: "uae" },
      { name: "Paramount Hotel Midtown", logo: "/images/clients/paramount.jpg", region: "uae" },
      { name: "Central Park Towers DIFC", logo: "/images/clients/central-park-difc.png", region: "uae" },
      { name: "Masdar City", logo: "/images/clients/masdar-city.png", region: "uae" },
      { name: "Al-Futtaim", logo: "/images/clients/Al futaim.png", region: "uae" },
    ],
  },
  {
    key: "realestate",
    label: "Real Estate",
    clients: [
      { name: "Aldar", logo: "/images/clients/aldar.png", region: "uae" },
      { name: "Al Barari", logo: "/images/clients/al-barari.png", region: "uae" },
      { name: "Asteco", logo: "/images/clients/asteco.png", region: "uae" },
      { name: "Azizi Developments", logo: "/images/clients/azizi.png", region: "uae" },
      { name: "Deyaar", logo: "/images/clients/deyaar.png", region: "uae" },
      { name: "Masaar", logo: "/images/clients/masaar.jpg", region: "uae" },
      { name: "LOAMS", logo: "/images/clients/loams.png", region: "uae" },
    ],
  },
  {
    key: "education",
    label: "Education",
    clients: [
      { name: "GEMS Education", logo: "/images/clients/Gems.png", region: "uae" },
      { name: "Brighton College", logo: "/images/clients/brighton-college.png", region: "uae" },
      { name: "Bloom World Academy", logo: "/images/clients/Bloom.png", region: "uae" },
      { name: "Citizens School", logo: "/images/clients/citizens-school.png", region: "uae" },
      { name: "Taaleem", logo: "/images/clients/Taaleem.png", region: "uae" },
      { name: "Rashid & Latifa School", logo: "/images/clients/Rashid and Latifa school.jpg", region: "uae" },
      { name: "VISS", logo: "/images/clients/viss.png", region: "uae" },
    ],
  },
]

/* ═══════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════ */

const gridStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.05 } },
}

const cardReveal = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

const panelSlide = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

/* ═══════════════════════════════════════
   LOGO TILE
   ═══════════════════════════════════════ */

function LogoTile({ client }: { client: Client }) {
  return (
    <motion.div
      variants={cardReveal}
      layout
      className="group relative flex h-[126px] items-center justify-center overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500/20 hover:shadow-[0_14px_34px_-14px_rgba(245,166,35,0.26)] dark:bg-white/[0.05] dark:hover:bg-white/[0.09]"
    >
      <Image
        src={client.logo}
        alt={client.name}
        width={216}
        height={84}
        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
      />
      {/* Tooltip on hover */}
      <span className="pointer-events-none absolute -bottom-7 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-[var(--bg-surface-raised)] px-2.5 py-1 text-[11px] font-medium text-[var(--text-secondary)] opacity-0 shadow-lg transition-all duration-200 group-hover:bottom-[-30px] group-hover:opacity-100">
        {client.name}
      </span>
    </motion.div>
  )
}

/* ═══════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════ */

export function ClientsVariantA({ className }: { className?: string }) {
  const [activeKey, setActiveKey] = useState(sectors[0].key)
  const activeSector = sectors.find((s) => s.key === activeKey)!

  const uaeClients = activeSector.clients.filter((c) => c.region === "uae")
  const intlClients = activeSector.clients.filter((c) => c.region === "intl")
  const hasIntl = intlClients.length > 0

  return (
    <section className={cn("bg-[var(--bg-trust)] py-14 md:py-20", className)}>
      <div className="mx-auto max-w-site px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-1 text-center font-heading text-overline font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]"
        >
          Some of our clients
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-10 text-center text-body-sm text-[var(--text-tertiary)]"
        >
          Trusted across hospitality, real estate, education, and other sectors
        </motion.p>

        {/* Sector tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {sectors.map((sector) => {
            const isActive = activeKey === sector.key
            return (
              <button
                key={sector.key}
                onClick={() => setActiveKey(sector.key)}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-body-xs font-semibold transition-all duration-300",
                  isActive
                    ? "text-white"
                    : "border border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-amber-500/25 hover:text-[var(--text-secondary)]",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="sector-pill"
                    className="absolute inset-0 rounded-full bg-amber-500 shadow-sm shadow-amber-500/25"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{sector.label}</span>
              </button>
            )
          })}
        </div>

        {/* Grid area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            variants={panelSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mx-auto max-w-6xl"
          >
            <div className={cn("flex gap-6", hasIntl ? "flex-col lg:flex-row" : "")}>
              {/* UAE logos — main grid (takes ~80% when intl exists) */}
              <div className={cn("min-w-0", hasIntl ? "flex-1" : "w-full")}>
                {hasIntl && (
                  <p className="mb-4 text-center text-body-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                    UAE
                  </p>
                )}
                <motion.div
                  variants={gridStagger}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
                >
                  {uaeClients.map((client) => (
                    <LogoTile key={client.name} client={client} />
                  ))}
                </motion.div>
              </div>

              {/* International logos — narrow column on the right */}
              {hasIntl && (
                <div className="w-full lg:w-[22%] lg:min-w-[220px]">
                  <p className="mb-4 text-center text-body-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                    KSA &amp; Lebanon
                  </p>
                  <motion.div
                    variants={gridStagger}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-1"
                  >
                    {intlClients.map((client) => (
                      <LogoTile key={client.name} client={client} />
                    ))}
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center text-body-xs text-[var(--text-muted)]"
        >
          &hellip; and 300+ more across the region
        </motion.p>
      </div>
    </section>
  )
}

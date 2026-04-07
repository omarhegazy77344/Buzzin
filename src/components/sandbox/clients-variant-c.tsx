"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/cn"

/**
 * Variant C — Text-Only Trust Strip
 *
 * No images at all. Client names rendered typographically.
 * Split into sectors for contextual proof.
 * Maximally consistent — zero asset-quality risk.
 * Feels editorial and confident.
 */

const sectors = [
  {
    label: "Hospitality",
    clients: ["Atlantis", "Fairmont", "Kempinski", "Hyatt", "Park Hyatt", "Grand Hyatt", "Paramount Hotel"],
  },
  {
    label: "Real Estate",
    clients: ["Aldar", "DAMAC", "Azizi", "Deyaar", "Al Barari", "Asteco", "Al-Futtaim", "Masdar City", "Union Properties", "Al Saedan"],
  },
  {
    label: "Education",
    clients: ["Taaleem", "Brighton College", "GEMS Education", "Citizens School", "Bloom", "Misk Schools", "ACS Beirut"],
  },
  {
    label: "Financial & Government",
    clients: ["Central Park Towers DIFC", "Masaar", "LOAMS", "Kathib"],
  },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export function ClientsVariantC({ className }: { className?: string }) {
  return (
    <section className={cn("bg-[var(--bg-trust)] py-14 md:py-20", className)}>
      <div className="mx-auto max-w-site px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <p className="mb-1 text-center font-heading text-overline font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
          Some of our clients
        </p>
        <p className="mb-14 text-center text-body-sm text-[var(--text-tertiary)]">
          Trusted by organisations across UAE, Saudi Arabia &amp; Lebanon
        </p>

        {/* Sector groups */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-4xl space-y-10"
        >
          {sectors.map((sector) => (
            <motion.div key={sector.label} variants={fadeIn}>
              <p className="mb-3 text-center text-body-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-brand)]">
                {sector.label}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                {sector.clients.map((name, i) => (
                  <span key={name} className="flex items-center gap-2">
                    <span className="text-body-md font-medium text-[var(--text-secondary)] md:text-body-lg">
                      {name}
                    </span>
                    {i < sector.clients.length - 1 && (
                      <span className="text-[var(--text-muted)]">&middot;</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <p className="mt-12 text-center text-body-xs text-[var(--text-muted)]">
          &hellip; and 300+ more organisations
        </p>
      </div>
    </section>
  )
}

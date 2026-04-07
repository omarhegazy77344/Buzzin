"use client"

import Image from "next/image"
import Marquee from "react-fast-marquee"
import { cn } from "@/lib/cn"

/**
 * Variant B — Clean Slow Marquee
 *
 * Single row, very slow, only the cleanest logos.
 * Larger tiles with generous spacing.
 * Subtle edge fade via gradient overlays.
 * Pauses on hover for readability.
 */

const cleanLogos = [
  { name: "Aldar", logo: "/images/clients/aldar.png" },
  { name: "Atlantis The Palm", logo: "/images/clients/atlantis-palm.png" },
  { name: "Azizi Developments", logo: "/images/clients/azizi.png" },
  { name: "Deyaar", logo: "/images/clients/deyaar.png" },
  { name: "GEMS Education", logo: "/images/clients/Gems.png" },
  { name: "Citizens School", logo: "/images/clients/citizens-school.png" },
  { name: "Grand Hyatt Dubai", logo: "/images/clients/grand-hyatt-dubai.png" },
  { name: "Asteco", logo: "/images/clients/asteco.png" },
  { name: "Masaar", logo: "/images/clients/masaar.jpg" },
  { name: "Al Barari", logo: "/images/clients/al-barari.png" },
  { name: "Kempinski Central Avenue", logo: "/images/clients/kempinski-central-avenue.png" },
  { name: "Brighton College", logo: "/images/clients/brighton-college.png" },
  { name: "Bloom World Academy", logo: "/images/clients/Bloom.png" },
  { name: "Taaleem", logo: "/images/clients/Taaleem.png" },
  { name: "Rashid & Latifa School", logo: "/images/clients/Rashid and Latifa school.jpg" },
  { name: "Central Park Towers DIFC", logo: "/images/clients/central-park-difc.png" },
  { name: "Masdar City", logo: "/images/clients/masdar-city.png" },
  { name: "Al-Futtaim", logo: "/images/clients/Al futaim.png" },
  { name: "VISS", logo: "/images/clients/viss.png" },
  { name: "Paramount Hotel Midtown", logo: "/images/clients/paramount.jpg" },
  { name: "LOAMS", logo: "/images/clients/loams.png" },
]

export function ClientsVariantB({ className }: { className?: string }) {
  return (
    <section className={cn("bg-[var(--bg-trust)] py-14 md:py-20", className)}>
      <div className="mx-auto max-w-site px-5 sm:px-8 lg:px-10">
        <p className="mb-1 text-center font-heading text-overline font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
          Some of our clients
        </p>
        <p className="mb-12 text-center text-body-sm text-[var(--text-tertiary)]">
          Trusted across hospitality, real estate, education, and other sectors
        </p>
      </div>

      {/* Single slow marquee */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--bg-trust)] to-transparent sm:w-32 lg:w-44" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--bg-trust)] to-transparent sm:w-32 lg:w-44" />

        <Marquee speed={18} gradient={false} pauseOnHover autoFill>
          {cleanLogos.map((client) => (
            <div
              key={client.name}
              className="group mx-5 flex h-20 w-44 shrink-0 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-white p-4 sm:mx-6 sm:h-[88px] sm:w-48 md:mx-7 dark:bg-white/[0.05]"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={172}
                height={68}
                className="h-full w-full object-contain opacity-65 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <p className="mt-8 text-center text-body-xs text-[var(--text-muted)]">
        &hellip; and 300+ more across hospitality, real estate, education, and other sectors
      </p>
    </section>
  )
}

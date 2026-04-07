"use client"

import Image from "next/image"
import Marquee from "react-fast-marquee"
import { cn } from "@/lib/cn"

/* ═══════════════════════════════════════
   TYPES
   ═══════════════════════════════════════ */

type ClientLogo = {
  name: string
  logo: string
}

type LogoCarouselProps = {
  clients?: { _id: string; clientName: string; sector?: string }[]
  className?: string
}

/* ═══════════════════════════════════════
   ALL CLIENTS — UAE, Saudi Arabia, Lebanon
   ═══════════════════════════════════════ */

const allClients: ClientLogo[] = [
  { name: "Aldar", logo: "/images/clients/aldar.png" },
  { name: "Atlantis The Palm", logo: "/images/clients/atlantis-palm.png" },
  { name: "Asteco", logo: "/images/clients/asteco.png" },
  { name: "Al Barari", logo: "/images/clients/al-barari.png" },
  { name: "Azizi Developments", logo: "/images/clients/azizi.png" },
  { name: "Deyaar", logo: "/images/clients/deyaar.png" },
  { name: "Masaar", logo: "/images/clients/masaar.jpg" },
  { name: "LOAMS", logo: "/images/clients/loams.png" },
  { name: "GEMS Education", logo: "/images/clients/Gems.png" },
  { name: "Brighton College", logo: "/images/clients/brighton-college.png" },
  { name: "Bloom World Academy", logo: "/images/clients/Bloom.png" },
  { name: "Citizens School", logo: "/images/clients/citizens-school.png" },
  { name: "Taaleem", logo: "/images/clients/Taaleem.png" },
  { name: "Rashid & Latifa School", logo: "/images/clients/Rashid and Latifa school.jpg" },
  { name: "VISS", logo: "/images/clients/viss.png" },
  { name: "Grand Hyatt Dubai", logo: "/images/clients/grand-hyatt-dubai.png" },
  { name: "Kempinski Central Avenue", logo: "/images/clients/kempinski-central-avenue.png" },
  { name: "Paramount Hotel Midtown", logo: "/images/clients/paramount.jpg" },
  { name: "Central Park Towers DIFC", logo: "/images/clients/central-park-difc.png" },
  { name: "Masdar City", logo: "/images/clients/masdar-city.png" },
  { name: "Al-Futtaim", logo: "/images/clients/Al futaim.png" },
]

/* ═══════════════════════════════════════
   LOGO CARD
   ═══════════════════════════════════════ */

function LogoCard({ client }: { client: ClientLogo }) {
  return (
    <div className="mx-3 flex h-16 w-36 shrink-0 items-center justify-center rounded-lg bg-white p-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:bg-white/[0.08] dark:shadow-none sm:mx-4 sm:h-[72px] sm:w-40 md:mx-5 md:h-20 md:w-44">
      <Image
        src={client.logo}
        alt={client.name}
        width={160}
        height={64}
        className="h-full w-full object-contain"
      />
    </div>
  )
}

/* ═══════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════ */

export function LogoCarousel({ className }: LogoCarouselProps) {
  return (
    <section className={cn("overflow-hidden bg-[var(--bg-trust)] py-12 md:py-16", className)}>
      <div className="mx-auto max-w-site px-5 sm:px-8 lg:px-10">
        <p className="mb-1 text-center font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
          Some of our clients
        </p>
        <p className="mb-10 text-center text-body-sm text-[var(--text-tertiary)]">
          Trusted across hospitality, real estate, education, and other sectors
        </p>
      </div>

      {/* Single seamless marquee with theme-aware edge fade */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--bg-trust)] to-transparent sm:w-24 lg:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--bg-trust)] to-transparent sm:w-24 lg:w-32" />

        <Marquee speed={30} gradient={false} pauseOnHover autoFill>
          {allClients.map((client) => (
            <LogoCard key={client.name} client={client} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}

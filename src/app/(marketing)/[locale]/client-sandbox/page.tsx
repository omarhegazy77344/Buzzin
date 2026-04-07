import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { SectionDivider } from "@/components/sandbox/section-divider"
import { ClientsVariantA } from "@/components/sandbox/clients-variant-a"
import { ClientsVariantB } from "@/components/sandbox/clients-variant-b"
import { ClientsVariantC } from "@/components/sandbox/clients-variant-c"
import { ClientsVariantD } from "@/components/sandbox/clients-variant-d"

export const metadata = {
  title: "Client Section Sandbox — Buzzin (internal)",
  robots: { index: false, follow: false },
}

export default function ClientSandboxPage() {
  return (
    <>
      {/* Sandbox banner */}
      <div className="fixed inset-x-0 top-0 z-[9999] flex items-center justify-center gap-3 bg-amber-400 px-4 py-1.5 text-center text-xs font-semibold text-navy-900">
        <span className="inline-block h-2 w-2 rounded-full bg-navy-900/60" />
        CLIENT SECTION SANDBOX — scroll to compare all 4 versions
        <span className="inline-block h-2 w-2 rounded-full bg-navy-900/60" />
      </div>

      <div className="pt-8">
        <Navbar />

        <main>
          {/* ═══ VARIANT A — Curated Static Grid ═══ */}
          <SectionDivider
            variant="Variant A"
            title="Curated Static Logo Wall"
            description="Premium grid of 12 strongest logos. No motion — stability reads as trust. Logos in original color on uniform tiles with subtle hover lift. Weakest assets excluded."
          />
          <ClientsVariantA />

          {/* ═══ VARIANT B — Clean Slow Marquee ═══ */}
          <SectionDivider
            variant="Variant B"
            title="Clean Slow Marquee"
            description="Single row, very slow scroll, only clean logos. Larger tiles, generous spacing, subtle edge fade. Pauses on hover. Fewer logos means higher perceived quality."
          />
          <ClientsVariantB />

          {/* ═══ VARIANT C — Text-Only Trust Strip ═══ */}
          <SectionDivider
            variant="Variant C"
            title="Text-Only Trust Strip"
            description="No images at all. Client names rendered typographically and grouped by sector. Zero asset-quality risk. Maximally consistent. Feels editorial and confident."
          />
          <ClientsVariantC />

          {/* ═══ VARIANT D — Buzzin Hive ═══ */}
          <SectionDivider
            variant="Variant D"
            title="Buzzin Hive"
            description="Bee-hive honeycomb layout of hex tiles. Same sector tabs, same scale, hover tiles pop outward with a warm amber glow. Fixed amber/charcoal background (no theme switching). No UAE/international split."
          />
          <ClientsVariantD />
        </main>

        <Footer />
      </div>
    </>
  )
}

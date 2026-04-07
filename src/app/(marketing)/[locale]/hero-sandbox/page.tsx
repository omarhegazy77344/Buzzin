import { defaultHeroCarouselImages } from "@/lib/content-defaults"
import { Navbar } from "@/components/marketing/navbar"
import { Hero } from "@/components/marketing/hero"
import { Footer } from "@/components/marketing/footer"
import { HeroVariantA } from "@/components/sandbox/hero-variant-a"
import { HeroVariantB } from "@/components/sandbox/hero-variant-b"
import { HeroVariantC } from "@/components/sandbox/hero-variant-c"
import { HeroVariantD } from "@/components/sandbox/hero-variant-d"
import { SectionDivider } from "@/components/sandbox/section-divider"

export const metadata = {
  title: "Hero Sandbox — Buzzin (internal)",
  robots: { index: false, follow: false },
}

export default function HeroSandboxPage() {
  const heroImages = defaultHeroCarouselImages

  return (
    <>
      {/* Sandbox banner */}
      <div className="fixed inset-x-0 top-0 z-[9999] flex items-center justify-center gap-3 bg-amber-400 px-4 py-1.5 text-center text-xs font-semibold text-navy-900">
        <span className="inline-block h-2 w-2 rounded-full bg-navy-900/60" />
        HERO SANDBOX — scroll to compare all 5 versions
        <span className="inline-block h-2 w-2 rounded-full bg-navy-900/60" />
      </div>

      <div className="pt-8">
        <Navbar />

        <main>
          {/* ═══ CURRENT — as it is today ═══ */}
          <SectionDivider
            variant="Current"
            title="Current Hero"
            description="The existing hero as it appears on the live homepage today. Baseline for comparison."
          />
          <Hero images={heroImages} />

          {/* ═══ VARIANT A — Enterprise Authority ═══ */}
          <SectionDivider
            variant="Variant A"
            title="Enterprise Authority"
            description="Outcome-led headline, proof rail with stats and compliance, compact trust names, stronger CTA language. Maximum credibility above the fold."
          />
          <HeroVariantA images={heroImages} />

          {/* ═══ VARIANT B — Luxury Premium ═══ */}
          <SectionDivider
            variant="Variant B"
            title="Luxury Premium"
            description="Refined and minimal. Single powerful statement, quiet stat strip, vertical accent, compliance whisper. Confidence through restraint."
          />
          <HeroVariantB images={heroImages} />

          {/* ═══ VARIANT C — Innovative Future-Forward ═══ */}
          <SectionDivider
            variant="Variant C"
            title="Innovative / Future-Forward"
            description="Systems-metaphor headline, module ticker tags, data cards, highlighted keyword, radial glow. Tech-forward and bold."
          />
          <HeroVariantC images={heroImages} />

          {/* ═══ VARIANT D — Evolved Scroll Narrative ═══ */}
          <SectionDivider
            variant="Variant D"
            title="Refined One-Section Hero"
            description="Vertical layout, centered headline, orbital carousel, one reversible scroll-reveal confidence strip. No redundancy with downstream sections. Proof chips and trust line answer one question: is this enterprise-ready?"
          />
          <HeroVariantD images={heroImages} />
        </main>

        <Footer />
      </div>
    </>
  )
}

import { defaultHeroCarouselImages } from "@/lib/content-defaults"
import { Navbar } from "@/components/marketing/navbar"
import { Hero } from "@/components/marketing/hero"
import { LogoCarousel } from "@/components/marketing/logo-carousel"
import { StatsBar } from "@/components/marketing/stats-bar"
import { PlatformOverview } from "@/components/marketing/platform-overview"
import { IndustrySelector } from "@/components/marketing/industry-selector"
import { BeforeAfter } from "@/components/marketing/before-after"
import { Exclusivity } from "@/components/marketing/exclusivity"
import { SecurityBar } from "@/components/marketing/security-bar"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"

export const metadata = {
  title: "Landing Reference - Buzzin (internal)",
  robots: { index: false, follow: false },
}

export default function LandingReferencePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero images={defaultHeroCarouselImages} />
        <LogoCarousel />
        <StatsBar />
        <PlatformOverview />
        <IndustrySelector />
        <BeforeAfter />
        <Exclusivity />
        <SecurityBar />
        <HowItWorks />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

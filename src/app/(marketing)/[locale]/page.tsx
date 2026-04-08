import { defaultHeroCarouselImages } from "@/lib/content-defaults"
import { Navbar } from "@/components/marketing/navbar"
import { HeroVariantD } from "@/components/sandbox/hero-variant-d"
import { ClientsVariantD } from "@/components/sandbox/clients-variant-d"
import { StatsBar } from "@/components/marketing/stats-bar"
import { PlatformOverview } from "@/components/marketing/platform-overview"
import { IndustryTransformationSection } from "@/components/marketing/industry-transformation-section"
import { Exclusivity } from "@/components/marketing/exclusivity"
import { SecurityBar } from "@/components/marketing/security-bar"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroVariantD images={defaultHeroCarouselImages} />
        <StatsBar />
        <PlatformOverview />
        <IndustryTransformationSection />
        <ClientsVariantD />
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

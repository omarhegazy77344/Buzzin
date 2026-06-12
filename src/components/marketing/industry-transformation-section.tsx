"use client"

import { Container } from "@/components/ui/container"
import { SectionBackground } from "@/components/ui/SectionBackground"
import { IndustrySelectorBlock } from "@/components/marketing/industry-selector"
import { defaultIndustries } from "@/lib/content-defaults"

type IndustryTransformationSectionProps = {
  industries?: typeof defaultIndustries
}

export function IndustryTransformationSection({
  industries,
}: IndustryTransformationSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-canvas)] py-20 md:py-24">
      <SectionBackground
        variant="sky"
        hexGrid
        floatingElements={[
          { type: "icon", icon: "Building2", size: 16, x: "3%", y: "18%", delay: 0, duration: 9, color: "navy" },
          { type: "hexagon", size: 90, x: "96%", y: "30%", delay: 2, duration: 8, color: "amber" },
          { type: "hexagon", size: 70, x: "4%", y: "82%", delay: 4, duration: 10, color: "amber" },
        ]}
        gradientOrb={{ x: "70%", y: "60%", size: 300, color: "navy", opacity: 0.04 }}
      />
      <Container className="relative z-10">
        <IndustrySelectorBlock industries={industries} />
      </Container>
    </section>
  )
}

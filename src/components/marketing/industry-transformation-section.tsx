"use client"

import { Section } from "@/components/ui/section"
import { IndustrySelectorBlock } from "@/components/marketing/industry-selector"
import { BeforeAfterBlock } from "@/components/marketing/before-after"
import { defaultIndustries, defaultBeforeAfterRows } from "@/lib/content-defaults"

type IndustryTransformationSectionProps = {
  industries?: typeof defaultIndustries
  rows?: typeof defaultBeforeAfterRows
}

export function IndustryTransformationSection({
  industries,
  rows,
}: IndustryTransformationSectionProps) {
  return (
    <Section bg="canvas" spacing="lg">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10 xl:gap-14">
        <div className="min-w-0">
          <IndustrySelectorBlock
            industries={industries}
            centered={false}
            headerClassName="mb-8"
            cardClassName="max-w-none"
          />
        </div>

        <div className="min-w-0">
          <BeforeAfterBlock
            rows={rows}
            centered={false}
            headerClassName="mb-8"
            rowsClassName="max-w-none"
          />
        </div>
      </div>
    </Section>
  )
}

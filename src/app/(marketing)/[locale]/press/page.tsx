import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { VmsSectionReveal } from "@/components/marketing/vms-page-layout"
import { FilteredPostGrid } from "@/components/content/FilteredPostGrid"
import { pressTones } from "@/components/content/CategoryBadge"
import {
  pressMentions,
  pressCategoryLabels,
  defaultCtaBanner,
} from "@/lib/content-defaults"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Press & Media | Buzzin FZCO — News, Awards & Media Coverage",
  description:
    "Buzzin FZCO in the press. Media coverage, awards, partnerships, and third-party mentions. Read what industry publications say about the UAE premises intelligence platform.",
  openGraph: {
    title: "Press & Media | Buzzin FZCO",
    description:
      "Media coverage, awards, and industry recognition for Buzzin FZCO.",
  },
}

const filterOptions = [
  { value: "all", label: "All" },
  { value: "media", label: "Media Coverage" },
  { value: "award", label: "Awards" },
  { value: "partnership", label: "Partnerships" },
  { value: "event", label: "Events" },
]

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const items = pressMentions.map((p) => ({
    title: p.title,
    excerpt: p.excerpt,
    source: p.source,
    sourceUrl: p.sourceUrl,
    categoryLabel: pressCategoryLabels[p.category],
    tone: pressTones[p.category],
    dateLabel: p.dateLabel,
    imageUrl: p.imageUrl,
    category: p.category,
  }))

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Buzzin FZCO Press & Media",
    itemListElement: pressMentions.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: p.sourceUrl !== "#" ? p.sourceUrl : `https://buzzin.ae/${locale}/press`,
    })),
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://buzzin.ae/${locale}` },
      { "@type": "ListItem", position: 2, name: "Press & Media", item: `https://buzzin.ae/${locale}/press` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-[var(--bg-page)] pt-28 pb-8 md:pt-36 md:pb-10">
          <Container>
            <nav className="mb-8 font-body text-[12px] text-[var(--text-muted)]">
              <Link href={`/${locale}`} className="hover:text-[var(--text-secondary)]">
                Home
              </Link>
              <span className="mx-1.5">/</span>
              <span>Press &amp; Media</span>
            </nav>

            <div className="mx-auto max-w-[720px] text-center">
              <VmsSectionReveal>
                <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  Press &amp; Media
                </p>
                <h1 className="mt-3 font-display text-[2.25rem] leading-[1.1] tracking-[-0.03em] text-[var(--text-primary)] md:text-[3.5rem]">
                  What Others Say About Buzzin.
                </h1>
                <p className="mx-auto mt-4 mb-8 max-w-[560px] font-body text-[17px] font-light leading-[1.75] text-[var(--text-secondary)]">
                  Industry publications, awards, partnerships, and media coverage
                  from across the UAE and GCC enterprise technology landscape.
                </p>
              </VmsSectionReveal>
            </div>
          </Container>
        </section>

        {/* FILTER + GRID */}
        <FilteredPostGrid kind="press" options={filterOptions} items={items} />

        {/* MEDIA ENQUIRIES */}
        <section className="bg-[var(--bg-page)] py-14 md:py-16">
          <Container>
            <div className="mx-auto max-w-[600px] text-center">
              <VmsSectionReveal>
                <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  Media Enquiries
                </p>
                <h2 className="mt-3 font-heading text-[2rem] font-bold text-[var(--text-primary)]">
                  Press enquiries and media requests.
                </h2>
                <p className="mx-auto mt-3 mb-6 max-w-[480px] font-body text-[15px] leading-[1.7] text-[var(--text-muted)]">
                  For press enquiries, interviews, partnership announcements, or
                  media assets, contact our team directly.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:info@buzzin.ae"
                    className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-5 text-center transition-all duration-200 hover:border-[rgba(245,166,35,0.4)]"
                  >
                    <Mail className="mx-auto mb-2 h-5 w-5 text-[var(--text-brand)]" />
                    <p className="font-heading text-[12px] font-bold text-[var(--text-primary)]">
                      Media Enquiries
                    </p>
                    <p className="font-body text-[12px] text-[var(--text-brand)]">
                      info@buzzin.ae
                    </p>
                  </a>
                  <a
                    href="tel:+97143201265"
                    className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-5 text-center transition-all duration-200 hover:border-[rgba(245,166,35,0.4)]"
                  >
                    <Phone className="mx-auto mb-2 h-5 w-5 text-[var(--text-brand)]" />
                    <p className="font-heading text-[12px] font-bold text-[var(--text-primary)]">
                      Call Us
                    </p>
                    <p className="font-body text-[12px] text-[var(--text-brand)]">
                      +971 4 320 1265
                    </p>
                  </a>
                </div>
              </VmsSectionReveal>
            </div>
          </Container>
        </section>

        <CtaBanner
          content={{
            ...defaultCtaBanner,
            headline: "Want to learn more about what Buzzin does?",
            subline: "Book a 30-minute demo and see the platform in action.",
          }}
        />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

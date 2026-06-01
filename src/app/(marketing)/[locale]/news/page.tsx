import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { VmsSectionReveal } from "@/components/marketing/vms-page-layout"
import { FilteredPostGrid } from "@/components/content/FilteredPostGrid"
import { FeaturedPost } from "@/components/content/FeaturedPost"
import { EmailSubscribe } from "@/components/content/EmailSubscribe"
import { newsTones } from "@/components/content/CategoryBadge"
import {
  newsPosts,
  newsCategoryLabels,
  defaultCtaBanner,
} from "@/lib/content-defaults"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "News & Updates | Buzzin FZCO — Platform Updates, Partnerships & Events",
  description:
    "Latest news from Buzzin FZCO. New module launches, enterprise partnerships, event participation, and platform updates across UAE and GCC.",
  openGraph: {
    title: "News & Updates | Buzzin FZCO",
    description:
      "Platform updates, partnerships, and events from Buzzin FZCO.",
  },
}

const filterOptions = [
  { value: "all", label: "All" },
  { value: "product", label: "Product Updates" },
  { value: "partnership", label: "Partnerships" },
  { value: "event", label: "Events" },
  { value: "company", label: "Company" },
]

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const basePath = `/${locale}/news`

  const featured = newsPosts.find((p) => p.featured) ?? newsPosts[0]
  const gridPosts = newsPosts.filter((p) => p.slug !== featured.slug)

  const items = gridPosts.map((p) => ({
    title: p.title,
    excerpt: p.excerpt,
    slug: p.slug,
    categoryLabel: newsCategoryLabels[p.category],
    tone: newsTones[p.category],
    dateLabel: p.dateLabel,
    imageUrl: p.imageUrl,
    category: p.category,
  }))

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Buzzin FZCO News & Updates",
    itemListElement: newsPosts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `https://buzzin.ae/${locale}/news/${p.slug}`,
    })),
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://buzzin.ae/${locale}` },
      { "@type": "ListItem", position: 2, name: "News & Updates", item: `https://buzzin.ae/${locale}/news` },
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
              <span>News &amp; Updates</span>
            </nav>

            <div className="mx-auto max-w-[720px] text-center">
              <VmsSectionReveal>
                <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  News &amp; Updates
                </p>
                <h1 className="mt-3 font-display text-[2.25rem] leading-[1.1] tracking-[-0.03em] text-[var(--text-primary)] md:text-[3.5rem]">
                  What We Are Building. Where We Are Going.
                </h1>
                <p className="mx-auto mt-4 mb-8 max-w-[560px] font-body text-[17px] font-light leading-[1.75] text-[var(--text-secondary)]">
                  New module launches, enterprise partnerships, events, and
                  platform updates, everything happening at Buzzin.
                </p>
              </VmsSectionReveal>
            </div>
          </Container>
        </section>

        {/* FILTER + FEATURED + GRID */}
        <FilteredPostGrid
          kind="post"
          options={filterOptions}
          items={items}
          basePath={basePath}
          gridBg="page"
          featured={
            <FeaturedPost
              basePath={basePath}
              post={{
                title: featured.title,
                excerpt: featured.excerpt,
                slug: featured.slug,
                categoryLabel: newsCategoryLabels[featured.category],
                tone: newsTones[featured.category],
                dateLabel: featured.dateLabel,
                imageUrl: featured.imageUrl,
              }}
            />
          }
        />

        {/* SUBSCRIBE */}
        <section className="bg-[var(--bg-canvas)] py-12 md:py-14">
          <Container>
            <div className="mx-auto max-w-[540px] text-center">
              <h3 className="mb-2 font-heading text-[1.25rem] font-bold text-[var(--text-primary)]">
                Stay informed.
              </h3>
              <p className="mb-4 font-body text-[13px] text-[var(--text-muted)]">
                Get notified when we launch new modules, announce partnerships,
                or publish insights.
              </p>
              <EmailSubscribe />
            </div>
          </Container>
        </section>

        <CtaBanner
          content={{
            ...defaultCtaBanner,
            headline: "Ready to see the platform these updates are about?",
            subline: "Book a 30-minute demo tailored to your industry.",
          }}
        />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

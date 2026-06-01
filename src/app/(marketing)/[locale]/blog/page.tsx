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
import { blogTones } from "@/components/content/CategoryBadge"
import {
  blogPosts,
  blogCategoryLabels,
  defaultCtaBanner,
} from "@/lib/content-defaults"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Blog & Insights | Buzzin FZCO — Premises Management & Compliance",
  description:
    "Practical guidance on premises management, UAE compliance, contractor control, and operations for hospitality, education, and real estate. Insights from the Buzzin team.",
  openGraph: {
    title: "Blog & Insights | Buzzin FZCO",
    description:
      "Premises management, compliance, and operations insights for UAE enterprise.",
  },
}

const filterOptions = [
  { value: "all", label: "All" },
  { value: "premises-management", label: "Premises Management" },
  { value: "compliance", label: "Compliance" },
  { value: "operations", label: "Operations" },
  { value: "technology", label: "Technology" },
  { value: "industry-trends", label: "Industry Trends" },
]

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const basePath = `/${locale}/blog`

  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0]
  const gridPosts = blogPosts.filter((p) => p.slug !== featured.slug)

  const items = gridPosts.map((p) => ({
    title: p.title,
    excerpt: p.excerpt,
    slug: p.slug,
    categoryLabel: blogCategoryLabels[p.category],
    tone: blogTones[p.category],
    dateLabel: p.dateLabel,
    readingTime: p.readingTime,
    imageUrl: p.imageUrl,
    category: p.category,
  }))

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Buzzin FZCO Blog & Insights",
    itemListElement: blogPosts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `https://buzzin.ae/${locale}/blog/${p.slug}`,
    })),
  }

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Buzzin FZCO Blog & Insights",
    url: `https://buzzin.ae/${locale}/blog`,
    publisher: { "@type": "Organization", name: "Buzzin FZCO", url: "https://buzzin.ae" },
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      url: `https://buzzin.ae/${locale}/blog/${p.slug}`,
    })),
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://buzzin.ae/${locale}` },
      { "@type": "ListItem", position: 2, name: "Blog & Insights", item: `https://buzzin.ae/${locale}/blog` },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
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
              <span>Blog &amp; Insights</span>
            </nav>

            <div className="mx-auto max-w-[720px] text-center">
              <VmsSectionReveal>
                <p className="font-heading text-overline font-semibold uppercase tracking-[0.12em] text-[var(--text-brand)]">
                  Blog &amp; Insights
                </p>
                <h1 className="mt-3 font-display text-[2.25rem] leading-[1.1] tracking-[-0.03em] text-[var(--text-primary)] md:text-[3.5rem]">
                  Premises Management, Decoded.
                </h1>
                <p className="mx-auto mt-4 mb-8 max-w-[560px] font-body text-[17px] font-light leading-[1.75] text-[var(--text-secondary)]">
                  Practical guidance on UAE compliance, contractor control,
                  visitor management, and the operations behind well-run premises.
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
                categoryLabel: blogCategoryLabels[featured.category],
                tone: blogTones[featured.category],
                dateLabel: featured.dateLabel,
                readingTime: featured.readingTime,
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
                Get new insights in your inbox.
              </h3>
              <p className="mb-4 font-body text-[13px] text-[var(--text-muted)]">
                Practical premises management and compliance guidance, no spam.
              </p>
              <EmailSubscribe />
            </div>
          </Container>
        </section>

        <CtaBanner
          content={{
            ...defaultCtaBanner,
            headline: "Ready to put these ideas into practice?",
            subline: "Book a 30-minute demo tailored to your industry.",
          }}
        />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  )
}

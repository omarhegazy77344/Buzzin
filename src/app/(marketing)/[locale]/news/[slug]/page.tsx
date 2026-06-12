import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { Container } from "@/components/ui/container"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { ArticleBody } from "@/components/content/ArticleBody"
import { ShareLinks } from "@/components/content/ShareLinks"
import { BackLink } from "@/components/content/BackLink"
import { RelatedNews } from "@/components/content/RelatedNews"
import { CategoryBadge, newsTones } from "@/components/content/CategoryBadge"
import { locales } from "@/i18n/config"
import {
  newsPosts,
  newsCategoryLabels,
  defaultCtaBanner,
} from "@/lib/content-defaults"

export const dynamic = "force-static"

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    newsPosts.map((post) => ({ locale, slug: post.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = newsPosts.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: `${post.title} | Buzzin News`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const post = newsPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const basePath = `/${locale}/news`
  const url = `https://buzzin.ae/${locale}/news/${post.slug}`

  const related = newsPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)
    .map((p) => ({ title: p.title, slug: p.slug, dateLabel: p.dateLabel }))

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Buzzin FZCO" },
    publisher: {
      "@type": "Organization",
      name: "Buzzin FZCO",
      url: "https://buzzin.ae",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://buzzin.ae/${locale}` },
      { "@type": "ListItem", position: 2, name: "News & Updates", item: `https://buzzin.ae/${locale}/news` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navbar />

      <main className="bg-[var(--bg-page)] pt-28 pb-16 md:pt-32">
        <Container>
          <nav className="mb-6 font-body text-[12px] text-[var(--text-muted)]">
            <span>Home</span>
            <span className="mx-1.5">/</span>
            <span>News</span>
            <span className="mx-1.5">/</span>
            <span className="line-clamp-1 text-[var(--text-secondary)]">{post.title}</span>
          </nav>

          <div className="mb-6">
            <BackLink href={basePath} label="Back to News" />
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            {/* Main article */}
            <article className="min-w-0">
              <div className="mb-4 flex items-center gap-3">
                <CategoryBadge
                  label={newsCategoryLabels[post.category]}
                  tone={newsTones[post.category]}
                />
                <span className="font-body text-[12px] text-[var(--text-muted)]">
                  {post.dateLabel}
                </span>
              </div>

              <h1 className="mb-6 font-display text-[2rem] leading-[1.15] tracking-[-0.02em] text-[var(--text-primary)] md:text-[2.75rem]">
                {post.title}
              </h1>

              <ArticleBody sections={[{ paragraphs: post.body }]} />

              {/* Author + share */}
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--text-brand)] font-heading text-[12px] font-bold text-[var(--text-primary)]">
                    BT
                  </span>
                  <div>
                    <p className="font-heading text-[13px] font-bold text-[var(--text-primary)]">
                      Buzzin Team
                    </p>
                    <p className="font-body text-[11px] text-[var(--text-muted)]">
                      {post.dateLabel}
                    </p>
                  </div>
                </div>
                <ShareLinks title={post.title} url={url} />
              </div>

              {/* Related row — mobile only */}
              <div className="mt-10 border-t border-[var(--border-subtle)] pt-6 lg:hidden">
                <RelatedNews items={related} basePath={basePath} />
              </div>
            </article>

            {/* Sidebar — desktop */}
            <aside className="hidden lg:block">
              <RelatedNews items={related} basePath={basePath} />
            </aside>
          </div>
        </Container>
      </main>

      <CtaBanner
        content={{
          ...defaultCtaBanner,
          headline: "Want to see what Buzzin can do for your premises?",
          subline: "Book a 30-minute demo tailored to your industry.",
        }}
      />

      <Footer />
      <WhatsAppFab />
    </>
  )
}

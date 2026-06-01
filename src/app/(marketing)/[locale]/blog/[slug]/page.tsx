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
import { TableOfContents } from "@/components/content/TableOfContents"
import { CategoryBadge, blogTones } from "@/components/content/CategoryBadge"
import { locales } from "@/i18n/config"
import {
  blogPosts,
  blogCategoryLabels,
  defaultCtaBanner,
  type BlogSection,
} from "@/lib/content-defaults"

export const dynamic = "force-static"

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: `${post.title} | Buzzin Blog`,
    description: post.excerpt,
    keywords: post.targetKeyword,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  }
}

function countWords(sections: BlogSection[]): number {
  const text = sections
    .flatMap((s) => [
      ...(s.paragraphs ?? []),
      ...(s.bullets ?? []),
      s.quote ?? "",
      s.heading ?? "",
    ])
    .join(" ")
  return text.split(/\s+/).filter(Boolean).length
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const basePath = `/${locale}/blog`
  const url = `https://buzzin.ae/${locale}/blog/${post.slug}`

  const tocItems = post.body
    .filter((s) => s.heading && s.anchor)
    .map((s) => ({ label: s.heading as string, anchor: s.anchor as string }))

  const ctaContent = post.contextualCta
    ? {
        ...defaultCtaBanner,
        headline: post.contextualCta.headline,
        subline: post.contextualCta.subline,
        primaryLabel: post.contextualCta.primaryLabel,
        primaryHref: post.contextualCta.primaryHref,
      }
    : defaultCtaBanner

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    wordCount: countWords(post.body),
    articleSection: blogCategoryLabels[post.category],
    keywords: post.targetKeyword,
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
      { "@type": "ListItem", position: 2, name: "Blog & Insights", item: `https://buzzin.ae/${locale}/blog` },
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
            <span>Blog</span>
            <span className="mx-1.5">/</span>
            <span className="line-clamp-1 text-[var(--text-secondary)]">{post.title}</span>
          </nav>

          <div className="mb-6">
            <BackLink href={basePath} label="Back to Blog" />
          </div>

          <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
            {/* TOC — desktop sidebar (left) */}
            <aside className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Main article */}
            <article className="min-w-0">
              <div className="mb-4 flex items-center gap-3">
                <CategoryBadge
                  label={blogCategoryLabels[post.category]}
                  tone={blogTones[post.category]}
                />
                <span className="font-body text-[12px] text-[var(--text-muted)]">
                  {post.dateLabel} &middot; {post.readingTime} min read
                </span>
              </div>

              <h1 className="mb-6 font-display text-[2rem] leading-[1.15] tracking-[-0.02em] text-[var(--text-primary)] md:text-[2.75rem]">
                {post.title}
              </h1>

              {/* Author block */}
              <div className="mb-8 flex items-center gap-3 border-b border-[var(--border-subtle)] pb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--text-brand)] font-heading text-[12px] font-bold text-[var(--text-primary)]">
                  BT
                </span>
                <div>
                  <p className="font-heading text-[13px] font-bold text-[var(--text-primary)]">
                    Buzzin Team
                  </p>
                  <p className="font-body text-[11px] text-[var(--text-muted)]">
                    {post.dateLabel} &middot; {post.readingTime} min read
                  </p>
                </div>
              </div>

              <ArticleBody sections={post.body} />

              {/* Share */}
              <div className="mt-10 border-t border-[var(--border-subtle)] pt-6">
                <ShareLinks title={post.title} url={url} label="Share this article" />
              </div>
            </article>
          </div>
        </Container>
      </main>

      <CtaBanner content={ctaContent} />

      <Footer />
      <WhatsAppFab />
    </>
  )
}

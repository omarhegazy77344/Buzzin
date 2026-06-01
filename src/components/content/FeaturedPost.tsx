import Link from "next/link"
import { CategoryBadge, type BadgeTone } from "./CategoryBadge"

export type FeaturedPostData = {
  title: string
  excerpt: string
  slug: string
  categoryLabel: string
  tone: BadgeTone
  dateLabel: string
  readingTime?: number
  imageUrl?: string
}

export function FeaturedPost({
  post,
  basePath,
}: {
  post: FeaturedPostData
  basePath: string
}) {
  return (
    <Link
      href={`${basePath}/${post.slug}`}
      className="group grid overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] transition-all duration-[220ms] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md lg:grid-cols-[1.1fr_1fr]"
    >
      {/* Image */}
      <div className="flex min-h-[240px] items-center justify-center bg-[var(--bg-canvas)]">
        {post.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.imageUrl}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-heading text-[12px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
            Featured Image
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
          <CategoryBadge label={post.categoryLabel} tone={post.tone} />
          <span className="font-body text-[11px] text-[var(--text-muted)]">
            {post.dateLabel}
            {post.readingTime ? ` · ${post.readingTime} min read` : ""}
          </span>
        </div>

        <h3 className="mb-3 font-heading text-[20px] font-bold leading-[1.3] text-[var(--text-primary)]">
          {post.title}
        </h3>

        <p className="mb-4 line-clamp-4 font-body text-[14px] leading-[1.65] text-[var(--text-secondary)]">
          {post.excerpt}
        </p>

        <span className="font-heading text-[13px] font-semibold text-[var(--text-brand)]">
          Read more &rarr;
        </span>
      </div>
    </Link>
  )
}

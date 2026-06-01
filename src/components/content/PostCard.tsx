import Link from "next/link"
import { CategoryBadge, type BadgeTone } from "./CategoryBadge"

export type PostCardData = {
  title: string
  excerpt: string
  slug: string
  categoryLabel: string
  tone: BadgeTone
  dateLabel: string
  readingTime?: number
  imageUrl?: string
}

export function PostCard({
  post,
  basePath,
}: {
  post: PostCardData
  basePath: string
}) {
  return (
    <Link
      href={`${basePath}/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] transition-all duration-[220ms] hover:-translate-y-[3px] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md"
    >
      {/* Image area */}
      <div className="flex h-[140px] items-center justify-center bg-[var(--bg-canvas)]">
        {post.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.imageUrl}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-heading text-[11px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
            Buzzin
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-[18px] py-4">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <CategoryBadge label={post.categoryLabel} tone={post.tone} />
          <span className="font-body text-[11px] text-[var(--text-muted)]">
            {post.dateLabel}
            {post.readingTime ? ` · ${post.readingTime} min read` : ""}
          </span>
        </div>

        <h3 className="mb-2 line-clamp-2 font-heading text-[14px] font-bold leading-[1.4] text-[var(--text-primary)]">
          {post.title}
        </h3>

        <p className="line-clamp-2 font-body text-[12px] leading-[1.55] text-[var(--text-secondary)]">
          {post.excerpt}
        </p>

        <span className="mt-3 font-heading text-[12px] font-semibold text-[var(--text-brand)]">
          Read more &rarr;
        </span>
      </div>
    </Link>
  )
}

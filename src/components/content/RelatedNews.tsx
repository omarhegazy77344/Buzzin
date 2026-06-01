import Link from "next/link"

export type RelatedItem = {
  title: string
  slug: string
  dateLabel: string
}

export function RelatedNews({
  items,
  basePath,
  heading = "Related News",
}: {
  items: RelatedItem[]
  basePath: string
  heading?: string
}) {
  if (items.length === 0) return null

  return (
    <div className="sticky top-24">
      <h2 className="mb-4 border-b-2 border-amber-500/20 pb-2.5 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--text-brand)]">
        {heading}
      </h2>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`${basePath}/${item.slug}`}
            className="group flex flex-col gap-1"
          >
            <span className="font-heading text-[13px] font-semibold leading-[1.4] text-[var(--text-primary)] transition-colors group-hover:text-[var(--text-brand)]">
              {item.title}
            </span>
            <span className="font-body text-[11px] text-[var(--text-muted)]">
              {item.dateLabel}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

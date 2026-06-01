import { CategoryBadge, type BadgeTone } from "./CategoryBadge"

export type PressCardData = {
  title: string
  excerpt: string
  source: string
  sourceUrl: string
  categoryLabel: string
  tone: BadgeTone
  dateLabel: string
  imageUrl?: string
}

export function PressCard({ press }: { press: PressCardData }) {
  return (
    <a
      href={press.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-[14px] border-[1.5px] border-[var(--border-default)] bg-[var(--bg-surface)] transition-all duration-[220ms] hover:-translate-y-[3px] hover:border-[rgba(245,166,35,0.4)] hover:shadow-md"
    >
      {/* Image / placeholder */}
      <div className="flex h-[160px] items-center justify-center bg-[var(--bg-canvas)] px-6">
        {press.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={press.imageUrl}
            alt={press.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-center font-heading text-[16px] font-bold text-[var(--text-muted)]">
            {press.source}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 py-[18px]">
        <div className="mb-3">
          <CategoryBadge label={press.categoryLabel} tone={press.tone} />
        </div>

        <p className="mb-2 font-body text-[11px] text-[var(--text-muted)]">
          {press.dateLabel}
        </p>

        <h3 className="mb-2 line-clamp-2 font-heading text-[14px] font-bold leading-[1.4] text-[var(--text-primary)]">
          {press.title}
        </h3>

        <p className="mb-3 font-body text-[12px] text-[var(--text-muted)]">
          {press.source}
        </p>

        <p className="line-clamp-3 font-body text-[12px] leading-[1.55] text-[var(--text-secondary)]">
          {press.excerpt}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-subtle)] pt-3">
          <span className="font-body text-[11px] font-semibold text-[var(--text-muted)]">
            {press.source}
          </span>
          <span className="font-body text-[12px] font-semibold text-[var(--text-brand)]">
            Read article &rarr;
          </span>
        </div>
      </div>
    </a>
  )
}

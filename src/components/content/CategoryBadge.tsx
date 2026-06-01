import type {
  PressCategory,
  NewsCategory,
  BlogCategory,
} from "@/lib/content-defaults"

export type BadgeTone = "amber" | "emerald" | "navy" | "sky" | "slate"

const toneClasses: Record<BadgeTone, string> = {
  amber: "bg-amber-500/10 text-[var(--text-brand)]",
  emerald: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  navy: "bg-[var(--text-primary)]/10 text-[var(--text-primary)]",
  sky: "bg-sky-100 text-[var(--text-primary)] dark:bg-sky-400/10 dark:text-sky-300",
  slate: "bg-slate-500/10 text-slate-700 dark:text-slate-300",
}

export const pressTones: Record<PressCategory, BadgeTone> = {
  media: "amber",
  award: "emerald",
  partnership: "navy",
  event: "sky",
}

export const newsTones: Record<NewsCategory, BadgeTone> = {
  product: "amber",
  partnership: "navy",
  event: "sky",
  company: "slate",
}

export const blogTones: Record<BlogCategory, BadgeTone> = {
  "premises-management": "amber",
  compliance: "amber",
  operations: "slate",
  technology: "amber",
  "industry-trends": "slate",
}

export function CategoryBadge({
  label,
  tone,
}: {
  label: string
  tone: BadgeTone
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-heading text-[9px] font-semibold uppercase tracking-wide ${toneClasses[tone]}`}
    >
      {label}
    </span>
  )
}

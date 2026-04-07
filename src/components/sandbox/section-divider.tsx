type Props = {
  variant: string
  title: string
  description: string
}

export function SectionDivider({ variant, title, description }: Props) {
  return (
    <div className="relative bg-[var(--bg-surface-sunken)] py-8">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <span className="mb-2 inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-0.5 text-body-xs font-bold uppercase tracking-[0.12em] text-[var(--text-brand)]">
          {variant}
        </span>
        <h2 className="mt-3 font-display text-heading-xl text-[var(--text-primary)]">
          {title}
        </h2>
        <p className="mt-2 text-body-md text-[var(--text-secondary)]">
          {description}
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
    </div>
  )
}

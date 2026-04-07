import { cn } from "@/lib/cn"
import { Container } from "./container"

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  bg?: "page" | "canvas" | "surface" | "proof" | "footer" | "hero"
  spacing?: "sm" | "md" | "lg" | "xl"
}

const bgMap: Record<string, string> = {
  page: "bg-[var(--bg-page)]",
  canvas: "bg-[var(--bg-canvas)]",
  surface: "bg-[var(--bg-surface)]",
  proof: "bg-[var(--bg-proof)] text-white",
  footer: "bg-[var(--bg-footer)] text-white",
  hero: "[background:var(--bg-hero)]",
}

const spacingMap: Record<string, string> = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-24",
  xl: "py-24 md:py-32",
}

export function Section({ bg = "page", spacing = "lg", className, children, ...props }: SectionProps) {
  return (
    <section className={cn(bgMap[bg], spacingMap[spacing], className)} {...props}>
      <Container>{children}</Container>
    </section>
  )
}

type SectionHeaderProps = {
  overline?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ overline, title, description, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "mx-auto max-w-3xl text-center", className)}>
      {overline && (
        <p className="mb-3 font-heading text-overline font-semibold uppercase tracking-[0.08em] text-[var(--text-brand)]">
          {overline}
        </p>
      )}
      <h2 className="font-heading text-display-md md:text-display-lg font-bold text-[var(--text-primary)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-body-lg text-[var(--text-secondary)]">{description}</p>
      )}
    </div>
  )
}

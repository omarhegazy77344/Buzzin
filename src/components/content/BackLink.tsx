import Link from "next/link"

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center font-heading text-[13px] font-semibold text-[var(--text-brand)] transition-opacity hover:opacity-80"
    >
      &larr; {label}
    </Link>
  )
}

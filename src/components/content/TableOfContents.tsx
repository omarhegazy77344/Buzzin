"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/cn"

export type TocItem = {
  label: string
  anchor: string
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.anchor ?? "")

  useEffect(() => {
    if (items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: "-100px 0px -66% 0px", threshold: 0 },
    )

    const elements = items
      .map((item) => document.getElementById(item.anchor))
      .filter((el): el is HTMLElement => el !== null)

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <nav className="sticky top-24">
      <h2 className="mb-4 border-b-2 border-amber-500/20 pb-2.5 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--text-brand)]">
        On this page
      </h2>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.anchor}>
            <a
              href={`#${item.anchor}`}
              className={cn(
                "font-body text-[13px] leading-[1.4] transition-colors",
                activeId === item.anchor
                  ? "font-semibold text-[var(--text-brand)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]",
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

import type { BlogSection } from "@/lib/content-defaults"

export function ArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="flex flex-col gap-4">
      {sections.map((section, i) => (
        <div key={section.anchor ?? i} className="flex flex-col gap-4">
          {section.heading && (
            <h2
              id={section.anchor}
              className="mt-8 mb-1 scroll-mt-28 font-heading text-[1.25rem] font-bold text-[var(--text-primary)]"
            >
              {section.heading}
            </h2>
          )}

          {section.paragraphs?.map((p, j) => (
            <p
              key={j}
              className="font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]"
            >
              {p}
            </p>
          ))}

          {section.bullets && section.bullets.length > 0 && (
            <ul className="flex flex-col gap-2.5">
              {section.bullets.map((b, k) => (
                <li key={k} className="flex items-start gap-3">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-brand)]" />
                  <span className="font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {section.quote && (
            <blockquote className="border-l-[3px] border-[var(--text-brand)] pl-5 font-display text-[1.1rem] italic leading-[1.6] text-[var(--text-primary)]">
              {section.quote}
            </blockquote>
          )}
        </div>
      ))}
    </div>
  )
}

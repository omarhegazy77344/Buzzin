"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Globe } from "lucide-react"
import { cn } from "@/lib/cn"
import { locales, type Locale } from "@/i18n/config"

const labels: Record<Locale, string> = {
  en: "عربي",
  ar: "EN",
}

export function LocaleSwitcher({ className }: { className?: string }) {
  const pathname = usePathname()

  const currentLocale = locales.find(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`,
  ) ?? "en"

  const targetLocale = currentLocale === "en" ? "ar" : "en"

  const targetPath = pathname.replace(`/${currentLocale}`, `/${targetLocale}`)

  return (
    <Link
      href={targetPath || `/${targetLocale}`}
      className={cn(
        "flex h-9 items-center gap-1.5 rounded-md px-2.5 text-body-sm font-medium transition-colors",
        "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-raised)]",
        className,
      )}
    >
      <Globe className="h-3.5 w-3.5" />
      {labels[currentLocale as Locale]}
    </Link>
  )
}

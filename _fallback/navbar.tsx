"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/cn"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { BrandLogo } from "@/components/ui/brand-logo"
import { LocaleSwitcher } from "@/components/ui/locale-switcher"

const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Industries", href: "/industries" },
  { label: "Why Buzzin", href: "/why-buzzin" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "h-14 bg-[var(--bg-surface)]/95 shadow-sm backdrop-blur-xl border-b border-[var(--border-subtle)]"
          : "h-16 bg-transparent",
      )}
    >
      <Container className="flex h-full items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center">
          <BrandLogo width={110} height={36} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 font-heading text-body-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher />
          <ThemeToggle />
          <a href="tel:+97143201265" className="flex items-center gap-1.5 text-body-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            <Phone className="h-3.5 w-3.5" />
            +971 4 320 1265
          </a>
          <Button size="sm" asChild>
            <Link href="/book-demo">Book a Demo</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <LocaleSwitcher />
          <ThemeToggle />
          <button
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-[var(--text-primary)]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-14 z-40 bg-[var(--bg-page)] lg:hidden">
          <Container className="flex flex-col gap-2 pt-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 font-heading text-heading-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-surface-raised)]"
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-4 border-[var(--border-subtle)]" />
            <a href="tel:+97143201265" className="flex items-center gap-2 px-4 py-3 font-heading text-heading-sm font-medium text-[var(--text-secondary)]">
              <Phone className="h-4 w-4" />
              +971 4 320 1265
            </a>
            <Button size="lg" className="mt-2 w-full" asChild>
              <Link href="/book-demo">Book a Free Demo</Link>
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}

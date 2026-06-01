"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/cn"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { BrandLogo } from "@/components/ui/brand-logo"
import { LocaleSwitcher } from "@/components/ui/locale-switcher"
import { defaultModules } from "@/lib/content-defaults"

const navLinksLeft = [
  { label: "Why Buzzin", href: "/why-buzzin" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
]

const navLinksRight = [
  { label: "Contact", href: "/contact" },
]

// kept for mobile accordion list
const navLinks = [
  { label: "Why Buzzin", href: "/why-buzzin" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const resourceItems = [
  { name: "News & Updates", desc: "Launches & partnerships", href: "/news" },
  { name: "Press & Media", desc: "Coverage & awards", href: "/press" },
  { name: "FAQ", desc: "Common questions", href: "/faq" },
]

const liveModules = defaultModules.filter((m) => m.status === "live" || m.status === "new")
const soonModules = defaultModules.filter((m) => m.status === "comingSoon" && m.slug === "key-management")

const industryItems = [
  { name: "Hospitality", desc: "Hotels & resorts", href: "/industries/hospitality" },
  { name: "Residential Real Estate", desc: "Communities & towers", href: "/industries/residential-real-estate" },
  { name: "Education", desc: "Schools & campuses", href: "/industries/education" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [platformOpen, setPlatformOpen] = useState(false)
  const [industryOpen, setIndustryOpen] = useState(false)
  const [resourceOpen, setResourceOpen] = useState(false)
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false)
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false)
  const [mobileResourceOpen, setMobileResourceOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeIndustryTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeResourceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setPlatformOpen(true)
  }
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setPlatformOpen(false), 150)
  }
  const openIndustryDropdown = () => {
    if (closeIndustryTimer.current) clearTimeout(closeIndustryTimer.current)
    setIndustryOpen(true)
  }
  const closeIndustryDropdown = () => {
    closeIndustryTimer.current = setTimeout(() => setIndustryOpen(false), 150)
  }
  const openResourceDropdown = () => {
    if (closeResourceTimer.current) clearTimeout(closeResourceTimer.current)
    setResourceOpen(true)
  }
  const closeResourceDropdown = () => {
    closeResourceTimer.current = setTimeout(() => setResourceOpen(false), 150)
  }

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-[var(--bg-surface)]/95 backdrop-blur-xl border-b border-[var(--border-subtle)]",
        scrolled ? "h-14 shadow-sm" : "h-16",
      )}
    >
      <Container className="flex h-full items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center">
          <BrandLogo width={110} height={36} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* Platform dropdown */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-md px-3 py-2 font-heading text-body-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Platform
            </button>

            <AnimatePresence>
              {platformOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full mt-1 w-64 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2 shadow-xl"
                >
                  {liveModules.map((mod) => (
                    <Link
                      key={mod.slug}
                      href={`/platform/${mod.slug}`}
                      onClick={() => setPlatformOpen(false)}
                      className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--bg-surface-raised)]"
                    >
                      <span className="font-heading text-[13px] font-semibold text-[var(--text-primary)]">
                        {mod.name}
                      </span>
                      <span className="font-body text-[11px] text-[var(--text-muted)]">
                        {mod.shortDesc}
                      </span>
                    </Link>
                  ))}
                  {soonModules.length > 0 && (
                    <div className="mt-1 border-t border-[var(--border-subtle)] pt-1">
                      {soonModules.map((mod) => (
                        <Link
                          key={mod.slug}
                          href={`/platform/${mod.slug}`}
                          onClick={() => setPlatformOpen(false)}
                          className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--bg-surface-raised)]"
                        >
                          <span className="flex items-center gap-2 font-heading text-[13px] font-semibold text-[var(--text-secondary)]">
                            {mod.name}
                            <span className="inline-flex items-center rounded-full bg-slate-500/10 px-1.5 py-0.5 font-body text-[9px] font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-400/10 dark:text-slate-400">
                              Soon
                            </span>
                          </span>
                          <span className="font-body text-[11px] text-[var(--text-muted)]">
                            {mod.shortDesc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                  <div className="mt-1 border-t border-[var(--border-subtle)] pt-1">
                    <Link
                      href="/platform"
                      onClick={() => setPlatformOpen(false)}
                      className="flex items-center gap-1 rounded-lg px-3 py-2 font-heading text-[12px] font-medium text-[var(--text-brand)] transition-colors hover:bg-amber-500/5"
                    >
                      View all modules &rarr;
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries dropdown */}
          <div
            className="relative"
            onMouseEnter={openIndustryDropdown}
            onMouseLeave={closeIndustryDropdown}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-md px-3 py-2 font-heading text-body-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Industries
            </button>

            <AnimatePresence>
              {industryOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full mt-1 w-64 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2 shadow-xl"
                >
                  {industryItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIndustryOpen(false)}
                      className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--bg-surface-raised)]"
                    >
                      <span className="font-heading text-[13px] font-semibold text-[var(--text-primary)]">
                        {item.name}
                      </span>
                      <span className="font-body text-[11px] text-[var(--text-muted)]">
                        {item.desc}
                      </span>
                    </Link>
                  ))}
                  <div className="mt-1 border-t border-[var(--border-subtle)] pt-1">
                    <Link
                      href="/industries"
                      onClick={() => setIndustryOpen(false)}
                      className="flex items-center gap-1 rounded-lg px-3 py-2 font-heading text-[12px] font-medium text-[var(--text-brand)] transition-colors hover:bg-amber-500/5"
                    >
                      View all industries &rarr;
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Left nav links: Why Buzzin, About, Blog */}
          {navLinksLeft.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 font-heading text-body-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {link.label}
            </Link>
          ))}

          {/* Resources dropdown — after Blog, before Contact */}
          <div
            className="relative"
            onMouseEnter={openResourceDropdown}
            onMouseLeave={closeResourceDropdown}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-md px-3 py-2 font-heading text-body-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Resources
            </button>

            <AnimatePresence>
              {resourceOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full mt-1 w-64 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2 shadow-xl"
                >
                  {resourceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setResourceOpen(false)}
                      className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--bg-surface-raised)]"
                    >
                      <span className="font-heading text-[13px] font-semibold text-[var(--text-primary)]">
                        {item.name}
                      </span>
                      <span className="font-body text-[11px] text-[var(--text-muted)]">
                        {item.desc}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right nav links: Contact */}
          {navLinksRight.map((link) => (
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
    </header>

    {/* Mobile overlay — outside header to avoid backdrop-filter containing block */}
    {mobileOpen && (
      <div className="fixed inset-0 top-14 z-[45] overflow-y-auto bg-[var(--bg-page)] lg:hidden">
          <Container className="flex flex-col gap-2 pt-6 pb-8">
            {/* Platform accordion */}
            <button
              type="button"
              onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
              className="flex items-center justify-between rounded-lg px-4 py-3 font-heading text-heading-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-surface-raised)]"
            >
              Platform
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobilePlatformOpen && "rotate-180")} />
            </button>
            {mobilePlatformOpen && (
              <div className="ml-4 flex flex-col gap-0.5">
                {liveModules.map((mod) => (
                  <Link
                    key={mod.slug}
                    href={`/platform/${mod.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-2.5 transition-colors hover:bg-[var(--bg-surface-raised)]"
                  >
                    <span className="font-heading text-[14px] font-medium text-[var(--text-primary)]">
                      {mod.name}
                    </span>
                    <span className="block font-body text-[11px] text-[var(--text-muted)]">
                      {mod.shortDesc}
                    </span>
                  </Link>
                ))}
                {soonModules.map((mod) => (
                  <Link
                    key={mod.slug}
                    href={`/platform/${mod.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-2.5 transition-colors hover:bg-[var(--bg-surface-raised)]"
                  >
                    <span className="flex items-center gap-2 font-heading text-[14px] font-medium text-[var(--text-secondary)]">
                      {mod.name}
                      <span className="inline-flex items-center rounded-full bg-slate-500/10 px-1.5 py-0.5 font-body text-[9px] font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-400/10 dark:text-slate-400">
                        Soon
                      </span>
                    </span>
                    <span className="block font-body text-[11px] text-[var(--text-muted)]">
                      {mod.shortDesc}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/platform"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-2 font-heading text-[13px] font-medium text-[var(--text-brand)]"
                >
                  View all modules &rarr;
                </Link>
              </div>
            )}

            {/* Industries accordion */}
            <button
              type="button"
              onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)}
              className="flex items-center justify-between rounded-lg px-4 py-3 font-heading text-heading-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-surface-raised)]"
            >
              Industries
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileIndustryOpen && "rotate-180")} />
            </button>
            {mobileIndustryOpen && (
              <div className="ml-4 flex flex-col gap-0.5">
                {industryItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-2.5 transition-colors hover:bg-[var(--bg-surface-raised)]"
                  >
                    <span className="font-heading text-[14px] font-medium text-[var(--text-primary)]">
                      {item.name}
                    </span>
                    <span className="block font-body text-[11px] text-[var(--text-muted)]">
                      {item.desc}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/industries"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-2 font-heading text-[13px] font-medium text-[var(--text-brand)]"
                >
                  View all industries &rarr;
                </Link>
              </div>
            )}

            {/* Resources accordion */}
            <button
              type="button"
              onClick={() => setMobileResourceOpen(!mobileResourceOpen)}
              className="flex items-center justify-between rounded-lg px-4 py-3 font-heading text-heading-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-surface-raised)]"
            >
              Resources
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileResourceOpen && "rotate-180")} />
            </button>
            {mobileResourceOpen && (
              <div className="ml-4 flex flex-col gap-0.5">
                {resourceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-2.5 transition-colors hover:bg-[var(--bg-surface-raised)]"
                  >
                    <span className="font-heading text-[14px] font-medium text-[var(--text-primary)]">
                      {item.name}
                    </span>
                    <span className="block font-body text-[11px] text-[var(--text-muted)]">
                      {item.desc}
                    </span>
                  </Link>
                ))}
              </div>
            )}

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
    </>
  )
}

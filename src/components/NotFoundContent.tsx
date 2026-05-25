"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Layers, Building2, HelpCircle, Shield, Info,
  Phone, MessageCircle, Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { BRAND_EASE } from "@/lib/motion"

const linkCards = [
  { icon: Layers, label: "Platform", href: "/en/platform" },
  { icon: Building2, label: "Industries", href: "/en/industries" },
  { icon: HelpCircle, label: "FAQ", href: "/en/faq" },
  { icon: Shield, label: "Security", href: "/en/security-compliance" },
  { icon: Info, label: "About", href: "/en/about" },
  { icon: Phone, label: "Contact", href: "/en/contact" },
]

const cardItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: BRAND_EASE } },
}

const cardsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } },
}

export function NotFoundContent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg-page)] px-5 py-20">
      <div className="mx-auto max-w-[640px] text-center">
        {/* 404 number */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: BRAND_EASE }}
          className="select-none bg-gradient-to-br from-[var(--text-brand)] to-[rgba(245,166,35,0.3)] bg-clip-text font-display text-[5rem] leading-none tracking-[-0.04em] text-transparent md:text-[8rem]"
          style={{ marginBottom: "8px" }}
        >
          404
        </motion.p>

        {/* Bee icon (inline brand SVG) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: BRAND_EASE }}
          className="mx-auto mb-6"
          style={{ width: 40, height: 40 }}
        >
          <svg viewBox="0 0 64 64" width={40} height={40} fill="none" aria-hidden="true">
            <ellipse cx="29" cy="20" rx="11" ry="22" transform="rotate(24 29 20)" fill="var(--text-primary)" />
            <ellipse cx="36" cy="31" rx="14" ry="24" transform="rotate(42 36 31)" fill="var(--text-brand)" />
            <circle cx="11" cy="52" r="6" fill="var(--text-primary)" />
          </svg>
        </motion.div>

        {/* Content block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: BRAND_EASE }}
        >
          <h1 className="mb-3 font-heading text-[1.25rem] font-bold tracking-[-0.02em] text-[var(--text-primary)] md:text-[1.75rem]">
            This page does not exist.
          </h1>
          <p className="mx-auto mb-8 max-w-[440px] font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
            The page you are looking for may have moved or the link may be incorrect. Use the links below to find what you need.
          </p>

          {/* Primary actions */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/en">Go to Homepage &rarr;</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/en/book-demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Divider */}
          <hr className="mx-auto mb-7 max-w-[400px] border-0 border-t border-[var(--border-default)]" />

          {/* Label */}
          <p className="mb-4 text-center font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-brand)]">
            Or Go Directly To
          </p>

          {/* Link cards grid */}
          <motion.div
            variants={cardsContainerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto grid max-w-[560px] grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {linkCards.map((card) => (
              <motion.div key={card.label} variants={cardItemVariants}>
                <Link
                  href={card.href}
                  className="group flex flex-col items-center justify-center rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-canvas)] px-4 py-3.5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(245,166,35,0.3)] hover:bg-[var(--bg-surface)]"
                >
                  <card.icon className="mx-auto mb-1.5 h-[18px] w-[18px] text-[var(--text-brand)]" strokeWidth={1.75} />
                  <span className="font-heading text-[12px] font-semibold text-[var(--text-primary)]">
                    {card.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom contact row */}
          <div className="mt-8">
            <p className="font-body text-[13px] text-[var(--text-muted)]">
              Need help? Contact us directly:
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a
                href="tel:+97143201265"
                className="flex items-center gap-2 font-body text-[13px] text-[var(--text-brand)] hover:underline"
              >
                <Phone className="h-[14px] w-[14px]" strokeWidth={1.75} />
                +971 4 3201265
              </a>
              <a
                href="https://wa.me/97143201265"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-[13px] text-[var(--text-brand)] hover:underline"
              >
                <MessageCircle className="h-[14px] w-[14px] text-[#25D366]" strokeWidth={1.75} />
                WhatsApp
              </a>
              <a
                href="mailto:info@buzzin.ae"
                className="flex items-center gap-2 font-body text-[13px] text-[var(--text-brand)] hover:underline"
              >
                <Mail className="h-[14px] w-[14px]" strokeWidth={1.75} />
                info@buzzin.ae
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

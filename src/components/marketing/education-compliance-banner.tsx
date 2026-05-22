"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"
import { Container } from "@/components/ui/container"
import { BRAND_EASE } from "@/lib/motion"

export function EducationComplianceBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: BRAND_EASE }}
      className="relative overflow-hidden bg-[var(--text-brand)] py-5 px-8"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <AlertTriangle className="h-[22px] w-[22px] shrink-0 text-[var(--text-primary)]" strokeWidth={1.5} />
            <div>
              <p className="font-heading text-[15px] font-bold text-[var(--text-primary)]">
                UAE Federal Decree-Law No. 26/2025 — Child Digital Safety
              </p>
              <p className="font-body text-[13px] text-[var(--text-primary)]/70">
                All UAE schools must have auditable safeguarding records by January 2027.
              </p>
            </div>
          </div>
          <Link
            href="/en/book-demo"
            className="shrink-0 rounded-[7px] bg-[var(--text-primary)] px-[18px] py-[9px] font-heading text-[13px] font-bold text-white transition-opacity hover:opacity-90"
          >
            Check Your School&apos;s Compliance &rarr;
          </Link>
        </div>
      </Container>
    </motion.section>
  )
}

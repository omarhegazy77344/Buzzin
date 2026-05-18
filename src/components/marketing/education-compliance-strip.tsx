"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"
import { Container } from "@/components/ui/container"
import { BRAND_EASE } from "@/lib/motion"

export function EducationComplianceStrip() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: BRAND_EASE }}
      className="relative overflow-hidden bg-[var(--text-brand)] py-5"
      style={{
        backgroundImage: [
          "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
        ].join(", "),
        backgroundSize: "40px 40px",
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: BRAND_EASE }}
          className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-4 px-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: BRAND_EASE }}
            className="flex items-center gap-4"
          >
            <AlertTriangle className="h-[22px] w-[22px] shrink-0 text-[var(--text-primary)]" strokeWidth={1.5} />
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.p
                variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
                className="font-heading text-[15px] font-bold text-[var(--text-primary)]"
              >
                UAE Federal Decree-Law No. 26/2025 — Child Digital Safety
              </motion.p>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
                className="font-body text-[13px] text-[var(--text-primary)]/70"
              >
                All UAE schools must have auditable safeguarding records by January 2027.
              </motion.p>
            </motion.div>
          </motion.div>
          <Link
            href="/en/book-demo"
            className="inline-flex items-center rounded-[7px] bg-[var(--text-primary)] px-[18px] py-[9px] font-heading text-[13px] font-bold text-white transition-opacity hover:opacity-90"
          >
            Check Your School&apos;s Compliance &rarr;
          </Link>
        </motion.div>
      </Container>
    </motion.section>
  )
}

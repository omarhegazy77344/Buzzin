"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Server, FileCheck, Fingerprint } from "lucide-react"
import { Container } from "@/components/ui/container"
import { defaultSecurityCerts } from "@/lib/content-defaults"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"

const iconMap: Record<string, typeof Shield> = {
  "ISO 27001": Shield,
  "SOC 1/2/3": Lock,
  "GDPR Aligned": FileCheck,
  "UAE Pass": Fingerprint,
  "On-Prem Available": Server,
}

type SecurityBarProps = {
  certs?: string[]
}

export function SecurityBar({ certs }: SecurityBarProps) {
  const data = certs && certs.length > 0 ? certs : defaultSecurityCerts

  return (
    <section className="relative overflow-hidden bg-[#141830] py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: BRAND_EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-2 font-heading text-overline font-semibold uppercase tracking-[0.12em] text-amber-400/80">
            Security & Compliance
          </p>
          <h2 className="font-heading text-display-sm font-bold text-white md:text-display-md">
            Enterprise-grade security. GCC&#8209;native&nbsp;compliance.
          </h2>
        </motion.div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-stretch justify-center gap-3 md:mt-12 md:gap-4">
          {data.map((cert, i) => {
            const Icon = iconMap[cert] || Shield
            return (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.45, delay: i * 0.07, ease: BRAND_EASE }}
                className="group flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.04] px-5 py-3 backdrop-blur-sm transition-colors duration-300 hover:border-amber-500/20 hover:bg-white/[0.07]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500/10 ring-1 ring-amber-500/20 transition-all duration-300 group-hover:bg-amber-500/15 group-hover:ring-amber-500/30">
                  <Icon className="h-4.5 w-4.5 text-amber-400" strokeWidth={1.5} />
                </span>
                <span className="font-heading text-body-sm font-semibold text-white/90">{cert}</span>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, delay: 0.4, ease: BRAND_EASE }}
          className="mx-auto mt-8 max-w-xl text-center text-body-sm text-gray-400"
        >
          Meeting the security and compliance requirements of financial institutions, government
          schools, and luxury hospitality groups across the&nbsp;GCC.
        </motion.p>
      </Container>
    </section>
  )
}

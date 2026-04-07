"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Server, FileCheck, Fingerprint } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { defaultSecurityCerts } from "@/lib/content-defaults"

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
    <Section bg="page" spacing="lg">
      <SectionHeader
        overline="Security & Compliance"
        title="Enterprise-grade security. GCC-native compliance."
        description="Buzzin meets the security and compliance requirements of financial institutions, government schools, and luxury hospitality groups across the GCC."
      />

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {data.map((cert, i) => {
          const Icon = iconMap[cert] || Shield
          return (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 text-center"
            >
              <Icon className="h-8 w-8 text-[var(--text-brand)]" strokeWidth={1.5} />
              <p className="mt-3 font-heading text-body-sm font-semibold text-[var(--text-primary)]">{cert}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

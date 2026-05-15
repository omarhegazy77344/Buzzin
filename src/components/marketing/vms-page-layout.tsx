"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"
import { BRAND_EASE, VIEWPORT } from "@/lib/motion"
import { CheckCircle, AlertCircle } from "lucide-react"

/* ─── Shared variants ─── */

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: BRAND_EASE } },
}

/* ─── VmsHero ─── */

export function VmsHero({
  left,
  right,
}: {
  left: ReactNode
  right: ReactNode
}) {
  return (
    <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="order-1"
      >
        {left}
      </motion.div>
      <motion.div
        className="relative order-2"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: BRAND_EASE }}
      >
        {right}
      </motion.div>
    </div>
  )
}

export function HeroBlock({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div variants={fadeUp} className={className}>{children}</motion.div>
}

/* ─── Dashboard mock ─── */

const barHeights = [55, 70, 45, 80, 60, 75, 100]

export function DashboardMock() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-5 rounded-[20px] bg-[radial-gradient(ellipse,rgba(245,166,35,0.06)_0%,transparent_70%)]" />

      {/* Main card */}
      <div className="relative z-[1] overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-[0_24px_60px_rgba(30,37,71,0.10)]">
        {/* Header */}
        <div className="flex items-center justify-between bg-[var(--bg-proof)] px-4 py-2.5">
          <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-[var(--text-brand)]">
            Live Dashboard
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-heading text-[10px] text-white/50">LIVE</span>
          </span>
        </div>

        {/* Body */}
        <div className="p-3.5">
          {/* KPIs */}
          <div className="mb-2.5 grid grid-cols-3 gap-2">
            {[
              { val: "2,341", label: "Visitors Today", pct: 72, color: "bg-amber-500" },
              { val: "847", label: "Active Permits", pct: 55, color: "bg-navy-800" },
              { val: "24", label: "Patrols Done", pct: 88, color: "bg-emerald-500" },
            ].map((k) => (
              <div key={k.label} className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2.5">
                <p className="font-heading text-[20px] font-bold text-[var(--text-primary)]">{k.val}</p>
                <p className="font-body text-[9px] text-[var(--text-muted)]">{k.label}</p>
                <div className="mt-1.5 h-[3px] w-full rounded-full bg-[var(--border-subtle)]">
                  <div className={`h-full rounded-full ${k.color}`} style={{ width: `${k.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="mb-2 rounded-lg bg-[var(--bg-canvas)] p-2.5">
            <p className="mb-2 font-heading text-[9px] font-semibold uppercase text-[var(--text-muted)]">
              Visitor Traffic — This Week
            </p>
            <div className="flex items-end gap-1.5" style={{ height: 44 }}>
              {barHeights.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${i === barHeights.length - 1 ? "bg-amber-500" : "bg-amber-500/20"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Module row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { mod: "VMS", stat: "2,341 visitors" },
              { mod: "Permits", stat: "847 active" },
              { mod: "Events", stat: "12 today" },
            ].map((m) => (
              <div key={m.mod} className="rounded-[7px] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-2">
                <p className="font-heading text-[9px] font-bold text-[var(--text-primary)]">{m.mod}</p>
                <p className="font-body text-[9px] text-[var(--text-muted)]">{m.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating card — top right */}
      <div className="absolute -right-3 -top-3.5 z-[2] animate-float rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-surface)] px-3 py-2.5 shadow-[0_8px_24px_rgba(30,37,71,0.10)]">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-emerald-500" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-[10px] font-bold text-[var(--text-primary)]">Visitor Approved</p>
            <p className="font-body text-[9px] text-[var(--text-muted)]">
              Charles Anderson · <span className="text-emerald-600">Accepted</span>
            </p>
          </div>
        </div>
      </div>

      {/* Floating card — bottom left */}
      <div className="absolute -left-4 bottom-5 z-[2] animate-float [animation-delay:1.8s] rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-surface)] px-3 py-2.5 shadow-[0_8px_24px_rgba(30,37,71,0.10)]">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-amber-500" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-[10px] font-bold text-[var(--text-primary)]">Work Permit Active</p>
            <p className="font-body text-[9px] text-[var(--text-muted)]">
              Gate scan confirmed · <span className="text-emerald-600">Valid</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Section reveal wrappers ─── */

export function VmsSectionReveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: BRAND_EASE }}
    >
      {children}
    </motion.div>
  )
}

export function VmsStaggerGrid({
  children,
  className,
  interval = 0.1,
}: {
  children: ReactNode
  className?: string
  interval?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: interval } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function VmsStaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: BRAND_EASE } },
      }}
    >
      {children}
    </motion.div>
  )
}

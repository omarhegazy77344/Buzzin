"use client"

import { Crown, MessageSquare } from "lucide-react"
import { CheckCircle } from "lucide-react"

export function QueueDashboardMock() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-5 rounded-[20px] bg-[radial-gradient(ellipse,rgba(245,166,35,0.06)_0%,transparent_70%)]" />

      {/* Main card */}
      <div className="relative z-[1] overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-[0_24px_60px_rgba(30,37,71,0.10)]">
        {/* Header */}
        <div className="flex items-center justify-between bg-[var(--bg-proof)] px-4 py-2.5">
          <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-[var(--text-brand)]">
            Queue Dashboard
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
              { val: "47", label: "In Queue", pct: 65, color: "bg-amber-500" },
              { val: "8 min", label: "Avg Wait", pct: 45, color: "bg-[var(--text-primary)]" },
              { val: "3", label: "Counters Open", pct: 75, color: "bg-emerald-500" },
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

          {/* Queue list preview */}
          <div className="mb-2 rounded-lg bg-[var(--bg-canvas)] p-2.5">
            <p className="mb-2 font-heading text-[9px] font-semibold uppercase text-[var(--text-muted)]">
              Next In Queue
            </p>
            <div className="space-y-0">
              {/* VIP row */}
              <div className="flex items-center justify-between rounded-[6px] bg-amber-500/5 px-2 py-1.5 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-[10px] font-bold text-[var(--text-brand)]">A001</span>
                  <span className="rounded-full bg-amber-500/15 border border-amber-500/30 px-1.5 py-0.5 font-heading text-[8px] font-bold text-[var(--text-brand)]">VIP</span>
                </div>
                <span className="font-body text-[9px] text-[var(--text-muted)]">Counter 1</span>
              </div>
              {/* Regular rows */}
              <div className="flex items-center justify-between px-2 py-1.5 border-b border-[var(--border-subtle)]">
                <span className="font-heading text-[10px] font-bold text-[var(--text-primary)]">A002</span>
                <span className="font-body text-[9px] text-[var(--text-muted)]">Counter 2</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1.5 border-b border-[var(--border-subtle)]">
                <span className="font-heading text-[10px] font-bold text-[var(--text-primary)]">A003</span>
                <span className="font-body text-[9px] text-[var(--text-muted)]">Waiting</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1.5">
                <span className="font-body text-[9px] text-[var(--text-muted)]">A004</span>
                <span className="font-body text-[9px] text-[var(--text-muted)]">~12 min</span>
              </div>
            </div>
          </div>

          {/* Token sent indicator */}
          <div className="flex items-center gap-2 rounded-[7px] border border-emerald-500/20 bg-emerald-500/8 px-2.5 py-1.5">
            <CheckCircle className="h-3 w-3 text-emerald-600" strokeWidth={2} />
            <span className="font-body text-[9px] text-emerald-700">WhatsApp token sent to A003</span>
          </div>
        </div>
      </div>

      {/* Floating card — top right */}
      <div className="absolute -right-3 -top-3.5 z-[2] animate-float rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-surface)] px-3 py-2.5 shadow-[0_8px_24px_rgba(30,37,71,0.10)]">
        <div className="flex items-center gap-2">
          <Crown className="h-5 w-5 text-amber-500" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-[10px] font-bold text-[var(--text-primary)]">VIP Routed</p>
            <p className="font-body text-[9px] text-[var(--text-muted)]">
              Counter 1 · <span className="text-[var(--text-brand)]">Priority</span>
            </p>
          </div>
        </div>
      </div>

      {/* Floating card — bottom left */}
      <div className="absolute -left-4 bottom-5 z-[2] animate-float [animation-delay:1.8s] rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-surface)] px-3 py-2.5 shadow-[0_8px_24px_rgba(30,37,71,0.10)]">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-emerald-500" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-[10px] font-bold text-[var(--text-primary)]">Token Sent</p>
            <p className="font-body text-[9px] text-[var(--text-muted)]">
              A003 · <span className="text-emerald-600">Sent</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

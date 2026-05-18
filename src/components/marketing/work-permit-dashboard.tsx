"use client"

import { CheckCircle, AlertCircle } from "lucide-react"

const calendarDays = [
  { day: "Mon", count: 12, today: false },
  { day: "Tue", count: 8, today: false },
  { day: "Wed", count: 15, today: false },
  { day: "Thu", count: 19, today: true },
  { day: "Fri", count: 6, today: false },
  { day: "Sat", count: 3, today: false },
  { day: "Sun", count: 2, today: false },
]

const permitTypes = [
  { type: "Maintenance", active: "423 active" },
  { type: "Construction", active: "289 active" },
  { type: "Cleaning", active: "135 active" },
  { type: "Other", active: "0 active" },
]

export function WorkPermitDashboard() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-5 rounded-[20px] bg-[radial-gradient(ellipse,rgba(245,166,35,0.06)_0%,transparent_70%)]" />

      {/* Main card */}
      <div className="relative z-[1] overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-[0_24px_60px_rgba(30,37,71,0.10)]">
        {/* Header */}
        <div className="flex items-center justify-between bg-[var(--bg-proof)] px-4 py-2.5">
          <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-[var(--text-brand)]">
            Permit Dashboard
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="font-heading text-[10px] text-white/50">LIVE</span>
          </span>
        </div>

        {/* Body */}
        <div className="p-3.5">
          {/* KPIs */}
          <div className="mb-2.5 grid grid-cols-3 gap-2">
            {[
              { val: "847", label: "Active Permits", pct: 68, color: "bg-amber-500" },
              { val: "23", label: "Pending Approval", pct: 30, color: "bg-amber-500/40" },
              { val: "12", label: "Expiring Soon", pct: 20, color: "bg-red-400" },
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

          {/* Calendar preview */}
          <div className="mb-2 rounded-lg bg-[var(--bg-canvas)] p-2.5">
            <p className="mb-2 font-heading text-[9px] font-semibold uppercase text-[var(--text-muted)]">
              Permit Calendar — This Week
            </p>
            <div className="flex gap-1">
              {calendarDays.map((d) => (
                <div
                  key={d.day}
                  className={`flex-1 rounded p-1.5 text-center ${
                    d.today
                      ? "bg-amber-500 text-white"
                      : "bg-[var(--bg-canvas)] text-[var(--text-primary)]"
                  }`}
                >
                  <p className={`font-heading text-[8px] font-semibold ${d.today ? "text-white/70" : "text-[var(--text-muted)]"}`}>
                    {d.day}
                  </p>
                  <p className="font-heading text-[11px] font-bold">{d.count}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Permit type grid */}
          <div className="grid grid-cols-2 gap-2">
            {permitTypes.map((p) => (
              <div key={p.type} className="rounded-[7px] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-2">
                <p className="font-heading text-[9px] font-bold text-[var(--text-primary)]">{p.type}</p>
                <p className="font-body text-[9px] text-[var(--text-muted)]">{p.active}</p>
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
            <p className="font-heading text-[10px] font-bold text-[var(--text-primary)]">Permit Verified</p>
            <p className="font-body text-[9px] text-[var(--text-muted)]">
              Gate scan — 1.8 seconds · <span className="text-emerald-600">Valid</span>
            </p>
          </div>
        </div>
      </div>

      {/* Floating card — bottom left */}
      <div className="absolute -left-4 bottom-5 z-[2] animate-float [animation-delay:1.8s] rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-surface)] px-3 py-2.5 shadow-[0_8px_24px_rgba(30,37,71,0.10)]">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-amber-500" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-[10px] font-bold text-[var(--text-primary)]">Permit Expiring</p>
            <p className="font-body text-[9px] text-[var(--text-muted)]">
              Tomorrow · <span className="text-amber-600">Alert sent</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

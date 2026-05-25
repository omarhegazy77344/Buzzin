"use client"

import { Bell, Wifi, CheckCircle, Clock, XCircle, AlertTriangle } from "lucide-react"

export function AttendanceDashboardMock() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-5 rounded-[20px] bg-[radial-gradient(ellipse,rgba(245,166,35,0.06)_0%,transparent_70%)]" />

      {/* Main card */}
      <div className="relative z-[1] overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-[0_24px_60px_rgba(30,37,71,0.10)]">
        {/* Header */}
        <div className="flex items-center justify-between bg-[var(--bg-proof)] px-4 py-2.5">
          <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-[var(--text-brand)]">
            Attendance Dashboard
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
              { val: "94%", label: "On Time", pct: 94, color: "bg-emerald-500" },
              { val: "6", label: "Late Today", pct: 35, color: "bg-amber-500" },
              { val: "2", label: "Absent", pct: 12, color: "bg-red-500" },
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

          {/* Attendance log */}
          <div className="mb-2 rounded-lg bg-[var(--bg-canvas)] p-2.5">
            <p className="mb-2 font-heading text-[9px] font-semibold uppercase text-[var(--text-muted)]">
              Today&apos;s Log
            </p>
            <div className="space-y-0">
              <div className="flex items-center justify-between rounded-[6px] px-2 py-1.5 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-emerald-600" strokeWidth={2} />
                  <span className="font-heading text-[10px] font-bold text-[var(--text-primary)]">Sara K.</span>
                </div>
                <span className="font-body text-[9px] text-[var(--text-muted)]">07:58 &middot; On time</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1.5 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-emerald-600" strokeWidth={2} />
                  <span className="font-heading text-[10px] font-bold text-[var(--text-primary)]">Mariam J.</span>
                </div>
                <span className="font-body text-[9px] text-[var(--text-muted)]">08:01 &middot; On time</span>
              </div>
              <div className="flex items-center justify-between rounded-[6px] bg-amber-500/5 px-2 py-1.5 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 text-amber-600" strokeWidth={2} />
                  <span className="font-heading text-[10px] font-bold text-[var(--text-primary)]">Ahmed R.</span>
                </div>
                <span className="font-body text-[9px] text-amber-700">08:17 &middot; Late</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1.5">
                <div className="flex items-center gap-2">
                  <XCircle className="h-3 w-3 text-red-500" strokeWidth={2} />
                  <span className="font-body text-[10px] text-[var(--text-muted)]">Khaled M.</span>
                </div>
                <span className="font-body text-[9px] text-red-500">Absent</span>
              </div>
            </div>
          </div>

          {/* Alert strip */}
          <div className="flex items-center gap-2 rounded-[7px] border border-amber-500/20 bg-amber-500/[0.08] px-2.5 py-1.5">
            <AlertTriangle className="h-3 w-3 text-amber-600" strokeWidth={2} />
            <span className="font-body text-[9px] text-amber-700">Late alert sent &mdash; Ahmed Al Rashidi</span>
          </div>
        </div>
      </div>

      {/* Floating card — top right */}
      <div className="absolute -right-3 -top-3.5 z-[2] animate-float rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-surface)] px-3 py-2.5 shadow-[0_8px_24px_rgba(30,37,71,0.10)]">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-amber-500" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-[10px] font-bold text-[var(--text-primary)]">Late Arrival Alert</p>
            <p className="font-body text-[9px] text-[var(--text-muted)]">
              Ahmed R. &middot; <span className="text-amber-600">17 min late</span>
            </p>
          </div>
        </div>
      </div>

      {/* Floating card — bottom left */}
      <div className="absolute -left-4 bottom-5 z-[2] animate-float [animation-delay:1.8s] rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-surface)] px-3 py-2.5 shadow-[0_8px_24px_rgba(30,37,71,0.10)]">
        <div className="flex items-center gap-2">
          <Wifi className="h-5 w-5 text-emerald-500" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-[10px] font-bold text-[var(--text-primary)]">NFC Tap Logged</p>
            <p className="font-body text-[9px] text-[var(--text-muted)]">
              Sara K. &middot; <span className="text-emerald-600">07:58</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

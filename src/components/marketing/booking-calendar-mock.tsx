"use client"

import { CheckCircle, QrCode } from "lucide-react"

type DayCell =
  | { kind: "dots"; count: number }
  | { kind: "today"; label: string }
  | { kind: "empty" }

const dayHeaders = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const weekCells: DayCell[] = [
  { kind: "dots", count: 2 },
  { kind: "dots", count: 1 },
  { kind: "dots", count: 3 },
  { kind: "today", label: "4" },
  { kind: "dots", count: 1 },
  { kind: "dots", count: 2 },
  { kind: "empty" },
]

const legend = [
  { label: "Pending", dot: "bg-amber-500/50" },
  { label: "Approved", dot: "bg-amber-500" },
  { label: "Ongoing", dot: "bg-emerald-500" },
  { label: "Completed", dot: "bg-[var(--text-primary)]" },
]

const tiles = [
  { val: "12", label: "Today", tone: "text-[var(--text-brand)]" },
  { val: "3", label: "Pending", tone: "text-[var(--text-primary)]" },
  { val: "89%", label: "Utilisation", tone: "text-emerald-600" },
]

function DotsCell({ count }: { count: number }) {
  return (
    <div className="flex flex-col items-center gap-1 p-1">
      <span className="font-heading text-[8px] font-semibold text-transparent select-none">.</span>
      <div className="flex flex-wrap items-center justify-center gap-0.5">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-amber-500" />
        ))}
      </div>
    </div>
  )
}

function TodayCell({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 p-1">
      <span className="font-heading text-[8px] font-semibold text-transparent select-none">.</span>
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-amber-500 font-heading text-[9px] font-bold text-[var(--text-primary)]">
        {label}
      </span>
    </div>
  )
}

function EmptyCell() {
  return (
    <div className="flex flex-col items-center gap-1 p-1">
      <span className="font-heading text-[8px] font-semibold text-transparent select-none">.</span>
      <span className="h-1 w-1 rounded-full bg-transparent" />
    </div>
  )
}

export function BookingCalendarMock() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-5 rounded-[20px] bg-[radial-gradient(ellipse,rgba(245,166,35,0.06)_0%,transparent_70%)]" />

      {/* Main card */}
      <div className="relative z-[1] overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-[0_24px_60px_rgba(30,37,71,0.10)]">
        {/* Header */}
        <div className="flex items-center justify-between bg-[var(--bg-proof)] px-4 py-2.5">
          <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-[var(--text-brand)]">
            Booking Dashboard
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-heading text-[10px] text-white/50">LIVE</span>
          </span>
        </div>

        {/* Body */}
        <div className="p-3.5">
          {/* Calendar view block */}
          <div className="mb-2 rounded-lg bg-[var(--bg-canvas)] p-2.5">
            <p className="mb-2 font-heading text-[9px] font-semibold uppercase text-[var(--text-muted)]">
              October &mdash; Calendar View
            </p>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1">
              {dayHeaders.map((d) => (
                <span
                  key={d}
                  className="text-center font-heading text-[8px] font-semibold uppercase text-[var(--text-muted)]"
                >
                  {d}
                </span>
              ))}
            </div>

            {/* Booking status row */}
            <div className="mt-1 grid grid-cols-7 gap-1">
              {weekCells.map((cell, i) => {
                if (cell.kind === "today") return <TodayCell key={i} label={cell.label} />
                if (cell.kind === "empty") return <EmptyCell key={i} />
                return <DotsCell key={i} count={cell.count} />
              })}
            </div>

            {/* Status legend */}
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {legend.map((l) => (
                <span key={l.label} className="flex items-center gap-1">
                  <span className={`h-1 w-1 rounded-full ${l.dot}`} />
                  <span className="font-heading text-[8px] font-medium text-[var(--text-muted)]">
                    {l.label}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Live tiles row */}
          <div className="grid grid-cols-3 gap-2">
            {tiles.map((t) => (
              <div
                key={t.label}
                className="rounded-[7px] border border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-2 py-1.5 text-center"
              >
                <p className={`font-heading text-[16px] font-bold leading-tight ${t.tone}`}>{t.val}</p>
                <p className="font-body text-[9px] text-[var(--text-muted)]">{t.label}</p>
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
            <p className="font-heading text-[10px] font-bold text-[var(--text-primary)]">Booking Confirmed</p>
            <p className="font-body text-[9px] text-[var(--text-muted)]">
              Ballroom A &middot; Oct 15 &middot; 12 guests &middot;{" "}
              <span className="text-emerald-600">Confirmed</span>
            </p>
          </div>
        </div>
      </div>

      {/* Floating card — bottom left */}
      <div className="absolute -left-4 bottom-5 z-[2] animate-float [animation-delay:1.8s] rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-surface)] px-3 py-2.5 shadow-[0_8px_24px_rgba(30,37,71,0.10)]">
        <div className="flex items-center gap-2">
          <QrCode className="h-5 w-5 text-amber-500" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-[10px] font-bold text-[var(--text-primary)]">12 QR Passes Issued</p>
            <p className="font-body text-[9px] text-[var(--text-muted)]">
              Per member &mdash; group booking &middot;{" "}
              <span className="text-[var(--text-brand)]">Sent</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

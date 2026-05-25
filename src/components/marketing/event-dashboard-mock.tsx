"use client"

import { CheckCircle, Clock, MapPin, Mail } from "lucide-react"

export function EventDashboardMock() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-5 rounded-[20px] bg-[radial-gradient(ellipse,rgba(245,166,35,0.06)_0%,transparent_70%)]" />

      {/* Main card */}
      <div className="relative z-[1] overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-[0_24px_60px_rgba(30,37,71,0.10)]">
        {/* Header */}
        <div className="flex items-center justify-between bg-[var(--bg-proof)] px-4 py-2.5">
          <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-[var(--text-brand)]">
            Event Dashboard
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-heading text-[10px] text-white/50">LIVE</span>
          </span>
        </div>

        {/* Body */}
        <div className="p-3.5">
          {/* Event info row */}
          <div className="mb-2 rounded-lg bg-[var(--bg-canvas)] p-2.5">
            <p className="mb-2 font-heading text-[10px] font-bold uppercase tracking-wide text-[var(--text-primary)]">
              Annual Gala Dinner — Tonight
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { val: "342", label: "Registered", className: "text-[var(--text-brand)]" },
                { val: "298", label: "Checked In", className: "text-[var(--text-primary)]" },
                { val: "44", label: "Pending", className: "text-[var(--text-muted)]" },
              ].map((k) => (
                <div key={k.label}>
                  <p className={`font-heading text-[18px] font-bold ${k.className}`}>{k.val}</p>
                  <p className="font-body text-[9px] text-[var(--text-muted)]">{k.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent check-ins */}
          <div className="mb-2 rounded-lg bg-[var(--bg-canvas)] p-2.5">
            <p className="mb-1.5 font-heading text-[9px] font-semibold uppercase text-[var(--text-muted)]">
              Recent Check-ins
            </p>
            <div className="space-y-0">
              {/* Row 1 */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] py-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-emerald-500" strokeWidth={2} />
                  <span className="font-body text-[10px] text-[var(--text-primary)]">Sarah Al Mansouri</span>
                </div>
                <span className="font-body text-[9px] text-[var(--text-muted)]">VIP Table 1</span>
              </div>
              {/* Row 2 */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] py-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-emerald-500" strokeWidth={2} />
                  <span className="font-body text-[10px] text-[var(--text-primary)]">James Richardson</span>
                </div>
                <span className="font-body text-[9px] text-[var(--text-muted)]">Table 8</span>
              </div>
              {/* Row 3 */}
              <div className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 text-amber-500" strokeWidth={2} />
                  <span className="font-body text-[10px] text-[var(--text-primary)]">Ahmed Al Rashidi</span>
                </div>
                <span className="font-body text-[9px] text-[var(--text-brand)]">Pending</span>
              </div>
            </div>
          </div>

          {/* Location badge */}
          <div className="flex items-center gap-2 rounded-[7px] border border-emerald-500/20 bg-emerald-500/8 px-2.5 py-1.5">
            <MapPin className="h-3 w-3 text-emerald-600" strokeWidth={2} />
            <span className="font-body text-[9px] text-emerald-700">Location verified — Ballroom A</span>
          </div>
        </div>
      </div>

      {/* Floating card — top right */}
      <div className="absolute -right-3 -top-3.5 z-[2] animate-float rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-surface)] px-3 py-2.5 shadow-[0_8px_24px_rgba(30,37,71,0.10)]">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-emerald-500" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-[10px] font-bold text-[var(--text-primary)]">QR Verified</p>
            <p className="font-body text-[9px] text-[var(--text-muted)]">
              Sarah Al Mansouri · <span className="text-emerald-600">VIP</span>
            </p>
          </div>
        </div>
      </div>

      {/* Floating card — bottom left */}
      <div className="absolute -left-4 bottom-5 z-[2] animate-float [animation-delay:1.8s] rounded-[10px] border border-[var(--border-default)] bg-[var(--bg-surface)] px-3 py-2.5 shadow-[0_8px_24px_rgba(30,37,71,0.10)]">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-amber-500" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-[10px] font-bold text-[var(--text-primary)]">Invitation Sent</p>
            <p className="font-body text-[9px] text-[var(--text-muted)]">
              342 attendees · <span className="text-[var(--text-brand)]">Delivered</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

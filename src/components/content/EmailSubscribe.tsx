"use client"

import { useState } from "react"
import { Loader2, CheckCircle } from "lucide-react"

export function EmailSubscribe() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    const trimmed = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.")
      return
    }

    setStatus("loading")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
      setError("Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto flex max-w-[420px] items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
        <CheckCircle className="h-4 w-4 text-emerald-600" />
        <span className="font-body text-[13px] text-emerald-700 dark:text-emerald-400">
          You are subscribed. Thanks for joining.
        </span>
      </div>
    )
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-[420px] flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Your email address"
          className="flex-1 rounded-lg border border-[var(--border-default)] bg-white px-4 py-3 font-body text-[13px] text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-all duration-200 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center justify-center rounded-lg bg-[var(--text-brand)] px-5 py-3 font-heading text-[12px] font-bold text-[var(--text-primary)] transition-opacity duration-200 hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
        </button>
      </form>
      {error ? (
        <p className="mt-2 text-center font-body text-[11px] text-red-500">{error}</p>
      ) : (
        <p className="mt-2 text-center font-body text-[10px] text-[var(--text-muted)]">
          No spam. Unsubscribe anytime.
        </p>
      )}
    </div>
  )
}

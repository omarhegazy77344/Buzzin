"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/cn"
import Link from "next/link"

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Please tell us a bit more"),
})

type FormData = z.infer<typeof schema>

const subjects = [
  "I am a new client — general enquiry",
  "I am an existing client — support request",
  "Partnership or integration enquiry",
  "Press or media enquiry",
  "Billing or account question",
  "Other",
]

const inputBase =
  "w-full rounded-lg border border-[var(--border-default)] bg-white px-4 py-3 font-body text-[14px] text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-all duration-200 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20"

const errorText = "mt-1 font-body text-[12px] text-red-500"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [serverError, setServerError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: FormData) {
    setStatus("loading")
    setServerError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "contact" }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error || "Something went wrong.")
      }

      setStatus("success")
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <CheckCircle className="h-12 w-12 text-[#F5A623]" strokeWidth={1.5} />
        <h3 className="mt-5 font-heading text-[22px] font-bold text-[var(--text-primary)]">
          Message sent.
        </h3>
        <p className="mt-3 max-w-sm font-body text-[15px] leading-relaxed text-[var(--text-secondary)]">
          We will be in touch within 4 business hours.
        </p>
        <Link
          href="/en"
          className="mt-6 font-heading text-[13px] font-bold text-[#F5A623] transition-colors hover:text-[#E09015]"
        >
          &larr; Back to homepage
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Full Name */}
      <div className="mb-4">
        <label className="mb-1.5 block font-heading text-[13px] font-medium text-[var(--text-primary)]">
          Full Name <span className="text-[#F5A623]">*</span>
        </label>
        <input
          type="text"
          placeholder="Your full name"
          className={cn(inputBase, errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          {...register("name")}
        />
        {errors.name && <p className={errorText}>{errors.name.message}</p>}
      </div>

      {/* Company */}
      <div className="mb-4">
        <label className="mb-1.5 block font-heading text-[13px] font-medium text-[var(--text-primary)]">
          Company <span className="text-[#F5A623]">*</span>
        </label>
        <input
          type="text"
          placeholder="Your organisation"
          className={cn(inputBase, errors.company && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          {...register("company")}
        />
        {errors.company && <p className={errorText}>{errors.company.message}</p>}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="mb-1.5 block font-heading text-[13px] font-medium text-[var(--text-primary)]">
          Email <span className="text-[#F5A623]">*</span>
        </label>
        <input
          type="email"
          placeholder="your@company.com"
          className={cn(inputBase, errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          {...register("email")}
        />
        {errors.email && <p className={errorText}>{errors.email.message}</p>}
      </div>

      {/* Phone (optional) */}
      <div className="mb-4">
        <label className="mb-1.5 block font-heading text-[13px] font-medium text-[var(--text-primary)]">
          Phone
        </label>
        <input
          type="tel"
          placeholder="+971 XX XXX XXXX"
          className={inputBase}
          {...register("phone")}
        />
      </div>

      {/* Subject */}
      <div className="mb-4">
        <label className="mb-1.5 block font-heading text-[13px] font-medium text-[var(--text-primary)]">
          Subject <span className="text-[#F5A623]">*</span>
        </label>
        <select
          className={cn(inputBase, "appearance-none", errors.subject && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          defaultValue=""
          {...register("subject")}
        >
          <option value="" disabled>
            What can we help with?
          </option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.subject && <p className={errorText}>{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="mb-1.5 block font-heading text-[13px] font-medium text-[var(--text-primary)]">
          Message <span className="text-[#F5A623]">*</span>
        </label>
        <textarea
          rows={5}
          placeholder="Tell us how we can help you..."
          className={cn(inputBase, "resize-none", errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          {...register("message")}
        />
        {errors.message && <p className={errorText}>{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-[#F5A623] font-heading text-[14px] font-bold text-black transition-all duration-200 hover:bg-[#E09015] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(245,166,35,0.35)] disabled:pointer-events-none disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message \u2192"
        )}
      </button>

      {status === "error" && serverError && (
        <p className="mt-3 text-center font-body text-[13px] text-red-500">{serverError}</p>
      )}

      <p className="mt-4 text-center font-body text-[10px] leading-relaxed text-[var(--text-muted)]">
        Your message is confidential and will only be read by the Buzzin team.
      </p>
    </form>
  )
}

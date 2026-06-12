"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/cn"

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  jobTitle: z.string().min(2, "Job title must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Phone must be at least 8 characters"),
  industry: z.string().min(1, "Please select your industry"),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const industries = [
  "Real Estate & Communities",
  "Hospitality",
  "Education",
  "Other",
]

const inputBase =
  "w-full rounded-lg border border-[var(--border-default)] bg-white px-4 py-3 font-body text-[14px] text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-all duration-200 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20"

const errorText = "mt-1 font-body text-[12px] text-red-500"

export function BookDemoForm() {
  const router = useRouter()
  const { locale } = useParams<{ locale: string }>()
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
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error || "Something went wrong.")
      }

      router.push(`/${locale}/thank-you`)
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  /* ── Form ── */
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-6 border-b border-[#E8EDF5] pb-6">
        <h2 className="font-display text-[26px] font-extrabold leading-tight text-[#1E2547]">
          Tell us about your premises
        </h2>
        <p className="mt-2 font-body text-[15px] leading-relaxed text-[var(--text-tertiary)]">
          We will match you with the right specialist and confirm a time within four business hours.
        </p>
      </div>

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

      {/* Company Name */}
      <div className="mb-4">
        <label className="mb-1.5 block font-heading text-[13px] font-medium text-[var(--text-primary)]">
          Company Name <span className="text-[#F5A623]">*</span>
        </label>
        <input
          type="text"
          placeholder="Organisation name"
          className={cn(inputBase, errors.company && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          {...register("company")}
        />
        {errors.company && <p className={errorText}>{errors.company.message}</p>}
      </div>

      {/* Job Title */}
      <div className="mb-4">
        <label className="mb-1.5 block font-heading text-[13px] font-medium text-[var(--text-primary)]">
          Job Title <span className="text-[#F5A623]">*</span>
        </label>
        <input
          type="text"
          placeholder="Your role"
          className={cn(inputBase, errors.jobTitle && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          {...register("jobTitle")}
        />
        {errors.jobTitle && <p className={errorText}>{errors.jobTitle.message}</p>}
      </div>

      {/* Work Email */}
      <div className="mb-4">
        <label className="mb-1.5 block font-heading text-[13px] font-medium text-[var(--text-primary)]">
          Work Email <span className="text-[#F5A623]">*</span>
        </label>
        <input
          type="email"
          placeholder="your@company.com"
          className={cn(inputBase, errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          {...register("email")}
        />
        {errors.email && <p className={errorText}>{errors.email.message}</p>}
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="mb-1.5 block font-heading text-[13px] font-medium text-[var(--text-primary)]">
          Phone Number <span className="text-[#F5A623]">*</span>
        </label>
        <input
          type="tel"
          placeholder="+971 XX XXX XXXX"
          className={cn(inputBase, errors.phone && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          {...register("phone")}
        />
        {errors.phone && <p className={errorText}>{errors.phone.message}</p>}
      </div>

      {/* Industry */}
      <div className="mb-4">
        <label className="mb-1.5 block font-heading text-[13px] font-medium text-[var(--text-primary)]">
          Industry <span className="text-[#F5A623]">*</span>
        </label>
        <select
          className={cn(inputBase, "appearance-none", errors.industry && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          defaultValue=""
          {...register("industry")}
        >
          <option value="" disabled>
            Select your industry
          </option>
          {industries.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
        {errors.industry && <p className={errorText}>{errors.industry.message}</p>}
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="mb-1.5 block font-heading text-[13px] font-medium text-[var(--text-primary)]">
          Tell us about your premises
        </label>
        <textarea
          rows={3}
          placeholder="Number of sites, main challenge you want to solve, anything useful for us to prepare"
          className={cn(inputBase, "resize-none")}
          {...register("message")}
        />
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
          "Request My Demo →"
        )}
      </button>

      {/* Server error */}
      {status === "error" && serverError && (
        <p className="mt-3 text-center font-body text-[13px] text-red-500">{serverError}</p>
      )}

      {/* Privacy micro-text */}
      <p className="mt-4 text-center font-body text-[10px] leading-relaxed text-[var(--text-muted)]">
        Your information is kept confidential and never shared with third parties.
      </p>
    </form>
  )
}

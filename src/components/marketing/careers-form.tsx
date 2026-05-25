"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { CheckCircle, Loader2, Upload, FileText, X } from "lucide-react"
import { cn } from "@/lib/cn"

const MAX_CV_BYTES = 5 * 1024 * 1024 // 5 MB
const ACCEPTED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]

const schema = z.object({
  fullName: z.string().min(2, "Please share your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(8, "Please enter a valid phone number."),
  role: z.string().min(1, "Please pick the role you are applying for."),
  location: z.string().min(2, "Where are you currently based?"),
  linkedin: z.string().url("Enter a full URL (https://...)").optional().or(z.literal("")),
  message: z.string().min(10, "Tell us a bit more — at least a couple of sentences."),
})

type FormData = z.infer<typeof schema>

const ROLE_OPTIONS = [
  "Engineering",
  "Design",
  "Sales",
  "Marketing",
  "Customer Success",
  "Something else",
]

const inputBase =
  "w-full rounded-lg border border-[var(--border-default)] bg-white px-4 py-3 font-body text-[14px] text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-all duration-200 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20"

const errorText = "mt-1 font-body text-[12px] text-red-500"

const labelText =
  "mb-1.5 block font-heading text-[12px] font-semibold text-[var(--text-secondary)]"

type CareersFormProps = {
  defaultRole?: string
}

export function CareersForm({ defaultRole }: CareersFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [serverError, setServerError] = useState("")
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [cvError, setCvError] = useState("")
  const [cvInputKey, setCvInputKey] = useState(0)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      role: defaultRole ?? "",
      location: "",
      linkedin: "",
      message: "",
    },
  })

  function validateCv(file: File): string {
    if (file.size > MAX_CV_BYTES) return "CV must be 5 MB or smaller."
    if (file.type && !ACCEPTED_CV_TYPES.includes(file.type))
      return "CV must be a PDF or Word document."
    return ""
  }

  function handleFileSelected(file: File | null) {
    if (!file) {
      setCvFile(null)
      setCvError("")
      return
    }
    const err = validateCv(file)
    if (err) {
      setCvError(err)
      setCvFile(null)
      return
    }
    setCvError("")
    setCvFile(file)
  }

  async function onSubmit(values: FormData) {
    setServerError("")
    setStatus("loading")

    try {
      const fd = new FormData()
      fd.set("fullName", values.fullName)
      fd.set("email", values.email)
      fd.set("phone", values.phone)
      fd.set("role", values.role)
      fd.set("location", values.location)
      if (values.linkedin) fd.set("linkedin", values.linkedin)
      fd.set("message", values.message)
      if (cvFile) fd.set("cv", cvFile)

      const res = await fetch("/api/careers", { method: "POST", body: fd })
      const body = await res.json().catch(() => ({}))

      if (!res.ok) {
        setStatus("error")
        setServerError(body?.error ?? "Something went wrong. Please try again.")
        return
      }

      setStatus("success")
      reset()
      setCvFile(null)
      setCvInputKey((k) => k + 1)
    } catch {
      setStatus("error")
      setServerError("Network error. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15">
          <CheckCircle className="h-6 w-6 text-emerald-600" strokeWidth={1.75} />
        </div>
        <h3 className="mb-2 font-heading text-[20px] font-bold text-[var(--text-primary)]">
          Application received.
        </h3>
        <p className="mb-5 font-body text-[14px] leading-[1.65] text-[var(--text-secondary)]">
          Thanks for applying. We have sent a confirmation to your inbox. If your background fits what we are looking for, someone from our team will be in touch within 5 business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="font-body text-[13px] font-semibold text-[var(--text-brand)] hover:underline"
        >
          Submit another application &rarr;
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelText}>Full name</label>
          <input id="fullName" type="text" autoComplete="name" {...register("fullName")} className={inputBase} placeholder="Your full name" />
          {errors.fullName && <p className={errorText}>{errors.fullName.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelText}>Email</label>
          <input id="email" type="email" autoComplete="email" {...register("email")} className={inputBase} placeholder="you@example.com" />
          {errors.email && <p className={errorText}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelText}>Phone</label>
          <input id="phone" type="tel" autoComplete="tel" {...register("phone")} className={inputBase} placeholder="+971 50 000 0000" />
          {errors.phone && <p className={errorText}>{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="location" className={labelText}>Current location</label>
          <input id="location" type="text" {...register("location")} className={inputBase} placeholder="Dubai, UAE" />
          {errors.location && <p className={errorText}>{errors.location.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="role" className={labelText}>Role you are applying for</label>
        <select id="role" {...register("role")} className={cn(inputBase, "bg-white")}>
          <option value="">Select a role</option>
          {ROLE_OPTIONS.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        {errors.role && <p className={errorText}>{errors.role.message}</p>}
      </div>

      <div>
        <label htmlFor="linkedin" className={labelText}>
          LinkedIn or portfolio <span className="text-[var(--text-muted)] font-normal">(optional)</span>
        </label>
        <input id="linkedin" type="url" {...register("linkedin")} className={inputBase} placeholder="https://linkedin.com/in/your-handle" />
        {errors.linkedin && <p className={errorText}>{errors.linkedin.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelText}>Tell us a bit about you</label>
        <textarea
          id="message"
          {...register("message")}
          className={cn(inputBase, "min-h-[120px] resize-y")}
          placeholder="What you have built, what you are looking for, and why Buzzin caught your eye."
        />
        {errors.message && <p className={errorText}>{errors.message.message}</p>}
      </div>

      {/* CV upload zone */}
      <div>
        <p className={labelText}>CV / Resume</p>
        {cvFile ? (
          <div className="flex items-center justify-between rounded-lg border border-[var(--border-default)] bg-white px-4 py-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <FileText className="h-4 w-4 shrink-0 text-[var(--text-brand)]" strokeWidth={1.75} />
              <div className="overflow-hidden">
                <p className="truncate font-body text-[13px] font-semibold text-[var(--text-primary)]">{cvFile.name}</p>
                <p className="font-body text-[11px] text-[var(--text-muted)]">{(cvFile.size / 1024).toFixed(0)} KB</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleFileSelected(null)}
              className="ml-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              aria-label="Remove CV"
            >
              <X className="h-3.5 w-3.5" strokeWidth={1.75} />
            </button>
          </div>
        ) : (
          <label
            htmlFor="cv"
            className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[var(--border-default)] bg-white px-4 py-6 text-center transition-colors hover:border-[#F5A623] hover:bg-amber-500/[0.04]"
          >
            <Upload className="h-5 w-5 text-[var(--text-brand)]" strokeWidth={1.5} />
            <span className="font-body text-[13px] font-semibold text-[var(--text-primary)]">
              Drop your CV here or click to upload
            </span>
            <span className="font-body text-[11px] text-[var(--text-muted)]">
              PDF or Word &middot; max 5 MB
            </span>
          </label>
        )}
        <input
          key={cvInputKey}
          id="cv"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="sr-only"
          onChange={(e) => handleFileSelected(e.target.files?.[0] ?? null)}
        />
        {cvError && <p className={errorText}>{cvError}</p>}
      </div>

      {serverError && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/[0.06] px-4 py-3 font-body text-[13px] text-red-600">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 font-heading text-[14px] font-semibold text-white shadow-brand transition-all duration-200 hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
            Sending application...
          </>
        ) : (
          <>Send application &rarr;</>
        )}
      </button>

      <p className="font-body text-[11px] leading-[1.6] text-[var(--text-muted)]">
        By submitting, you agree that Buzzin may contact you about this application. Read our{" "}
        <Link href="/en/privacy-policy" className="text-[var(--text-brand)] hover:underline">privacy policy</Link>.
      </p>
    </form>
  )
}

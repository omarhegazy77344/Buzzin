export type LeadChannel = "form" | "whatsapp" | "phone"

export type LeadSubmission = {
  name?: string
  email?: string
  phone?: string
  company?: string
  jobTitle?: string
  industry?: string
  premisesDescription?: string
  locale: "en" | "ar"
  sourcePage?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  channel: LeadChannel
  createdAt?: Date
}

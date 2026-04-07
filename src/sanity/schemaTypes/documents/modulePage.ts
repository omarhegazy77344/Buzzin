import { PresentationIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

const moduleOptions = [
  { title: "Visitor Management System", value: "visitor-management-system" },
  { title: "Work Permit", value: "work-permit-system" },
  { title: "Queue Management System", value: "queue-management" },
  { title: "Booking", value: "booking-management" },
  { title: "Event", value: "event-management" },
  { title: "Attendance", value: "attendance-management" },
  { title: "Safeguarding", value: "safeguarding" },
  { title: "Patrolling", value: "patrolling" },
]

export const modulePageType = defineType({
  name: "modulePage",
  title: "Module page",
  type: "document",
  icon: PresentationIcon,
  fields: [
    defineField({ name: "internalName", title: "Internal name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "moduleKey", title: "Module key", type: "string", options: { list: moduleOptions }, validation: (rule) => rule.required() }),
    defineField({ name: "title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: (document) => (document as { title?: { en?: string }; internalName?: string })?.title?.en || (document as { internalName?: string }).internalName || "" } }),
    defineField({ name: "summary", type: "localizedText" }),
    defineField({ name: "heroHeadline", type: "localizedString" }),
    defineField({ name: "heroSubheadline", type: "localizedText" }),
    defineField({ name: "featuredImage", type: "imageWithAlt" }),
    defineField({ name: "content", type: "localizedRichText" }),
    defineField({
      name: "relatedClients",
      title: "Related clients",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "client" }] })],
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "faq" }] })],
    }),
    defineField({ name: "ctaBlock", title: "CTA block", type: "reference", to: [{ type: "ctaBlock" }] }),
    defineField({ name: "seo", title: "SEO", type: "seoMetadata" }),
  ],
  preview: {
    select: { title: "internalName", subtitle: "moduleKey" },
  },
})




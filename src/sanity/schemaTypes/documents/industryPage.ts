import { EarthGlobeIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

const industryOptions = [
  { title: "Residential", value: "residential" },
  { title: "Education", value: "education" },
  { title: "Hospitality", value: "hospitality" },
  { title: "Corporate", value: "corporate" },
  { title: "Financial", value: "financial" },
  { title: "Government", value: "government" },
]

export const industryPageType = defineType({
  name: "industryPage",
  title: "Industry page",
  type: "document",
  icon: EarthGlobeIcon,
  fields: [
    defineField({ name: "internalName", title: "Internal name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "industryKey", title: "Industry key", type: "string", options: { list: industryOptions }, validation: (rule) => rule.required() }),
    defineField({ name: "title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: (document) => (document as { title?: { en?: string }; internalName?: string })?.title?.en || (document as { internalName?: string }).internalName || "" } }),
    defineField({ name: "summary", type: "localizedText" }),
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
  preview: { select: { title: "internalName", subtitle: "industryKey" } },
})




import { DocumentIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export const seoLandingPageType = defineType({
  name: "seoLandingPage",
  title: "SEO landing page",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({ name: "internalName", title: "Internal name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: (document) => (document as { title?: { en?: string }; internalName?: string })?.title?.en || (document as { internalName?: string }).internalName || "" } }),
    defineField({ name: "primaryKeyword", title: "Primary keyword", type: "string" }),
    defineField({ name: "summary", type: "localizedText" }),
    defineField({ name: "featuredImage", type: "imageWithAlt" }),
    defineField({ name: "body", type: "localizedRichText" }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "faq" }] })],
    }),
    defineField({ name: "ctaBlock", title: "CTA block", type: "reference", to: [{ type: "ctaBlock" }] }),
    defineField({ name: "seo", title: "SEO", type: "seoMetadata" }),
  ],
  preview: { select: { title: "internalName", subtitle: "primaryKeyword" } },
})




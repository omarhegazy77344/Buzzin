import { DocumentTextIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const simpleTextPageType = defineType({
  name: "simpleTextPage",
  title: "Simple text page",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: "internalName", title: "Internal name", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "pageKind",
      title: "Page kind",
      type: "string",
      options: { list: ["about", "privacy-policy", "terms", "security", "other"] },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: (document) => (document as { title?: { en?: string }; internalName?: string })?.title?.en || (document as { internalName?: string }).internalName || "" } }),
    defineField({ name: "intro", type: "localizedText" }),
    defineField({ name: "body", type: "localizedRichText" }),
    defineField({ name: "seo", title: "SEO", type: "seoMetadata" }),
  ],
  preview: { select: { title: "internalName", subtitle: "pageKind" } },
})




import { LaunchIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const bookDemoPageType = defineType({
  name: "bookDemoPage",
  title: "Book a Demo page",
  type: "document",
  icon: LaunchIcon,
  fields: [
    defineField({ name: "title", title: "Page title", type: "localizedString" }),
    defineField({ name: "intro", title: "Intro copy", type: "localizedText" }),
    defineField({ name: "successHeadline", title: "Success headline", type: "localizedString" }),
    defineField({ name: "successBody", title: "Success body", type: "localizedText" }),
    defineField({ name: "seo", title: "SEO", type: "seoMetadata" }),
  ],
  preview: { prepare: () => ({ title: "Book a Demo Page" }) },
})

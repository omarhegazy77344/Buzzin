import { LaunchIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const ctaBlockType = defineType({
  name: "ctaBlock",
  title: "CTA block",
  type: "document",
  icon: LaunchIcon,
  fields: [
    defineField({ name: "internalName", title: "Internal name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "headline", title: "Headline", type: "localizedString" }),
    defineField({ name: "subheadline", title: "Sub-headline", type: "localizedText" }),
    defineField({ name: "primaryButtonText", title: "Primary button text", type: "localizedString" }),
    defineField({ name: "primaryButtonLink", title: "Primary button link", type: "string" }),
    defineField({ name: "secondaryButtonText", title: "Secondary button text", type: "localizedString" }),
    defineField({ name: "secondaryButtonLink", title: "Secondary button link", type: "string" }),
    defineField({ name: "whatsAppEnabled", title: "Enable WhatsApp button", type: "boolean", initialValue: false }),
    defineField({ name: "whatsAppPrefill", title: "WhatsApp pre-fill message", type: "localizedText", hidden: ({ parent }) => !parent?.whatsAppEnabled }),
    defineField({ name: "showPhoneNumber", title: "Show phone number", type: "boolean", initialValue: false }),
    defineField({
      name: "backgroundStyle",
      title: "Background style",
      type: "string",
      options: { list: ["amber", "navy", "white"], layout: "radio" },
      initialValue: "amber",
    }),
  ],
  preview: { select: { title: "internalName", subtitle: "backgroundStyle" } },
})

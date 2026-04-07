import { CogIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({ name: "siteName", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "logoLight",
      title: "Logo — Light mode",
      description: "Displayed when the site is in light mode",
      type: "image",
      options: { accept: ".svg,.png,.webp" },
    }),
    defineField({
      name: "logoDark",
      title: "Logo — Dark mode",
      description: "Displayed when the site is in dark mode",
      type: "image",
      options: { accept: ".svg,.png,.webp" },
    }),
    defineField({ name: "defaultSeo", title: "Default SEO", type: "seoMetadata" }),
    defineField({ name: "phoneNumber", type: "string" }),
    defineField({ name: "whatsAppNumber", title: "WhatsApp number", type: "string" }),
    defineField({ name: "emailAddress", title: "Email address", type: "string", validation: (rule) => rule.email() }),
    defineField({ name: "physicalAddress", title: "Physical address", type: "localizedText" }),
    defineField({ name: "googleAnalyticsId", title: "Google Analytics ID", type: "string" }),
    defineField({ name: "footerTagline", title: "Footer tagline", type: "localizedString" }),
    defineField({
      name: "socialLinks",
      title: "Social media URLs",
      type: "object",
      fields: [
        defineField({ name: "linkedin", type: "url" }),
        defineField({ name: "instagram", type: "url" }),
        defineField({ name: "facebook", type: "url" }),
        defineField({ name: "x", title: "X / Twitter", type: "url" }),
        defineField({ name: "youtube", type: "url" }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
})

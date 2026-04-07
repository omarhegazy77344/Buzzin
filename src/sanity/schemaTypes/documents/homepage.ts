import { HomeIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({ name: "pageTitle", title: "Page title", type: "localizedString" }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "localizedString" }),
    defineField({ name: "heroSubheadline", title: "Hero subheadline", type: "localizedText" }),
    defineField({ name: "heroImage", title: "Hero image (legacy)", type: "imageWithAlt", hidden: true }),
    defineField({
      name: "heroCarouselImages",
      title: "Hero carousel images",
      description: "Add images to rotate in the hero section. The more you add, the more appear in the carousel.",
      type: "array",
      of: [defineArrayMember({ type: "imageWithAlt" })],
    }),
    defineField({ name: "primaryCta", title: "Primary CTA block", type: "reference", to: [{ type: "ctaBlock" }] }),
    defineField({
      name: "trustClients",
      title: "Trust bar clients",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "client" }] })],
    }),
    defineField({ name: "content", title: "Homepage editorial content", type: "localizedRichText" }),
    defineField({ name: "seo", title: "SEO", type: "seoMetadata" }),
  ],
  preview: { prepare: () => ({ title: "Homepage" }) },
})

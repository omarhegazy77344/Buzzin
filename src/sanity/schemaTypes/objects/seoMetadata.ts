import { defineField, defineType } from "sanity"

export const seoMetadataType = defineType({
  name: "seoMetadata",
  title: "SEO metadata",
  type: "object",
  fields: [
    defineField({ name: "metaTitle", title: "Meta title", type: "localizedString" }),
    defineField({ name: "metaDescription", title: "Meta description", type: "localizedText" }),
    defineField({ name: "ogImage", title: "Open Graph image", type: "imageWithAlt" }),
  ],
})

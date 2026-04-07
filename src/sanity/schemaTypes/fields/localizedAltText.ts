import { defineField, defineType } from "sanity"

export const localizedAltTextType = defineType({
  name: "localizedAltText",
  title: "Localized alt text",
  type: "object",
  fields: [
    defineField({ name: "en", title: "English alt text", type: "string" }),
    defineField({ name: "ar", title: "Arabic alt text", type: "string" }),
  ],
})

import { defineField, defineType } from "sanity"

export const localizedRichTextType = defineType({
  name: "localizedRichText",
  title: "Localized rich text",
  type: "object",
  fields: [
    defineField({ name: "en", title: "English", type: "simpleBlockContent" }),
    defineField({ name: "ar", title: "Arabic", type: "simpleBlockContent" }),
  ],
})

import { defineField, defineType } from "sanity"

export const imageWithAltType = defineType({
  name: "imageWithAlt",
  title: "Image with alt text",
  type: "object",
  fields: [
    defineField({
      name: "asset",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "alt",
      title: "Alt text",
      type: "localizedAltText",
    }),
    defineField({
      name: "usageTag",
      title: "Usage tag",
      type: "string",
      options: {
        list: ["logo", "illustration", "screenshot", "photo"],
        layout: "radio",
      },
      initialValue: "photo",
    }),
  ],
})

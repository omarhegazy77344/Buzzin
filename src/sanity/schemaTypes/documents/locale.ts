import { TranslateIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const localeType = defineType({
  name: "locale",
  title: "Locale",
  type: "document",
  icon: TranslateIcon,
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "tag", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "isDefault", title: "Default locale", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "name", subtitle: "tag" } },
})

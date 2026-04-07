import { HelpCircleIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  icon: HelpCircleIcon,
  fields: [
    defineField({ name: "question", title: "Question", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "answer", title: "Answer", type: "localizedRichText", validation: (rule) => rule.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["General", "VMS", "Work Permits", "Security", "Billing"] },
    }),
    defineField({
      name: "showOnPages",
      title: "Show on pages",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: [
          { type: "homepage" },
          { type: "modulePage" },
          { type: "industryPage" },
          { type: "seoLandingPage" },
          { type: "simpleTextPage" },
          { type: "bookDemoPage" },
        ] }),
      ],
    }),
    defineField({ name: "sortOrder", title: "Sort order", type: "number", initialValue: 0 }),
  ],
  preview: { select: { title: "question.en", subtitle: "category" } },
})

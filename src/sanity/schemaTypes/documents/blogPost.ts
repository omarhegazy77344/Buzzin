import { ComposeIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export const blogPostType = defineType({
  name: "blogPost",
  title: "Blog post",
  type: "document",
  icon: ComposeIcon,
  fields: [
    defineField({ name: "title", title: "Title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: (document) => (document as { title?: { en?: string } })?.title?.en || "" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "authorName", title: "Author name", type: "string" }),
    defineField({ name: "publishDate", title: "Publish date", type: "datetime" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "UAE Compliance",
          "Community Management",
          "Hospitality",
          "Education",
          "Real Estate",
          "Industry News",
        ],
      },
    }),
    defineField({ name: "featuredImage", title: "Featured image", type: "imageWithAlt" }),
    defineField({ name: "body", title: "Body content", type: "localizedRichText" }),
    defineField({ name: "seo", title: "SEO", type: "seoMetadata" }),
    defineField({
      name: "relatedArticles",
      title: "Related articles",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "blogPost" }] })],
    }),
    defineField({ name: "ctaBlock", title: "CTA block", type: "reference", to: [{ type: "ctaBlock" }] }),
  ],
  preview: { select: { title: "title.en", subtitle: "publishDate" } },
})




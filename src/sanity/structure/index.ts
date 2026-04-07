import {
  CogIcon,
  ComposeIcon,
  DocumentIcon,
  DocumentTextIcon,
  EarthGlobeIcon,
  HomeIcon,
  HelpCircleIcon,
  LaunchIcon,
  PresentationIcon,
  TranslateIcon,
  UserIcon,
} from "@sanity/icons"
import type { ComponentType } from "react"
import type { StructureResolver } from "sanity/structure"

const SINGLETON_TYPES = ["homepage", "siteSettings", "bookDemoPage"]
const GROUPED_TYPES = ["modulePage", "industryPage", "seoLandingPage", "simpleTextPage", "blogPost", "ctaBlock", "faq", "client", "locale"]

function singletonItem(S: Parameters<StructureResolver>[0], typeName: string, title: string, icon?: ComponentType) {
  return S.listItem().title(title).icon(icon).child(S.document().schemaType(typeName).documentId(typeName).title(title))
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Buzzin Content")
    .items([
      singletonItem(S, "siteSettings", "Site Settings", CogIcon),
      singletonItem(S, "homepage", "Homepage", HomeIcon),
      singletonItem(S, "bookDemoPage", "Book a Demo Page", LaunchIcon),
      S.divider(),
      S.listItem().title("Platform Pages").icon(PresentationIcon).child(S.documentTypeList("modulePage").title("Module Pages")),
      S.listItem().title("Industry Pages").icon(EarthGlobeIcon).child(S.documentTypeList("industryPage").title("Industry Pages")),
      S.listItem().title("SEO Landing Pages").icon(DocumentIcon).child(S.documentTypeList("seoLandingPage").title("SEO Landing Pages")),
      S.listItem().title("Simple Text Pages").icon(DocumentTextIcon).child(S.documentTypeList("simpleTextPage").title("Simple Text Pages")),
      S.listItem().title("Blog Posts").icon(ComposeIcon).child(S.documentTypeList("blogPost").title("Blog Posts")),
      S.listItem().title("CTA Blocks").icon(LaunchIcon).child(S.documentTypeList("ctaBlock").title("CTA Blocks")),
      S.listItem().title("FAQs").icon(HelpCircleIcon).child(S.documentTypeList("faq").title("FAQs")),
      S.listItem().title("Clients").icon(UserIcon).child(S.documentTypeList("client").title("Clients")),
      S.listItem().title("Locales").icon(TranslateIcon).child(S.documentTypeList("locale").title("Locales")),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => ![...SINGLETON_TYPES, ...GROUPED_TYPES].includes(item.getId() || "")),
    ])

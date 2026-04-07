import { localizedAltTextType } from "./fields/localizedAltText"
import { localizedRichTextType } from "./fields/localizedRichText"
import { localizedStringType } from "./fields/localizedString"
import { localizedTextType } from "./fields/localizedText"
import { blogPostType } from "./documents/blogPost"
import { bookDemoPageType } from "./documents/bookDemoPage"
import { clientType } from "./documents/client"
import { ctaBlockType } from "./documents/ctaBlock"
import { faqType } from "./documents/faq"
import { homepageType } from "./documents/homepage"
import { industryPageType } from "./documents/industryPage"
import { localeType } from "./documents/locale"
import { modulePageType } from "./documents/modulePage"
import { seoLandingPageType } from "./documents/seoLandingPage"
import { simpleTextPageType } from "./documents/simpleTextPage"
import { siteSettingsType } from "./documents/siteSettings"
import { imageWithAltType } from "./objects/imageWithAlt"
import { seoMetadataType } from "./objects/seoMetadata"
import { simpleBlockContentType } from "./objects/simpleBlockContent"

export const schemaTypes = [
  localizedStringType,
  localizedTextType,
  localizedAltTextType,
  localizedRichTextType,
  simpleBlockContentType,
  imageWithAltType,
  seoMetadataType,
  localeType,
  siteSettingsType,
  homepageType,
  modulePageType,
  industryPageType,
  blogPostType,
  seoLandingPageType,
  simpleTextPageType,
  bookDemoPageType,
  faqType,
  ctaBlockType,
  clientType,
]

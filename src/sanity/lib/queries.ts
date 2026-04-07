import { defineQuery } from "next-sanity"

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_id == "siteSettings"][0]{
    siteName,
    phoneNumber,
    whatsAppNumber,
    emailAddress,
    physicalAddress,
    footerTagline,
    "logoLight": logoLight.asset->url,
    "logoDark": logoDark.asset->url,
    socialLinks,
    defaultSeo {
      metaTitle,
      metaDescription,
      "ogImage": ogImage.asset.asset->url
    }
  }
`)

export const HOMEPAGE_QUERY = defineQuery(`
  *[_id == "homepage"][0]{
    pageTitle,
    heroHeadline,
    heroSubheadline,
    "heroCarouselImages": heroCarouselImages[]{
      _key,
      "url": asset.asset->url,
      alt
    },
    "trustClients": trustClients[]->{ _id, clientName, sector, country },
    primaryCta->{
      internalName,
      headline,
      subheadline,
      primaryButtonText,
      primaryButtonLink,
      secondaryButtonText,
      secondaryButtonLink,
      whatsAppEnabled,
      whatsAppPrefill,
      showPhoneNumber,
      backgroundStyle
    },
    seo {
      metaTitle,
      metaDescription,
      "ogImage": ogImage.asset.asset->url
    }
  }
`)

export const CLIENTS_TICKER_QUERY = defineQuery(`
  *[_type == "client" && showOnHomepageTicker == true] | order(clientName asc) {
    _id,
    clientName,
    sector
  }
`)

export const CLIENTS_TRUST_QUERY = defineQuery(`
  *[_type == "client" && showOnTrustBar == true] | order(clientName asc) {
    _id,
    clientName,
    sector
  }
`)

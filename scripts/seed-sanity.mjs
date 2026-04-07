import { createClient } from "@sanity/client"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-02-01"
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN")
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

const docs = [
  {
    _id: "locale-en",
    _type: "locale",
    name: "English",
    tag: "en",
    isDefault: true,
  },
  {
    _id: "locale-ar",
    _type: "locale",
    name: "Arabic",
    tag: "ar",
    isDefault: false,
  },
  {
    _id: "cta-book-demo-standard",
    _type: "ctaBlock",
    internalName: "Book a Demo - Standard",
    headline: { en: "Book a Free Demo", ar: "???? ????? ???????? ???????" },
    subheadline: { en: "See how Buzzin fits your premises and operating model.", ar: "????? ??? ????? ???? Buzzin ?????? ?????? ??????." },
    primaryButtonText: { en: "Book a Free Demo", ar: "???? ????? ???????? ???????" },
    primaryButtonLink: "/en/book-demo",
    secondaryButtonText: { en: "Contact Us", ar: "????? ????" },
    secondaryButtonLink: "/en/contact",
    whatsAppEnabled: false,
    showPhoneNumber: false,
    backgroundStyle: "amber",
  },
  {
    _id: "cta-book-demo-education",
    _type: "ctaBlock",
    internalName: "Book a Demo - Education",
    headline: { en: "Speak to Our Education Team", ar: "???? ??? ???? ??????? ?????" },
    subheadline: { en: "For safeguarding, KHDA readiness, and school operations workflows.", ar: "?????? ??????? ????????? ?? KHDA ???? ??? ????? ???????." },
    primaryButtonText: { en: "Speak to Our Education Team", ar: "???? ??? ???? ??????? ?????" },
    primaryButtonLink: "/en/book-demo",
    secondaryButtonText: { en: "Chat on WhatsApp", ar: "????? ??? ??????" },
    secondaryButtonLink: "",
    whatsAppEnabled: true,
    whatsAppPrefill: { en: "Hi, I am interested in Buzzin for our school. Can we arrange a demo?", ar: "??????? ??? ???? ????? Buzzin ????????. ?? ???? ????? ??? ???????" },
    showPhoneNumber: true,
    backgroundStyle: "navy",
  },
  {
    _id: "cta-contact-general",
    _type: "ctaBlock",
    internalName: "Contact Us - General",
    headline: { en: "Talk to the Buzzin Team", ar: "???? ?? ???? Buzzin" },
    subheadline: { en: "Tell us about your premises and we will point you to the right solution.", ar: "?????? ?? ?????? ??????? ??? ???? ???????." },
    primaryButtonText: { en: "Contact Us", ar: "????? ????" },
    primaryButtonLink: "/en/contact",
    secondaryButtonText: { en: "Book a Demo", ar: "???? ????? ????????" },
    secondaryButtonLink: "/en/book-demo",
    whatsAppEnabled: false,
    showPhoneNumber: true,
    backgroundStyle: "white",
  },
  {
    _id: "cta-whatsapp-residential",
    _type: "ctaBlock",
    internalName: "WhatsApp - Residential",
    headline: { en: "Managing multiple communities?", ar: "?? ???? ??? ??????? ??????" },
    subheadline: { en: "Start the conversation on WhatsApp and we will tailor the right demo.", ar: "???? ???????? ??? ?????? ?????? ????? ??????? ??." },
    primaryButtonText: { en: "Chat on WhatsApp", ar: "????? ??? ??????" },
    primaryButtonLink: "",
    secondaryButtonText: { en: "Book a Demo", ar: "???? ????? ????????" },
    secondaryButtonLink: "/en/book-demo",
    whatsAppEnabled: true,
    whatsAppPrefill: { en: "Hi, I manage residential communities in the UAE and I would like to learn more about Buzzin.", ar: "??????? ??? ???? ??????? ????? ?? ???????? ???? ????? ?????? ?? Buzzin." },
    showPhoneNumber: false,
    backgroundStyle: "amber",
  },
  {
    _id: "siteSettings",
    _type: "siteSettings",
    siteName: "Buzzin",
    defaultSeo: {
      metaTitle: { en: "Buzzin", ar: "Buzzin" },
      metaDescription: { en: "Buzzin website foundation", ar: "?????? ?????? ????? Buzzin" },
    },
    phoneNumber: "+971 4 3201265",
    whatsAppNumber: "+97143201265",
    emailAddress: "hello@buzzin.ae",
    physicalAddress: { en: "Dubai Silicon Oasis, Dubai, UAE", ar: "???? ??? ?????????? ???? ???????? ??????? ???????" },
    googleAnalyticsId: "",
    footerTagline: { en: "The GCC's enterprise premises intelligence platform.", ar: "???? ???? ??????? ???????? ?? ??????." },
    socialLinks: {},
  },
]

const clients = [
  ["Atlantis", "Hospitality", "UAE", true, true],
  ["Fairmont", "Hospitality", "UAE", true, true],
  ["Kempinski", "Hospitality", "UAE", true, true],
  ["Hyatt", "Hospitality", "UAE", true, true],
  ["Jumeirah Beach Hotel", "Hospitality", "UAE", true, true],
  ["Aldar", "Real Estate", "UAE", true, true],
  ["Asteco", "Real Estate", "UAE", true, true],
  ["DAMAC", "Real Estate", "UAE", true, true],
  ["Azizi", "Real Estate", "UAE", true, false],
  ["Deyaar", "Real Estate", "UAE", false, false],
  ["Al Barari", "Real Estate", "UAE", false, false],
  ["Al-Futtaim", "Real Estate", "UAE", false, false],
  ["Taaleem", "Education", "UAE", true, true],
  ["Brighton College UAE", "Education", "UAE", true, true],
  ["GEMS Education", "Education", "UAE", true, true],
  ["Rashid & Latifa Schools", "Education", "UAE", true, true],
  ["Misk Schools", "Education", "KSA", true, true],
  ["Massar Sharjah", "Education", "UAE", false, false],
  ["Bloom", "Education", "UAE", false, false],
  ["Central Park Towers DIFC", "Financial", "UAE", false, false],
].map(([clientName, sector, country, showOnHomepageTicker, showOnTrustBar]) => ({
  _id: `client-${String(clientName).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  _type: "client",
  clientName,
  sector,
  country,
  showOnHomepageTicker,
  showOnTrustBar,
}))

for (const doc of [...docs, ...clients]) {
  await client.createOrReplace(doc)
  console.log(`Seeded ${doc._id}`)
}

console.log("Sanity seed complete")

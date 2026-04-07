import { UserIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

const sectorOptions = ["Hospitality", "Real Estate", "Education", "Financial", "Government"]
const countryOptions = ["UAE", "KSA", "Lebanon"]

export const clientType = defineType({
  name: "client",
  title: "Client",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({ name: "clientName", title: "Client name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "logoColor", title: "Color logo", type: "file", options: { accept: ".svg,.png,.webp,.jpg,.jpeg" } }),
    defineField({ name: "logoGreyscale", title: "Greyscale logo", type: "file", options: { accept: ".svg,.png,.webp,.jpg,.jpeg" } }),
    defineField({ name: "logoWhite", title: "White logo", type: "file", options: { accept: ".svg,.png,.webp,.jpg,.jpeg" } }),
    defineField({ name: "sector", title: "Sector", type: "string", options: { list: sectorOptions } }),
    defineField({ name: "showOnHomepageTicker", title: "Show on homepage ticker", type: "boolean", initialValue: false }),
    defineField({ name: "showOnTrustBar", title: "Show on trust bar", type: "boolean", initialValue: false }),
    defineField({ name: "country", title: "Country", type: "string", options: { list: countryOptions } }),
  ],
  preview: { select: { title: "clientName", subtitle: "sector" } },
})

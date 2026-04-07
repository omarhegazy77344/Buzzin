import { DM_Serif_Display, Plus_Jakarta_Sans, Syne, Cairo, Tajawal } from "next/font/google"

export const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
})

export const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
  display: "swap",
})

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
})

export const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
  preload: false,
})

export const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
  preload: false,
})

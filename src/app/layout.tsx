import type { Metadata } from "next"
import Script from "next/script"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { dmSerif, syne, jakarta, cairo, tajawal } from "@/lib/fonts"
import { cn } from "@/lib/cn"
import "./globals.css"

const GTM_ID = "GTM-MVWG63D3"

export const metadata: Metadata = {
  title: {
    default: "Buzzin - Premises Intelligence Platform | UAE & GCC",
    template: "%s | Buzzin",
  },
  description:
    "Trusted by Atlantis, Aldar & Taaleem. 30M+ secure interactions processed. Visitor management, queue, patrolling & 7+ integrated modules.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        dmSerif.variable,
        syne.variable,
        jakarta.variable,
        cairo.variable,
        tajawal.variable,
      )}
    >
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="font-body">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { dmSerif, syne, jakarta, cairo, tajawal } from "@/lib/fonts"
import { cn } from "@/lib/cn"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Buzzin - Premises Intelligence Platform | UAE & GCC",
    template: "%s | Buzzin",
  },
  description:
    "Trusted by Atlantis, Aldar & Taaleem. 20M+ secure interactions processed. Visitor management, queue, patrolling & 9 integrated modules.",
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
      <body className="font-body">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

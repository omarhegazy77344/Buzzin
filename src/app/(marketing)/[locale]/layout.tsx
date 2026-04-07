import { locales, type Locale } from "@/i18n/config"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const dir = locale === "ar" ? "rtl" : "ltr"

  return (
    <div dir={dir} lang={locale} className={locale === "ar" ? "font-body-ar" : ""}>
      {children}
    </div>
  )
}

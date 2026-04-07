import { NextRequest, NextResponse } from "next/server"
import { locales, defaultLocale } from "@/i18n/config"

const PUBLIC_PATHS = ["/studio", "/api", "/_next", "/images", "/favicon"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next()
  }

  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameLocale) {
    const response = NextResponse.next()
    response.headers.set("x-locale", pathnameLocale)
    return response
  }

  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!_next|studio|api|images|favicon\\.ico|.*\\..*).*)"],
}

"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

type BrandLogoProps = {
  lightSrc?: string
  darkSrc?: string
  className?: string
  width?: number
  height?: number
}

export function BrandLogo({
  lightSrc = "/images/logo-light.png",
  darkSrc = "/images/logo-dark.png",
  className,
  width = 120,
  height = 40,
}: BrandLogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div style={{ width, height }} className={className} />
  }

  const src = resolvedTheme === "dark" ? darkSrc : lightSrc

  return (
    <Image
      src={src}
      alt="Buzzin"
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}

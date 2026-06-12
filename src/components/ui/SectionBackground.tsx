"use client"

import { cn } from "@/lib/cn"
import {
  Shield,
  QrCode,
  Users,
  BarChart,
  Layers,
  Settings,
  Lock,
  Rocket,
  CheckCircle,
  Building2,
  type LucideIcon,
} from "lucide-react"

type Variant = "light" | "sky" | "dark" | "amber"

const iconMap: Record<string, LucideIcon> = {
  Shield,
  QrCode,
  Users,
  BarChart,
  Layers,
  Settings,
  Lock,
  Rocket,
  CheckCircle,
  Building2,
}

type FloatingHexagon = {
  type: "hexagon"
  size: number
  x: string
  y: string
  delay?: number
  duration?: number
  color?: "amber" | "navy" | "white"
  opacity?: number
}

type FloatingIcon = {
  type: "icon"
  icon: keyof typeof iconMap
  size: number
  x: string
  y: string
  delay?: number
  duration?: number
  color?: "amber" | "navy" | "white"
  opacity?: number
}

type FloatingElement = FloatingHexagon | FloatingIcon

type GradientOrb = {
  x: string
  y: string
  size: number
  color?: "amber" | "navy" | "sky"
  opacity?: number
}

type SectionBackgroundProps = {
  variant?: Variant
  hexGrid?: boolean
  floatingElements?: FloatingElement[]
  gradientOrb?: GradientOrb | GradientOrb[]
  className?: string
}

const hexStrokeColor: Record<Variant, string> = {
  light: "text-navy-900 dark:text-white",
  sky: "text-navy-900 dark:text-white",
  dark: "text-white",
  amber: "text-navy-900",
}

const hexStrokeOpacity: Record<Variant, string> = {
  light: "opacity-[0.015] dark:opacity-[0.03]",
  sky: "opacity-[0.02] dark:opacity-[0.03]",
  dark: "opacity-[0.04] dark:opacity-[0.03]",
  amber: "opacity-[0.04]",
}

const decoColorClass: Record<NonNullable<FloatingElement["color"]>, string> = {
  amber: "text-amber-500",
  navy: "text-navy-900 dark:text-white",
  white: "text-white",
}

const orbColorMap: Record<NonNullable<GradientOrb["color"]>, string> = {
  amber: "rgba(245,166,35,",
  navy: "rgba(30,37,71,",
  sky: "rgba(235,245,251,",
}

export function SectionBackground({
  variant = "light",
  hexGrid = true,
  floatingElements,
  gradientOrb,
  className,
}: SectionBackgroundProps) {
  const orbs = gradientOrb ? (Array.isArray(gradientOrb) ? gradientOrb : [gradientOrb]) : []

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className,
      )}
    >
      {hexGrid && (
        <div
          className={cn(
            "absolute inset-0",
            hexStrokeColor[variant],
            hexStrokeOpacity[variant],
          )}
        >
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id={`section-hexgrid-${variant}`}
                width="56"
                height="100"
                patternUnits="userSpaceOnUse"
                patternTransform="scale(1.2)"
              >
                <path
                  d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#section-hexgrid-${variant})`} />
          </svg>
        </div>
      )}

      {orbs.map((orb, idx) => {
        const color = orb.color ?? "amber"
        const opacity = orb.opacity ?? 0.04
        const colorRgb = orbColorMap[color]
        return (
          <div
            key={`orb-${idx}`}
            className="absolute rounded-full"
            style={{
              left: orb.x,
              top: orb.y,
              width: orb.size,
              height: orb.size,
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle, ${colorRgb}${opacity}) 0%, transparent 70%)`,
              filter: "blur(40px)",
            }}
          />
        )
      })}

      {floatingElements && floatingElements.length > 0 && (
        <div className="absolute inset-0 hidden lg:block">
          {floatingElements.map((el, idx) => {
            const color = el.color ?? (variant === "dark" ? "white" : "navy")
            const duration = el.duration ?? 8
            const delay = el.delay ?? 0
            const hasCustomOpacity = typeof el.opacity === "number"
            const opacityClass = hasCustomOpacity
              ? ""
              : variant === "dark"
                ? "opacity-[0.12] dark:opacity-[0.14]"
                : "opacity-[0.14] dark:opacity-[0.12]"

            const animationStyle: React.CSSProperties = {
              left: el.x,
              top: el.y,
              animation: `float-drift ${duration}s ease-in-out ${delay}s infinite`,
              ...(hasCustomOpacity ? { opacity: el.opacity } : {}),
            }

            if (el.type === "hexagon") {
              return (
                <div
                  key={`float-${idx}`}
                  className={cn("absolute", decoColorClass[color], opacityClass)}
                  style={{ ...animationStyle, width: el.size, height: el.size }}
                >
                  <svg
                    viewBox="0 0 56 64"
                    fill="none"
                    className="h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28 0L56 16L56 48L28 64L0 48L0 16Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="currentColor"
                      fillOpacity="0.5"
                    />
                  </svg>
                </div>
              )
            }

            const Icon = iconMap[el.icon]
            if (!Icon) return null
            return (
              <div
                key={`float-${idx}`}
                className={cn("absolute", decoColorClass[color], opacityClass)}
                style={animationStyle}
              >
                <Icon size={el.size} strokeWidth={1.5} />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

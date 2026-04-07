"use client"

import { cn } from "@/lib/cn"

export function HexagonPattern({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="hexagons"
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
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  )
}

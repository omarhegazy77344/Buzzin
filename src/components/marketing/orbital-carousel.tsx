"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"

type CarouselImage = {
  src: string
  alt: string
}

// How long each image is "active" (front-center) before the orbit advances
const DISPLAY_MS = 10_000

// Full orbit duration in ms — how long one complete loop takes
// With N images each shown for 10s, orbit period = N * 10s
// We drive the orbit continuously so we derive angle from elapsed time.

/**
 * Orbital positions for N items distributed evenly around an ellipse.
 * The "active" slot is always at angle 0 (front-center).
 * As the orbit rotates, each card passes through front-center in turn.
 *
 * We use CSS transforms instead of Framer Motion here because we need
 * per-frame continuous updates — rAF gives us cinematic smoothness.
 */

const EASE_DURATION_MS = 1_350 // match user spec 1.2–1.5s

// Cubic-bezier(0.4, 0, 0.2, 1) easing function
function cubicBezier(t: number): number {
  // Approximation of cubic-bezier(0.4, 0, 0.2, 1)
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

/**
 * For each card, given its orbit angle (0 = front-center, Math.PI = back-center),
 * compute visual properties:
 *  - x, y position on ellipse
 *  - scale (1 at front, 0.55 at back)
 *  - opacity (1 at front, 0.3 at back)
 *  - blur in px (0 at front, 8 at back)
 *  - zIndex
 */
function getCardProps(
  angle: number, // radians, 0 = front
  rx: number,    // ellipse x-radius
  ry: number,    // ellipse y-radius
) {
  // angle=0 → front (bottom of ellipse in screen space)
  // We map angle to position: x = rx * sin(angle), y = ry * -cos(angle) * 0.35
  const x = rx * Math.sin(angle)
  const y = ry * -Math.cos(angle) * 0.35

  // depth: 1 at front (angle=0), 0 at back (angle=π)
  const depth = (Math.cos(angle) + 1) / 2  // 1=front, 0=back

  const scale = lerp(0.55, 1, depth)
  const opacity = lerp(0.28, 1, depth)
  const blur = lerp(8, 0, depth)
  const zIndex = Math.round(depth * 10)

  return { x, y, scale, opacity, blur, zIndex }
}

export function OrbitalCarousel({ images }: { images: CarouselImage[] }) {
  const n = images.length
  const canvasRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  // Current orbit angle offset in radians (increases over time)
  const orbitAngleRef = useRef(0)
  // Target angle offset (snaps to next slot on advance)
  const targetAngleRef = useRef(0)
  const easeStartRef = useRef<number | null>(null)
  const easeFromRef = useRef(0)

  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const [progress, setProgress] = useState(0)
  const displayStartRef = useRef(Date.now())
  const rafRef = useRef<number | null>(null)

  // Step size per image: evenly distribute N images around full circle
  const stepAngle = (2 * Math.PI) / Math.max(n, 1)

  const advance = useCallback(() => {
    activeIndexRef.current = (activeIndexRef.current + 1) % n
    setActiveIndex(activeIndexRef.current)
    // target moves backward by one step (orbit rotates so next comes to front)
    targetAngleRef.current -= stepAngle
    easeStartRef.current = performance.now()
    easeFromRef.current = orbitAngleRef.current
    displayStartRef.current = Date.now()
    setProgress(0)
  }, [n, stepAngle])

  const goTo = useCallback((i: number) => {
    const current = activeIndexRef.current
    if (i === current) return
    // Calculate shortest path
    let diff = i - current
    // Always go forward in orbit direction
    if (diff <= 0) diff += n
    activeIndexRef.current = i
    setActiveIndex(i)
    targetAngleRef.current -= diff * stepAngle
    easeStartRef.current = performance.now()
    easeFromRef.current = orbitAngleRef.current
    displayStartRef.current = Date.now()
    setProgress(0)
  }, [n, stepAngle])

  useEffect(() => {
    if (n === 0) return

    let displayTimer: ReturnType<typeof setTimeout>

    const scheduleNext = () => {
      displayTimer = setTimeout(() => {
        advance()
        scheduleNext()
      }, DISPLAY_MS)
    }

    scheduleNext()

    return () => clearTimeout(displayTimer)
  }, [advance, n])

  useEffect(() => {
    if (n === 0) return

    const el = canvasRef.current
    if (!el) return
    const rx = el.offsetWidth * 0.38
    const ry = 60 // ellipse vertical radius (shallow — keeps it cinematic, not too loopy)

    const tick = (now: number) => {
      // Ease orbit angle toward target
      if (easeStartRef.current !== null) {
        const elapsed = now - easeStartRef.current
        const t = Math.min(elapsed / EASE_DURATION_MS, 1)
        const eased = cubicBezier(t)
        orbitAngleRef.current = lerp(easeFromRef.current, targetAngleRef.current, eased)
        if (t >= 1) {
          orbitAngleRef.current = targetAngleRef.current
          easeStartRef.current = null
        }
      }

      // Update progress bar
      const displayElapsed = Date.now() - displayStartRef.current
      setProgress(Math.min(displayElapsed / DISPLAY_MS, 1))

      // Apply transforms to each card
      for (let i = 0; i < n; i++) {
        const card = cardsRef.current[i]
        if (!card) continue

        // Base angle for this card in orbit
        const baseAngle = i * stepAngle
        // Current visual angle = base + orbit offset
        const visualAngle = baseAngle + orbitAngleRef.current
        // Normalize to [-π, π]
        const normalized = ((visualAngle % (2 * Math.PI)) + 3 * Math.PI) % (2 * Math.PI) - Math.PI

        const { x, y, scale, opacity, blur, zIndex } = getCardProps(normalized, rx, ry)

        card.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`
        card.style.opacity = String(opacity)
        card.style.filter = `blur(${blur.toFixed(2)}px)`
        card.style.zIndex = String(zIndex)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [n, stepAngle])

  if (n === 0) return null

  return (
    <div className="flex w-full flex-col items-center gap-6">
      {/* ── Orbital stage ── */}
      <div
        ref={canvasRef}
        className="relative h-[440px] w-full sm:h-[500px] lg:h-[560px]"
        style={{ perspective: "1200px" }}
      >
        {/* Ambient depth glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/8 blur-[90px]"
          style={{ width: "60%", height: "55%" }}
        />

        {/* Subtle orbit ring — the "track" */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/[0.06]"
          style={{ width: "76%", height: "28%", transform: "translate(-50%, -50%) rotateX(75deg)" }}
        />

        {/* Cards — positioned absolutely, driven by rAF */}
        {images.map((img, i) => (
          <div
            key={i}
            ref={(el) => { cardsRef.current[i] = el }}
            onClick={() => goTo(i)}
            className="absolute left-1/2 top-1/2 cursor-pointer"
            style={{
              width: "clamp(220px, 30vw, 340px)",
              height: "clamp(280px, 38vw, 430px)",
              willChange: "transform, opacity, filter",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="relative h-full w-full overflow-hidden shadow-2xl"
              style={{ borderRadius: "22px" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 340px"
                priority={i === 0}
              />
              {/* Inner vignette for depth */}
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.32) 100%)",
                  borderRadius: "22px",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ── Progress indicators ── */}
      {n > 1 && (
        <div className="flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className="relative h-[3px] overflow-hidden rounded-full bg-white/20 transition-all duration-300"
              style={{ width: i === activeIndex ? "36px" : "16px" }}
            >
              {i === activeIndex && (
                <span
                  className="absolute left-0 top-0 h-full rounded-full bg-amber-400"
                  style={{ width: `${progress * 100}%`, transition: "none" }}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

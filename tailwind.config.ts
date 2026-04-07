import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        amber: {
          50: "#FEF7E6",
          100: "#FDEFC4",
          200: "#FBE09F",
          300: "#F9D079",
          400: "#F7C04D",
          500: "#F5A623",
          600: "#E0941D",
          700: "#C47F18",
          800: "#A76A14",
          900: "#8A5510",
          950: "#5C3809",
        },
        navy: {
          50: "#E8E9ED",
          100: "#C5C8D1",
          200: "#9FA4B4",
          300: "#798097",
          400: "#5D6580",
          500: "#414A69",
          600: "#343C56",
          700: "#282F44",
          800: "#1E2547",
          900: "#161B35",
          950: "#0D1023",
        },
        sky: {
          50: "#F8FCFD",
          100: "#EBF5FB",
          200: "#D6EBF7",
          300: "#B8DCF2",
          400: "#8CC8EB",
          500: "#5FB3E4",
        },
      },
      fontFamily: {
        display: ["var(--font-dm-serif)", "Georgia", "serif"],
        heading: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        "heading-ar": ["var(--font-cairo)", "system-ui", "sans-serif"],
        "body-ar": ["var(--font-tajawal)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "heading-xl": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "heading-md": ["1.25rem", { lineHeight: "1.3" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "body-xs": ["0.75rem", { lineHeight: "1.5" }],
        overline: ["0.6875rem", { lineHeight: "1.6", letterSpacing: "0.08em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
      },
      maxWidth: {
        site: "80rem",
        prose: "42rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(30,37,71,0.05)",
        sm: "0 1px 3px 0 rgba(30,37,71,0.08), 0 1px 2px -1px rgba(30,37,71,0.08)",
        md: "0 4px 6px -1px rgba(30,37,71,0.08), 0 2px 4px -2px rgba(30,37,71,0.08)",
        lg: "0 10px 15px -3px rgba(30,37,71,0.08), 0 4px 6px -4px rgba(30,37,71,0.08)",
        xl: "0 20px 25px -5px rgba(30,37,71,0.10), 0 8px 10px -6px rgba(30,37,71,0.10)",
        "2xl": "0 25px 50px -12px rgba(30,37,71,0.25)",
        brand: "0 4px 14px 0 rgba(245,166,35,0.25)",
        "brand-lg": "0 8px 24px 0 rgba(245,166,35,0.30)",
        focus: "0 0 0 3px rgba(245,166,35,0.40)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "expo-out": "cubic-bezier(0.19, 1, 0.22, 1)",
        spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.15)", opacity: "0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s var(--ease-smooth) both",
        "marquee": "marquee var(--marquee-duration, 30s) linear infinite",
        "pulse-ring": "pulse-ring 2.5s ease-out infinite",
      },
    },
  },
  plugins: [],
}

export default config

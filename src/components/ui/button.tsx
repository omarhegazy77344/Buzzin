import { cn } from "@/lib/cn"
import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp"
type ButtonSize = "sm" | "md" | "lg"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700 shadow-sm hover:shadow-brand",
  secondary:
    "bg-navy-800 !text-white hover:bg-navy-700 active:bg-navy-900 dark:bg-navy-600 dark:hover:bg-navy-500",
  ghost:
    "bg-transparent text-[var(--text-brand)] border border-[var(--border-brand)] hover:bg-amber-500/8 active:bg-amber-500/12",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1EBE58] active:bg-[#1BA84E]",
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-body-sm gap-1.5",
  md: "h-10 px-5 text-body-md gap-2",
  lg: "h-12 px-7 text-body-lg gap-2.5",
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", asChild = false, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-heading font-semibold transition-all duration-200 ease-smooth",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "hover:-translate-y-px active:translate-y-0",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)

Button.displayName = "Button"

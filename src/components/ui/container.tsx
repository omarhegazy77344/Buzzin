import { cn } from "@/lib/cn"

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: React.ElementType
  wide?: boolean
}

export function Container({ as: Comp = "div", wide, className, children, ...props }: ContainerProps) {
  return (
    <Comp className={cn("mx-auto w-full px-5 sm:px-8 lg:px-10", wide ? "max-w-[90rem]" : "max-w-site", className)} {...props}>
      {children}
    </Comp>
  )
}

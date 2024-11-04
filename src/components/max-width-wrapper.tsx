import { cn } from "@/utils"
import { ReactNode } from "react"

interface MaxWidthWrapperProps {
  children: ReactNode
  className?: string
}

export const MaxWidthWrapper = ({
  children,
  className,
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  )
}

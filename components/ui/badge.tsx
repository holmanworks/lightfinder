import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2 h-5 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        UltraBright:
          "border-transparent bg-[#94A3B8] text-white",
        SmartUltraBright:
          "border-transparent bg-[#3B82F6] text-white",
        Switch:
          "border-transparent bg-[#f59e0b] text-white",
        Pro: 
          "border-transparent bg-[#171717] text-white",
      },
    },
    defaultVariants: {
      variant: "UltraBright",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }



export function UltraBright() {
  return (
    <Badge 
      variant="UltraBright" 
    >
      UltraBright
    </Badge>
  );
}

export function SmartUltraBright() {
  return (
    <Badge 
      variant="SmartUltraBright" 
    >
      Smart UltraBright
    </Badge>
  );
}

export function Switch() {
  return (
    <Badge 
      variant="Switch" 
    >
      Switch
    </Badge>
  );
}

export function Pro() {
  return (
    <Badge 
      variant="Pro" 
    >
      PRO+
    </Badge>
  );
}
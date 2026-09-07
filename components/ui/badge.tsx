import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex shrink-0 items-center whitespace-nowrap rounded-sm border px-[9px] py-[3px] text-[11.5px] leading-normal transition-colors",
  {
    variants: {
      variant: {
        brass: "border-brass-dim text-brass",
        jade: "border-jade-dim text-jade",
        outline: "border-border-strong text-ink-muted",
      },
    },
    defaultVariants: {
      variant: "brass",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

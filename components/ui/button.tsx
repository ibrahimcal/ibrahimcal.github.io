import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brass disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        outline:
          "border border-border-strong text-ink hover:-translate-y-px hover:border-brass hover:bg-brass-wash",
        solid:
          "border border-brass bg-brass font-semibold text-on-brass hover:-translate-y-px hover:border-brass-strong hover:bg-brass-strong",
        ghost: "text-ink-muted hover:bg-panel hover:text-ink",
      },
      size: {
        default: "px-[18px] py-[11px] text-[14.5px]",
        sm: "px-3 py-1.5 text-[12.5px]",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

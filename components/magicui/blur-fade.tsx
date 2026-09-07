"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  type UseInViewOptions,
  type Variants,
} from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: MarginType;
  /**
   * @deprecated Blur is not applied; kept for API compatibility.
   */
  blur?: string;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.62,
  delay = 0,
  yOffset = 16,
  inView = true,
  inViewMargin = "-6% 0px -12% 0px" as MarginType,
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;
  const shouldReduce = useReducedMotion();
  const effectiveDelay = Math.min(delay, 0.42);
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={
          shouldReduce
            ? { duration: 0 }
            : {
                delay: 0.12 + effectiveDelay,
                ease: [0.22, 0.68, 0.3, 1],
                duration,
              }
        }
        className={cn("motion-reveal", className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

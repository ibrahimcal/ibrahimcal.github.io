"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Metrics() {
  return (
    <div className="strip">
      <div className="shell strip-in">
        {DATA.metrics.map((metric, i) => (
          <BlurFade key={metric.label} delay={Math.min(i * 0.04, 0.24)} className="stat">
            <div
              className={cn(
                "font-display text-[clamp(24px,2.6vw,31px)] leading-none font-semibold [font-variation-settings:'opsz'_40]",
                metric.plain ? "text-ink" : "text-brass",
              )}
            >
              {metric.value}
            </div>
            <div className="mt-[9px] max-w-[16ch] text-[12.5px] leading-[1.45] text-ink-muted">
              {metric.label}
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

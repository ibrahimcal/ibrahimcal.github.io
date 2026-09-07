"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { SectionHead } from "@/components/sections/section-head";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Toolkit() {
  return (
    <section id="toolkit" className="scroll-mt-20 py-[clamp(56px,9vh,96px)]">
      <div className="shell">
        <SectionHead title={DATA.toolkit.heading} note={DATA.toolkit.note} />
        <div>
          {DATA.toolkit.rows.map((row, i) => (
            <BlurFade key={row.category} delay={Math.min(i * 0.05, 0.24)}>
              <div className="grid grid-cols-1 items-start gap-2 border-t border-border py-[18px] last:border-b min-[981px]:grid-cols-[190px_1fr] min-[981px]:gap-[clamp(14px,3vw,36px)]">
                <div className="pt-1 text-[13.5px] text-ink-faint">
                  {row.category}
                </div>
                <div className="flex flex-wrap gap-[7px]">
                  {row.chips.map((chip) => (
                    <span
                      key={chip.label}
                      className={cn(
                        "rounded-sm border border-border px-[11px] py-[5px] text-[12.5px] text-ink-muted transition-colors duration-200 hover:border-border-strong hover:text-ink",
                        chip.key &&
                          "border-brass-dim text-brass hover:border-brass-dim hover:text-brass",
                      )}
                    >
                      {chip.label}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

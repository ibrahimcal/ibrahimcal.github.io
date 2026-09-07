"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { SectionHead } from "@/components/sections/section-head";
import { DATA } from "@/data/resume";

export function Focus() {
  return (
    <section id="focus" className="scroll-mt-20 pt-0 pb-[clamp(56px,9vh,96px)]">
      <div className="shell">
        <SectionHead title={DATA.focus.heading} note={DATA.focus.note} />
        <div>
          {DATA.focus.rows.map((row, i) => (
            <BlurFade key={row.title} delay={Math.min(i * 0.05, 0.2)}>
              <div className="grid grid-cols-1 items-start gap-2 border-t border-border py-6 last:border-b min-[981px]:grid-cols-[230px_1fr] min-[981px]:gap-[clamp(16px,3vw,44px)]">
                <div className="text-[16px] leading-[1.35] font-semibold text-ink">
                  {row.title}
                </div>
                <div className="rich-brass max-w-[62ch] text-[15px] leading-[1.7] text-ink-muted">
                  {row.description}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

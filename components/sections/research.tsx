"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { SectionHead } from "@/components/sections/section-head";
import { DATA } from "@/data/resume";

export function Research() {
  return (
    <section id="research" className="scroll-mt-20 py-[clamp(56px,9vh,96px)]">
      <div className="shell">
        <SectionHead title={DATA.research.heading} />
        <div className="grid grid-cols-1 items-start gap-8 min-[981px]:grid-cols-2 min-[981px]:gap-[clamp(28px,5vw,60px)]">
          <BlurFade delay={0}>
            <div>
              <h3 className="mb-4 font-display text-[18px] font-semibold">
                Education
              </h3>
              {DATA.research.education.map((degree) => (
                <div
                  key={degree.title}
                  className="border-t border-border py-[14px] last-of-type:border-b"
                >
                  <div className="text-[15px] font-semibold">{degree.title}</div>
                  <div className="mt-[3px] text-[14px] text-ink-muted">
                    {degree.org}
                  </div>
                  <div className="mt-1 font-mono text-[11.5px] text-ink-faint">
                    {degree.year}
                  </div>
                </div>
              ))}
              <div className="rich mt-[22px] border-l-2 border-brass bg-panel px-5 py-[18px] text-[14px] leading-[1.65] text-ink-muted">
                {DATA.research.patent}
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.08}>
            <div>
              <h3 className="mb-4 font-display text-[18px] font-semibold">
                Selected publications
              </h3>
              {DATA.research.publications.map((pub) => (
                <div
                  key={pub.title}
                  className="border-t border-border py-[13px] text-[14.5px] leading-[1.55] last-of-type:border-b"
                >
                  {pub.title}
                  <div className="mt-[3px] text-[12.5px] text-ink-faint">
                    {pub.venue}
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

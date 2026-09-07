"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { SectionHead } from "@/components/sections/section-head";
import { DATA } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-[clamp(56px,9vh,96px)]">
      <div className="shell">
        <SectionHead title={DATA.about.heading} />
        <div className="grid grid-cols-1 items-start gap-8 min-[981px]:grid-cols-[1.5fr_1fr] min-[981px]:gap-[clamp(28px,5vw,64px)]">
          <BlurFade delay={0}>
            <div className="rich max-w-[62ch] space-y-[18px] text-[16.5px] leading-[1.78] text-ink-muted">
              {DATA.about.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </BlurFade>
          <BlurFade delay={0.08}>
            <aside className="border border-border border-t-2 border-t-brass bg-panel p-[26px]">
              <h3 className="mb-[18px] font-display text-[19px] font-semibold">
                Right now
              </h3>
              <dl className="grid gap-[15px]">
                {DATA.about.now.map((item) => (
                  <div key={item.term}>
                    <dt className="mb-[3px] text-[12.5px] text-ink-faint">
                      {item.term}
                    </dt>
                    <dd className="text-[14.5px] leading-[1.5] text-ink [&_span]:text-ink-muted">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

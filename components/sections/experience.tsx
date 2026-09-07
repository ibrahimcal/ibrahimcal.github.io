"use client";

import { useEffect, useRef } from "react";

import { BlurFade } from "@/components/magicui/blur-fade";
import { SectionHead } from "@/components/sections/section-head";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Experience() {
  const tlRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const frame = () => {
      const tl = tlRef.current;
      const fill = fillRef.current;
      if (tl && fill) {
        const r = tl.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = (vh * 0.72 - r.top) / r.height;
        fill.style.height = `${Math.max(0, Math.min(1, p)) * 100}%`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(frame);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", frame);
    frame();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", frame);
    };
  }, []);

  return (
    <section id="experience" className="scroll-mt-20 py-[clamp(56px,9vh,96px)]">
      <div className="shell">
        <SectionHead
          title={DATA.experience.heading}
          note={DATA.experience.note}
        />
        <div className="tl" ref={tlRef}>
          <div className="tl-rail" aria-hidden="true">
            <div className="tl-fill" ref={fillRef} />
          </div>
          {DATA.experience.jobs.map((job, i) => (
            <BlurFade key={job.role} delay={Math.min(i * 0.05, 0.24)}>
              <article className={cn("job", job.now && "now")}>
                <div className="text-[16.5px] leading-[1.35] font-semibold">
                  {job.role}
                </div>
                <div className="mt-[3px] text-[14.5px] text-brass">{job.org}</div>
                <div className="mt-[5px] font-mono text-[12px] text-ink-faint">
                  {job.meta}
                </div>
                <p className="rich mt-[11px] max-w-[60ch] text-[15px] leading-[1.7] text-ink-muted">
                  {job.description}
                </p>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

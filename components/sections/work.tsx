"use client";

import { ProjectGrid } from "@/components/sections/project-grid";
import { SectionHead } from "@/components/sections/section-head";
import { DATA } from "@/data/resume";

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-[clamp(56px,9vh,96px)]">
      <div className="shell">
        <SectionHead title={DATA.work.heading} note={DATA.work.note} />
        <ProjectGrid items={DATA.work.cards} />
      </div>
    </section>
  );
}

"use client";

import { ProjectGrid } from "@/components/sections/project-grid";
import { SectionHead } from "@/components/sections/section-head";
import { DATA } from "@/data/resume";

export function Builds() {
  return (
    <section id="builds" className="scroll-mt-20 py-[clamp(56px,9vh,96px)]">
      <div className="shell">
        <SectionHead title={DATA.builds.heading} note={DATA.builds.note} />
        <ProjectGrid items={DATA.builds.cards} />
      </div>
    </section>
  );
}

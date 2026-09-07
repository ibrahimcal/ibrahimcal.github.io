"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { ProjectCard } from "@/data/resume";
import { cn } from "@/lib/utils";

export function ProjectGrid({ items }: { items: readonly ProjectCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-px bg-border min-[981px]:grid-cols-2">
      {items.map((project, i) => (
        <BlurFade
          key={project.name}
          delay={Math.min(i * 0.05, 0.2)}
          className={cn("bg-canvas", project.wide && "min-[981px]:col-span-2")}
        >
          <Card className="h-full flex-col gap-0 rounded-none border-0 bg-transparent px-[26px] pt-[26px] pb-7 transition-colors duration-250 hover:bg-panel">
            <div className="mb-3 flex items-start justify-between gap-[14px]">
              <h3
                className={cn(
                  "font-display text-[clamp(19px,2.2vw,23px)] leading-[1.2] font-semibold tracking-[-0.01em]",
                  project.wide && "min-[981px]:text-[clamp(22px,2.8vw,28px)]",
                )}
              >
                {project.name}
              </h3>
              <Badge variant={project.tone}>{project.badge}</Badge>
            </div>
            <p className="rich max-w-[64ch] text-[15px] leading-[1.7] text-ink-muted">
              {project.description}
            </p>
            <div className="stack mt-[18px] border-t border-border pt-4 font-mono">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </Card>
        </BlurFade>
      ))}
    </div>
  );
}

import { BlurFade } from "@/components/magicui/blur-fade";

export function SectionHead({
  title,
  note,
}: {
  title: string;
  note?: string;
}) {
  return (
    <BlurFade yOffset={12}>
      <div className="mb-3 flex items-baseline gap-4">
        <h2 className="font-display text-[clamp(25px,3.4vw,34px)] font-semibold leading-[1.15] tracking-[-0.02em] whitespace-nowrap [font-variation-settings:'opsz'_60]">
          {title}
        </h2>
        <span
          aria-hidden="true"
          className="h-px flex-1 -translate-y-[6px] bg-border"
        />
      </div>
      {note ? (
        <p className="mb-[38px] max-w-[60ch] text-[15px] leading-[1.7] text-ink-muted">
          {note}
        </p>
      ) : null}
    </BlurFade>
  );
}

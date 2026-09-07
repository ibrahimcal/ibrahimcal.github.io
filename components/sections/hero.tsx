"use client";

import {
  DownloadIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";

export function Hero() {
  const { hero, contact } = DATA;
  return (
    <header className="relative overflow-hidden pt-[clamp(30px,7vh,88px)] pb-[clamp(50px,9vh,104px)]">
      <div className="shell grid grid-cols-1 items-end gap-[clamp(24px,4vw,60px)] min-[981px]:grid-cols-[1.12fr_0.88fr]">
        <div>
          <BlurFade delay={0}>
            <div className="mb-[26px] flex flex-wrap items-center gap-x-[11px] gap-y-[6px] text-[13px] text-ink-muted">
              <span className="inline-flex items-center gap-[9px] whitespace-nowrap">
                <span className="pulse-dot" aria-hidden="true" />
                {hero.availability}
              </span>
              <span className="text-ink-faint" aria-hidden="true">
                ·
              </span>
              <span className="inline-flex items-center gap-[9px] whitespace-nowrap">
                {hero.location}
              </span>
              <span className="text-ink-faint" aria-hidden="true">
                ·
              </span>
              <span className="inline-flex items-center gap-[9px] whitespace-nowrap">
                {hero.residency}
              </span>
            </div>
          </BlurFade>
          <BlurFade delay={0.05}>
            <div
              dir="rtl"
              className="mb-2 font-arabic text-[19px] font-light text-brass opacity-90"
            >
              {DATA.nameArabic}
            </div>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h1 className="font-display text-[clamp(40px,7.2vw,74px)] leading-[0.98] font-semibold tracking-[-0.025em] [font-variation-settings:'opsz'_120]">
              {DATA.name}
              <span className="mt-[14px] block text-[0.36em] font-normal tracking-[0.02em] text-brass [font-variation-settings:'opsz'_20]">
                {hero.suffix}
              </span>
            </h1>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="mt-6 max-w-[26ch] font-display text-[clamp(19px,2.5vw,25px)] leading-[1.35] font-normal text-ink italic min-[981px]:max-w-[22ch]">
              {hero.tagline}
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="rich mt-[22px] max-w-[52ch] text-[16.5px] leading-[1.72] text-ink-muted">
              {hero.copy}
            </p>
          </BlurFade>
          <BlurFade delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-[10px]">
              <Button asChild variant="solid">
                <a href={contact.mailto}>
                  <MailIcon />
                  Email me
                </a>
              </Button>
              <Button asChild>
                <a href={contact.whatsappMessage} target="_blank" rel="noopener">
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </Button>
              <Button asChild>
                <a href={contact.linkedin} target="_blank" rel="noopener">
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </Button>
              <Button asChild>
                <a href={contact.resume} target="_blank" rel="noopener">
                  <DownloadIcon />
                  Résumé
                </a>
              </Button>
            </div>
          </BlurFade>
        </div>

        <BlurFade
          delay={0.16}
          className="relative mt-2 w-full max-w-[300px] justify-self-start min-[981px]:mt-0 min-[981px]:max-w-[400px] min-[981px]:justify-self-end"
        >
          <figure>
            <svg
              className="pointer-events-none absolute inset-[-6%_-14%_8%_-10%] opacity-45"
              viewBox="0 0 400 560"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="khatam"
                  width="72"
                  height="72"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="14"
                    y="14"
                    width="44"
                    height="44"
                    fill="none"
                    stroke="#D9A441"
                    strokeWidth=".7"
                    opacity=".34"
                  />
                  <path
                    d="M36 6 L66 36 L36 66 L6 36 Z"
                    fill="none"
                    stroke="#D9A441"
                    strokeWidth=".7"
                    opacity=".34"
                  />
                  <circle cx="36" cy="36" r="1.1" fill="#D9A441" opacity=".3" />
                </pattern>
                <radialGradient id="fade" cx="50%" cy="34%" r="62%">
                  <stop offset="0%" stopColor="#fff" stopOpacity=".9" />
                  <stop offset="55%" stopColor="#fff" stopOpacity=".42" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
                <mask id="m">
                  <rect width="400" height="560" fill="url(#fade)" />
                </mask>
              </defs>
              <rect width="400" height="560" fill="url(#khatam)" mask="url(#m)" />
            </svg>
            <div
              aria-hidden="true"
              className="absolute inset-x-[-10%] bottom-[14%] h-px bg-[linear-gradient(90deg,transparent,var(--brass-dim)_22%,var(--brass-dim)_78%,transparent)]"
            />
            <picture>
              <source srcSet="/profile.webp" type="image/webp" />
              <img
                src="/profile.png"
                alt="Ibrahim Abdul Majeed"
                width={1000}
                height={1437}
                fetchPriority="high"
                className="relative w-full [filter:grayscale(12%)_contrast(1.04)]"
              />
            </picture>
          </figure>
        </BlurFade>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Contact() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const email = DATA.contact.email;

  const copyEmail = async () => {
    const showStatus = (status: "copied" | "failed") => {
      setCopyStatus(status);
      window.setTimeout(() => setCopyStatus("idle"), 1900);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(email);
        showStatus("copied");
      } catch {
        showStatus("failed");
      }
    } else {
      const t = document.createElement("textarea");
      t.value = email;
      document.body.appendChild(t);
      t.select();
      let copied = false;
      try {
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      }
      document.body.removeChild(t);
      showStatus(copied ? "copied" : "failed");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border pt-[clamp(60px,10vh,110px)] pb-[clamp(40px,6vh,64px)]"
    >
      <div className="shell">
        <BlurFade delay={0}>
          <h2 className="max-w-[16ch] font-display text-[clamp(30px,5.4vw,52px)] leading-[1.08] font-semibold tracking-[-0.025em] [font-variation-settings:'opsz'_100]">
            {DATA.contactSection.heading}
          </h2>
        </BlurFade>
        <BlurFade delay={0.08}>
          <p className="mt-5 max-w-[50ch] text-[16.5px] leading-[1.7] text-ink-muted">
            {DATA.contactSection.copy}
          </p>
        </BlurFade>
        <BlurFade delay={0.14}>
          <div>
            <a
              className="mt-[26px] inline-block border-b border-brass-dim pb-1 font-display text-[clamp(19px,3vw,28px)] text-brass transition-colors duration-200 hover:border-brass"
              href={DATA.contact.mailto}
            >
              {email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-live="polite"
              className={cn(
                "mt-[14px] block cursor-pointer rounded-sm border border-border px-[10px] py-[5px] align-middle text-[12.5px] text-ink-faint transition-colors duration-200 hover:border-border-strong hover:text-ink min-[721px]:mt-0 min-[721px]:ml-3 min-[721px]:inline-block",
                copyStatus === "copied" &&
                  "border-jade-dim text-jade hover:border-jade-dim hover:text-jade",
                copyStatus === "failed" &&
                  "border-brass-dim text-brass hover:border-brass-dim hover:text-brass",
              )}
            >
              {copyStatus === "copied"
                ? "Copied"
                : copyStatus === "failed"
                  ? "Copy failed"
                  : "Copy address"}
            </button>
          </div>
        </BlurFade>
        <BlurFade delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-[10px]">
            <Button asChild variant="solid">
              <a
                href={DATA.contact.whatsappMessage}
                target="_blank"
                rel="noopener"
              >
                Message on WhatsApp
              </a>
            </Button>
            <Button asChild>
              <a href={DATA.contact.tel}>{DATA.contact.phoneDisplay}</a>
            </Button>
            <Button asChild>
              <a href={DATA.contact.resume} target="_blank" rel="noopener">
                Download résumé
              </a>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

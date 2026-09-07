"use client";

import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#builds", label: "Builds" },
  { href: "#experience", label: "Experience" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#research", label: "Research" },
] as const;

export function SiteNav() {
  const [progress, setProgress] = useState(0);
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let ticking = false;
    const frame = () => {
      const y = window.scrollY || 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
      setStuck(y > 12);
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

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 z-[200] h-[2px] bg-brass transition-[width] duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />
      <nav
        className={cn(
          "sticky top-0 z-[150] border-b bg-canvas/80 backdrop-blur-[14px] backdrop-saturate-150 transition-colors duration-250",
          stuck ? "border-border" : "border-transparent",
        )}
      >
        <div className="shell flex items-center justify-between gap-6 py-[14px]">
          <a
            href="#top"
            className="font-display text-[17px] font-semibold tracking-[-0.01em] whitespace-nowrap"
          >
            Ibrahim Abdul Majeed<em className="text-brass not-italic">.</em>
          </a>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-[26px] min-[721px]:flex">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={cn(
                    "relative py-1 text-[13.5px] text-ink-muted transition-colors duration-200",
                    "after:absolute after:bottom-0 after:left-0 after:right-full after:h-px after:bg-brass after:transition-[right] after:duration-250",
                    "hover:text-ink hover:after:right-0",
                    active === href && "text-ink after:right-0",
                  )}
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-sm border border-brass-dim px-[15px] py-[7px] text-[13.5px] font-medium text-brass transition-colors duration-200 hover:border-brass hover:bg-brass-wash"
              >
                Get in touch
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}

import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { DATA } from "@/data/resume";

export function SiteFooter() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-[26px] pb-10 text-[12.5px] text-ink-faint">
      <span>Ibrahim Abdul Majeed, PhD — Riyadh, Saudi Arabia</span>
      <div className="flex gap-4 [&_svg]:size-[17px]">
        <a
          href={DATA.contact.github}
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          className="inline-flex transition-colors hover:text-ink"
        >
          <GitHubIcon />
        </a>
        <a
          href={DATA.contact.linkedin}
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          className="inline-flex transition-colors hover:text-ink"
        >
          <LinkedInIcon />
        </a>
        <a
          href={DATA.contact.mailto}
          aria-label="Email"
          className="inline-flex transition-colors hover:text-ink"
        >
          <MailIcon />
        </a>
      </div>
      <span>Updated {DATA.updated}</span>
    </footer>
  );
}

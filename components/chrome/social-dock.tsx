"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { DATA } from "@/data/resume";

const ITEMS = [
  { label: "Email", href: DATA.contact.mailto, icon: MailIcon, external: false },
  { label: "WhatsApp", href: DATA.contact.whatsapp, icon: WhatsAppIcon, external: true },
  { label: "LinkedIn", href: DATA.contact.linkedin, icon: LinkedInIcon, external: true },
  { label: "GitHub", href: DATA.contact.github, icon: GitHubIcon, external: true },
  { label: "Résumé", href: DATA.contact.resume, icon: DownloadIcon, external: true },
] as const;

export function SocialDock() {
  return (
    <div className="fixed bottom-5 left-1/2 z-[160] hidden -translate-x-1/2 min-[721px]:block">
      <TooltipProvider delayDuration={0}>
        <Dock
          className="mt-0 border-border bg-canvas/70"
          iconSize={40}
          iconMagnification={60}
          iconDistance={140}
        >
          {ITEMS.map(({ label, href, icon: Icon, external }) => (
            <DockIcon
              key={label}
              className="text-ink-muted transition-colors hover:bg-brass-wash hover:text-brass"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    aria-label={label}
                    {...(external
                      ? { target: "_blank", rel: "noopener" }
                      : {})}
                    className="flex size-full items-center justify-center [&_svg]:size-[18px]"
                  >
                    <Icon />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">{label}</TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}

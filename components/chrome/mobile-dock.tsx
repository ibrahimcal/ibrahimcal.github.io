"use client";

import {
  DownloadIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const ITEMS = [
  { label: "Email", href: DATA.contact.mailto, icon: MailIcon, hi: true, external: false },
  { label: "WhatsApp", href: DATA.contact.whatsapp, icon: WhatsAppIcon, hi: false, external: true },
  { label: "Call", href: DATA.contact.tel, icon: PhoneIcon, hi: false, external: false },
  { label: "Résumé", href: DATA.contact.resume, icon: DownloadIcon, hi: false, external: true },
] as const;

export function MobileDock() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-[160] flex border-t border-border bg-canvas/95 backdrop-blur-md min-[721px]:hidden"
    >
      {ITEMS.map(({ label, href, icon: Icon, hi, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener" } : {})}
          className={cn(
            "flex flex-1 flex-col items-center gap-1 px-1 pt-[11px] pb-[13px] text-[10.5px] text-ink-muted transition-colors hover:text-ink [&_svg]:size-[17px]",
            hi && "text-brass hover:text-brass",
          )}
        >
          <Icon />
          {label}
        </a>
      ))}
    </nav>
  );
}

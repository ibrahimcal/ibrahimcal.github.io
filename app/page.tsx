import { MobileDock } from "@/components/chrome/mobile-dock";
import { SiteFooter } from "@/components/chrome/site-footer";
import { SiteNav } from "@/components/chrome/site-nav";
import { SocialDock } from "@/components/chrome/social-dock";
import { About } from "@/components/sections/about";
import { Builds } from "@/components/sections/builds";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Focus } from "@/components/sections/focus";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { Research } from "@/components/sections/research";
import { Toolkit } from "@/components/sections/toolkit";
import { Work } from "@/components/sections/work";

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <Hero />
        <Metrics />
        <About />
        <Focus />
        <Work />
        <Builds />
        <Experience />
        <Toolkit />
        <Research />
        <Contact />
        <div className="shell">
          <SiteFooter />
        </div>
      </main>
      <SocialDock />
      <MobileDock />
    </>
  );
}

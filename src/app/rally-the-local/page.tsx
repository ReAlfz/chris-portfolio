/**
 * Rally The Locals — dedicated landing page for the RTL brand/work.
 * Figma: node 99-1876 in Chris Hoquis Portfolio (Copy).
 * Header + footer come from the root layout; this file only mounts page body content.
 */

import type { Metadata } from "next";
import IntroRallySection from "@/components/rally/intro_rally_section";
import CoreValueSection from "@/components/rally/core_value_section";
import ServiceSection from "@/components/rally/service_section";
import BusinesssSection from "@/components/rally/business_section";
import LocalComunitySection from "@/components/rally/local_comunity_section";
import JoinRallySection from "@/components/rally/join_rally_section";

export const metadata: Metadata = {
  title: "Rally The Locals | Chris Hoquis",
  description:
    "Rally The Locals showcases local businesses through stories, community, and creative services.",
};

export default function RallyTheLocalRoute() {
  return (
    <main className="min-h-screen bg-canvas flex flex-col">
      <IntroRallySection />
      <CoreValueSection />
      <ServiceSection />
      <BusinesssSection />
      <LocalComunitySection />
      <JoinRallySection />
    </main>
  );
}

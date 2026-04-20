import type { Metadata } from "next";
import IntroRallySection from "@/components/rally-the-local/intro_rally_section";
import CoreValueSection from "@/components/rally-the-local/core_value_section";
import ServiceSection from "@/components/rally-the-local/service_section";
import BusinesssSection from "@/components/rally-the-local/business_section";
import LocalComunitySection from "@/components/rally-the-local/local_comunity_section";
import JoinRallySection from "@/components/rally-the-local/join_rally_section";

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

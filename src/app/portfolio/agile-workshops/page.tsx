import type { Metadata } from "next";
import AgileCoverSection from "@/components/agile/agile_cover_section";
import AgileDescriptionSection from "@/components/agile/agile_description_section";
import AgileInstitutionsSection from "@/components/agile/agile_institutions_section";
import AgileWorkshopsListingSection from "@/components/agile/agile_workshops_listing_section";
import MyPortfolio from "@/components/my_portfolio";

export const metadata: Metadata = {
  title: "Agile Workshops | Chris Hoquis",
  description:
    "Workshops and training on Agile mindset, Scrum, Kanban, and team collaboration—tailored for your organization.",
};

export default function AgileWorkshopsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <AgileCoverSection />
      <AgileDescriptionSection />
      <AgileInstitutionsSection />
      <AgileWorkshopsListingSection />
      <MyPortfolio isCompact={true} />
    </main>
  );
}

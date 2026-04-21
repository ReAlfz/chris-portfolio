import type { Metadata } from "next";
import SolaceHero from "@/components/solace/solace_hero";
import TenKWhySection from "@/components/solace/ten_k_why_section";
import TenKJourneySection from "@/components/solace/ten_k_journey_section";
import FutureRunsCarousel from "@/components/solace/future_runs_carousel";
import SolaceMoreNav from "@/components/solace/solace_more_nav";
import { FUTURE_RUNS } from "@/components/solace/ten_k_data";
import runImg from "../../../../public/images/home/run_solace.png";

export const metadata: Metadata = {
  title: "10k Runs | My Solace | Chris Hoquis",
  description: "Running journey, race results, and what keeps me coming back to the start line.",
};

export default function TenKRunsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <SolaceHero title="10k Runs" image={runImg} />
      <TenKWhySection />
      <TenKJourneySection />
      <FutureRunsCarousel runs={FUTURE_RUNS} />
      <SolaceMoreNav current="10k" />
    </main>
  );
}

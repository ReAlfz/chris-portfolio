import type { Metadata } from "next";
import SolaceHero from "@/components/solace/solace_hero";
import FutureRunsCarousel from "@/components/solace/10k-runs/future_runs_carousel";
import SolaceMoreNav from "@/components/solace/solace_more_nav";
import { FUTURE_RUNS } from "@/components/solace/10k-runs/ten_k_data";
import runImg from "../../../../public/images/home/run_solace.png";
import RunJourneySection from "@/components/solace/10k-runs/run_journey_section";
import RunWhySection from "@/components/solace/10k-runs/run_why_section";

export const metadata: Metadata = {
  title: "10k Runs | My Solace | Chris Hoquis",
  description: "Running journey, race results, and what keeps me coming back to the start line.",
};

export default function TenKRunsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <SolaceHero title="10k Runs" image={runImg} />
      <RunWhySection />
      <RunJourneySection />
      <FutureRunsCarousel runs={FUTURE_RUNS} />
      <SolaceMoreNav current="10k" />
    </main>
  );
}

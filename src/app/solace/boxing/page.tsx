import type { Metadata } from "next";
import SolaceHero from "@/components/solace/solace_hero";
import BoxingStorySection from "@/components/solace/boxing/boxing_story_section";
import SolaceMomentsSection from "@/components/solace/solace_moments_section";
import SolaceMoreNav from "@/components/solace/solace_more_nav";
import boxingImg from "../../../../public/images/home/boxing_solace.png";
import runImg from "../../../../public/images/home/run_solace.png";
import BoxingWhySection from "@/components/solace/boxing/boxing_why_section";

export const metadata: Metadata = {
  title: "Boxing | My Solace | Chris Hoquis",
  description: "Why boxing matters, how training shaped my mindset, and moments in the ring.",
};

const BOXING_SLIDES = [
  {
    title: "First Win in The Ring",
    meta: "Toronto Boxing Club | March 12, 2015",
    body: "A defining moment in my boxing journey. After weeks of training, I stepped into the ring and pushed through every round. It was not just about winning—it was about proving to myself that I belonged here.",
    imageMain: boxingImg,
    imageSide: runImg,
  },

  {
    title: "First Win in The Ring 2",
    meta: "Toronto Boxing Club | March 12, 2015",
    body: "A defining moment in my boxing journey. After weeks of training, I stepped into the ring and pushed through every round. It was not just about winning—it was about proving to myself that I belonged here.",
    imageMain: boxingImg,
    imageSide: runImg,
  },
];

export default function BoxingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <SolaceHero title="Boxing" image={boxingImg} />
      <BoxingWhySection />
      <BoxingStorySection />
      <SolaceMomentsSection
        heading="Boxing Moments"
        slides={BOXING_SLIDES}
        useFuture={false} />
      <SolaceMoreNav current="boxing" />
    </main>
  );
}

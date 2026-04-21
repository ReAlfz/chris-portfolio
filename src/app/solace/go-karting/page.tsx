import type { Metadata } from "next";
import SolaceHero from "@/components/solace/solace_hero";
import GokartWhySection from "@/components/solace/gokart_why_section";
import GokartStorySection from "@/components/solace/gokart_story_section";
import SolaceMomentsSection from "@/components/solace/solace_moments_section";
import SolaceMoreNav from "@/components/solace/solace_more_nav";
import kartImg from "../../../../public/images/home/karting_solace.png";
import boxingImg from "../../../../public/images/home/boxing_solace.png";

export const metadata: Metadata = {
  title: "Go Karting | My Solace | Chris Hoquis",
  description: "Go-karting, speed, and lessons from the track.",
};

const KART_SLIDES = [
  {
    title: "Racing With Friends",
    meta: "Rapid City Karting, Manitoba | June 8, 2021",
    body: "A day filled with fast laps and friendly competition. Pushing for the perfect racing line and nailing every corner made this an unforgettable karting session.",
    imageMain: kartImg,
    imageSide: boxingImg,
  },
];

export default function GoKartingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <SolaceHero title="Go Karting" image={kartImg} />
      <GokartWhySection />
      <GokartStorySection />
      <SolaceMomentsSection heading="Go-Karting Moments" slides={KART_SLIDES} />
      <SolaceMoreNav current="gokart" />
    </main>
  );
}

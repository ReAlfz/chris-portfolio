import HomeSection from "@/components/home/home_section";
import MyServiceSection from "@/components/home/my_service_section";
import TedxSection from "@/components/home/tedx_section";
import VolunteerSection from "@/components/home/volunteer_section";
import AchievementSection from "@/components/home/achievement_section";
import MySolaceSection from "@/components/home/my_solace_section";
import InTouch from "@/components/in_touch";
import MyPortfolio from "@/components/my_portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas flex flex-col">
      <HomeSection />
      <MyPortfolio isCompact={false} />
      <TedxSection />
      <MyServiceSection />
      <VolunteerSection />
      <AchievementSection />
      <MySolaceSection />
      <InTouch />
    </main>
  );
}

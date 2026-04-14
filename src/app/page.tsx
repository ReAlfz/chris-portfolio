import HomeSection from "@/components/home/home_section";
import MyServiceSection from "@/components/home/my_service_section";
import TedxSection from "@/components/home/widget/tedx_section";
import VolunteerSection from "@/components/home/volunteer_section";
import AchievementSection from "@/components/home/achievement_section";
import MySolaceSection from "@/components/home/my_solace_section";
import InTouch from "@/components/in_touch";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas flex flex-col">
      <HomeSection />
      <TedxSection />
      <MyServiceSection />
      <VolunteerSection />
      <AchievementSection />
      <MySolaceSection />
      <InTouch />
    </main>
  );
}

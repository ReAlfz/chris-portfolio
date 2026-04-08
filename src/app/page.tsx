import HomeSection from "@/components/home/home_section";
import MyServiceSection from "@/components/home/my_service_section";
import TedxSection from "@/components/home/widget/tedx_section";
import VolunteerSection from "@/components/home/volunteer_section";
import AchievementSection from "@/components/home/achievement_section";

export default function Home() {
  return (
    <main className="flex flex-col bg-canvas">
      <HomeSection />
      <TedxSection />
      <MyServiceSection />
      <VolunteerSection />
      <AchievementSection />
    </main>
  );
}

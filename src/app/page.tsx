import HomeSection from "@/components/home/home_section";
import MyServiceSection from "@/components/home/my_service_section";
import TedxSection from "@/components/home/tedx_section";
import VolunteerSection from "@/components/home/volunteer_section";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#F9FAFB]">
      <HomeSection />
      <TedxSection />
      <MyServiceSection />
      <VolunteerSection />
    </main>
  );
}

import AllMyServiceSection from "@/components/my-service/all_my_service_section";
import IntroMyServiceSection from "@/components/my-service/intro_my_service_section";

export default function MyServiceRoute() {
    return (
        <main className="min-h-screen bg-canvas flex flex-col">
            <IntroMyServiceSection />
            <AllMyServiceSection />
        </main>
    );
}
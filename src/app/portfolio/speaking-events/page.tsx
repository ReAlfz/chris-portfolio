import InTouch from "@/components/in_touch";
import MyPortfolio from "@/components/my_portfolio";
import IntroSpeakingSection from "@/components/speaking-event/intro_speaking_section";

export default function SpeakingEventRoute() {
    return (
        <main className="min-h-screen bg-canvas flex flex-col">
            <IntroSpeakingSection />
            <MyPortfolio isCompact={true} />
            <InTouch />
        </main>
    );
}
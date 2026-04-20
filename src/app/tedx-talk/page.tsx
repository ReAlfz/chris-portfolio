import MyPortfolio from "@/components/my_portfolio";
import IntroTedxSection from "@/components/tedx/intro_tedx_section";
import StoryTedxSection from "@/components/tedx/story_tedx_section";

export default function TedxTalkRoute() {
    return (
        <main className="min-h-screen bg-canvas flex flex-col">
            <IntroTedxSection />
            <StoryTedxSection />
            <MyPortfolio isCompact={true} />
        </main>
    );
}
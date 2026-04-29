import MyPortfolio from "@/components/my_portfolio";
import GaleryTedxSection from "@/components/tedx-talk/galery_tedx_section";
import IntroTedxSection from "@/components/tedx-talk/intro_tedx_section";
import RecordTedxSection from "@/components/tedx-talk/record_tedx_section";
import StoryTedxSection from "@/components/tedx-talk/story_tedx_section";
import TakewayTedxSection from "@/components/tedx-talk/takeaways_tedx_section";

export default function TedxTalkRoute() {
    return (
        <main className="min-h-screen bg-canvas flex flex-col">
            <IntroTedxSection />
            <StoryTedxSection />
            <TakewayTedxSection />
            <RecordTedxSection />
            <GaleryTedxSection />
            <MyPortfolio isCompact={true} />
        </main>
    );
}
import MyPortfolio from "@/components/my_portfolio";
import IntroTedxSection from "@/components/tedx/intro_tedx_section";

export default function TedxTalkRoute() {
    return (
        <main className="min-h-screen bg-canvas flex flex-col">
            <IntroTedxSection />
            <MyPortfolio isCompact={true} />
        </main>
    );
}
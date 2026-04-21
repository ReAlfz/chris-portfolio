import MyPortfolio from "@/components/my_portfolio";
import InstitutionUniversitySection from "@/components/university-class/institution_university_section";
import IntroUniversitySection from "@/components/university-class/intro_university_section";

export default function UniversityClassRoute() {
    return (
        <main className="min-h-screen bg-canvas flex flex-col">
            <IntroUniversitySection />
            <InstitutionUniversitySection />
            <MyPortfolio isCompact={true} />
        </main>
    );
}
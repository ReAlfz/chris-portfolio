/** My Portfolio — composes the large `PortfolioProjects` section stack. */
import InTouch from "@/components/in_touch";
import CategorySection from "@/components/portfolio/category_section";
import IntroPortfolioSection from "@/components/portfolio/intro_portfolio_section";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-canvas flex flex-col">
      <IntroPortfolioSection />
      <CategorySection />
      <InTouch />
    </main>
  );
}

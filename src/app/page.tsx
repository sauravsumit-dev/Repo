import CTASection from "@/components/CTASection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import StatsSection from "@/components/StatsSection";
import TestimonialsPreview from "@/components/TestimonialsPreview";


export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <FeaturedProjects />
      <ServicesPreview />
      <TestimonialsPreview />
      <CTASection />
    </main>
  );
}

// <Comp -- Comp (@/components/Comp) / <C -- Comp - (alias) function Comp(): JSX.Elementimpor...
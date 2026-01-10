import HeroSection from "@/components/Home/HeroSection";
import TrustedBackedSection from "@/components/Home/TrustedBackedSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import ReadySection from "@/components/Home/ReadySection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import TheScienceSection from "@/components/Home/TheScienceSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import FAQSection from "@/components/Home/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBackedSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TheScienceSection />
      <TestimonialsSection />
      <FAQSection />
      <ReadySection />
    </main>
  );
}

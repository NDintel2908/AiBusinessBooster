import { Suspense } from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ChallengesSection from "@/components/landing/ChallengesSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AboutSection from "@/components/landing/AboutSection";
import PricingSection from "@/components/landing/PricingSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import FAQSection from "@/components/landing/FAQSection"; // Import the new component

export default function Home() {
  return (
    <div className="min-h-screen bg-deep-dark text-gray-200 overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-electric-purple opacity-10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-neon-blue opacity-10 blur-[150px] rounded-full"></div>
      </div>

      <Header />

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
          <ChallengesSection />
          <FeaturesSection />
          <AboutSection />
          <PricingSection />
          <FAQSection /> {/* Added FAQSection */}
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
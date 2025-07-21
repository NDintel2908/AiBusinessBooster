import { Suspense } from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ChallengesSection from "@/components/landing/ChallengesSection";
import BusinessSectorsSection from "@/components/landing/BusinessSectorsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ServiceSection from "@/components/landing/ServiceSection";
import AboutSection from "@/components/landing/AboutSection";
import FeedbackSection from "@/components/landing/FeedbackSection";
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
          {/* <AboutSection /> */}
          <HeroSection />
          <ServiceSection />
          <ChallengesSection />
          <BusinessSectorsSection />
          <FeaturesSection />
          <PricingSection />
          <FeedbackSection />
          <FAQSection /> {/* Added FAQSection */}
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

import { Suspense, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ChallengesSection from "@/components/landing/ChallengesSection";
import BusinessSectorsSection from "@/components/landing/BusinessSectorsSection";
import ServiceSection from "@/components/landing/ServiceSection";
import FeedbackSection from "@/components/landing/FeedbackSection";
import PricingSection from "@/components/landing/PricingSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import FAQSection from "@/components/landing/FAQSection";

export default function Home() {
  const [location] = useLocation();

  // Handle scroll to section from sessionStorage
  useEffect(() => {
    const scrollToSection = sessionStorage.getItem("scrollToSection");
    if (scrollToSection) {
      // Clear the sessionStorage first
      sessionStorage.removeItem("scrollToSection");
      
      // Wait for components to render, then scroll
      setTimeout(() => {
        const scrollContainer = document.querySelector('.scroll-snap-wrapper');
        const sections = document.querySelectorAll('.scroll-snap-section');
        
        // Map section names to indices
        const sectionMap: { [key: string]: number } = {
          'hero': 0,
          'about': 1,
          'features': 2,
          'challenges': 3,
          'business-sectors': 4,
          'pricing': 5,
          'feedback': 6,
          'faq': 7,
          'contact': 8
        };
        
        const sectionIndex = sectionMap[scrollToSection];
        if (scrollContainer && sections[sectionIndex]) {
          scrollContainer.scrollTo({
            top: (sections[sectionIndex] as HTMLElement).offsetTop,
            behavior: "smooth"
          });
          
          // Extract language from URL for clean URL
          const lang = location.match(/^\/(en|vi)/)?.[1] || 'en';
          window.history.replaceState(null, "", `/${lang}`);
        }
      }, 100);
    }
  }, [location]);
  return (
    <div className="scroll-snap-container">
      <Header />
      <div className="scroll-snap-wrapper">
        <div className="scroll-snap-section">
          <HeroSection />
        </div>
        
        <div className="scroll-snap-section">
          <AboutSection />
        </div>

        <div className="scroll-snap-section">
          <ServiceSection />
        </div>
        
        <div className="scroll-snap-section">
          <ChallengesSection />
        </div>
        
        <div className="scroll-snap-section">
          <BusinessSectorsSection />
        </div>

        <div className="scroll-snap-section">
          <FeaturesSection />
        </div>

        <div className="scroll-snap-section">
          <PricingSection />
        </div>
        
        <div className="scroll-snap-section">
          <FeedbackSection />
        </div>
        
        <div className="scroll-snap-section">
          <FAQSection />
        </div>
        
        <div className="scroll-snap-section scroll-snap-section-with-footer">
          <div className="scroll-snap-internal-scroll">
            <ContactSection />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { GradientButton } from "@/components/ui/gradient-button";
import { useIsMobile } from "@/hooks/use-mobile";
import BCPAILogo from "./BCPAI.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const lastScrollY = useRef(0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  return (
    <header className={`fixed w-full top-0 z-50 px-4 mt-1 transition-all duration-300 ${!isVisible ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
      <div className={`max-w-2xl mx-auto rounded-xl transition-all duration-300 ${
        isScrolled ? "bg-black/85 backdrop-blur-lg border border-gray-800/30" : "bg-transparent"
      }`}>
        <div className="px-3 py-0.5 flex items-center justify-between">
          {/* Logo section */}
          <div className="flex-shrink-0">
          <div className="w-14 h-14 md:w-16 md:h-16 relative overflow-hidden mr-2 logo" style={{ marginTop: '-2px', marginBottom: '-2px' }}>
            <img src={BCPAILogo} alt="BCPAI Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-white font-heading text-xl md:text-2xl font-bold tracking-wider hero-title">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-electric-purple"></span>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button 
            className="text-gray-200 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-center flex-1 px-8">
          <div className="flex space-x-8 font-primary text-sm">
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/#service-section';
              }}
              className="text-gray-300 hover:text-neon-blue transition duration-300"
            >
              Tính năng
            </a>
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/#pricing';
              }}
              className="text-gray-300 hover:text-neon-blue transition duration-300"
            >
              Bảng giá
            </a>
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/#about';
              }}
              className="text-gray-300 hover:text-neon-blue transition duration-300"
            >
              Về chúng tôi
            </a>
          </div>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a href="https://bcp.global/sign-up" target="_blank" rel="noopener noreferrer">
            <GradientButton className="cta-button text-black">Bắt đầu ngay</GradientButton>
          </a>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-deep-dark border border-gray-800 rounded-xl mt-1 p-3 max-w-6xl mx-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col space-y-3 font-primary text-sm">
          <Link 
            href="/#service-section" 
            className="text-gray-300 hover:text-neon-blue transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tính năng
          </Link>
          <Link 
            href="/#pricing" 
            className="text-gray-300 hover:text-neon-blue transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Bảng giá
          </Link>
          <Link 
            href="/#about" 
            className="text-gray-300 hover:text-neon-blue transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Về chúng tôi
          </Link>
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-md bg-gradient-to-r from-neon-blue to-electric-purple text-black font-medium text-center cta-button font-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Bắt đầu ngay
          </a>
        </nav>
      </div>
    </header>
  );
}
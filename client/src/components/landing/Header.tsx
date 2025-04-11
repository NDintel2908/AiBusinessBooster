
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { GradientButton } from "@/components/ui/gradient-button";
import { useIsMobile } from "@/hooks/use-mobile";
import BCPAILogo from "./BCPAI.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-deep-dark/80 backdrop-blur-md border-b border-gray-700/20" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 relative overflow-hidden mr-3 logo" style={{ marginTop: '-24px', marginBottom: '-24px' }}>
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
        <nav className="hidden lg:flex space-x-8 items-center font-primary text-sm">
          <a href="#features" className="text-gray-300 hover:text-neon-blue transition duration-300">Tính năng</a>
          <a href="#pricing" className="text-gray-300 hover:text-neon-blue transition duration-300">Bảng giá</a>
          <a href="#about" className="text-gray-300 hover:text-neon-blue transition duration-300">Về chúng tôi</a>
          <a href="#pricing" className="text-gray-300 hover:text-neon-blue transition duration-300 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </a>
          <a href="#contact">
            <GradientButton>Bắt đầu ngay</GradientButton>
          </a>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden bg-deep-dark border-t border-gray-800 p-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col space-y-4 font-primary text-sm">
          <a 
            href="#features" 
            className="text-gray-300 hover:text-neon-blue transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tính năng
          </a>
          <a 
            href="#pricing" 
            className="text-gray-300 hover:text-neon-blue transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Bảng giá
          </a>
          <a 
            href="#about" 
            className="text-gray-300 hover:text-neon-blue transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Về chúng tôi
          </a>
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-md bg-gradient-to-r from-neon-blue to-electric-purple text-white font-medium text-center cta-button font-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Bắt đầu ngay
          </a>
        </nav>
      </div>
    </header>
  );
}

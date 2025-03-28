import { useState, useEffect } from "react";
import { Link } from "wouter";
import { GradientButton } from "@/components/ui/gradient-button";
import { useIsMobile } from "@/hooks/use-mobile";

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
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 relative overflow-hidden mr-3">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-electric-purple rounded-lg opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-orbitron font-bold">AI</div>
          </div>
          <h1 className="text-white font-orbitron text-xl md:text-2xl font-bold tracking-wider">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-electric-purple">Nexus</span>Match
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
        <nav className="hidden lg:flex space-x-8 items-center font-inter text-sm">
          <a href="#features" className="text-gray-300 hover:text-neon-blue transition duration-300">Features</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-neon-blue transition duration-300">How It Works</a>
          <a href="#about" className="text-gray-300 hover:text-neon-blue transition duration-300">About Us</a>
          <a href="#pricing" className="text-gray-300 hover:text-neon-blue transition duration-300">Pricing</a>
          <a href="#contact">
            <GradientButton>Get Started</GradientButton>
          </a>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden bg-deep-dark border-t border-gray-800 p-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col space-y-4 font-inter text-sm">
          <a 
            href="#features" 
            className="text-gray-300 hover:text-neon-blue transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-gray-300 hover:text-neon-blue transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#about" 
            className="text-gray-300 hover:text-neon-blue transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a 
            href="#pricing" 
            className="text-gray-300 hover:text-neon-blue transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-md bg-gradient-to-r from-neon-blue to-electric-purple text-white font-medium text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}

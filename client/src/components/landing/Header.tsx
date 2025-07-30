import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { GradientButton } from "@/components/ui/gradient-button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "react-i18next";
// import BCPAILogo from "./BCPAI.webp";
import BCPAILogo from "./BCPAI2.png";
import "../../lib/i18n";

export default function Header() {
  const { t, i18n } = useTranslation("header");
  const [location] = useLocation();

  // Extract language from URL
  const lang = location.match(/^\/(en|vi)/)?.[1] || "en";

  // Sync i18n language with URL
  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const lastScrollY = useRef(0);

  // Handle scroll effect for scroll snapping container
  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector(".scroll-snap-wrapper");
      if (!scrollContainer) return;

      const currentScrollY = scrollContainer.scrollTop;
      setIsScrolled(currentScrollY > 10);

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    const scrollContainer = document.querySelector(".scroll-snap-wrapper");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${!isVisible ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-xl border-b border-gray-800/30 shadow-lg"
            : "bg-white/40 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout - Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 items-center h-16">
            {/* Logo section - Desktop */}
            <div className="flex justify-start">
              <a
                href={`/${lang}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/${lang}`;
                }}
                className="flex items-center cursor-pointer group"
              >
                <div className="w-40 h-16 relative overflow-hidden transition-transform duration-200 group-hover:scale-105">
                  <img
                    src={BCPAILogo}
                    alt="BCPAI Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="flex justify-center">
              <div className="flex items-center space-x-16">
                <a
                  href={`/${lang}`}
                  className="text-gray-800 hover:text-brand-accent font-medium text-sm transition-colors duration-200 relative group whitespace-nowrap"
                >
                  {t("header.navigation.home")}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent group-hover:w-full transition-all duration-200"></span>
                </a>
                <a
                  href={`/${lang}/#about`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== `/${lang}`) {
                      sessionStorage.setItem("scrollToSection", "about");
                      window.location.href = `/${lang}`;
                    } else {
                      const scrollContainer = document.querySelector(
                        ".scroll-snap-wrapper",
                      );
                      const sections = document.querySelectorAll(
                        ".scroll-snap-section",
                      );
                      const aboutSection = sections[1]; // AboutSection is at index 1
                      if (scrollContainer && aboutSection) {
                        scrollContainer.scrollTo({
                          top: (aboutSection as HTMLElement).offsetTop,
                          behavior: "smooth",
                        });
                        window.history.replaceState(null, "", `/${lang}`);
                      }
                    }
                  }}
                  className="text-gray-800 hover:text-brand-accent font-medium text-sm transition-colors duration-200 relative group whitespace-nowrap"
                >
                  {t("header.navigation.about")}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent group-hover:w-full transition-all duration-200"></span>
                </a>
                <a
                  href={`/${lang}/#features`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== `/${lang}`) {
                      sessionStorage.setItem("scrollToSection", "features");
                      window.location.href = `/${lang}`;
                    } else {
                      const scrollContainer = document.querySelector(
                        ".scroll-snap-wrapper",
                      );
                      const sections = document.querySelectorAll(
                        ".scroll-snap-section",
                      );
                      const featuresSection = sections[2]; // FeaturesSection is at index 2
                      if (scrollContainer && featuresSection) {
                        scrollContainer.scrollTo({
                          top: (featuresSection as HTMLElement).offsetTop,
                          behavior: "smooth",
                        });
                        window.history.replaceState(null, "", `/${lang}`);
                      }
                    }
                  }}
                  className="text-gray-800 hover:text-brand-accent font-medium text-sm transition-colors duration-200 relative group whitespace-nowrap"
                >
                  {t("header.navigation.features")}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent group-hover:w-full transition-all duration-200"></span>
                </a>
                <a
                  href={`/${lang}/#pricing`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== `/${lang}`) {
                      sessionStorage.setItem("scrollToSection", "pricing");
                      window.location.href = `/${lang}`;
                    } else {
                      const scrollContainer = document.querySelector(
                        ".scroll-snap-wrapper",
                      );
                      const sections = document.querySelectorAll(
                        ".scroll-snap-section",
                      );
                      const pricingSection = sections[6]; // PricingSection is now at index 6
                      if (scrollContainer && pricingSection) {
                        scrollContainer.scrollTo({
                          top: (pricingSection as HTMLElement).offsetTop,
                          behavior: "smooth",
                        });
                        window.history.replaceState(null, "", `/${lang}`);
                      }
                    }
                  }}
                  className="text-gray-800 hover:text-brand-accent font-medium text-sm transition-colors duration-200 relative group whitespace-nowrap"
                >
                  {t("header.navigation.pricing")}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent group-hover:w-full transition-all duration-200"></span>
                </a>
                <a
                  href={`/${lang}/#contact`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== `/${lang}`) {
                      sessionStorage.setItem("scrollToSection", "contact");
                      window.location.href = `/${lang}`;
                    } else {
                      const scrollContainer = document.querySelector(
                        ".scroll-snap-wrapper",
                      );
                      const sections = document.querySelectorAll(
                        ".scroll-snap-section",
                      );
                      const contactSection = sections[9]; // ContactSection is now at index 9
                      if (scrollContainer && contactSection) {
                        scrollContainer.scrollTo({
                          top: (contactSection as HTMLElement).offsetTop,
                          behavior: "smooth",
                        });
                        window.history.replaceState(null, "", `/${lang}`);
                      }
                    }
                  }}
                  className="text-gray-800 hover:text-brand-accent font-medium text-sm transition-colors duration-200 relative group whitespace-nowrap"
                >
                  {t("header.navigation.contact")}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent group-hover:w-full transition-all duration-200"></span>
                </a>
              </div>
            </nav>

            {/* Desktop CTA section */}
            <div className="flex items-center justify-end space-x-4">
              <div className="language-switcher-no-hover">
                <LanguageSwitcher />
              </div>
              <a
                href="https://bcp.global/sign-up"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GradientButton
                  size="sm"
                  className="font-semibold px-6 py-2 text-sm shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-accent/30 transition-all duration-200"
                >
                  {t("header.cta.getStarted")}
                </GradientButton>
              </a>
            </div>
          </div>

          {/* Mobile Layout - Flex */}
          <div className="flex lg:hidden items-center justify-between h-14">
            {/* Mobile Logo section */}
            <div className="flex-shrink-0">
              <a
                href={`/${lang}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/${lang}`;
                }}
                className="flex items-center cursor-pointer group"
              >
                <div className="w-32 h-16 relative overflow-hidden transition-transform duration-200 group-hover:scale-105">
                  <img
                    src={BCPAILogo}
                    alt="BCPAI Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>
            </div>

            {/* Mobile menu controls */}
            <div className="flex items-center space-x-3">
              <div className="language-switcher-no-hover">
                <LanguageSwitcher />
              </div>
              <button
                className="text-gray-200 hover:text-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-navy rounded-lg p-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={t("header.mobile.toggleMenu")}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 max-h-96 visible"
            : "opacity-0 max-h-0 invisible"
        }`}
      >
        <div className="bg-brand-deep/70 backdrop-blur-xl border-b border-brand-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href={`/${lang}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `/${lang}`;
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-800 hover:text-brand-accent font-medium text-base py-2 px-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                {t("header.navigation.home")}
              </a>
              <a
                href={`/${lang}/#about`}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== `/${lang}`) {
                    sessionStorage.setItem("scrollToSection", "about");
                    window.location.href = `/${lang}`;
                  } else {
                    const scrollContainer = document.querySelector(
                      ".scroll-snap-wrapper",
                    );
                    const sections = document.querySelectorAll(
                      ".scroll-snap-section",
                    );
                    const aboutSection = sections[1]; // AboutSection is at index 1
                    if (scrollContainer && aboutSection) {
                      scrollContainer.scrollTo({
                        top: (aboutSection as HTMLElement).offsetTop,
                        behavior: "smooth",
                      });
                      window.history.replaceState(null, "", `/${lang}`);
                    }
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-800 hover:text-brand-accent font-medium text-base py-2 px-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                {t("header.navigation.about")}
              </a>
              <a
                href={`/${lang}/#features`}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== `/${lang}`) {
                    sessionStorage.setItem("scrollToSection", "features");
                    window.location.href = `/${lang}`;
                  } else {
                    const scrollContainer = document.querySelector(
                      ".scroll-snap-wrapper",
                    );
                    const sections = document.querySelectorAll(
                      ".scroll-snap-section",
                    );
                    const featuresSection = sections[2]; // FeaturesSection is at index 2
                    if (scrollContainer && featuresSection) {
                      scrollContainer.scrollTo({
                        top: (featuresSection as HTMLElement).offsetTop,
                        behavior: "smooth",
                      });
                      window.history.replaceState(null, "", `/${lang}`);
                    }
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-800 hover:text-brand-accent font-medium text-base py-2 px-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                {t("header.navigation.features")}
              </a>
              <a
                href={`/${lang}/#pricing`}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== `/${lang}`) {
                    sessionStorage.setItem("scrollToSection", "pricing");
                    window.location.href = `/${lang}`;
                  } else {
                    const scrollContainer = document.querySelector(
                      ".scroll-snap-wrapper",
                    );
                    const sections = document.querySelectorAll(
                      ".scroll-snap-section",
                    );
                    const pricingSection = sections[5]; // PricingSection is now at index 5
                    if (scrollContainer && pricingSection) {
                      scrollContainer.scrollTo({
                        top: (pricingSection as HTMLElement).offsetTop,
                        behavior: "smooth",
                      });
                      window.history.replaceState(null, "", `/${lang}`);
                    }
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-800 hover:text-brand-accent font-medium text-base py-2 px-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                {t("header.navigation.pricing")}
              </a>
              <a
                href={`/${lang}/#contact`}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== `/${lang}`) {
                    sessionStorage.setItem("scrollToSection", "contact");
                    window.location.href = `/${lang}`;
                  } else {
                    const scrollContainer = document.querySelector(
                      ".scroll-snap-wrapper",
                    );
                    const sections = document.querySelectorAll(
                      ".scroll-snap-section",
                    );
                    const contactSection = sections[8]; // ContactSection is now at index 8
                    if (scrollContainer && contactSection) {
                      scrollContainer.scrollTo({
                        top: (contactSection as HTMLElement).offsetTop,
                        behavior: "smooth",
                      });
                      window.history.replaceState(null, "", `/${lang}`);
                    }
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-800 hover:text-brand-accent font-medium text-base py-2 px-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                {t("header.navigation.contact")}
              </a>

              <div className="pt-4 border-t border-brand-primary/30">
                <a
                  href="https://bcp.global/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <GradientButton className="w-full font-semibold py-3 text-base shadow-lg shadow-brand-primary/20">
                    {t("header.cta.getStarted")}
                  </GradientButton>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
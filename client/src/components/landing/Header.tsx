import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { GradientButton } from "@/components/ui/gradient-button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "react-i18next";
import BCPAILogo from "./BCPAI.webp";
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
    <header
      className={`fixed w-full top-0 z-50 px-4 mt-1 transition-all duration-300 ${!isVisible ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <div
        className={`max-w-2xl mx-auto rounded-xl transition-all duration-300 ${
          isScrolled
            ? "bg-black/85 backdrop-blur-lg border border-gray-800/30"
            : "bg-transparent"
        }`}
      >
        <div className="px-3 py-0.5 flex items-center justify-between">
          {/* Logo section */}
          <div className="flex-shrink-0">
            <a
              href={`/${lang}`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `/${lang}`;
              }}
              className="flex items-center cursor-pointer group"
            >
              <div
                className="w-14 h-14 md:w-16 md:h-16 relative overflow-hidden mr-2 logo transition-transform duration-200 group-hover:scale-105"
                style={{ marginTop: "-2px", marginBottom: "-2px" }}
              >
                <img
                  src={BCPAILogo}
                  alt="BCPAI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-white font-heading text-xl md:text-2xl font-bold tracking-wider hero-title">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-electric-purple"></span>
              </h1>
            </a>
          </div>

          <div className="flex items-center space-x-2 lg:hidden">
            <LanguageSwitcher />
            <button
              className="text-gray-200 hover:text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t("header.mobile.toggleMenu")}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className="flex space-x-8 font-primary text-sm">
              <a
                href={`/${lang}/#service-section`}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== `/${lang}`) {
                    window.location.href = `/${lang}/#service-section`;
                  } else {
                    const section = document.getElementById("service-section");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                      window.history.replaceState(null, "", `/${lang}`);
                    }
                  }
                }}
                className="text-gray-300 hover:text-neon-blue transition duration-300"
              >
                {t("header.navigation.features")}
              </a>
              <a
                href={`/${lang}/#pricing`}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== `/${lang}`) {
                    window.location.href = `/${lang}/#pricing`;
                  } else {
                    const section = document.getElementById("pricing");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                      window.history.replaceState(null, "", `/${lang}`);
                    }
                  }
                }}
                className="text-gray-300 hover:text-neon-blue transition duration-300"
              >
                {t("header.navigation.pricing")}
              </a>
              <a
                href={`/${lang}/#about`}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== `/${lang}`) {
                    window.location.href = `/${lang}/#about`;
                  } else {
                    const section = document.getElementById("about");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                      window.history.replaceState(null, "", `/${lang}`);
                    }
                  }
                }}
                className="text-gray-300 hover:text-neon-blue transition duration-300"
              >
                {t("header.navigation.aboutUs")}
              </a>
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <LanguageSwitcher />
            <a
              href="https://bcp.global/sign-up"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GradientButton size="md" className="font-semibold">
                {t("header.cta.getStarted")}
              </GradientButton>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-deep-dark border border-gray-800 rounded-xl mt-1 p-3 max-w-6xl mx-auto ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col space-y-3 font-primary text-sm">
          <a
            href={`/${lang}/#service-section`}
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname !== `/${lang}`) {
                window.location.href = `/${lang}/#service-section`;
              } else {
                const section = document.getElementById("service-section");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                  window.history.replaceState(null, "", `/${lang}`);
                }
              }
              setIsMobileMenuOpen(false);
            }}
            className="text-gray-300 hover:text-neon-blue transition duration-300"
          >
            {t("header.navigation.features")}
          </a>
          <a
            href={`/${lang}/#pricing`}
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname !== `/${lang}`) {
                window.location.href = `/${lang}/#pricing`;
              } else {
                const section = document.getElementById("pricing");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                  window.history.replaceState(null, "", `/${lang}`);
                }
              }
              setIsMobileMenuOpen(false);
            }}
            className="text-gray-300 hover:text-neon-blue transition duration-300"
          >
            {t("header.navigation.pricing")}
          </a>
          <a
            href={`/${lang}/#about`}
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname !== `/${lang}`) {
                window.location.href = `/${lang}/#about`;
              } else {
                const section = document.getElementById("about");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                  window.history.replaceState(null, "", `/${lang}`);
                }
              }
              setIsMobileMenuOpen(false);
            }}
            className="text-gray-300 hover:text-neon-blue transition duration-300"
          >
            {t("header.navigation.aboutUs")}
          </a>
          <a
            href="https://bcp.global/sign-up"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <LanguageSwitcher />
            <GradientButton className="w-full font-semibold">
              {t("header.cta.getStarted")}
            </GradientButton>
          </a>
        </nav>
      </div>
    </header>
  );
}

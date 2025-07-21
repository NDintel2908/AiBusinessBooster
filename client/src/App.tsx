import { Suspense, lazy, useEffect } from "react";
import { Switch, Route, useLocation, useRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "./lib/i18n";
import "./lib/i18n";

// Language Context để đảm bảo sync
const LanguageContext = React.createContext<{
  currentLanguage: string;
  isChanging: boolean;
}>({
  currentLanguage: "en",
  isChanging: false,
});

// Language Provider để wrap toàn bộ app
function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = React.useState(i18n.language);
  const [isChanging, setIsChanging] = React.useState(false);

  useEffect(() => {
    const match = location.match(/^\/(en|vi)/);
    const urlLang = match ? match[1] : "en";

    if (currentLanguage !== urlLang && !isChanging) {
      setIsChanging(true);
      console.log(
        `Language provider changing from ${currentLanguage} to ${urlLang}`,
      );

      i18n
        .changeLanguage(urlLang)
        .then(() => {
          setCurrentLanguage(urlLang);
          setIsChanging(false);
          console.log(`Language provider changed successfully to ${urlLang}`);
        })
        .catch((error) => {
          console.error("Language provider error:", error);
          setIsChanging(false);
        });
    }
  }, [location, currentLanguage, isChanging, i18n]);

  const contextValue = React.useMemo(
    () => ({
      currentLanguage,
      isChanging,
    }),
    [currentLanguage, isChanging],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
// AutoRedirect component: redirect / to /en (default language)
function AutoRedirect() {
  const [, setLocation] = useLocation();
  useEffect(() => {
    // Always redirect to English as default
    setLocation("/en", { replace: true });
  }, [setLocation]);
  return null;
}

// LanguageSync component: update i18n language based on URL
function LanguageSync() {
  const [location] = useLocation();
  const { i18n } = useTranslation();
  const [isChangingLanguage, setIsChangingLanguage] = React.useState(false);

  useEffect(() => {
    const match = location.match(/^\/(en|vi)/);
    const urlLang = match ? match[1] : "en";

    // Force language change if different
    if (i18n.language !== urlLang && !isChangingLanguage) {
      console.log(`Changing language from ${i18n.language} to ${urlLang}`); // Debug log
      setIsChangingLanguage(true);

      i18n
        .changeLanguage(urlLang)
        .then(() => {
          console.log(`Language changed successfully to ${urlLang}`);
          setIsChangingLanguage(false);

          // Force a small delay to ensure all components receive the update
          setTimeout(() => {
            // Trigger a custom event to notify components
            window.dispatchEvent(
              new CustomEvent("languageChanged", {
                detail: { language: urlLang },
              }),
            );
          }, 50);
        })
        .catch((error) => {
          console.error("Error changing language:", error);
          setIsChangingLanguage(false);
        });
    }
  }, [location, i18n, isChangingLanguage]);

  return null;
}

const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const PricingComparison = lazy(() => import("@/pages/PricingComparison"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const PaymentPolicy = lazy(() => import("@/pages/PaymentPolicy"));

// HelpButton component
function HelpButton() {
  const { t, i18n } = useTranslation("app");
  const [isHovered, setIsHovered] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleClick = () => {
    window.open("https://zalo.me/3297451762229454190", "_blank");
  };

  // Hiển thị tooltip sau một khoảng thời gian
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);

      // Ẩn tooltip sau 5 giây
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);

      return () => clearTimeout(hideTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Listen for language changes to refresh tooltip
  React.useEffect(() => {
    const handleLanguageChange = () => {
      // Force a small re-render to update translations
      setShowTooltip((prev) => prev);
    };

    window.addEventListener("languageChanged", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: isHovered ? "#0056b3" : "#007bff",
    color: "white",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: isHovered
      ? "0px 4px 15px rgba(0, 123, 255, 0.5), 0px 0px 20px rgba(0, 123, 255, 0.3)"
      : "0px 2px 5px rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
    border: "none",
    outline: "none",
    transition: "all 0.3s ease",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  };

  const pulseAnimation = {
    animation: "pulse 2s infinite",
  };

  const tooltipStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "90px",
    right: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "white",
    padding: "10px 15px",
    borderRadius: "6px",
    fontSize: "14px",
    maxWidth: "200px",
    zIndex: 1001,
    visibility: showTooltip ? "visible" : "hidden",
    opacity: showTooltip ? 1 : 0,
    transition: "opacity 0.3s ease, visibility 0.3s ease",
  };

  return (
    <>
      <div style={tooltipStyle}>{t("helpButton.tooltip")}</div>
      <button
        style={{ ...buttonStyle, ...(showTooltip && pulseAnimation) }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={t("helpButton.ariaLabel")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
            }
          }
        `}
      </style>
    </>
  );
}

function Router() {
  const { t, i18n } = useTranslation("app");

  // Use language as key to force re-render when language changes
  return (
    <div key={i18n.language}>
      <Suspense fallback={<div>{t("loading")}</div>}>
        <LanguageSync />
        <Switch>
          <Route path="/" component={AutoRedirect} />
          <Route path="/:lang/privacy-policy" component={PrivacyPolicy} />
          <Route path="/:lang/terms-of-service" component={TermsOfService} />
          <Route path="/:lang/payment-policy" component={PaymentPolicy} />
          <Route
            path="/:lang/pricing-comparison"
            component={PricingComparison}
          />
          <Route path="/:lang" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Router />
        <HelpButton /> {/* Add HelpButton here */}
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;

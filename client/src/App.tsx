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
import GlitchWelcome from "@/components/GlitchWelcome";
import { HelpButton } from "@/components/ui/help-button";

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

// uncomment this for glitch effect
function App() {
  const [showGlitch, setShowGlitch] = React.useState(() => {
    // Check if user has visited before
    return !localStorage.getItem("bcp-visited");
  });

  const handleGlitchComplete = () => {
    // Mark as visited
    localStorage.setItem("bcp-visited", "true");
    setShowGlitch(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      {showGlitch && <GlitchWelcome onComplete={handleGlitchComplete} />}
      <LanguageProvider>
        <Router />
        <HelpButton /> {/* Add HelpButton here */}
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

// uncomment this for normal effect
// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <LanguageProvider>
//         <Router />
//         <HelpButton /> {/* Add HelpButton here */}
//         <Toaster />
//       </LanguageProvider>
//     </QueryClientProvider>
//   );
// }

export default App;

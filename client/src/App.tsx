import { Suspense, lazy, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
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

// AutoRedirect component: redirect / to /en ONLY if valid path not found
function AutoRedirect() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // 1. Kiểm tra xem có phải trang chủ không
    const isRoot = location === "/";

    // 2. Kiểm tra xem đường dẫn có bắt đầu bằng ngôn ngữ hợp lệ không
    const hasLang = /^\/(en|vi|jp|th)/.test(location);

    // 3. Kiểm tra xem đường dẫn có bắt đầu bằng /wise không (Chấp nhận cả /wise/ hay /wise?...)
    // UPDATE QUAN TRỌNG: Dùng Regex để bắt dính mọi trường hợp của wise
    const isWise = /^\/wise/.test(location);

    // LOGIC: Nếu là trang chủ HOẶC (Không có ngôn ngữ VÀ Không phải wise) -> Thì Redirect về /en
    if (isRoot || (!hasLang && !isWise)) {
      console.log(`AutoRedirect: Redirecting from ${location} to /en`);
      setLocation("/en", { replace: true });
    }
  }, [location, setLocation]);

  return null;
}

// LanguageSync component: update i18n language based on URL
function LanguageSync() {
  const [location] = useLocation();
  const { i18n } = useTranslation();
  const [isChangingLanguage, setIsChangingLanguage] = React.useState(false);

  useEffect(() => {
    const match = location.match(/^\/(en|vi|jp|th)/);
    const urlLang = match ? match[1] : "en";

    // Only change if language is different and not currently changing
    if (i18n.language !== urlLang && !isChangingLanguage) {
      setIsChangingLanguage(true);
      console.log(`LanguageSync: changing from ${i18n.language} to ${urlLang}`);

      i18n
        .changeLanguage(urlLang)
        .then(() => {
          console.log(`LanguageSync: Successfully changed to ${urlLang}`);
          setIsChangingLanguage(false);
        })
        .catch((error) => {
          console.error("LanguageSync error:", error);
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
// Import component Wise
const Wise = lazy(() => import("@/pages/Wise"));

function Router() {
  const { t, i18n } = useTranslation("app");
  const [location] = useLocation();

  // Log current location for debugging
  React.useEffect(() => {
    console.log(
      `Router: Current location is ${location}, i18n language is ${i18n.language}`,
    );
  }, [location, i18n.language]);

  // Use language as key to force re-render when language changes
  return (
    <div key={i18n.language}>
      <Suspense fallback={<div>{t("loading")}</div>}>
        <LanguageSync />
        <Switch>
          <Route path="/" component={AutoRedirect} />

          {/* Route /wise đặt trước để ưu tiên xử lý */}
          {/* UPDATE: Thêm Nesting để wouter bắt được cả /wise/ có gạch chéo */}
          <Route path="/wise" component={Wise} />

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
  const [showGlitch, setShowGlitch] = React.useState(() => {
    // Check if user has seen glitch in this session
    return !sessionStorage.getItem("bcp-glitch-shown");
  });

  const handleGlitchComplete = () => {
    // Mark as shown in this session
    sessionStorage.setItem("bcp-glitch-shown", "true");
    setShowGlitch(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      {showGlitch && <GlitchWelcome onComplete={handleGlitchComplete} />}
      <Router />
      <HelpButton />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Vietnamese translations
import viAbout from "../../src/locales/vi/landing/AboutSection.json";
import viBCPOverview from "../../src/locales/vi/landing/BCPOverviewSection.json";
import viBusinessSectors from "../../src/locales/vi/landing/BusinessSectorsSection.json";
import viChallenges from "../../src/locales/vi/landing/ChallengesSection.json";
import viContact from "../../src/locales/vi/landing/ContactSection.json";
import viFAQ from "../../src/locales/vi/landing/FAQSection.json";
import viFeatures from "../../src/locales/vi/landing/FeaturesSection.json";
import viFeedback from "../../src/locales/vi/landing/FeedbackSection.json";
import viFooter from "../../src/locales/vi/landing/Footer.json";
import viHeader from "../../src/locales/vi/landing/Header.json";
import viHero from "../../src/locales/vi/landing/HeroSection.json";
import viPricing from "../../src/locales/vi/landing/PricingSection.json";
import viService from "../../src/locales/vi/landing/ServiceSection.json";
import viPaymentPolicy from "../../src/locales/vi/pages/PaymentPolicy.json";
import viPricingComparison from "../../src/locales/vi/pages/PricingComparison.json";
import viPrivacyPolicy from "../../src/locales/vi/pages/PrivacyPolicy.json";
import viTermsOfService from "../../src/locales/vi/pages/TermsOfService.json";
import viApp from "../../src/locales/vi/App.json";

// English translations
import enAbout from "../../src/locales/us/landing/AboutSection.json";
import enBCPOverview from "../../src/locales/us/landing/BCPOverviewSection.json";
import enBusinessSectors from "../../src/locales/us/landing/BusinessSectorsSection.json";
import enChallenges from "../../src/locales/us/landing/ChallengesSection.json";
import enContact from "../../src/locales/us/landing/ContactSection.json";
import enFAQ from "../../src/locales/us/landing/FAQSection.json";
import enFeatures from "../../src/locales/us/landing/FeaturesSection.json";
import enFeedback from "../../src/locales/us/landing/FeedbackSection.json";
import enFooter from "../../src/locales/us/landing/Footer.json";
import enHeader from "../../src/locales/us/landing/Header.json";
import enHero from "../../src/locales/us/landing/HeroSection.json";
import enPricing from "../../src/locales/us/landing/PricingSection.json";
import enService from "../../src/locales/us/landing/ServiceSection.json";
import enPaymentPolicy from "../../src/locales/us/pages/PaymentPolicy.json";
import enPricingComparison from "../../src/locales/us/pages/PricingComparison.json";
import enPrivacyPolicy from "../../src/locales/us/pages/PrivacyPolicy.json";
import enTermsOfService from "../../src/locales/us/pages/TermsOfService.json";
import enApp from "../../src/locales/us/App.json";

// Japanese translations
import jpAbout from "../../src/locales/jp/landing/AboutSection.json";
import jpBCPOverview from "../../src/locales/jp/landing/BCPOverviewSection.json";
import jpBusinessSectors from "../../src/locales/jp/landing/BusinessSectorsSection.json";
import jpChallenges from "../../src/locales/jp/landing/ChallengesSection.json";
import jpContact from "../../src/locales/jp/landing/ContactSection.json";
import jpFAQ from "../../src/locales/jp/landing/FAQSection.json";
import jpFeatures from "../../src/locales/jp/landing/FeaturesSection.json";
import jpFeedback from "../../src/locales/jp/landing/FeedbackSection.json";
import jpFooter from "../../src/locales/jp/landing/Footer.json";
import jpHeader from "../../src/locales/jp/landing/Header.json";
import jpHero from "../../src/locales/jp/landing/HeroSection.json";
import jpPricing from "../../src/locales/jp/landing/PricingSection.json";
import jpService from "../../src/locales/jp/landing/ServiceSection.json";
import jpPaymentPolicy from "../../src/locales/jp/pages/PaymentPolicy.json";
import jpPricingComparison from "../../src/locales/jp/pages/PricingComparison.json";
import jpPrivacyPolicy from "../../src/locales/jp/pages/PrivacyPolicy.json";
import jpTermsOfService from "../../src/locales/jp/pages/TermsOfService.json";
import jpApp from "../../src/locales/jp/App.json";

// Thai translations
import thAbout from "../../src/locales/th/landing/AboutSection.json";
import thBCPOverview from "../../src/locales/th/landing/BCPOverviewSection.json";
import thBusinessSectors from "../../src/locales/th/landing/BusinessSectorsSection.json";
import thChallenges from "../../src/locales/th/landing/ChallengesSection.json";
import thContact from "../../src/locales/th/landing/ContactSection.json";
import thFAQ from "../../src/locales/th/landing/FAQSection.json";
import thFeatures from "../../src/locales/th/landing/FeaturesSection.json";
import thFeedback from "../../src/locales/th/landing/FeedbackSection.json";
import thFooter from "../../src/locales/th/landing/Footer.json";
import thHeader from "../../src/locales/th/landing/Header.json";
import thHero from "../../src/locales/th/landing/HeroSection.json";
import thPricing from "../../src/locales/th/landing/PricingSection.json";
import thService from "../../src/locales/th/landing/ServiceSection.json";
import thPaymentPolicy from "../../src/locales/th/pages/PaymentPolicy.json";
import thPricingComparison from "../../src/locales/th/pages/PricingComparison.json";
import thPrivacyPolicy from "../../src/locales/th/pages/PrivacyPolicy.json";
import thTermsOfService from "../../src/locales/th/pages/TermsOfService.json";
import thApp from "../../src/locales/th/App.json";

const resources = {
  vi: {
    about: viAbout,
    bcpOverview: viBCPOverview,
    businessSectors: viBusinessSectors,
    challenges: viChallenges,
    contact: viContact,
    faq: viFAQ,
    features: viFeatures,
    feedback: viFeedback,
    footer: viFooter,
    header: viHeader,
    hero: viHero,
    pricing: viPricing,
    service: viService,
    paymentPolicy: viPaymentPolicy,
    pricingComparison: viPricingComparison,
    privacyPolicy: viPrivacyPolicy,
    termsOfService: viTermsOfService,
    app: viApp,
  },
  en: {
    about: enAbout,
    bcpOverview: enBCPOverview,
    businessSectors: enBusinessSectors,
    challenges: enChallenges,
    contact: enContact,
    faq: enFAQ,
    features: enFeatures,
    feedback: enFeedback,
    footer: enFooter,
    header: enHeader,
    hero: enHero,
    pricing: enPricing,
    service: enService,
    paymentPolicy: enPaymentPolicy,
    pricingComparison: enPricingComparison,
    privacyPolicy: enPrivacyPolicy,
    termsOfService: enTermsOfService,
    app: enApp,
  },
  jp: {
    about: jpAbout,
    bcpOverview: jpBCPOverview,
    businessSectors: jpBusinessSectors,
    challenges: jpChallenges,
    contact: jpContact,
    faq: jpFAQ,
    features: jpFeatures,
    feedback: jpFeedback,
    footer: jpFooter,
    header: jpHeader,
    hero: jpHero,
    pricing: jpPricing,
    service: jpService,
    paymentPolicy: jpPaymentPolicy,
    pricingComparison: jpPricingComparison,
    privacyPolicy: jpPrivacyPolicy,
    termsOfService: jpTermsOfService,
    app: jpApp,
  },
  th: {
    about: thAbout,
    bcpOverview: thBCPOverview,
    businessSectors: thBusinessSectors,
    challenges: thChallenges,
    contact: thContact,
    faq: thFAQ,
    features: thFeatures,
    feedback: thFeedback,
    footer: thFooter,
    header: thHeader,
    hero: thHero,
    pricing: thPricing,
    service: thService,
    paymentPolicy: thPaymentPolicy,
    pricingComparison: thPricingComparison,
    privacyPolicy: thPrivacyPolicy,
    termsOfService: thTermsOfService,
    app: thApp,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language is English
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },

  // Thêm cấu hình để đảm bảo language change được xử lý đồng bộ
  react: {
    useSuspense: false,
    bindI18n: "languageChanged loaded",
    bindI18nStore: "added removed",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
  },

  // Enable debug để track language changes
  debug: process.env.NODE_ENV === "development",
});

// Add event listener to track language changes
i18n.on("languageChanged", (lng) => {
  console.log(`i18n: Language changed event fired: ${lng}`);
});

// Add event listener to track when language change fails
i18n.on("failedLoading", (lng, ns, msg) => {
  console.error(`i18n: Failed loading ${lng}/${ns}: ${msg}`);
});

// Log available resources
console.log("i18n: Available resources:", Object.keys(resources));

export default i18n;

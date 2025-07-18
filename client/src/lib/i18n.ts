import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Vietnamese translations
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
// import viTermsOfService from "../../src/locales/vi/pages/TermsOfService.json";
import viApp from "../../src/locales/vi/App.json";

// English translations
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
// import enTermsOfService from "../../src/locales/us/pages/TermsOfService.json";
import enApp from "../../src/locales/us/App.json";

const resources = {
  vi: {
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
    // termsOfService: viTermsOfService,
    app: viApp,
  },
  en: {
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
    // paymentPolicy: enPaymentPolicy,
    // pricingComparison: enPricingComparison,
    // privacyPolicy: enPrivacyPolicy,
    // termsOfService: enTermsOfService,
    app: enApp,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "vi",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

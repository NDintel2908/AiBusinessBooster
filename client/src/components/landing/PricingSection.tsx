import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { GradientButton } from "@/components/ui/gradient-button";
import "../../lib/i18n";

// Mock components for demonstration
const GlassCard = ({
  children,
  className,
  gradientBorder,
}: {
  children: any;
  className?: string;
  gradientBorder?: boolean;
}) => (
  <div className={`backdrop-blur-sm bg-white/5 ${className}`}>{children}</div>
);

interface PricingFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  index: number;
  ctaText: string;
  ctaLink: string;
  isWideLayout?: boolean;
  isCenterPlan?: boolean;
  isHovered?: boolean;
  onHover?: (hovered: boolean) => void;
}

interface MobilePricingProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  oneConnectionPlan: any;
  pricingPlans: any[];
}

function MobilePricing({
  activeTab,
  setActiveTab,
  oneConnectionPlan,
  pricingPlans,
}: MobilePricingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { t } = useTranslation("pricing");

  const tabData = [
    {
      id: "buyPerUse",
      name: t("pricingSection.tabs.buyPerUse") || "Pay Per Use",
      plans: [oneConnectionPlan],
    },
    {
      id: "subscriptionPlans",
      name: t("pricingSection.tabs.subscriptionPlans") || "Subscription Plans",
      plans: pricingPlans,
    },
  ];

  const activeTabData =
    tabData.find((tab) => tab.id === activeTab) || tabData[0];
  const hasMultiplePlans = activeTabData.plans.length > 1;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < activeTabData.plans.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Reset slide when changing tabs
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab]);

  return (
    <div className="space-y-6">
      {/* Tab Selection */}
      <div className="flex bg-gray-800/40 backdrop-blur-sm rounded-xl p-1 border border-gray-700/30 shadow-lg">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 text-center ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-brand-accent to-brand-primary text-white shadow-lg shadow-brand-accent/25"
                : "text-gray-400 hover:text-white hover:bg-gray-700/40"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="font-semibold tracking-wide">{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Plans Display */}
      {hasMultiplePlans ? (
        // Multiple plans with swiper
        <div className="relative px-4 pt-6 pb-4 flex flex-col min-h-[600px]">
          <div
            className="overflow-visible flex-grow flex flex-col"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out items-stretch flex-grow"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {activeTabData.plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className="w-full flex-shrink-0 flex justify-center px-4"
                >
                  <div className="w-full max-w-sm flex flex-col">
                    <PricingPlan
                      {...plan}
                      index={index}
                      isWideLayout={false}
                      isCenterPlan={plan.isCenterPlan}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-4 pt-2">
            {activeTabData.plans.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index
                    ? "bg-brand-accent"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to pricing plan ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className={`absolute -left-2 top-1/2 transform -translate-y-1/2 -translate-y-6 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-opacity duration-300 z-10 ${
              currentSlide === 0
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100"
            }`}
            onClick={() => currentSlide > 0 && goToSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
            aria-label="Previous pricing plan"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className={`absolute -right-2 top-1/2 transform -translate-y-1/2 -translate-y-6 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-opacity duration-300 z-10 ${
              currentSlide === activeTabData.plans.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100"
            }`}
            onClick={() =>
              currentSlide < activeTabData.plans.length - 1 &&
              goToSlide(currentSlide + 1)
            }
            disabled={currentSlide === activeTabData.plans.length - 1}
            aria-label="Next pricing plan"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      ) : (
        // Single plan
        <div className="px-4">
          <div className="max-w-sm mx-auto">
            <PricingPlan
              {...activeTabData.plans[0]}
              index={0}
              isWideLayout={false}
              isCenterPlan={activeTabData.plans[0].isCenterPlan}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function PricingPlan({
  name,
  price,
  period,
  description,
  features,
  isPopular = false,
  index,
  ctaText,
  ctaLink,
  isWideLayout = false,
  isCenterPlan = false,
  isHovered = false,
  onHover,
}: PricingPlanProps) {
  const { t } = useTranslation("pricing");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col h-full w-full"
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      <div className="relative flex flex-col flex-grow">
        {/* Labels positioned outside the card */}
        {isPopular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-primary/80 to-brand-accent/80 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm shadow-lg z-10">
            {t("pricingSection.labels.mostPopular")}
          </div>
        )}

        {isCenterPlan && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-accent/80 to-brand-primary/80 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm shadow-lg z-10">
            {t("pricingSection.labels.singlePackage")}
          </div>
        )}

        <GlassCard
          className={`rounded-2xl p-4 md:p-6 relative transform transition-all duration-500 hover:-translate-y-2 flex flex-col flex-grow ${
            isPopular
              ? "border-2 border-brand-primary/60 bg-gradient-to-b from-brand-primary/5 to-brand-accent/5 shadow-lg shadow-brand-primary/10"
              : "border border-gray-700"
          } ${
            isCenterPlan
              ? "border-2 border-brand-accent/50 bg-gradient-to-b from-brand-accent/5 to-brand-primary/5"
              : ""
          }`}
          gradientBorder={false}
        >
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 px-2">
              {name}
            </h3>
            <div className="flex flex-col items-center justify-center mb-2 md:mb-3">
              <div className="flex items-baseline flex-wrap justify-center">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  {price}
                </span>
                {period && (
                  <span className="text-gray-400 ml-2 text-sm md:text-base">
                    {period}
                  </span>
                )}
              </div>
            </div>
            <p className="text-gray-300 text-sm md:text-base px-2">
              {description}
            </p>
          </div>

          <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent mb-4 md:mb-6"></div>

          <div className="space-y-3 mb-6 md:mb-8 flex-grow px-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <div className="w-5 flex-shrink-0 flex justify-center mt-0.5">
                  {feature.included ? (
                    <svg
                      className={`w-4 h-4 md:w-5 md:h-5 ${
                        feature.highlight
                          ? "text-brand-primary"
                          : "text-brand-accent"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  )}
                </div>
                <span
                  className={`text-gray-300 text-sm md:text-base leading-tight ml-2 ${
                    feature.highlight ? "font-semibold" : ""
                  }`}
                >
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-4 md:pt-6 px-2">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <GradientButton
                size="md"
                className={`w-full font-semibold text-sm md:text-base transition-all duration-200 ${
                  name === "Starter Plan"
                    ? "border-2 border-white text-white shadow-lg shadow-white/30 hover:bg-white/10 hover:text-white hover:border-white"
                    : "shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-accent/30"
                }`}
                variant={isPopular || isCenterPlan ? "primary" : "outline"}
                animate={isPopular || isCenterPlan}
              >
                {ctaText}
              </GradientButton>
            </a>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  const { t, i18n } = useTranslation("pricing");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState<string>("buyPerUse"); // Default to Buy Per Use

  // Extract language from i18n
  const lang = i18n.language || "en";

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Get pricing plans from translation
  const oneConnectionPlan = t("pricingSection.plans.oneConnection", {
    returnObjects: true,
  }) as any;
  const starterPlan = t("pricingSection.plans.starter", {
    returnObjects: true,
  }) as any;
  const premiumPlan = t("pricingSection.plans.premium", {
    returnObjects: true,
  }) as any;

  const oneConnectionPlanData = {
    ...oneConnectionPlan,
    ctaText: oneConnectionPlan.ctaText,
    ctaLink: t("pricingSection.links.buyCredit"),
    isCenterPlan: true,
  };

  const pricingPlans = [
    {
      ...starterPlan,
      ctaText: starterPlan.ctaText,
      ctaLink: t("pricingSection.links.signUp"),
    },
    {
      ...premiumPlan,
      isPopular: true,
      ctaText: premiumPlan.ctaText,
      ctaLink: t("pricingSection.links.buyCredit"),
    },
  ];

  const tabData = [
    {
      id: "buyPerUse",
      name: t("pricingSection.tabs.buyPerUse") || "Pay Per Use",
      plans: [oneConnectionPlanData],
    },
    {
      id: "subscriptionPlans",
      name: t("pricingSection.tabs.subscriptionPlans") || "Subscription Plans",
      plans: pricingPlans,
    },
  ];

  const activeTabData =
    tabData.find((tab) => tab.id === activeTab) || tabData[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <section id="pricing" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/3 right-1/3 w-1/3 h-1/3 bg-brand-accent opacity-10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1/3 h-1/3 bg-brand-primary opacity-10 blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            ref={ref}
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 mb-4">
              <span className="text-base md:text-lg font-medium text-blue-400 font-primary">
                {t("pricingSection.badge")}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3 whitespace-nowrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                {t("pricingSection.title")}
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              {t("pricingSection.description")}
            </p>
          </motion.div>

          {/* Desktop: Horizontal Tab Layout, Mobile: Tab Selection */}
          <div className="max-w-7xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden lg:block mb-16">
              {/* Tab Navigation */}
              <div className="flex justify-center mb-12">
                <div className="flex bg-gray-800/40 backdrop-blur-sm rounded-xl p-1 border border-gray-700/30 shadow-lg w-full max-w-2xl">
                  {tabData.map((tab, index) => (
                    <motion.button
                      key={tab.id}
                      className={`flex-1 py-4 px-6 rounded-lg text-base font-medium transition-all duration-300 text-center ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-brand-accent to-brand-primary text-white shadow-lg shadow-brand-accent/25"
                          : "text-gray-400 hover:text-white hover:bg-gray-700/40"
                      }`}
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveTab(tab.id)}
                      onMouseEnter={() => setActiveTab(tab.id)}
                    >
                      <span className="font-semibold tracking-wide">
                        {tab.name}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="min-h-[600px]"
              >
                {activeTabData.plans.length === 1 ? (
                  // Single plan (One Connection)
                  <div className="flex justify-center">
                    <div className="max-w-md">
                      <PricingPlan
                        {...activeTabData.plans[0]}
                        index={0}
                        isWideLayout={false}
                        isCenterPlan={activeTabData.plans[0].isCenterPlan}
                      />
                    </div>
                  </div>
                ) : (
                  // Multiple plans (Starter + Premium)
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {activeTabData.plans.map((plan, index) => (
                      <PricingPlan
                        key={plan.name}
                        {...plan}
                        index={index}
                        isWideLayout={false}
                        isCenterPlan={false}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden -mx-4 pt-4">
              <MobilePricing
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                oneConnectionPlan={oneConnectionPlanData}
                pricingPlans={pricingPlans}
              />
            </div>
          </div>

          {/* Additional Info Section - HIDDEN */}
          {/* 
          <div className="mt-16 text-center">
            <div className="backdrop-blur-sm bg-white/5 border border-gray-700 rounded-2xl p-8 mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-brand-primary/5 to-brand-accent/5 rounded-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t("pricingSection.additionalInfo.title")}
                </h3>
                <p className="text-gray-300 mb-6">
                  {t("pricingSection.additionalInfo.description")}
                </p>
                <div className="flex justify-center">
                  <GradientButton
                    onClick={() => {
                      window.location.href = `/${lang}/pricing-comparison`;
                    }}
                    size="md"
                    variant="primary"
                    className="inline-flex items-center justify-center shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-accent/30 transition-all duration-200 transform hover:-translate-y-1"
                  >
                    {t("pricingSection.additionalInfo.compareText")}
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </GradientButton>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-20 h-20 bg-brand-accent/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-brand-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>
          */}
        </div>
      </section>
    </div>
  );
}

import { useEffect } from "react";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { useTranslation } from "react-i18next";
import "../../lib/i18n";

export default function HeroSection() {
  const { t } = useTranslation("hero");

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Get business persons from translation (now used as company data)
  const businessPersons = t("heroSection.businessPersons", {
    returnObjects: true,
  }) as Array<{
    alt: string;
    src: string;
  }>;

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-16 md:pt-0">
      {/* Video Background - Fullscreen */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ zIndex: 0 }}
        src="/theme.mp4"
      ></video>

      {/* Gradient overlay for better text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0F0F2B]/80 to-[#041124]/80"
        style={{ zIndex: 1 }}
      >
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute w-full h-full"
            style={{
              backgroundImage: `linear-gradient(#00f2fe 1px, transparent 1px),
                                linear-gradient(90deg, #00f2fe 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              transform: "perspective(500px) rotateX(60deg)",
              transformOrigin: "top",
            }}
          />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-electric-purple/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon-blue/20 rounded-full blur-[100px]" />
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          zIndex: 2,
        }}
      />

      {/* Main Content Container - Centered */}
      <div className="container mx-auto px-4 z-10 w-full flex-1 flex items-center justify-center mt-[70px]">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-3 md:space-y-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hide badge when empty */}
          {t("heroSection.badge") && (
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-transparent border-transparent mb-2 md:mb-3 mx-auto opacity-0"
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse mr-2"></span>
              <span className="text-sm md:text-base lg:text-lg font-medium text-brand-accent font-primary">
                {t("heroSection.badge")}
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold leading-tight text-white bg-clip-text"
            style={{ lineHeight: "1.2", letterSpacing: "0.5px" }}
          >
            {t("heroSection.title")}
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl font-heading font-semibold text-center text-white mb-2"
            style={{ letterSpacing: "2px" }}
          >
            {t("heroSection.subtitle")}
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="text-sm md:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto font-primary px-4"
            dangerouslySetInnerHTML={{ __html: t("heroSection.description") }}
          />

          <motion.div
            variants={itemVariants}
            className="flex flex-row justify-center gap-3 md:gap-6 pt-2 md:pt-4 px-4"
          >
            <a
              href="https://bcp.global/sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-[160px] md:max-w-none md:flex-none"
            >
              <GradientButton
                size="lg"
                animate
                className="w-full font-semibold text-sm md:text-base"
              >
                {t("heroSection.cta.primary")}
              </GradientButton>
            </a>
            <GradientButton
              size="lg"
              variant="outline"
              className="flex-1 max-w-[160px] md:max-w-none md:flex-none font-semibold text-sm md:text-base border-2 border-white text-white shadow-lg shadow-white/30 hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              <span className="flex items-center justify-center">
                <span>{t("heroSection.cta.secondary")}</span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 ml-1 md:ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </GradientButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Trusted by section - Moved to bottom */}
      <div className="container mx-auto px-4 z-10 w-full pb-8 md:pb-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xs md:text-sm text-gray-400 font-primary mb-3 md:mb-4">
              {t("heroSection.trustedBy.title")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
              {businessPersons.slice(0, 5).map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12 opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={company.src}
                    alt={company.alt}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert"
                  />
                </div>
              ))}
              {businessPersons.length > 5 && (
                <div className="flex items-center justify-center opacity-60">
                  <span className="text-xs md:text-sm text-gray-400 font-primary px-2">
                    {t("heroSection.trustedBy.andMore")}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
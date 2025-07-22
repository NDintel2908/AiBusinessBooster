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

  // Get business persons from translation
  const businessPersons = t("heroSection.businessPersons", {
    returnObjects: true,
  }) as Array<{
    alt: string;
    src: string;
  }>;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-transparent border-transparent mb-6 mx-auto opacity-0"
          >
            <span className="w-2 h-2 rounded-full bg-bright-teal animate-pulse mr-2"></span>
            <span className="text-base md:text-lg font-medium text-bright-teal font-primary">
              {t("heroSection.badge")}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl font-heading font-bold leading-loose text-white bg-clip-text"
            style={{ lineHeight: "1.3", letterSpacing: "0.5px" }}
          >
            {t("heroSection.title")}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-primary"
          >
            {t("heroSection.description")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6 pt-4"
          >
            <a
              href="https://bcp.global/sign-up"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GradientButton
                size="lg"
                animate
                className="w-full sm:w-auto font-semibold"
              >
                {t("heroSection.cta.primary")}
              </GradientButton>
            </a>
            <GradientButton
              size="lg"
              variant="outline"
              className="w-full sm:w-auto font-semibold"
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
                  ></path>
                </svg>
              </span>
            </GradientButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 pt-8"
          >
            <div className="flex -space-x-2">
              {businessPersons.map((person, index) => (
                <img
                  key={index}
                  src={person.src}
                  alt={person.alt}
                  className="w-10 h-10 rounded-full border-2 border-deep-dark object-cover"
                />
              ))}
            </div>
            <div className="text-sm text-gray-400 font-primary">
              <span className="font-semibold text-white">
                {t("heroSection.stats.number")}
              </span>{" "}
              {t("heroSection.stats.text")}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

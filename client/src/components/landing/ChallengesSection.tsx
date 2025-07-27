import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import { GlassCard } from "@/components/ui/glass-card";
import "../../lib/i18n";

export default function ChallengesSection() {
  const { t } = useTranslation("challenges");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Get comparison data from translation
  const comparisonData = t("challengesSection.comparisons", {
    returnObjects: true,
  }) as Array<{
    traditional: { title: string; description: string };
    bcp: { title: string; description: string };
  }>;

  // Ensure comparisonData is an array
  const safeComparisonData = Array.isArray(comparisonData)
    ? comparisonData
    : [];

  return (
    <section id="challenges" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-electric-purple opacity-10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          ref={ref}
          className="text-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
        >
          {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-blue/20 border border-neon-blue/40 mb-4">
          <span className="text-base md:text-lg font-medium text-blue-400 font-primary">
              {t("challengesSection.sectionHeader.badge")}
            </span>
          </div> */}
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            <Trans
              i18nKey="challengesSection.sectionHeader.title"
              ns="challenges"
              components={[
                <span className="text-red-400 font-bold" />,
                <span className="text-brand-accent font-bold" />,
              ]}
            />
          </h2>
          <p className="text-gray-300 font-primary">
            {t("challengesSection.sectionHeader.description")}
          </p>
        </motion.div>

        {/* Desktop Layout - 2 Column Grid with Headers */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          {/* Column Headers */}
          <motion.div
            className="grid grid-cols-2 gap-8 mb-8"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                },
              },
            }}
          >
            {/* Traditional Method Header */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500/20 to-red-500/20 flex items-center justify-center border-2 border-red-500/30">
                <span className="text-3xl">❌</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-red-400 mb-2">
                {t("challengesSection.headers.traditional.title")}
              </h3>
              <p className="text-sm text-gray-400">
                {t("challengesSection.headers.traditional.subtitle")}
              </p>
            </div>

            {/* BCP Solution Header */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 flex items-center justify-center border-2 border-brand-accent/30">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-brand-accent mb-2">
                {t("challengesSection.headers.bcp.title")}
              </h3>
              <p className="text-sm text-gray-400">
                {t("challengesSection.headers.bcp.subtitle")}
              </p>
            </div>
          </motion.div>

          {/* Comparison Rows */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.4,
                },
              },
            }}
          >
            {safeComparisonData.map((comparison, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-2 gap-8 items-stretch"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Traditional Method Card */}
                <GlassCard
                  className={`p-6 border-red-400/20 bg-red-500/5 h-full flex flex-col transition-all duration-300 ${
                    hoveredIndex === index
                      ? "border-red-400/40 bg-red-500/10 shadow-lg shadow-red-500/20"
                      : ""
                  }`}
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <span className="text-2xl mt-1">❌</span>
                    <h4 className="text-lg font-semibold text-red-400">
                      {comparison.traditional.title}
                    </h4>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed flex-1">
                    {comparison.traditional.description}
                  </p>
                  {/* Connection Line */}
                  <div className="absolute right-0 top-1/2 w-8 h-px bg-gradient-to-r from-red-400/50 to-blue-400/50 transform translate-x-4 -translate-y-1/2 opacity-50"></div>
                </GlassCard>

                {/* BCP Solution Card */}
                <GlassCard
                  className={`p-6 border-brand-accent/20 bg-brand-primary/5 h-full flex flex-col transition-all duration-300 ${
                    hoveredIndex === index
                      ? "border-brand-accent/40 bg-brand-primary/10 shadow-lg shadow-brand-accent/20"
                      : ""
                  }`}
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <span className="text-2xl mt-1">✅</span>
                    <h4 className="text-lg font-semibold text-brand-accent">
                      {comparison.bcp.title}
                    </h4>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed flex-1">
                    {comparison.bcp.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Layout - Stacked Cards */}
        <div className="lg:hidden space-y-8">
          {safeComparisonData.map((comparison, index) => (
            <motion.div
              key={index}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {/* Traditional Method Card */}
              <GlassCard className="p-6 border-red-400/20 bg-red-500/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center border border-red-400/30 mr-4">
                    <span className="text-xl">❌</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400">
                      {comparison.traditional.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {t("challengesSection.labels.traditional")}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {comparison.traditional.description}
                </p>
              </GlassCard>

              {/* VS Divider for Mobile */}
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-blue-400 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {t("challengesSection.labels.vs")}
                  </span>
                </div>
              </div>

              {/* BCP Solution Card */}
              <GlassCard className="p-6 border-brand-accent/20 bg-brand-primary/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 flex items-center justify-center border border-brand-accent/30 mr-4">
                    <span className="text-xl">✅</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-accent">
                      {comparison.bcp.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {t("challengesSection.labels.bcpSolution")}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {comparison.bcp.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

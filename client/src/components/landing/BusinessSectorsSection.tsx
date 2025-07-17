import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GlassCard } from "@/components/ui/glass-card";
import "../../lib/i18n";

const businessData = [
  {
    groupId: "manufacturing",
    groupColor: "from-blue-500 to-cyan-500",
    sectors: [
      { key: "itDevelopment", icon: "💻" },
      { key: "consulting", icon: "📊" },
      { key: "hr", icon: "👥" },
      { key: "marketing", icon: "📢" },
      { key: "distribution", icon: "🏪" },
      { key: "logistics", icon: "🚛" },
      { key: "architecture", icon: "🏗️" },
      { key: "realEstate", icon: "🏢" },
      { key: "export", icon: "🌍" },
    ],
  },
  {
    groupId: "technology",
    groupColor: "from-purple-500 to-pink-500",
    sectors: [
      { key: "agriculture", icon: "🌾" },
      { key: "food", icon: "🍽️" },
      { key: "textile", icon: "🧵" },
      { key: "paper", icon: "📄" },
      { key: "chemical", icon: "🧪" },
      { key: "construction", icon: "🧱" },
      { key: "mining", icon: "⛏️" },
    ],
  },
  {
    groupId: "services",
    groupColor: "from-green-500 to-teal-500",
    sectors: [
      { key: "foodManufacturing", icon: "🥤" },
      { key: "fashionManufacturing", icon: "👕" },
      { key: "consumerGoods", icon: "🛍️" },
      { key: "electronics", icon: "📱" },
      { key: "automotive", icon: "🚗" },
    ],
  },
  {
    groupId: "infrastructure",
    groupColor: "from-orange-500 to-red-500",
    sectors: [
      { key: "industrialComponents", icon: "⚙️" },
      { key: "semiconductor", icon: "🔌" },
      { key: "precision", icon: "🔧" },
      { key: "specializedEquipment", icon: "🏭" },
    ],
  },
];

export default function BusinessSectorsSection() {
  const { t } = useTranslation("businessSectors");
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  // Flatten all sectors for icon grid
  const allSectors = businessData.flatMap((group) =>
    group.sectors.map((sector) => ({
      ...sector,
      groupColor: group.groupColor,
      groupTitle: t(`businessSectors.businessGroups.${group.groupId}.title`),
    })),
  );

  return (
    <section id="business-sectors" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-purple-500 opacity-10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 mb-4">
            <span className="text-base md:text-lg font-medium text-blue-400 font-primary">
              {t("businessSectors.sectionHeader.badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            <Trans
              i18nKey="businessSectors.sectionHeader.title"
              ns="businessSectors"
              components={[
                <span></span>,
                <span className="text-blue-400"></span>,
              ]}
            />
          </h2>
          <p className="text-gray-300 font-primary">
            {t("businessSectors.sectionHeader.description")}
          </p>
        </motion.div>

        {/* Business Groups Accordion */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">
            {t("businessSectors.groupsList.title")}
          </h3>

          <Accordion type="multiple" className="space-y-4">
            {businessData.map((group, index) => (
              <AccordionItem
                key={group.groupId}
                value={group.groupId}
                className="border-none"
              >
                <GlassCard className="border-gray-700/50 bg-gray-800/30 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-4 h-4 rounded-full bg-gradient-to-r ${group.groupColor}`}
                      ></div>
                      <span className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {t(
                          `businessSectors.businessGroups.${group.groupId}.title`,
                        )}
                      </span>
                      <span className="text-sm text-gray-400">
                        (
                        {t("businessSectors.groupsList.sectorsCount", {
                          count: group.sectors.length,
                        })}
                        )
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {group.sectors.map((sector, sectorIndex) => (
                        <motion.div
                          key={sector.key}
                          className="flex items-start space-x-3 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: sectorIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                        >
                          <span className="text-2xl">{sector.icon}</span>
                          <div>
                            <h4 className="font-semibold text-white mb-1">
                              {t(
                                `businessSectors.businessGroups.${group.groupId}.sectors.${sector.key}.name`,
                              )}
                            </h4>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {t(
                                `businessSectors.businessGroups.${group.groupId}.sectors.${sector.key}.description`,
                              )}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </AccordionContent>
                </GlassCard>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">
            {t("businessSectors.callToAction.text")}
          </p>
          <button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            {t("businessSectors.callToAction.button")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

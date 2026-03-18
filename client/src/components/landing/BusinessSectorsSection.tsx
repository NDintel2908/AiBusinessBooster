import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";

import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import "../../lib/i18n";

const businessData = [
  {
    groupId: "manufacturing",
    subtitle: "Group A",
    accentColor: "#3b82f6",
    badgeBg: "rgba(59, 130, 246, 0.15)",
    groupColor: "from-blue-500 to-cyan-500",
    sectors: [
      { key: "softwareAndComputer", icon: "💻" },
      { key: "telecommunicationsProviders", icon: "📡" },
      { key: "healthCare", icon: "🏥" },
      { key: "banks", icon: "🏦" },
      { key: "financeAndCredit", icon: "💳" },
      { key: "investmentBanking", icon: "📈" },
      { key: "mortgageRealEstate", icon: "🏠" },
      { key: "closedEndInvestments", icon: "📉" },
      { key: "openEndInvestments", icon: "📊" },
      { key: "lifeInsurance", icon: "🛡️" },
      { key: "nonlifeInsurance", icon: "☂️" },
      { key: "realEstateDev", icon: "🏙️" },
      { key: "realEstateTrusts", icon: "🏢" },
      { key: "consumerServices", icon: "👥" },
      { key: "media", icon: "📺" },
      { key: "retailers", icon: "🛒" },
      { key: "travelAndLeisure", icon: "✈️" },
      { key: "personalCare", icon: "💊" },
      { key: "industrialSupport", icon: "🔧" },
      { key: "industrialTransportation", icon: "🚛" },
      { key: "alternativeEnergy", icon: "☀️" },
      { key: "electricity", icon: "⚡" },
      { key: "gasWater", icon: "🚰" },
      { key: "wasteAndDisposal", icon: "🗑️" },
    ],
  },
  {
    groupId: "technology",
    subtitle: "Group B",
    accentColor: "#a855f7",
    badgeBg: "rgba(168, 85, 247, 0.15)",
    groupColor: "from-purple-500 to-pink-500",
    sectors: [
      { key: "beverages", icon: "🥤" },
      { key: "foodProducers", icon: "🥫" },
      { key: "tobacco", icon: "🚬" },
      { key: "constructionMaterials", icon: "🧱" },
      { key: "industrialMaterials", icon: "⚙️" },
      { key: "industrialMetals", icon: "⛏️" },
      { key: "preciousMetals", icon: "💎" },
      { key: "chemicals", icon: "🧪" },
      { key: "oilGasCoal", icon: "🛢️" },
    ],
  },
  {
    groupId: "services",
    subtitle: "Group C",
    accentColor: "#22c55e",
    badgeBg: "rgba(34, 197, 94, 0.15)",
    groupColor: "from-green-500 to-teal-500",
    sectors: [
      { key: "medicalEquipment", icon: "🩺" },
      { key: "pharmaBiotech", icon: "🧬" },
      { key: "automobilesParts", icon: "🚗" },
      { key: "householdGoods", icon: "🏠" },
      { key: "leisureGoods", icon: "🏕️" },
      { key: "personalGoods", icon: "🛍️" },
      { key: "electronicEquipment", icon: "🔌" },
      { key: "generalIndustrials", icon: "🏭" },
    ],
  },
  {
    groupId: "infrastructure",
    subtitle: "Group D",
    accentColor: "#f97316",
    badgeBg: "rgba(249, 115, 22, 0.15)",
    groupColor: "from-orange-500 to-red-500",
    sectors: [
      { key: "techHardware", icon: "🖥️" },
      { key: "telecomEquipment", icon: "📱" },
      { key: "aerospaceDefense", icon: "🚀" },
      { key: "industrialEngineering", icon: "🛠️" },
    ],
  },
];

export default function BusinessSectorsSection() {
  const { t, i18n } = useTranslation("businessSectors");
  const [activeGroup, setActiveGroup] = useState<string>(businessData[0].groupId);
  const [mobileModalOpen, setMobileModalOpen] = useState<boolean>(false);
  const [selectedMobileGroup, setSelectedMobileGroup] = useState<string>("");

  // Extract language from i18n
  const lang = i18n.language || 'en';

  // Handle click for mobile vs desktop
  const handleGroupInteraction = (groupId: string, isMobile: boolean = false) => {
    if (isMobile) {
      setSelectedMobileGroup(groupId);
      setMobileModalOpen(true);
    } else {
      setActiveGroup(groupId);
    }
  };



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
                <span className="text-brand-accent"></span>,
              ]}
            />
          </h2>
          <p className="text-gray-300 font-primary">
            {t("businessSectors.sectionHeader.description")}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div
          className="max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">
            {t("businessSectors.groupsList.title")}
          </h3>

          {/* Mobile: Single Column with Click-to-Modal */}
          <div className="lg:hidden space-y-4">
            {businessData.map((group, index) => (
              <motion.div
                key={group.groupId}
                className="cursor-pointer transition-all duration-300 hover:transform hover:scale-102"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleGroupInteraction(group.groupId, true)}
              >
                <GlassCard className="border-gray-700/50 bg-gray-800/30 hover:bg-gray-700/40 overflow-hidden transition-all duration-300">
                  <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-4 h-4 rounded-full bg-gradient-to-r ${group.groupColor}`}
                        ></div>
                        <span className="text-xl font-semibold text-white">
                          {t(
                            `businessSectors.businessGroups.${group.groupId}.title`,
                          )}
                        </span>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8">
            {/* Left Column - Menu Options */}
            <div className="bg-[#0f1623] rounded-xl flex flex-col overflow-hidden" style={{ gap: '16px', padding: '16px' }}>
              {businessData.map((group, index) => {
                const isActive = activeGroup === group.groupId;
                return (
                  <motion.div
                    key={group.groupId}
                    className="cursor-pointer relative flex items-center justify-between transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => handleGroupInteraction(group.groupId, false)}
                    onClick={() => handleGroupInteraction(group.groupId, false)}
                    style={{
                      padding: '14px 16px',
                      backgroundColor: isActive ? '#162032' : 'transparent',
                      border: isActive ? `1px solid ${group.accentColor}40` : '1px solid transparent',
                      borderRadius: '8px'
                    }}
                  >
                    {/* Left accent bar */}
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 rounded-r-full transition-all duration-300"
                      style={{
                        width: '3px',
                        height: isActive ? '80%' : '50%',
                        backgroundColor: isActive ? group.accentColor : 'transparent',
                        opacity: isActive ? 1 : 0
                      }}
                    />

                    {/* Text */}
                    <div className="flex flex-col gap-1 z-10 pl-2">
                      <span className="text-[11px] font-normal tracking-wide" style={{ color: '#4a6070' }}>
                        {group.subtitle}
                      </span>
                      <span className="text-[14px] font-semibold" style={{ color: '#c0cfe8' }}>
                        {t(`businessSectors.businessGroups.${group.groupId}.title`)}
                      </span>
                    </div>

                    {/* Badge */}
                    <div
                      className="rounded-full px-2 py-0.5 z-10"
                      style={{
                        backgroundColor: group.badgeBg,
                        color: group.accentColor,
                        fontSize: '10px',
                        fontWeight: 600
                      }}
                    >
                      {group.sectors.length}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column - Content Display */}
            <div className="lg:pl-4 flex flex-col h-[500px]">
              {businessData
                .filter(group => group.groupId === activeGroup)
                .map((group) => (
                  <motion.div
                    key={group.groupId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col space-y-4"
                  >
                    {/* Header Bar */}
                    <div
                      className="flex-shrink-0"
                      style={{
                        backgroundColor: '#131b2b',
                        border: '1px solid #1e2d47',
                        borderRadius: '12px',
                        padding: '16px 20px'
                      }}
                    >
                      <h4 className="text-[13px] md:text-[14px] font-semibold" style={{ color: '#3b82f6' }}>
                        {group.subtitle} — {t(`businessSectors.businessGroups.${group.groupId}.title`)}
                      </h4>
                    </div>

                    {/* Content List */}
                    <GlassCard className="border-gray-700/50 bg-gray-800/30 flex-1 overflow-hidden flex flex-col">
                      <div className="p-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-track-gray-800/20 scrollbar-thumb-gray-600/50 hover:scrollbar-thumb-gray-500/70">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-2">
                          {group.sectors.map((sector, sectorIndex) => (
                            <motion.div
                              key={sector.key}
                              className="flex items-start space-x-2 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-600/40 transition-colors"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: sectorIndex * 0.05,
                              }}
                            >
                              <span className="text-lg flex-shrink-0">{sector.icon}</span>
                              <div className="min-w-0">
                                <h5 className="font-medium text-white mb-1 text-sm">
                                  {t(
                                    `businessSectors.businessGroups.${group.groupId}.sectors.${sector.key}.name`,
                                  )}
                                </h5>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                  {t(
                                    `businessSectors.businessGroups.${group.groupId}.sectors.${sector.key}.description`,
                                  )}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
            </div>
          </div>
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
          <GradientButton
            size="md"
            className="font-semibold px-8 py-3 text-base shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-accent/30 transition-all duration-200"
            onClick={() => {
              // Sử dụng cùng logic như các component khác
              if (window.location.pathname !== `/${lang}`) {
                sessionStorage.setItem("scrollToSection", "contact");
                window.location.href = `/${lang}`;
              } else {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                  window.history.replaceState(null, "", `/${lang}`);
                }
              }
            }}
          >
            {t("businessSectors.callToAction.button")}
          </GradientButton>
        </motion.div>

        {/* Mobile Modal */}
        <Dialog open={mobileModalOpen} onOpenChange={setMobileModalOpen}>
          <DialogContent className="max-w-lg max-h-[80vh] bg-gray-900/95 border-gray-700/50 text-white overflow-hidden">
            {businessData
              .filter(group => group.groupId === selectedMobileGroup)
              .map((group) => (
                <div key={group.groupId}>
                  <DialogHeader>
                    <DialogTitle className="flex items-center space-x-3 text-xl">
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-r ${group.groupColor}`}
                      ></div>
                      <span>
                        {t(
                          `businessSectors.businessGroups.${group.groupId}.title`,
                        )}
                      </span>
                    </DialogTitle>
                  </DialogHeader>

                  <div className="mt-4 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-track-gray-800/20 scrollbar-thumb-gray-600/50">
                    <div className="space-y-3">
                      {group.sectors.map((sector, sectorIndex) => (
                        <motion.div
                          key={sector.key}
                          className="flex items-start space-x-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: sectorIndex * 0.05,
                          }}
                        >
                          <span className="text-xl flex-shrink-0">{sector.icon}</span>
                          <div className="min-w-0">
                            <h5 className="font-medium text-white mb-1 text-sm">
                              {t(
                                `businessSectors.businessGroups.${group.groupId}.sectors.${sector.key}.name`,
                              )}
                            </h5>
                            <p className="text-xs text-gray-400 leading-relaxed">
                              {t(
                                `businessSectors.businessGroups.${group.groupId}.sectors.${sector.key}.description`,
                              )}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

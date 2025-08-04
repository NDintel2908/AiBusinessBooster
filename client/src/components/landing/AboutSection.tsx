import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../lib/i18n";

export default function AboutSection() {
  const { t } = useTranslation("bcpOverview");

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-electric-purple to-neon-blue opacity-20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-br from-neon-blue to-bright-teal opacity-15 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white">
            {t("bcpOverview.title.prefix")}
            {t("bcpOverview.title.prefix") && " "}
            <span className="text-brand-accent font-bold">
              {t("bcpOverview.title.highlight")}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-300 font-primary">
            {t("bcpOverview.subtitle.text")}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Central Logo with Animated Elements */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-auto grid place-items-center">
              {/* BCP Image */}
              <div className="relative z-20 w-full">
                <img
                  src="/images/BCP.jpg"
                  alt="BCP"
                  className="w-full h-96 md:h-[28rem] lg:h-[32rem] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Key Value Propositions */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {/* <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                <span className="text-white">
                  {t("bcpOverview.introduction.title.prefix")}
                </span>
                <span className="text-brand-accent">
                  {" "}
                  {t("bcpOverview.introduction.title.highlight")}
                </span>
              </h3> */}

              {/* Our Story */}
              <div className="bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30">
                <h4 className="text-neon-blue font-semibold text-brand-accent mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                  {t("bcpOverview.introduction.story.title")}
                </h4>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  {t("bcpOverview.introduction.story.description", {
                    returnObjects: true,
                  }).map((paragraph, index) => (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: paragraph,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Vision & Mission */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
                <div className="bg-gradient-to-br from-brand-accent/10 to-brand-primary/10 rounded-xl p-5 border border-brand-accent/20">
                  <h4 className="text-electric-purple font-semibold text-brand-accent mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                    {t("bcpOverview.introduction.vision.title")}
                  </h4>
                  <p className="text-gray-300 text-sm font-primary">
                    {t("bcpOverview.introduction.vision.description")}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-deep/10 rounded-xl p-5 border border-brand-primary/20">
                  <h4 className="text-bright-teal font-semibold text-brand-accent mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                    {t("bcpOverview.introduction.mission.title")}
                  </h4>
                  <p className="text-gray-300 text-sm font-primary">
                    {t("bcpOverview.introduction.mission.description")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

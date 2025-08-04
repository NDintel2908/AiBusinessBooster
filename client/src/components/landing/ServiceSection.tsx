import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import "../../lib/i18n";

/**
 * FeaturesSection with Video Integration
 *
 * HOW TO ADD VIDEO LATER:
 * 1. Place your video file in public/videos/ (e.g., public/videos/demo.mp4)
 * 2. Update the videoConfig object:
 *    - src: "/videos/demo.mp4"
 *    - poster: "/images/video-poster.jpg" (optional thumbnail)
 *    - title: "Your Video Title"
 *
 * 3. Uncomment the video implementation code in VideoPlayer component
 *
 * SUPPORTED FORMATS:
 * - MP4 (recommended)
 * - WebM (fallback)
 *
 * EXAMPLE CONFIGURATION:
 * const videoConfig = {
 *   src: "/videos/bcp-demo.mp4",
 *   poster: "/images/bcp-demo-poster.jpg",
 *   title: "BCP Platform Demo"
 * };
 */

// Video Player Component - Ready for implementation
interface VideoPlayerProps {
  src?: string;
  poster?: string;
  title?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  title = "Demo Video",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // When video is ready to be implemented, uncomment this section:
  if (src) {
    return (
      <video
        className="w-full h-full object-cover rounded-md"
        controls
        poster={poster}
        preload="metadata"
        onLoadStart={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      >
        <source src={src} type="video/mp4" />
        <source src={src.replace(".mp4", ".webm")} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    );
  }

  // Placeholder while no video is set
  return (
    <div className="text-center text-gray-400">
      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <p className="text-xs font-primary">{title}</p>
      <p className="text-xs opacity-60">Coming Soon</p>
    </div>
  );
};

export default function FeaturesSection() {
  const { t } = useTranslation("bcpOverview");
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  // Video configuration - Easy to update later
  const videoConfig = {
    src: "/MVP.mp4", // Video is located in public/MVP.mp4
    poster: undefined, // Add poster image here later: "/images/video-poster.jpg"
    title: "BCP.Global Demo",
  };

  // Function to get hover text color based on feature index
  const getHoverTextColor = (index: number) => {
    switch (index) {
      case 0:
        return "text-cyan-400"; // Real-time matching
      case 1:
        return "text-purple-400"; // Direct connection
      case 2:
        return "text-teal-400"; // AI insights
      case 3:
        return "text-orange-400"; // Security
      default:
        return "text-brand-accent";
    }
  };

  const features = [
    {
      icon: "🚀",
      title: t("bcpOverview.features.list.realTimeMatching.title"),
      description: t("bcpOverview.features.list.realTimeMatching.description"),
      gradient: "from-blue-400 to-cyan-400",
      hoverBg: "from-blue-400/10 to-cyan-400/10",
      hoverBorder: "border-cyan-400/60",
    },
    {
      icon: "🤝",
      title: t("bcpOverview.features.list.directConnection.title"),
      description: t("bcpOverview.features.list.directConnection.description"),
      gradient: "from-purple-400 to-pink-400",
      hoverBg: "from-purple-400/10 to-pink-400/10",
      hoverBorder: "border-purple-400/60",
    },
    {
      icon: "🤖",
      title: t("bcpOverview.features.list.aiInsight.title"),
      description: t("bcpOverview.features.list.aiInsight.description"),
      gradient: "from-green-400 to-teal-400",
      hoverBg: "from-green-400/10 to-teal-400/10",
      hoverBorder: "border-teal-400/60",
    },
    {
      icon: "🔒",
      title: t("bcpOverview.features.list.security.title"),
      description: t("bcpOverview.features.list.security.description"),
      gradient: "from-orange-400 to-red-400",
      hoverBg: "from-orange-400/10 to-red-400/10",
      hoverBorder: "border-orange-400/60",
    },
  ];

  return (
    <section id="features" className="relative py-12 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-neon-blue to-electric-purple opacity-20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-br from-bright-teal to-neon-blue opacity-15 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
              {t("bcpOverview.features.title")}
            </span>
          </h2>
        </motion.div>

        {/* VIDEO VERSION */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-full">
              <div className="relative bg-gray-800 rounded-t-lg p-3 shadow-xl">
                <div className="bg-black rounded-md p-3 relative overflow-hidden">
                  <div className="aspect-video bg-gray-900 rounded-sm flex items-center justify-center relative group">
                    <VideoPlayer {...videoConfig} />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-sm"></div>
                  </div>
                </div>

                <div className="h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg"></div>
              </div>

              <div className="mx-auto w-20 h-1.5 bg-gray-600 rounded-full mt-1.5"></div>

              <div className="absolute -inset-3 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 blur-lg rounded-lg -z-10"></div>
            </div>
          </motion.div> */}

        {/* HORIZONTAL VIDEO VERSION (Video Centered) */}
        <div className="space-y-12">
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-4xl">
              <div className="relative bg-gray-800 rounded-t-lg p-4 shadow-xl">
                <div className="bg-black rounded-md p-4 relative overflow-hidden">
                  <div className="aspect-video bg-gray-900 rounded-sm flex items-center justify-center relative group">
                    <VideoPlayer {...videoConfig} />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-sm"></div>
                  </div>
                </div>

                <div className="h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg"></div>
              </div>

              <div className="mx-auto w-24 h-2 bg-gray-600 rounded-full mt-2"></div>

              <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 blur-xl rounded-lg -z-10"></div>
            </div>
          </motion.div>

          {/* Features Grid Section */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <GlassCard
                    className={`p-4 h-full transition-all duration-500 group ${
                      hoveredFeature === index
                        ? `${feature.hoverBorder} bg-gradient-to-br ${feature.hoverBg} shadow-lg shadow-current/20`
                        : "hover:border-brand-accent/40"
                    }`}
                  >
                    <div className="text-center space-y-3">
                      <div
                        className={`w-10 h-10 mx-auto rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {feature.icon}
                      </div>

                      <h4
                        className={`text-base font-heading font-semibold transition-colors duration-300 ${
                          hoveredFeature === index
                            ? getHoverTextColor(index)
                            : "text-white group-hover:text-brand-accent"
                        }`}
                      >
                        {feature.title}
                      </h4>

                      <p
                        className="text-gray-300 font-primary text-xs leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: feature.description,
                        }}
                      />
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>

        {/* {/* 
        === HORIZONTAL FEATURES VERSION (Commented Out) === */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <GlassCard
                  className={`p-6 h-full transition-all duration-500 group hover:scale-105 ${
                    hoveredFeature === index
                      ? `${feature.hoverBorder} bg-gradient-to-br ${feature.hoverBg} shadow-lg shadow-current/20 transform scale-105`
                      : "hover:border-brand-accent/40"
                  }`}
                >
                  <div className="text-center space-y-4">
                    <div
                      className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>

                    <h4
                      className={`text-lg font-heading font-semibold transition-colors duration-300 ${
                        hoveredFeature === index
                          ? getHoverTextColor(index)
                          : "text-white group-hover:text-brand-accent"
                      }`}
                    >
                      {feature.title}
                    </h4>

                    <p
                      className="text-gray-300 font-primary text-xs leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: feature.description }}
                    />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === END HORIZONTAL FEATURES VERSION === */}
      </div>
    </section>
  );
}

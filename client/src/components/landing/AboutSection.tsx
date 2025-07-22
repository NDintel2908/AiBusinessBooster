import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GlassCard } from "@/components/ui/glass-card";

// Lazy load images
const lazyLoadImage = (src: string) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.src = src;
  });
};

// Memoized variants - REMOVED (không cần animation)

// Partner data
const PARTNERS = [
  { key: 'tech', image: () => import('./partner/TechPartner.webp') },
  { key: 'business', image: () => import('./partner/BusinessPartner.webp') },
  { key: 'development', image: () => import('./partner/DevPartner.webp') }
];

// Memoized Partner Component
const PartnerCard = ({ partner, t }: { partner: any, t: any }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    partner.image().then((module: any) => {
      setImageSrc(module.default);
    });
  }, [partner]);

  return (
    <div className="flex flex-col items-center">
      <div className="h-[90px] w-[120px] flex items-center justify-center">
        {imageSrc ? (
          <img 
            src={imageSrc}
            alt={t(`imageAlt.${partner.key}Partner`)}
            className={`h-[90px] object-contain filter brightness-100 transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="h-[90px] w-[90px] bg-gray-800/50 animate-pulse rounded"></div>
        )}
      </div>
      <p className="mt-3 text-gray-400 text-center font-primary text-base">
        {t(`partners.${partner.key}`)}
      </p>
    </div>
  );
};

export default function AboutSection() {
  const { t } = useTranslation("about");
  const ref = useRef(null);
  const [mainImageLoaded, setMainImageLoaded] = useState(false);

  // Preload main image
  useEffect(() => {
    const imageUrl = "/images/startupVoetNhat.webp";
    lazyLoadImage(imageUrl).then(() => setMainImageLoaded(true));
  }, []);

  return (
    <>
      <section id="about" className="py-16 relative">
        {/* Simplified background */}
        <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-electric-purple/10 blur-[120px] rounded-full opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Optimized Company Image */}
            <div 
              className="relative"
            >
              <GlassCard className="rounded-2xl p-3 relative overflow-hidden">
                <div className="relative">
                  {!mainImageLoaded && (
                    <div className="w-full h-64 bg-gray-800/50 animate-pulse rounded-xl"></div>
                  )}
                  <img 
                    src="/images/startupVoetNhat.webp" 
                    alt={t("imageAlt.ourTeam")}
                    className={`w-full h-auto rounded-xl transition-opacity duration-500 ${
                      mainImageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setMainImageLoaded(true)}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </GlassCard>
            </div>

            {/* Optimized Content */}
            <div ref={ref} className="lg:mt-0">

              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-blue/20 border border-neon-blue/40 mb-2">
                <span className="text-base font-medium text-neon-blue font-primary">
                  {t("storyBadge")}
                </span>
              </div>

              {/* Title */}
              <h2 
                className="text-2xl md:text-3xl font-heading font-bold mb-2 text-white"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple">
                  {t("title")}
                </span>
              </h2>

              {/* Descriptions */}
              <div
              >
                <p className="text-gray-300 mb-2 font-primary text-base leading-relaxed">
                  {t("description1")}
                </p>
                <p className="text-gray-300 mb-3 font-primary text-base leading-relaxed">
                  {t("description2")}
                </p>

                <div className="my-4 h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>

                {/* Vision */}
                <div className="mb-4">
                  <h3 className="text-lg font-heading font-semibold mb-2 text-white">
                    {t("visionTitle")}
                  </h3>
                  <p className="text-gray-300 font-primary text-base leading-relaxed">
                    {t("visionDescription")}
                  </p>
                </div>

                {/* Mission */}
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-2 text-white">
                    {t("missionTitle")}
                  </h3>
                  <p className="text-gray-300 font-primary text-base leading-relaxed">
                    {t("missionDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimized Partners Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div
            className="text-center"
          >
            {/* Partners Title */}
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-blue/20 border border-neon-blue/40">
                <span className="text-base md:text-lg font-medium text-neon-blue font-primary">
                  {t("partnersTitle")}
                </span>
              </div>
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center mt-6 max-w-4xl mx-auto">
              {PARTNERS.map((partner) => (
                <PartnerCard 
                  key={partner.key}
                  partner={partner}
                  t={t}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
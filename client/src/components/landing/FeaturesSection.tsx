import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../lib/i18n";

interface StatItemProps {
  number: string;
  description: string;
  endValue: number;
}

const StatItem = ({ number, description, endValue }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      // Reset count to 0 and start animation
      setCount(0);

      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        setCount(Math.floor(endValue * progress));

        if (currentStep === steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    } else {
      // Reset count when out of view
      setCount(0);
    }
  }, [isInView, endValue]);

  // Check if number is a special text like "1st" or "Thứ 1"
  const isSpecialText = !number.includes("+") && number.includes("st");

  return (
    <div className="text-center" ref={ref}>
      <div className="text-[5rem] font-heading font-bold text-[#60A5FA]">
        {isSpecialText ? number : count}
        {number.includes("+") && "+"}
      </div>
      <p className="text-[1.1rem] font-primary text-gray-400 max-w-sm mx-auto">
        {description}
      </p>
    </div>
  );
};

export default function FeaturesSection() {
  const { t } = useTranslation("features");

  return (
    <section
      id="features-section"
      className="relative py-16 md:py-20 px-8 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f8ff] to-[#ffffff] opacity-10"></div>

      {/* World Map Background */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/icon/world.png')",
          filter: "brightness(1.2) contrast(0.8)",
        }}
      ></div>

      {/* Animated dots overlay for global connection effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-[3rem] font-semibold text-white mb-2">
            {t("featuresSection.title")}
          </h2>
          <p className="text-[1.2rem] text-gray-400 font-primary">
            {t("featuresSection.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-[3rem] justify-items-center">
          {(
            t("featuresSection.stats", { returnObjects: true }) as Array<{
              number: string;
              description: string;
              endValue: number;
            }>
          ).map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StatItem
                number={stat.number}
                description={stat.description}
                endValue={stat.endValue}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

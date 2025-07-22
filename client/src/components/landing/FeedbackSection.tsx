import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { useTranslation } from "react-i18next";
import "../../lib/i18n";

interface FeedbackCard {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  isMain?: boolean;
  isPeek?: boolean;
}

export default function FeedbackSection() {
  const { t } = useTranslation("feedback");
  const controls = useAnimation();
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  // Get feedbacks from translation
  const feedbacks = (t("feedbackSection.feedbacks", { returnObjects: true }) ||
    []) as Array<{
    id: number;
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar: string;
  }>;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Auto-play functionality with immediate start
  useEffect(() => {
    if (!Array.isArray(feedbacks) || feedbacks.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 4500); // 4.5 seconds for smooth pacing
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch/Mouse drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !Array.isArray(feedbacks)) return;
    setIsDragging(false);

    const clientX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const dragDistance = dragStart - clientX;
    const threshold = 100;

    if (dragDistance > threshold) {
      goToSlide((currentIndex + 1) % feedbacks.length);
    } else if (dragDistance < -threshold) {
      goToSlide((currentIndex - 1 + feedbacks.length) % feedbacks.length);
    }
  };

  const getVisibleCards = (): FeedbackCard[] => {
    if (!Array.isArray(feedbacks) || feedbacks.length === 0) return [];

    const cards: FeedbackCard[] = [];

    // Main cards (desktop: 2, mobile: 1)
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % feedbacks.length;
      cards.push({
        ...feedbacks[index],
        isMain: true,
      } as FeedbackCard);
    }

    // Peek card
    const peekIndex = (currentIndex + 2) % feedbacks.length;
    cards.push({
      ...feedbacks[peekIndex],
      isMain: false,
      isPeek: true,
    } as FeedbackCard);

    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section id="feedback" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-electric-purple to-neon-blue opacity-30 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-br from-neon-blue to-bright-teal opacity-20 blur-[100px] rounded-full"></div>
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
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-blue/20 border border-neon-blue/40 mb-4">
            <span className="text-base md:text-lg font-medium text-neon-blue font-primary">
              {t("feedbackSection.badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            {t("feedbackSection.title")}
          </h2>
          <p className="text-gray-300 font-primary">
            {t("feedbackSection.description")}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          className="relative max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Cards Container with Peek Effect */}
          <div
            ref={carouselRef}
            className="relative overflow-hidden"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            {/* Gradient fade-out on the right */}
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

            <div className="flex gap-6 transition-all duration-1000 ease-in-out">
              {visibleCards.map((card, index) => (
                <motion.div
                  key={`card-${card.id}-${index}-${Date.now()}`}
                  className={`
                    flex-shrink-0
                    ${index === 0 ? "w-full md:w-[400px]" : ""}
                    ${index === 1 ? "hidden md:block w-[400px]" : ""}
                    ${index === 2 ? "w-80 md:w-80" : ""}
                  `}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: card.isPeek ? 0.6 : 1,
                    scale: card.isPeek ? 0.95 : 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  onClick={(e) => {
                    if (card.isPeek && Array.isArray(feedbacks)) {
                      e.preventDefault();
                      e.stopPropagation();
                      goToSlide((currentIndex + 2) % feedbacks.length);
                    }
                  }}
                  style={{ cursor: card.isPeek ? "pointer" : "default" }}
                >
                  <div
                    className={`
                    relative max-w-[450px] w-full 
                    bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95
                    backdrop-blur-lg rounded-2xl shadow-2xl
                    transition-all duration-500 flex flex-col group 
                    border border-electric-purple/20 hover:border-electric-purple/40
                    overflow-hidden min-h-[280px]
                    ${card.isPeek ? "hover:scale-100 hover:opacity-80" : "hover:scale-[1.02] hover:shadow-2xl hover:shadow-electric-purple/30"}
                  `}
                  >
                    {/* Enhanced Quote Icon - Positioned top-left with overlap */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-4xl font-bold text-electric-purple drop-shadow-md leading-none">
                        "
                      </span>
                    </div>

                    {/* Glow effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/5 via-transparent to-neon-blue/5 pointer-events-none rounded-2xl group-hover:from-electric-purple/10 group-hover:to-neon-blue/10 transition-all duration-500"></div>

                    {/* Content Area */}
                    <div className="p-6 pt-12 flex-1 flex flex-col justify-between">
                      {/* Quote Content */}
                      <blockquote className="text-gray-200 text-lg leading-relaxed font-medium mb-6 relative z-10">
                        {card.quote}
                      </blockquote>

                      {/* Author Info - Compact layout */}
                      <div className="flex items-center space-x-3 relative z-10">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-electric-purple/50 shadow-lg flex-shrink-0 group-hover:border-electric-purple transition-all duration-300">
                          <img
                            src={card.avatar}
                            alt={card.author}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-sm leading-tight truncate">
                            {card.author}
                          </h4>
                          <p className="text-electric-purple font-semibold text-xs mt-0.5">
                            {card.position}
                          </p>
                          <p className="text-gray-400 text-xs font-medium truncate">
                            {card.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced gradient overlay for visual polish */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-electric-purple/5 pointer-events-none rounded-2xl group-hover:to-electric-purple/10 transition-all duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots Indicator - Enhanced */}
          <div className="flex justify-center mt-10 space-x-3">
            {Array.isArray(feedbacks) &&
              feedbacks.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    goToSlide(index);
                  }}
                  // className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                  //   index === currentIndex
                  //     ? "bg-electric-purple shadow-xl shadow-electric-purple/50 scale-125"
                  //     : "bg-gray-400 hover:bg-gray-300 hover:scale-110"
                  // }`}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
          </div>

          {/* Progress bar for auto-play - Enhanced */}
          <div className="flex justify-center mt-6">
            <div className="w-40 h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-electric-purple to-neon-blue shadow-lg"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.5, ease: "linear" }}
                key={currentIndex}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

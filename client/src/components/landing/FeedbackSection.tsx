
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const feedbacks = [
  
  {
    id: 1,
    quote: "BCP đã thay đổi hoàn toàn cách chúng tôi kết nối với đối tác. AI matching rất chính xác.",
      author: "Trịnh Hồng Khánh",
      position: "CEO",
      company: "Kế toán Ba Miền",
      avatar: "https://webketoan.com.vn/storage/a-khanh-1.png"
  },
  {
    id: 2,
    quote: "Nền tảng này đã giúp chúng tôi mở rộng thị trường quốc tế một cách hiệu quả.",
    author: "Nguyễn Hải Tâm",
    position: "Giám đốc Kinh doanh",
    company: "Webketoan",
    avatar: "https://th.bing.com/th/id/OIP.7gD_w3iBZiq4dFm7oermRwHaHa?rs=1&pid=ImgDetMain"
  },
  {
    id: 3,
    quote: "AI của BCP không chỉ tìm đối tác mà còn đánh giá độ tin cậy rất tốt.",
    author: "Wichak Chongudomlert",
    position: "Founder",
    company: "Signify",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQFk-068nzT0mQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686639741459?e=1753920000&v=beta&t=NsmWWxJQnvYXi5XDjAAwmm__Cu53pzsEtNaOV2bNYAU"
  }
];

export default function FeedbackSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Touch/Mouse drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const dragDistance = dragStart - clientX;
    const threshold = 100;

    if (dragDistance > threshold) {
      nextSlide();
    } else if (dragDistance < -threshold) {
      prevSlide();
    }
  };

  const getVisibleCards = () => {
    const cards = [];
    
    // Main cards (desktop: 2, mobile: 1)
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % feedbacks.length;
      cards.push({
        ...feedbacks[index],
        position: i,
        isMain: true
      });
    }
    
    // Peek card
    const peekIndex = (currentIndex + 2) % feedbacks.length;
    cards.push({
      ...feedbacks[peekIndex],
      position: 2,
      isMain: false,
      isPeek: true
    });
    
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section id="feedback" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-electric-purple to-neon-blue opacity-20 blur-[120px] rounded-full"></div>
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
              transition: { duration: 0.6 }
            }
          }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-blue/20 border border-neon-blue/40 mb-4">
            <span className="text-base md:text-lg font-medium text-neon-blue font-primary">Phản hồi khách hàng</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            Những gì lãnh đạo doanh nghiệp nói về BCP.Global
          </h2>
          <p className="text-gray-300 font-primary">
            BCP là nền tảng giúp kết nối các doanh nghiệp với đối tác phù hợp thông qua AI, 
            tạo ra những mối quan hệ kinh doanh bền vững và hiệu quả.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          className="relative max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {/* Gradient fade-out on the right */}
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex gap-6 transition-transform duration-500 ease-out">
              {visibleCards.map((card, index) => (
                <motion.div
                  key={`${card.id}-${currentIndex}`}
                  className={`
                    flex-shrink-0 h-full
                    ${index === 0 ? 'w-full md:w-[calc(50%-12px)]' : ''}
                    ${index === 1 ? 'hidden md:block w-[calc(50%-12px)]' : ''}
                    ${index === 2 ? 'w-1/3 md:w-1/4' : ''}
                  `}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: card.isPeek ? 0.6 : 1,
                    scale: card.isPeek ? 0.95 : 1,
                    x: 0 
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => card.isPeek && goToSlide((currentIndex + 2) % feedbacks.length)}
                  style={{ cursor: card.isPeek ? 'pointer' : 'default' }}
                >
                  <div className={`
                    bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl 
                    transition-all duration-300 h-full flex flex-col group
                    ${card.isPeek ? 'hover:scale-100 hover:opacity-80' : 'hover:scale-105'}
                  `}>
                    {/* Quote Icon */}
                    <div className="flex justify-start mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-electric-purple to-neon-blue flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Quote Content */}
                    <blockquote className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">
                      "{card.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center space-x-3 mt-auto">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-electric-purple/20">
                        <img 
                          src={card.avatar} 
                          alt={card.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 font-semibold text-sm">{card.author}</h4>
                        <p className="text-electric-purple text-xs font-medium">{card.position}</p>
                        <p className="text-gray-600 text-xs">{card.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-electric-purple/50 transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-electric-purple/50 transition-all duration-300 z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {feedbacks.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-electric-purple shadow-lg shadow-electric-purple/50 scale-110' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Progress bar for auto-play */}
          {isAutoPlaying && (
            <div className="flex justify-center mt-4">
              <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-electric-purple"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3.5, ease: 'linear' }}
                  key={currentIndex}
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

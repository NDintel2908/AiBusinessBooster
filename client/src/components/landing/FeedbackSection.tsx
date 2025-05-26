
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const feedbacks = [
  {
    id: 1,
    quote: "BCP đã thay đổi hoàn toàn cách chúng tôi kết nối với đối tác. AI matching rất chính xác.",
    author: "Nguyễn Văn A",
    position: "CEO",
    company: "TechViet Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 2,
    quote: "Nền tảng này đã giúp chúng tôi mở rộng thị trường quốc tế một cách hiệu quả.",
    author: "Trần Thị B",
    position: "Giám đốc Kinh doanh",
    company: "Global Trading Co.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 3,
    quote: "AI của BCP không chỉ tìm đối tác mà còn đánh giá độ tin cậy rất tốt.",
    author: "Lê Minh C",
    position: "Founder",
    company: "Innovation Hub",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 4,
    quote: "Giao diện thân thiện, dễ sử dụng và hỗ trợ khách hàng tuyệt vời.",
    author: "Phạm Thị D",
    position: "Marketing Director",
    company: "Creative Agency",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 5,
    quote: "Tiết kiệm được 70% thời gian tìm kiếm đối tác so với phương pháp truyền thống.",
    author: "Hoàng Văn E",
    position: "CTO",
    company: "StartupVN",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 6,
    quote: "Tính năng phân tích thị trường của BCP rất chi tiết và hữu ích.",
    author: "Nguyễn Thị F",
    position: "Business Analyst",
    company: "ConsultingPro",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
  }
];

export default function FeedbackSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cardsPerPage = {
    desktop: 3,
    tablet: 2,
    mobile: 1
  };

  const totalPages = Math.ceil(feedbacks.length / cardsPerPage.desktop);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, totalPages]);

  const nextPage = () => {
    setIsAutoPlaying(false);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setIsAutoPlaying(false);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page: number) => {
    setIsAutoPlaying(false);
    setCurrentPage(page);
  };

  const getCurrentCards = () => {
    const startIndex = currentPage * cardsPerPage.desktop;
    return feedbacks.slice(startIndex, startIndex + cardsPerPage.desktop);
  };

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
            Những gì <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-purple to-neon-blue">lãnh đạo doanh nghiệp</span> nói về BCP.Global
          </h2>
          <p className="text-gray-300 font-primary">
            BCP là nền tảng giúp kết nối các doanh nghiệp với đối tác phù hợp thông qua AI, 
            tạo ra những mối quan hệ kinh doanh bền vững và hiệu quả.
          </p>
        </motion.div>

        {/* Cards Grid Container */}
        <motion.div
          className="relative max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {getCurrentCards().map((feedback, index) => (
              <motion.div
                key={feedback.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group hover:scale-105">
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
                    "{feedback.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-3 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-electric-purple/20">
                      <img 
                        src={feedback.avatar} 
                        alt={feedback.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 font-semibold text-sm">{feedback.author}</h4>
                      <p className="text-electric-purple text-xs font-medium">{feedback.position}</p>
                      <p className="text-gray-600 text-xs">{feedback.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-electric-purple/50 transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextPage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-electric-purple/50 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-electric-purple shadow-lg shadow-electric-purple/50 scale-110' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Mobile-specific adjustments */}
        <style jsx>{`
          @media (max-width: 768px) {
            .grid {
              grid-template-columns: 1fr;
            }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        `}</style>
      </div>
    </section>
  );
}

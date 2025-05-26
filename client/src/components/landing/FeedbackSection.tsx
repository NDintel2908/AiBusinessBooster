
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const feedbacks = [
  {
    id: 1,
    quote: "BCP đã thay đổi hoàn toàn cách chúng tôi kết nối với đối tác. AI matching rất chính xác và tiết kiệm được 70% thời gian tìm kiếm.",
    author: "Nguyễn Văn A",
    position: "CEO",
    company: "TechViet Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    quote: "Nền tảng này đã giúp chúng tôi mở rộng thị trường quốc tế một cách hiệu quả. Tính năng phân tích thị trường rất hữu ích.",
    author: "Trần Thị B",
    position: "Giám đốc Kinh doanh",
    company: "Global Trading Co.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    quote: "AI của BCP không chỉ tìm đối tác mà còn đánh giá độ tin cậy. Chúng tôi đã tìm được nhiều đối tác chất lượng cao.",
    author: "Lê Minh C",
    position: "Founder",
    company: "Innovation Hub",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    quote: "Giao diện thân thiện, dễ sử dụng và hỗ trợ khách hàng tuyệt vời. BCP thực sự hiểu được nhu cầu của doanh nghiệp.",
    author: "Phạm Thị D",
    position: "Marketing Director",
    company: "Creative Agency",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

export default function FeedbackSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
      }, 5000);
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

        {/* Slider Container */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {feedbacks.map((feedback, index) => (
                <div key={feedback.id} className="w-full flex-shrink-0 px-4">
                  <GlassCard className="p-8 md:p-12 bg-gradient-to-br from-gray-900/80 to-gray-800/60 border-gray-700/50">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      {/* Quote Section */}
                      <div className="lg:col-span-2">
                        <div className="mb-6">
                          <svg className="w-12 h-12 text-electric-purple mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                          </svg>
                        </div>
                        <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-6">
                          "{feedback.quote}"
                        </blockquote>
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-electric-purple/30">
                            <img 
                              src={feedback.avatar} 
                              alt={feedback.author}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{feedback.author}</h4>
                            <p className="text-electric-purple text-sm">{feedback.position}</p>
                            <p className="text-gray-400 text-sm">{feedback.company}</p>
                          </div>
                        </div>
                      </div>

                      {/* Company Logo/Visual Section */}
                      <div className="lg:col-span-1 flex justify-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-electric-purple/20 to-neon-blue/20 flex items-center justify-center border border-electric-purple/30">
                          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-purple to-neon-blue">
                            {feedback.company.split(' ').map(word => word[0]).join('')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800/80 border border-gray-600/50 flex items-center justify-center text-white hover:bg-electric-purple/20 hover:border-electric-purple/50 transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800/80 border border-gray-600/50 flex items-center justify-center text-white hover:bg-electric-purple/20 hover:border-electric-purple/50 transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {feedbacks.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-electric-purple shadow-lg shadow-electric-purple/50' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

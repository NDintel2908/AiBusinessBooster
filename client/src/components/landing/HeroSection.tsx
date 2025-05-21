import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { GlassCard } from "@/components/ui/glass-card";

export default function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-r from-[#0F0F2B] to-[#041124]">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="/theme.mp4"
      ></video>
      
      {/* Overlay để làm tối video và tăng độ tương phản với text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F2B]/80 to-[#041124]/80 z-1"></div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-10 z-2" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />
      
      {/* Light flares */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-blue-500/20 rounded-full blur-[100px] z-2" />
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-indigo-500/20 rounded-full blur-[100px] z-2" />
      
      <div className="container mx-auto px-4 z-10 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div 
            className="lg:col-span-6 space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center px-3 py-1 rounded-full bg-electric-purple/20 border border-electric-purple/40 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-bright-teal animate-pulse mr-2"></span>
              <span className="text-sm font-medium text-bright-teal font-primary">Công cụ, thói quen và trợ lý phát triển kinh doanh mới với AI Matching Agent</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-3xl font-heading font-bold leading-tight text-white hero-title"
            >
              MỞ RỘNG TỪNG ĐỐI TÁC, KHÁCH HÀNG B2B VỚI AI MATCHING AGENT
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 max-w-2xl font-primary"
            >
              BCP - Business Connecting Platform là một nền tảng kết nối MUA - BÁN - HỢP TÁC hàng đầu ứng dụng AI, cho phép tìm kiếm - kết nối - giao dịch theo thời gian thực & tiết kiệm chi phí thông qua các kết nối thông minh.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a href="https://bcp.global/sign-up" target="_blank" rel="noopener noreferrer">
                <GradientButton size="lg" animate className="cta-button">Bắt Đầu Ngay</GradientButton>
              </a>
              <GradientButton 
                size="lg" 
                variant="outline" 
                className="cta-button"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <span className="flex items-center justify-center">
                  <span>Liên Hệ Ngay</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
              </GradientButton>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-6 pt-4"
              ref={statsRef}
            >
              <div className="flex -space-x-2">
                <img src="https://miro.medium.com/v2/resize:fit:2400/1*_sL-AjS_oCEvJO1DY51ULg.png" alt="Business Person 1" className="w-10 h-10 rounded-full border-2 border-deep-dark object-cover" />
                <img src="https://static.ybox.vn/2024/6/1/1718600454382-Vietlink-logo.jpg" alt="Business Person 2" className="w-10 h-10 rounded-full border-2 border-deep-dark object-cover" />
                <img src="https://freelogopng.com/images/all_img/1657952641google-logo-png-image.png" alt="Business Person 3" className="w-10 h-10 rounded-full border-2 border-deep-dark object-cover" />
              </div>
              <div className="text-sm text-gray-400 font-primary">
                <span className="font-semibold text-white">500+</span> doanh nghiệp mới đăng ký trong tháng
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-electric-purple opacity-60 blur-[60px] rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-neon-blue opacity-60 blur-[60px] rounded-full"></div>
              <GlassCard className="rounded-2xl p-2">
                <img 
                  src="/demo.png" 
                  alt="AI Business Matching" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </GlassCard>
            </div>
            
            <motion.div 
              className="absolute -bottom-10 -left-10 hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              
            </motion.div>
            
            <motion.div 
              className="absolute -top-5 -right-5 hidden md:block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      
    </section>
  );
}

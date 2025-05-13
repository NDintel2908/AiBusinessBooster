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
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />
      
      {/* Light flares */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-blue-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-indigo-500/20 rounded-full blur-[100px]" />
      
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
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-white hero-title"
            >
              MỞ RỘNG TỪNG ĐỐI TÁC, KHÁCH HÀNG B2B VỚI AI MATCHING AGENT
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 max-w-2xl font-primary"
            >
              BCP - Business Connecting Platform là một nền tảng kết nối MUA BÁN HƠP TÁC hàng đầu ứng dụng AI, cho phép tìm kiếm - kết nối - giao dịch theo thời gian thực & tiết kiệm chi phí thông qua các kết nối thông minh.
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
              <GlassCard className="p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-bright-teal/20 p-2">
                    <svg className="w-6 h-6 text-bright-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium font-primary">99% Tỷ lệ phù hợp</p>
                    <p className="text-xs text-gray-400 font-primary">Vận hành bởi thuật toán AI</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
            
            <motion.div 
              className="absolute -top-5 -right-5 hidden md:block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <GlassCard className="p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-electric-purple/20 p-2">
                    <svg className="w-6 h-6 text-electric-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium font-primary">Đối tác đã xác minh</p>
                    <p className="text-xs text-gray-400 font-primary">Bảo mật cấp doanh nghiệp</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      
    </section>
  );
}

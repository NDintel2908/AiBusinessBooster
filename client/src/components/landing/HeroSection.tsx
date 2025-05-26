import { useEffect } from "react";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";

export default function HeroSection() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Fullscreen */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ zIndex: 0 }}
        src="/theme.mp4"
      ></video>
      
      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F2B]/80 to-[#041124]/80" style={{ zIndex: 1 }}>
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full" 
               style={{
                 backgroundImage: `linear-gradient(#00f2fe 1px, transparent 1px),
                                 linear-gradient(90deg, #00f2fe 1px, transparent 1px)`,
                 backgroundSize: '40px 40px',
                 transform: 'perspective(500px) rotateX(60deg)',
                 transformOrigin: 'top',
               }} />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-electric-purple/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon-blue/20 rounded-full blur-[100px]" />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        zIndex: 2
      }} />

      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center px-4 py-2 rounded-full bg-electric-purple/20 border border-electric-purple/40 mb-6 mx-auto"
          >
            <span className="w-2 h-2 rounded-full bg-bright-teal animate-pulse mr-2"></span>
            <span className="text-base md:text-lg font-medium text-bright-teal font-primary">
              Công cụ, thói quen và trợ lý phát triển kinh doanh mới với AI Matching Agent
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-heading font-bold leading-loose text-white bg-clip-text"
          >
            MỞ RỘNG TỪNG ĐỐI TÁC, KHÁCH HÀNG B2B VỚI AI MATCHING AGENT
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-primary"
          >
            BCP - Business Connecting Platform là một nền tảng kết nối MUA - BÁN - HỢP TÁC toàn cầu ứng dụng công nghệ AI, cho phép TÌM KIẾM - KẾT NỐI - GIAO DỊCH theo thời gian thực & tiết kiệm chi phí thông qua các gợi ý kết nối thông minh.	
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6 pt-4"
          >
            <a href="https://bcp.global/sign-up" target="_blank" rel="noopener noreferrer">
              <GradientButton 
                size="lg" 
                animate
                className="w-full sm:w-auto font-semibold"
              >
                Bắt Đầu Ngay
              </GradientButton>
            </a>
            <GradientButton 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto font-semibold"
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
            className="flex items-center justify-center gap-4 pt-8"
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
      </div>
    </section>
  );
}
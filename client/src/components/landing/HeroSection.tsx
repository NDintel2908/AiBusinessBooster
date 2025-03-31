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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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
              <span className="text-sm font-medium text-bright-teal">AI-Powered Business Matching</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold leading-tight text-white"
            >
              Revolutionizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple">B2B Connections</span> with AI
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 max-w-2xl"
            >
              An intelligent business matching platform that helps you find partners quickly and accurately with AI.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <GradientButton size="lg" animate>Get Started</GradientButton>
              <GradientButton size="lg" variant="outline">
                <span className="flex items-center justify-center">
                  <span>How it works</span>
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
                <div className="w-10 h-10 rounded-full border-2 border-deep-dark bg-gray-300"></div>
                <div className="w-10 h-10 rounded-full border-2 border-deep-dark bg-gray-300"></div>
                <div className="w-10 h-10 rounded-full border-2 border-deep-dark bg-gray-300"></div>
              </div>
              <div className="text-sm text-gray-400">
                <span className="font-semibold text-white">500+</span> businesses connected this month
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
                  src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
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
                    <p className="text-white font-medium">99% Match Rate</p>
                    <p className="text-xs text-gray-400">Powered by AI Algorithm</p>
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
                    <p className="text-white font-medium">Verified Partners</p>
                    <p className="text-xs text-gray-400">Enterprise-grade security</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs text-gray-400 mb-2">Scroll to explore</span>
          <svg className="w-6 h-6 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

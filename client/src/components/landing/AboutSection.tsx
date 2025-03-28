import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";

export default function AboutSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-electric-purple opacity-10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <GlassCard className="rounded-2xl p-3 relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Our Team" 
                className="w-full h-auto rounded-xl"
              />
            </GlassCard>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-electric-purple flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Customer Satisfaction</p>
                    <p className="text-xs text-gray-400">98% positive feedback</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-blue/20 border border-neon-blue/40 mb-4">
              <span className="text-sm font-medium text-neon-blue">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple">Business Story</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Founded in 2021, NexusMatch was born from a simple observation: despite all the digital advances, finding the right business partners remained frustratingly inefficient and often came down to luck rather than data.
            </p>
            <p className="text-gray-300 mb-6">
              Our team of AI specialists, business analysts, and tech innovators set out to create a platform that would transform B2B connections through the power of artificial intelligence and data science.
            </p>
            
            <div className="my-8 h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
            
            <motion.div 
              className="mb-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              }}
            >
              <h3 className="text-xl font-orbitron font-semibold mb-4 text-white">Our Vision</h3>
              <p className="text-gray-300">
                To create a world where every business can find its perfect match, accelerating innovation and growth across the global economy.
              </p>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
              }}
            >
              <h3 className="text-xl font-orbitron font-semibold mb-4 text-white">Our Mission</h3>
              <p className="text-gray-300">
                To leverage cutting-edge AI technology to eliminate the barriers that prevent businesses from finding their ideal partners, empowering organizations of all sizes to forge meaningful, profitable collaborations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

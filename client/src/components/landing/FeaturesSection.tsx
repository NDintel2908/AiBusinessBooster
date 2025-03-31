import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <GlassCard className="rounded-xl p-6 transform transition duration-500 hover:-translate-y-1 hover-glow">
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-blue to-electric-purple flex items-center justify-center mr-4 flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-orbitron font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  isMiddle?: boolean;
}

function StepCard({ number, title, description, isMiddle = false }: StepCardProps) {
  return (
    <div className="relative">
      {isMiddle && (
        <>
          <div className="absolute top-1/2 -left-4 w-8 h-1 bg-gradient-to-r from-neon-blue to-transparent hidden md:block"></div>
          <div className="absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-transparent to-electric-purple hidden md:block"></div>
        </>
      )}
      
      <GlassCard className="rounded-xl p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-electric-purple flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-bold text-2xl">{number}</span>
        </div>
        <h3 className="text-xl font-orbitron font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </GlassCard>
    </div>
  );
}

export default function FeaturesSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/2 right-1/4 w-1/3 h-1/3 bg-neon-blue opacity-10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-bright-teal/20 border border-bright-teal/40 mb-4">
            <span className="text-sm font-medium text-bright-teal">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple">Unique Selling Points</span>
          </h2>
          <p className="text-gray-300">
            The 1st B2B AI Matching Agent
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <FeatureCard
                index={0}
                icon={
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                }
                title="AI learns and intelligently connects you with the best-fit business partners"
                description="Forget the endless meetings and the laborious partner-seeking efforts of traditional methods.

                BCP AI learns and remembers every small detail about your business's information and demands. The robust AI technology will proactively suggest connections with the most suitable businesses. 
                The more detailed the information - the more accurate the matching!"
              />
              
              <FeatureCard
                index={1}
                icon={
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                }
                title="Cut out the middleman - Direct access to the highest authority"
                description="Eliminate intermediaries - BCP AI provides a streamlined route to connect directly with the final authority - where deals are finalized."
              />
              
              <FeatureCard
                index={2}
                icon={
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                }
                title="Top-tier security"
                description="Your data security is our priority.
                At BCP, we implement robust technical and organizational measures to protect user data, following industry best practices in cloud infrastructure, access control, and encryption. While BCP is actively working toward internationally recognized security certifications, we already maintain strict internal policies to ensure the confidentiality, integrity, and availability of your information."
              />

              <FeatureCard
                index={1}
                icon={
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                }
                title="Borderless connections"
                description="BCP is not just a bridge, but also a springboard for businesses that dare to dream big - to expand internationally. From the dynamic pace of life in Vietnam, reaching out to the advanced Japanese market, and spreading throughout Southeast Asia - we are a strategic bridge that helps your business transcend geographical boundaries."
              />
              
            </div>
          </div>
          
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-electric-purple opacity-40 blur-[80px] rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-neon-blue opacity-40 blur-[80px] rounded-full"></div>
              <GlassCard className="rounded-2xl p-3 relative">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="AI Visualization" 
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/80 to-transparent rounded-xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <GlassCard className="rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-orbitron text-lg font-medium">Match Score</h4>
                        <p className="text-neon-blue font-semibold text-2xl">94.7%</p>
                      </div>
                      <div className="w-16 h-16 relative">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                          <circle className="text-gray-700 opacity-20" cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="none"></circle>
                          <circle className="text-neon-blue" cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="none" strokeDasharray="283" strokeDashoffset="15"></circle>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">94.7%</div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white" id="how-it-works">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple">How It Works</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our advanced AI-driven process simplifies finding your ideal business partners in just a few steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <StepCard 
                number={1} 
                title="Create Your Profile" 
                description="Complete your business profile with key information about your company, requirements, and partnership goals."
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StepCard 
                number={2} 
                title="AI-Powered Matching" 
                description="Our AI analyzes your profile against thousands of verified businesses to identify optimal partnership opportunities."
                isMiddle
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <StepCard 
                number={3} 
                title="Connect & Collaborate" 
                description="Review your matches, connect with potential partners, and start building valuable business relationships."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  index: number;
}

function PricingPlan({ name, price, description, features, isPopular = false, index }: PricingPlanProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <GlassCard 
        className={`rounded-xl p-6 relative transform transition duration-500 hover:-translate-y-2 ${
          isPopular ? '' : 'border border-gray-700'
        }`}
        gradientBorder={isPopular}
      >
        {isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-neon-blue to-electric-purple text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
        )}
        
        <div className="text-center mb-6 pt-2">
          <h3 className="text-xl font-orbitron font-semibold text-white mb-2">{name}</h3>
          <div className="flex justify-center items-baseline">
            <span className="text-gray-400 mr-2">$</span>
            <span className="text-4xl font-bold text-white">{price}</span>
            <span className="text-gray-400 ml-1">/month</span>
          </div>
          <p className="text-gray-400 mt-2">{description}</p>
        </div>
        
        <div className="h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent mb-6"></div>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <svg className="w-5 h-5 text-bright-teal mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-300">{feature.text}</span>
            </li>
          ))}
        </ul>
        
        <a href="#contact">
          {isPopular ? (
            <GradientButton className="w-full" animate>Upgrade Now</GradientButton>
          ) : (
            <GradientButton className="w-full" variant="outline">
              {name === "Basic" ? "Get Started" : "Contact Sales"}
            </GradientButton>
          )}
        </a>
      </GlassCard>
    </motion.div>
  );
}

export default function PricingSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const pricingPlans = [
    {
      name: "Basic",
      price: "0",
      description: "Perfect for startups exploring opportunities",
      features: [
        { text: "Basic AI matching algorithm", included: true },
        { text: "Up to 10 matches per month", included: true },
        { text: "Standard business profile", included: true },
        { text: "Email support", included: true }
      ]
    },
    {
      name: "Premium",
      price: "99",
      description: "For growing businesses seeking quality connections",
      features: [
        { text: "Advanced AI matching algorithm", included: true },
        { text: "Unlimited matches", included: true },
        { text: "Enhanced business profile", included: true },
        { text: "Priority support (24/7)", included: true },
        { text: "Real-time analytics dashboard", included: true },
        { text: "Direct messaging platform", included: true }
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "499",
      description: "For large organizations with complex needs",
      features: [
        { text: "Custom AI matching solution", included: true },
        { text: "Unlimited matches with priority ranking", included: true },
        { text: "Premium business profile with branding", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Advanced analytics & reporting", included: true },
        { text: "API access for custom integration", included: true }
      ]
    }
  ];
  
  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/3 right-1/3 w-1/3 h-1/3 bg-neon-blue opacity-10 blur-[120px] rounded-full"></div>
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
            <span className="text-sm font-medium text-bright-teal">Pricing Plans</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple"></span> Choose the right package for your Business
          </h2>
          <p className="text-gray-300">
            Select from our flexible pricing options designed to fit businesses of all sizes, from startups to enterprises.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingPlan
              key={plan.name}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

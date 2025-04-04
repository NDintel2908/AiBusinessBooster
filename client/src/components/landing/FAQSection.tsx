
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

// Custom Accordion components
const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "overflow-hidden rounded-xl mb-4 bg-black/20 border border-gray-800/50 backdrop-blur-sm transition-all duration-200 hover:border-electric-purple/30 group faq-accordion-item", 
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-5 font-medium text-white transition-all duration-300 group-hover:text-neon-blue",
        className
      )}
      {...props}
    >
      <span className="text-left font-semibold">{children}</span>
      <div className="relative flex h-5 w-5 items-center justify-center">
        <span className="absolute h-0.5 w-3 bg-current transition-transform duration-300 data-[state=open]:rotate-0 data-[state=closed]:rotate-0" />
        <span className="absolute h-0.5 w-3 bg-current rotate-90 transition-transform duration-300 data-[state=open]:rotate-0" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="px-5 pb-5 pt-0 text-gray-400 leading-relaxed">
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

const faqItems = [
  {
    question: "How does NexusMatch's AI technology work?",
    answer: "Our proprietary AI algorithm analyzes thousands of data points from both businesses to identify complementary strengths, needs, and growth opportunities. It evaluates factors like industry synergy, business goals, resource capabilities, and market positioning to suggest the most promising partnerships with over 90% match accuracy."
  },
  {
    question: "What types of businesses can benefit from NexusMatch?",
    answer: "NexusMatch caters to businesses of all sizes and industries - from startups and SMEs to large enterprises. Our platform is particularly valuable for companies looking to expand their network, enter new markets, find strategic suppliers, identify investment opportunities, or secure distribution partnerships."
  },
  {
    question: "How long does it take to find relevant business matches?",
    answer: "Most users receive their first batch of high-quality matches within 48 hours of completing their profile. Our AI continuously works in the background to identify new potential matches as they join the platform, meaning you'll receive fresh opportunities regularly without any additional effort."
  },
  {
    question: "Is my business information kept confidential?",
    answer: "Absolutely. We take data privacy extremely seriously. You control exactly what information is visible to potential matches, and all sensitive business data is encrypted and protected. We never sell your information to third parties, and you can request complete deletion of your data at any time."
  },
  {
    question: "What makes NexusMatch different from traditional networking platforms?",
    answer: "Unlike traditional platforms that rely on manual searching or basic keyword matching, NexusMatch uses advanced AI to proactively identify optimal business partnerships based on deep compatibility analysis. Our platform eliminates the guesswork and countless hours typically spent on networking, dramatically increasing your chances of finding transformative business relationships."
  }
];

export default function FAQSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-electric-purple opacity-10 blur-[120px] rounded-full"></div>
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
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Get answers to common questions about our AI-powered business matching platform
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
              >
                <AccordionTrigger>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

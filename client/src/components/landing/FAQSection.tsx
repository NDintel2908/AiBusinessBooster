
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What countries can Arrowster support me apply to?",
    answer: "We support applications to universities in major educational destinations worldwide, including the USA, UK, Canada, Australia, and many European countries. Our network of mentors has experience with institutions across these regions."
  },
  {
    question: "What can Arrowster mentors help me with?",
    answer: "Our mentors provide comprehensive support including university selection, application strategy, essay review, scholarship applications, interview preparation, and guidance on required documentation. They're experienced professionals who've helped many students succeed."
  },
  {
    question: "How many schools will Arrowster help me apply to?",
    answer: "We typically help students apply to 6-10 schools, carefully selected based on their academic profile, career goals, and preferences. This range ensures a balanced portfolio of reach, target, and safety schools."
  },
  {
    question: "What's the cost to work with Arrowster?",
    answer: "Our pricing varies based on the level of support needed and number of applications. We offer flexible packages to accommodate different needs and budgets. Contact us for a personalized quote."
  },
  {
    question: "Will I work with you online or offline?",
    answer: "We offer both online and offline consultation options. While most of our services are delivered through our advanced online platform, we can arrange in-person meetings in select locations when needed."
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
    <section className="py-20 relative">
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
            Frequently asked questions
          </h2>
          <p className="text-gray-400">
            Curious about choosing the right university or securing scholarships? We've got you covered!
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
                className="border-b border-gray-700 last:border-0"
              >
                <AccordionTrigger className="text-white hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
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

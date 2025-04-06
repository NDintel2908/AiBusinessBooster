
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const ServiceAccordionItem = ({ 
  value, 
  title, 
  children, 
  isExpanded 
}: { 
  value: string;
  title: string;
  children: React.ReactNode;
  isExpanded?: boolean;
}) => (
  <Accordion.Item value={value} className="border-b border-gray-200/10">
    <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left">
      <div className="flex items-center gap-3">
        <div className={`flex h-6 w-6 items-center justify-center rounded-full ${isExpanded ? 'bg-blue-500' : 'bg-gray-600'}`}>
          <Plus className="h-4 w-4 text-white" />
        </div>
        <span className={`text-lg ${isExpanded ? 'text-blue-500' : 'text-gray-400'}`}>{title}</span>
      </div>
    </Accordion.Trigger>
    <Accordion.Content className="pb-4 pl-9">
      <div className="border-l-2 border-blue-500 pl-4 text-gray-400">
        {children}
      </div>
    </Accordion.Content>
  </Accordion.Item>
);

export default function FeaturesSection() {
  return (
    <section className="relative py-16 md:py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-[2.5rem] font-bold text-white mb-4">
            How Arrowster supports you & what makes us unique
          </h2>
          <p className="text-[1.1rem] text-gray-400 max-w-3xl mx-auto">
            Discover the exceptional support and unique advantages that set Arrowster apart in your study abroad journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Accordion.Root type="single" defaultValue="career" className="space-y-2">
              <ServiceAccordionItem 
                value="career" 
                title="Career Orientation"
                isExpanded={true}
              >
                Our expert counselors work closely with you to explore your interests, strengths, and career aspirations. We provide comprehensive career guidance and help you align your study abroad goals with your professional future.
              </ServiceAccordionItem>
              
              <ServiceAccordionItem 
                value="selection" 
                title="School Selection & Scholarship Assistance"
              >
                We help you identify the best-fit universities and programs while maximizing your scholarship opportunities through our extensive network of partner institutions.
              </ServiceAccordionItem>
              
              <ServiceAccordionItem 
                value="application" 
                title="Application Preparation"
              >
                From personal statements to recommendation letters, we guide you through every step of the application process with personalized support and expert feedback.
              </ServiceAccordionItem>
            </Accordion.Root>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-xl bg-sky-50/5">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
                alt="Asian student in urban environment"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

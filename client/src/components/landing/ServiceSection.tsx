
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

export default function ServiceSection() {
  return (
    <section className="relative py-16 md:py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-[2.5rem] font-bold text-white mb-4">
            How BCP supports you & what makes us unique
          </h2>
          <p className="text-[1.1rem] text-gray-400 max-w-3xl mx-auto">
            Discover the exceptional support and unique advantages that set BCP apart in your business stories.
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
                value="AI intelligence" 
                title="AI intelligently connects you with ideal business partners"
                isExpanded={true}
              >
                Forget the endless meetings and the laborious partner-seeking efforts of traditional methods.

                BCP AI learns and remembers every small detail about your business's information and demands. The robust AI technology will proactively suggest connections with the most suitable businesses. 
                The more detailed the information - the more accurate the matching!
              </ServiceAccordionItem>
              
              <ServiceAccordionItem 
                value="cutoff" 
                title="Cut out the middleman - Direct access to the highest authority"
              >
                Eliminate intermediaries - BCP AI provides a streamlined route to connect directly with the final authority - where deals are finalized.
              </ServiceAccordionItem>
              
              <ServiceAccordionItem 
                value="security" 
                title="Top-tier security"
              >
                Your data security is our priority.
                At BCP, we implement robust technical and organizational measures to protect user data, following industry best practices in cloud infrastructure, access control, and encryption. While BCP is actively working toward internationally recognized security certifications, we already maintain strict internal policies to ensure the confidentiality, integrity, and availability of your information.
              </ServiceAccordionItem>

              <ServiceAccordionItem 
                value="connection" 
                title="Borderless connections"
              >
                BCP is not just a "bridge", but also a "springboard" for businesses that dare to dream big - to expand internationally. From the dynamic pace of life in Vietnam, reaching out to the advanced Japanese market, and spreading throughout Southeast Asia - we are a strategic bridge that helps your business transcend geographical boundaries.
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
            <div className="overflow-hidden rounded-xl bg-sky-50/5 flex items-center justify-center py-8 px-6">
              <img 
                src="/src/components/landing/Service.png"
                alt="Service illustration"
                className="w-full h-[460px] object-contain mix-blend-lighten opacity-90"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

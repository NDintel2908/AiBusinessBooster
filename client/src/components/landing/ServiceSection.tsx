
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const ServiceAccordionItem = ({ 
  value, 
  title, 
  children 
}: { 
  value: string;
  title: string;
  children: React.ReactNode;
}) => (
  <Accordion.Item value={value} className="border-b border-gray-200/10">
    <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left group focus:outline-none" data-state="closed">
      <div className="flex items-center gap-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 group-hover:bg-[#00B7EB] group-focus:bg-[#00B7EB] group-data-[state=open]:bg-[#00B7EB] transition-colors">
          <Plus className="h-4 w-4 text-white transition-transform group-data-[state=open]:rotate-45" />
        </div>
        <span className="text-lg text-white group-hover:text-[#00B7EB] group-focus:text-[#00B7EB] group-data-[state=open]:text-[#00B7EB] transition-colors">{title}</span>
      </div>
    </Accordion.Trigger>
    <Accordion.Content className="pb-4 pl-9">
      <div className="border-l-2 border-[#00B7EB] pl-4 text-gray-400">
        {children}
      </div>
    </Accordion.Content>
  </Accordion.Item>
);

export default function ServiceSection() {
  return (
    <section id="service-section" className="relative py-16 md:py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-[2.5rem] font-bold text-white mb-4 font-heading">
            The BCP.Global Difference
          </h2>
          <p className="text-[1.1rem] text-gray-400 max-w-3xl mx-auto font-primary">
            Discover the special support and unique advantages that make BCP stand out in your business journey.
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
                value="proactive" 
                title="AI-driven, proactively initiates relevant conversations without spam."
              >
                Businesses, regardless of their sector, have a need to BUY & SELL products or services from domestic and international markets — BCP.Global immediately grants PROACTIVE CONTROL:
                + Promote yourself;
                + Find suitable partners;
                + Real-time matching of needs;
                + Select markets for expansion;
                + Communicate regardless of space & time;
              </ServiceAccordionItem>
              
              <ServiceAccordionItem 
                value="chat" 
                title="Direct Communication with Qualified Potential Leads"
              >
                BCP.Global supports new 1-on-1 chat groups for Businesses to communicate directly with qualified Potential Leads without the need for coordinators.
              </ServiceAccordionItem>
              
              <ServiceAccordionItem 
                value="security" 
                title="Borderless Connections"
              >
                BCP.Global is not just a ""bridge"" but also a ""springboard"" for businesses that dare to dream big — expanding internationally. From the dynamic pace of Vietnam, reaching the advanced Japanese market, and spreading throughout Southeast Asia — we are a strategic bridge helping businesses transcend geographical boundaries.
                
              </ServiceAccordionItem>

              <ServiceAccordionItem 
                value="connection" 
                title="Security is the Top Priority"
              >
                At BCP.Global, we implement rigorous technical and organizational measures to protect user data, adhering to industry best practices in cloud infrastructure, access control, and data encryption.

                BCP is committed to maintaining the confidentiality, integrity, and availability of information to ensure the privacy and security of all users and partners on the platform.
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
                src="/Service.png"
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

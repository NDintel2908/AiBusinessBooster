
import { motion } from "framer-motion";

export default function BusinessSectorsSection() {
  return (
    <section id="business-sectors" className="relative py-16 md:py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-[2.5rem] font-bold text-white mb-4 font-heading">
            25 Popular Business Sectors
          </h2>
          <p className="text-[1.1rem] text-gray-400 max-w-3xl mx-auto font-primary">
            Explore the diverse range of business sectors participating and engaging in global B2B trade on BCP Global
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Group A - Professional B2B Service Providers</h3>
            <ul className="list-disc pl-4 space-y-2 text-gray-400">
              <li>IT, AI & IoT Software Development and Outsourcing</li>
              <li>Accounting, Finance, Legal & Insurance Consulting</li>
              <li>Human Resources, Recruitment & Training Services</li>
              <li>Advertising & Marketing Agencies</li>
              <li>Distribution & Domestic Trade Services</li>
              <li>Transportation, Logistics, Distribution & Warehousing Services</li>
              <li>Architectural & Office Interior Design</li>
              <li>Commercial, Retail, Industrial & Office Real Estate</li>
              <li>Export Services & Cross-Border Market Development</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Group B - Raw Materials & Goods Suppliers</h3>
            <ul className="list-disc pl-4 space-y-2 text-gray-400">
              <li>Agriculture & Aquaculture</li>
              <li>Food & Beverage</li>
              <li>Textiles & Garments</li>
              <li>Pulp & Paper</li>
              <li>Chemicals</li>
              <li>Construction Materials</li>
              <li>Mining & Minerals</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Group C - Manufacturers & Processors</h3>
            <ul className="list-disc pl-4 space-y-2 text-gray-400">
              <li>Food & Beverage Manufacturers</li>
              <li>Textile & Garment Manufacturers, Fashion Products</li>
              <li>Consumer Goods Manufacturers</li>
              <li>Electronics & Home Appliance Manufacturers</li>
              <li>Automotive & Parts Manufacturers</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Group D - Industrial & Auxiliary Processing</h3>
            <ul className="list-disc pl-4 space-y-2 text-gray-400">
              <li>Industrial Component & Auxiliary Processing</li>
              <li>Semiconductor Component Processing</li>
              <li>Precision Engineering & Machining</li>
              <li>Specialized Equipment Manufacturing & Supply</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

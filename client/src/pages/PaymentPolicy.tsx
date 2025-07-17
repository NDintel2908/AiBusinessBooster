import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import "@/lib/i18n";

export default function PaymentPolicy() {
  const { t } = useTranslation('paymentPolicy');
  const [activeSection, setActiveSection] = useState(1);

  const sections = t('paymentPolicy.sections', { returnObjects: true }) as Array<{ id: number; title: string }>;

  return (
    <div className="min-h-screen bg-deep-dark text-gray-200">
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <nav className="sticky top-32">
              <ul className="space-y-2 border-l border-gray-800">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`block w-full text-left pl-4 py-2 transition-colors duration-200 ${
                        activeSection === section.id
                          ? "border-l-2 border-electric-purple text-electric-purple font-semibold -ml-[1px]"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      {section.id}. {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-9"
          >
            <h1 className="text-4xl font-heading font-bold mb-4 text-white">
              {t('paymentPolicy.title')}
            </h1>
            <p className="text-gray-400 mb-8">{t('paymentPolicy.lastUpdated')}</p>

            <div className="prose prose-invert max-w-none space-y-6">
              <section id="section1">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t('paymentPolicy.content.section1.title')}
                </h2>
                <p>
                  {t('paymentPolicy.content.section1.intro')}
                </p>
                <ul>
                  {(t('paymentPolicy.content.section1.methods', { returnObjects: true }) as string[]).map((method, index) => (
                    <li key={index}>{method}</li>
                  ))}
                </ul>
                <p>
                  {t('paymentPolicy.content.section1.security')}
                </p>
              </section>

              <section id="section2">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t('paymentPolicy.content.section2.title')}
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p>
                    <strong>{t('paymentPolicy.content.section2.subsections.paymentTerm.title')}</strong>
                  </p>
                  {(t('paymentPolicy.content.section2.subsections.paymentTerm.content', { returnObjects: true }) as string[]).map((content, index) => (
                    <p key={index}>{content}</p>
                  ))}

                  <p>
                    <strong>{t('paymentPolicy.content.section2.subsections.refundPolicy.title')}</strong>
                  </p>
                  <p>
                    {t('paymentPolicy.content.section2.subsections.refundPolicy.intro')}
                  </p>
                  <ul>
                    {(t('paymentPolicy.content.section2.subsections.refundPolicy.conditions', { returnObjects: true }) as string[]).map((condition, index) => (
                      <li key={index}>{condition}</li>
                    ))}
                  </ul>
                  <p>
                    {t('paymentPolicy.content.section2.subsections.refundPolicy.note')}
                  </p>
                  <p>
                    {t('paymentPolicy.content.section2.subsections.refundPolicy.reference')}
                  </p>
                </div>
              </section>

              <section id="section3">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t('paymentPolicy.content.section3.title')}
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p>{t('paymentPolicy.content.section3.intro')}</p>
                  <ul>
                    {(t('paymentPolicy.content.section3.measures', { returnObjects: true }) as string[]).map((measure, index) => (
                      <li key={index}>{measure}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section id="section4">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t('paymentPolicy.content.section4.title')}
                </h2>
                {t('paymentPolicy.content.section4.content')}
              </section>

              <section id="section5">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t('paymentPolicy.content.section5.title')}
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p>
                    {t('paymentPolicy.content.section5.intro')}
                  </p>
                  <ul>
                    {(t('paymentPolicy.content.section5.regulations', { returnObjects: true }) as string[]).map((regulation, index) => (
                      <li key={index}>{regulation}</li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function PaymentPolicy() {
  const { t } = useTranslation('paymentPolicy');
  const [activeSection, setActiveSection] = useState(1);

  const sections = t('paymentPolicy.sections', { returnObjects: true }) as Array<{id: number, title: string}>;

  // Function to scroll to section
  const scrollToSection = (sectionId: number) => {
    const element = document.getElementById(`section${sectionId}`);
    if (element) {
      const headerOffset = 150; // Account for sticky header
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  // Intersection Observer to detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = parseInt(entry.target.id.replace('section', ''));
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(`section${section.id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
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
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left pl-4 py-2 transition-colors duration-200 ${
                        activeSection === section.id
                          ? "border-l-2 border-brand-primary text-brand-primary font-semibold -ml-[1px]"
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
            <p className="text-gray-400 mb-8">
              {t('paymentPolicy.lastUpdated')}
            </p>

            <div className="prose prose-invert max-w-none space-y-6">
              <section id="section1">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t('paymentPolicy.content.section1.title')}
                </h2>
                <p>{t('paymentPolicy.content.section1.intro')}</p>
                <ul>
                  {(t('paymentPolicy.content.section1.methods', { returnObjects: true }) as string[]).map((method, index) => (
                    <li key={index}>{method}</li>
                  ))}
                </ul>
                <p>{t('paymentPolicy.content.section1.security')}</p>
              </section>

              <section id="section2">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t('paymentPolicy.content.section2.title')}
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  {(t('paymentPolicy.content.section2.content', { returnObjects: true }) as string[]).map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
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
                <p>{t('paymentPolicy.content.section4.content')}</p>
              </section>

              <section id="section5">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t('paymentPolicy.content.section5.title')}
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p>{t('paymentPolicy.content.section5.intro')}</p>
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
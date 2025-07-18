
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  const { t } = useTranslation("privacyPolicy");
  const [activeSection, setActiveSection] = useState(1);

  const sections = t("privacyPolicy.sections", { returnObjects: true }) as Array<{id: number, title: string}>;

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
            <h1 className="text-4xl font-heading font-bold mb-4 text-white">{t("privacyPolicy.title")}</h1>
            <p className="text-gray-400 mb-8">{t("privacyPolicy.lastUpdated")}</p>

              {/* Introduction Section */}
              <div className="prose prose-invert max-w-none space-y-6">
                <p>{t("privacyPolicy.introduction.welcome")}</p>
                <p>{t("privacyPolicy.introduction.description")}</p>
                <p>{t("privacyPolicy.introduction.commitment")}</p>
                <p>{t("privacyPolicy.introduction.changePolicy")}</p>
                <p>{t("privacyPolicy.introduction.consent")}</p>
                <p>
                  {t("privacyPolicy.introduction.tableOfContents")}
                  {(t("privacyPolicy.introduction.contentsList", { returnObjects: true }) as string[]).map((item, index) => (
                    <ul key={index}>{item}</ul>
                  ))}
                </p>
              </div>

              <div className="prose prose-invert max-w-none space-y-6">
                <section id="section1">
                  {/* 1. */}
                  <h2 className="text-2xl font-heading font-semibold mb-4">{(t("privacyPolicy.content.section1.title"))}</h2>
                  <p>{(t("privacyPolicy.content.section1.intro"))}</p>

                  {/* 1.1 */}
                  <p><strong>{(t("privacyPolicy.content.section1.subsections.profileInfo.title"))}</strong></p>
                  <p>{(t("privacyPolicy.content.section1.subsections.profileInfo.content"))}</p>

                  {/* 1.2 */}
                  <p><strong>{(t("privacyPolicy.content.section1.subsections.userContent.title"))}</strong></p>
                  <p>{(t("privacyPolicy.content.section1.subsections.userContent.content"))}</p>

                  {/* 1.3 */}
                  <p><strong>{t("privacyPolicy.content.section1.subsections.messages.title")}</strong></p>
                  {(t("privacyPolicy.content.section1.subsections.messages.content", { returnObjects: true }) as string[]).map((content, index) => (
                    <p key={index}>{content}</p>
                  ))}

                  {/* 1.4 */}
                  <p><strong>{t("privacyPolicy.content.section1.subsections.purchaseInfo.title")}</strong></p>
                  <p>{t("privacyPolicy.content.section1.subsections.purchaseInfo.content")}</p>

                  {/* 1.5 */}
                  <p><strong>{t("privacyPolicy.content.section1.subsections.identityProof.title")}</strong></p>
                  <p>{t("privacyPolicy.content.section1.subsections.identityProof.content")}</p>

                  {/* 1.6 */}
                  <p><strong>{t("privacyPolicy.content.section1.subsections.technicalInfo.title")}</strong></p>
                  {(t("privacyPolicy.content.section1.subsections.technicalInfo.content", { returnObjects: true }) as string[]).map((content, index) => (
                    <p key={index}>{content}</p>
                  ))}

                  {/* 1.7 */}
                  <p><strong>{t("privacyPolicy.content.section1.subsections.locationInfo.title")}</strong></p>
                  {(t("privacyPolicy.content.section1.subsections.locationInfo.content", { returnObjects: true }) as string[]).map((content, index) => (
                    <p key={index}>{content}</p>
                  ))}

                  {/* 1.8 */}
                  <p><strong>{t("privacyPolicy.content.section1.subsections.otherSources.title")}</strong></p>

                  {(t("privacyPolicy.content.section1.subsections.otherSources.items", { returnObjects: true }) as string[]).map((item, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>
                  ))}

                  {(t("privacyPolicy.content.section1.subsections.otherSources.disclaimer", { returnObjects: true }) as string[]).map((disclaimer, index) => (
                    <p key={index}>{disclaimer}</p>
                  ))}
                </section>

                <section id="section2">
                  <h2 className="text-2xl font-heading font-semibold mb-4">{t("privacyPolicy.content.section2.title")}</h2>
                  <div className="prose prose-invert max-w-none space-y-6">
                    <p>{t("privacyPolicy.content.section2.intro")}</p>

                    <p>
                      {t("privacyPolicy.content.section2.usageDescription")}
                      {(t("privacyPolicy.content.section2.usageList", { returnObjects: true }) as string[]).map((item, index) => (
                        <ul key={index}>{item}</ul>
                      ))}
                    </p>

                    <p>{t("privacyPolicy.content.section2.segmentation")}</p>

                    <p>
                      {t("privacyPolicy.content.section2.legalBasis")}
                      {(t("privacyPolicy.content.section2.legalBasisList", { returnObjects: true }) as string[]).map((item, index) => (
                        <ul key={index}>{item}</ul>
                      ))}
                    </p>
                  </div>
                </section>

                <section id="section3">
                  <h2 className="text-2xl font-heading font-semibold mb-4">{t("privacyPolicy.content.section3.title")}</h2>
                  <div className="prose prose-invert max-w-none space-y-6">
                    <p>{t("privacyPolicy.content.section3.intro")}</p>

                    {/* 3.1 */}
                    <p><strong>{t("privacyPolicy.content.section3.subsections.businessPartners.title")}</strong></p>
                    {(t("privacyPolicy.content.section3.subsections.businessPartners.content", { returnObjects: true }) as string[]).map((paragraph, index) => (
                      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                    ))}

                    {/* 3.2 */}
                    <p><strong>{t("privacyPolicy.content.section3.subsections.serviceProviders.title")}</strong></p>
                    <p>{t("privacyPolicy.content.section3.subsections.serviceProviders.intro")}</p>

                    {/* 3.2.1 */}
                    <p><strong>{t("privacyPolicy.content.section3.subsections.serviceProviders.paymentProviders.title")}</strong></p>
                    <p>{t("privacyPolicy.content.section3.subsections.serviceProviders.paymentProviders.content")}</p>

                    {/* 3.2.2 */}
                    <p><strong>{t("privacyPolicy.content.section3.subsections.serviceProviders.analyticsProviders.title")}</strong></p>
                    <p>{t("privacyPolicy.content.section3.subsections.serviceProviders.analyticsProviders.content")}</p>

                    {/* 3.3 */}
                    <p><strong>{t("privacyPolicy.content.section3.subsections.advertisers.title")}</strong></p>
                    {(t("privacyPolicy.content.section3.subsections.advertisers.content", { returnObjects: true }) as string[]).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}

                    {/* 3.4 */}
                    <p><strong>{t("privacyPolicy.content.section3.subsections.researchers.title")}</strong></p>
                    <p>{t("privacyPolicy.content.section3.subsections.researchers.content")}</p>

                    {/* 3.5 */}
                    <p><strong>{t("privacyPolicy.content.section3.subsections.ourCompanies.title")}</strong></p>
                    <p>{t("privacyPolicy.content.section3.subsections.ourCompanies.content")}</p>

                    {/* 3.6 */}
                    <p><strong>{t("privacyPolicy.content.section3.subsections.legalReasons.title")}</strong></p>
                    <p>{t("privacyPolicy.content.section3.subsections.legalReasons.intro")}</p>
                    <ul className="list-disc pl-6 space-y-1">
                      {(t("privacyPolicy.content.section3.subsections.legalReasons.reasons", { returnObjects: true }) as string[]).map((reason, index) => (
                        <li key={index}>{reason}</li>
                      ))}
                    </ul>

                    {/* 3.7 */}
                    <p><strong>{t("privacyPolicy.content.section3.subsections.businessTransactions.title")}</strong></p>
                    <p>{t("privacyPolicy.content.section3.subsections.businessTransactions.intro")}</p>

                    {(t("privacyPolicy.content.section3.subsections.businessTransactions.scenarios", { returnObjects: true }) as string[]).map((scenario, index) => (
                      <p key={index} dangerouslySetInnerHTML={{ __html: scenario }}></p>
                    ))}

                  </div>
                </section>

                <section id="section4">
                  <h2 className="text-2xl font-heading font-semibold mb-4">{t("privacyPolicy.content.section4.title")}</h2>
                  <div className="prose prose-invert max-w-none space-y-6">
                    {(t("privacyPolicy.content.section4.content", { returnObjects: true }) as string[]).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                <section id="section5">
                  <h2 className="text-2xl font-heading font-semibold mb-4">{t("privacyPolicy.content.section5.title")}</h2>
                  <div className="prose prose-invert max-w-none space-y-6">
                    {(t("privacyPolicy.content.section5.content", { returnObjects: true }) as string[]).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                <section id="section6">
                  <h2 className="text-2xl font-heading font-semibold mb-4">{t("privacyPolicy.content.section6.title")}</h2>
                  <div className="prose prose-invert max-w-none space-y-6">
                    {(t("privacyPolicy.content.section6.content", { returnObjects: true }) as string[]).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                <section id="section7">
                  <h2 className="text-2xl font-heading font-semibold mb-4">{t("privacyPolicy.content.section7.title")}</h2>
                  <div className="prose prose-invert max-w-none space-y-6">
                    {(t("privacyPolicy.content.section7.content", { returnObjects: true }) as string[]).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                <section id="section8">
                  <h2 className="text-2xl font-heading font-semibold mb-4">{t("privacyPolicy.content.section8.title")}</h2>
                  <div className="prose prose-invert max-w-none space-y-6">
                    <p>{t("privacyPolicy.content.section8.general")}</p>

                    <p><strong>{t("privacyPolicy.content.section8.vietnam.title")}</strong></p>
                    <p>{t("privacyPolicy.content.section8.vietnam.intro")}</p>

                    <p dangerouslySetInnerHTML={{ __html: t("privacyPolicy.content.section8.vietnam.dataProcessing") }}></p>

                    <p dangerouslySetInnerHTML={{ __html: t("privacyPolicy.content.section8.vietnam.rightsAndObligations") }}></p>

                    <ul className="list-disc pl-6 space-y-1">
                      {(t("privacyPolicy.content.section8.vietnam.rights", { returnObjects: true }) as string[]).map((right, index) => (
                        <li key={index}>{right}</li>
                      ))}
                    </ul>

                    <p>{t("privacyPolicy.content.section8.vietnam.exerciseRights")}</p>

                    <p>{t("privacyPolicy.content.section8.vietnam.obligations")}</p>

                    <ul className="list-disc pl-6 space-y-1">
                      {(t("privacyPolicy.content.section8.vietnam.obligationsList", { returnObjects: true }) as string[]).map((obligation, index) => (
                        <li key={index}>{obligation}</li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section id="section9">
                  <h2 className="text-2xl font-heading font-semibold mb-4">{t("privacyPolicy.content.section9.title")}</h2>
                  <div className="prose prose-invert max-w-none space-y-6">
                    <p>
                      {t("privacyPolicy.content.section9.content.0").replace("connect@bcp.global", "")}
                      <a href="mailto:connect@bcp.global" className="underline text-blue-400">connect@bcp.global</a>
                    </p>

                    <p>{t("privacyPolicy.content.section9.content.1")}</p>

                    <p>{t("privacyPolicy.content.section9.content.2")}</p>
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

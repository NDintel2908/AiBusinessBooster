import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function TermsOfService() {
  const { t } = useTranslation("termsOfService");
  const [activeSection, setActiveSection] = useState(1);

  // Get sections array from JSON structure
  const sections = t("termsOfService.sections", {
    returnObjects: true,
  }) as Array<{ id: number; title: string }>;

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
          {/* Left Sidebar - Navigation */}
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
            {/* Header Title and Last Updated */}
            <h1 className="text-4xl font-heading font-bold mb-4 text-white">
              {t("termsOfService.title")}
            </h1>
            <p className="text-gray-400 mb-8">
              {t("termsOfService.lastUpdated")}
            </p>

            <div className="prose prose-invert max-w-none space-y-6">
              {/* Section 1: Phạm vi áp dụng của Thỏa thuận */}
              <section id="section1">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t("termsOfService.content.section1.title")}
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  {/* Clause 1.1 */}
                  <p>
                    {t(
                      "termsOfService.content.section1.subsections.clause11.number",
                    )}{" "}
                    {t(
                      "termsOfService.content.section1.subsections.clause11.content",
                    )}
                  </p>

                  {/* Clause 1.2 */}
                  <p>
                    {t(
                      "termsOfService.content.section1.subsections.clause12.number",
                    )}{" "}
                    {t(
                      "termsOfService.content.section1.subsections.clause12.content",
                    )}
                  </p>

                  {/* Clause 1.3 */}
                  <p>
                    {t(
                      "termsOfService.content.section1.subsections.clause13.number",
                    )}{" "}
                    {t(
                      "termsOfService.content.section1.subsections.clause13.content",
                    )}
                  </p>

                  {/* Clause 1.4 - Array content */}
                  <div>
                    <p>
                      {t(
                        "termsOfService.content.section1.subsections.clause14.number",
                      )}{" "}
                      {
                        (
                          t(
                            "termsOfService.content.section1.subsections.clause14.content",
                            { returnObjects: true },
                          ) as string[]
                        )[0]
                      }
                    </p>
                    {(
                      t(
                        "termsOfService.content.section1.subsections.clause14.content",
                        { returnObjects: true },
                      ) as string[]
                    )
                      .slice(1)
                      .map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                  </div>

                  {/* Clause 1.5 - Array content */}
                  <div>
                    <p>
                      {t(
                        "termsOfService.content.section1.subsections.clause15.number",
                      )}{" "}
                      {
                        (
                          t(
                            "termsOfService.content.section1.subsections.clause15.content",
                            { returnObjects: true },
                          ) as string[]
                        )[0]
                      }
                    </p>
                    {(
                      t(
                        "termsOfService.content.section1.subsections.clause15.content",
                        { returnObjects: true },
                      ) as string[]
                    )
                      .slice(1)
                      .map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                  </div>

                  {/* Clause 1.6 */}
                  <p>
                    {t(
                      "termsOfService.content.section1.subsections.clause16.number",
                    )}{" "}
                    {t(
                      "termsOfService.content.section1.subsections.clause16.content",
                    )}
                  </p>
                </div>
              </section>

              {/* Section 2: Sản phẩm và Dịch vụ của chúng tôi */}
              <section id="section2">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t("termsOfService.content.section2.title")}
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  {/* 2.1 Product Proposal */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section2.subsections.productProposal.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section2.subsections.productProposal.content",
                      )}
                    </p>
                  </div>

                  {/* 2.2 Ownership - Array content */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section2.subsections.ownership.title",
                        )}
                      </strong>
                    </p>
                    {(
                      t(
                        "termsOfService.content.section2.subsections.ownership.content",
                        { returnObjects: true },
                      ) as string[]
                    ).map((paragraph, index) => (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      ></p>
                    ))}
                  </div>

                  {/* 2.3 User Responsibility - Array content */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section2.subsections.userResponsibility.title",
                        )}
                      </strong>
                    </p>
                    {(
                      t(
                        "termsOfService.content.section2.subsections.userResponsibility.content",
                        { returnObjects: true },
                      ) as string[]
                    ).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* 2.4 Legal Scope - Array content */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section2.subsections.legalScope.title",
                        )}
                      </strong>
                    </p>
                    {(
                      t(
                        "termsOfService.content.section2.subsections.legalScope.content",
                        { returnObjects: true },
                      ) as string[]
                    ).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* 2.5 Service Updates - Array content */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section2.subsections.serviceUpdates.title",
                        )}
                      </strong>
                    </p>
                    {(
                      t(
                        "termsOfService.content.section2.subsections.serviceUpdates.content",
                        { returnObjects: true },
                      ) as string[]
                    ).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 3: Đăng ký, sử dụng và hủy tài khoản BCP */}
              <section id="section3">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t("termsOfService.content.section3.title")}
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  {/* 3.1 Registration */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section3.subsections.registration.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section3.subsections.registration.content",
                      )}
                    </p>
                  </div>

                  {/* 3.2 Information Setup */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section3.subsections.informationSetup.title",
                        )}
                      </strong>
                    </p>

                    {/* 3.2.1 User Profile - Array content */}
                    <div>
                      <p>
                        <strong>
                          {t(
                            "termsOfService.content.section3.subsections.informationSetup.subsections.userProfile.title",
                          )}
                        </strong>
                      </p>
                      {(
                        t(
                          "termsOfService.content.section3.subsections.informationSetup.subsections.userProfile.content",
                          { returnObjects: true },
                        ) as string[]
                      ).map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>

                    {/* 3.2.2 Company Profile - Array content */}
                    <div>
                      <p>
                        <strong>
                          {t(
                            "termsOfService.content.section3.subsections.informationSetup.subsections.companyProfile.title",
                          )}
                        </strong>
                      </p>
                      {(
                        t(
                          "termsOfService.content.section3.subsections.informationSetup.subsections.companyProfile.content",
                          { returnObjects: true },
                        ) as string[]
                      ).map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {/* 3.3 Usage and Security */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section3.subsections.usageAndSecurity.title",
                        )}
                      </strong>
                    </p>

                    {/* 3.3.1 Account Usage */}
                    <div>
                      <p>
                        <strong>
                          {t(
                            "termsOfService.content.section3.subsections.usageAndSecurity.subsections.accountUsage.title",
                          )}
                        </strong>
                      </p>
                      <p>
                        {t(
                          "termsOfService.content.section3.subsections.usageAndSecurity.subsections.accountUsage.content",
                        )}
                      </p>
                    </div>

                    {/* 3.3.2 Business License - Array content */}
                    <div>
                      <p>
                        <strong>
                          {t(
                            "termsOfService.content.section3.subsections.usageAndSecurity.subsections.businessLicense.title",
                          )}
                        </strong>
                      </p>
                      {(
                        t(
                          "termsOfService.content.section3.subsections.usageAndSecurity.subsections.businessLicense.content",
                          { returnObjects: true },
                        ) as string[]
                      ).map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>

                    {/* 3.3.3 Account Security - Array content */}
                    <div>
                      <p>
                        <strong>
                          {t(
                            "termsOfService.content.section3.subsections.usageAndSecurity.subsections.accountSecurity.title",
                          )}
                        </strong>
                      </p>
                      {(
                        t(
                          "termsOfService.content.section3.subsections.usageAndSecurity.subsections.accountSecurity.content",
                          { returnObjects: true },
                        ) as string[]
                      ).map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>

                    {/* 3.3.4 Legal Responsibility */}
                    <div>
                      <p>
                        <strong>
                          {t(
                            "termsOfService.content.section3.subsections.usageAndSecurity.subsections.legalResponsibility.title",
                          )}
                        </strong>
                      </p>
                      <p>
                        {t(
                          "termsOfService.content.section3.subsections.usageAndSecurity.subsections.legalResponsibility.content",
                        )}
                      </p>
                    </div>
                  </div>

                  {/* 3.4 Verification */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section3.subsections.verification.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section3.subsections.verification.content",
                      )}
                    </p>
                  </div>

                  {/* 3.5 Suspension */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section3.subsections.suspension.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section3.subsections.suspension.content",
                      )}
                    </p>
                  </div>

                  {/* 3.6 Cancellation - Array content */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section3.subsections.cancellation.title",
                        )}
                      </strong>
                    </p>
                    {(
                      t(
                        "termsOfService.content.section3.subsections.cancellation.content",
                        { returnObjects: true },
                      ) as string[]
                    ).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* 3.7 Violations */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section3.subsections.violations.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section3.subsections.violations.content",
                      )}
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Quy tắc ứng xử của Người dùng */}
              <section id="section4">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t("termsOfService.content.section4.title")}
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  {/* 4.1 Content Regulations */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section4.subsections.contentRegulations.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section4.subsections.contentRegulations.intro",
                      )}
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section4.subsections.contentRegulations.prohibitedContentTitle",
                      )}
                    </p>
                    <ul>
                      {(
                        t(
                          "termsOfService.content.section4.subsections.contentRegulations.prohibitedContent",
                          { returnObjects: true },
                        ) as string[]
                      ).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* 4.2 Prohibited Actions */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section4.subsections.prohibitedActions.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section4.subsections.prohibitedActions.intro",
                      )}
                    </p>
                    <ul>
                      {(
                        t(
                          "termsOfService.content.section4.subsections.prohibitedActions.actions",
                          { returnObjects: true },
                        ) as string[]
                      ).map((action, index) => (
                        <li key={index}>{action}</li>
                      ))}
                    </ul>
                  </div>

                  {/* 4.3 User Responsibility */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section4.subsections.userResponsibility.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section4.subsections.userResponsibility.intro",
                      )}
                    </p>
                    <ul>
                      {(
                        t(
                          "termsOfService.content.section4.subsections.userResponsibility.measures",
                          { returnObjects: true },
                        ) as string[]
                      ).map((measure, index) => (
                        <li key={index}>{measure}</li>
                      ))}
                    </ul>
                    <p>
                      {t(
                        "termsOfService.content.section4.subsections.userResponsibility.additional",
                      )}
                    </p>
                  </div>

                  {/* 4.4 Compensation */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section4.subsections.compensation.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section4.subsections.compensation.content",
                      )}
                    </p>
                  </div>

                  {/* 4.5 Disclosure */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section4.subsections.disclosure.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section4.subsections.disclosure.content",
                      )}
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Bảo mật dữ liệu */}
              <section id="section5">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t("termsOfService.content.section5.title")}
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  {/* Array of paragraphs */}
                  {(
                    t("termsOfService.content.section5.paragraphs", {
                      returnObjects: true,
                    }) as string[]
                  ).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>

              {/* Section 6: Dịch vụ trả phí */}
              <section id="section6">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t("termsOfService.content.section6.title")}
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  {/* Intro - Array content */}
                  {(
                    t("termsOfService.content.section6.intro", {
                      returnObjects: true,
                    }) as string[]
                  ).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}

                  {/* 6.1 Purchase Paid Services */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section6.subsections.purchasePaidServices.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section6.subsections.purchasePaidServices.content",
                      )}
                    </p>
                  </div>

                  {/* 6.2 Payment */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section6.subsections.payment.title",
                        )}
                      </strong>
                    </p>

                    {/* 6.2.1 Credit Introduction */}
                    <div>
                      <p>
                        <strong>
                          {t(
                            "termsOfService.content.section6.subsections.payment.subsections.creditIntroduction.title",
                          )}
                        </strong>
                      </p>
                      <p>
                        {t(
                          "termsOfService.content.section6.subsections.payment.subsections.creditIntroduction.content",
                        )}
                      </p>
                    </div>

                    {/* 6.2.2 Third Party Payment - Array content */}
                    <div>
                      <p>
                        <strong>
                          {t(
                            "termsOfService.content.section6.subsections.payment.subsections.thirdPartyPayment.title",
                          )}
                        </strong>
                      </p>
                      {(
                        t(
                          "termsOfService.content.section6.subsections.payment.subsections.thirdPartyPayment.content",
                          { returnObjects: true },
                        ) as string[]
                      ).map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>

                    {/* 6.2.3 System Error Handling */}
                    <div>
                      <p>
                        <strong>
                          {t(
                            "termsOfService.content.section6.subsections.payment.subsections.systemErrorHandling.title",
                          )}
                        </strong>
                      </p>
                      <p>
                        {t(
                          "termsOfService.content.section6.subsections.payment.subsections.systemErrorHandling.intro",
                        )}
                      </p>
                      <ul>
                        {(
                          t(
                            "termsOfService.content.section6.subsections.payment.subsections.systemErrorHandling.actions",
                            { returnObjects: true },
                          ) as string[]
                        ).map((action, index) => (
                          <li key={index}>{action}</li>
                        ))}
                      </ul>
                      <p>
                        {t(
                          "termsOfService.content.section6.subsections.payment.subsections.systemErrorHandling.note",
                        )}
                      </p>
                    </div>

                    {/* 6.2.4 Refund Policy */}
                    <div>
                      <p>
                        <strong>
                          {t(
                            "termsOfService.content.section6.subsections.payment.subsections.refundPolicy.title",
                          )}
                        </strong>
                      </p>
                      <p>
                        {t(
                          "termsOfService.content.section6.subsections.payment.subsections.refundPolicy.intro",
                        )}
                      </p>
                      {(
                        t(
                          "termsOfService.content.section6.subsections.payment.subsections.refundPolicy.cases",
                          { returnObjects: true },
                        ) as any[]
                      ).map((caseItem, index) => (
                        <div key={index}>
                          <ul>
                            <li>{caseItem.case}</li>
                          </ul>
                          {caseItem.example && (
                            <p>
                              <em>{caseItem.example}</em>
                            </p>
                          )}
                          {caseItem.note && (
                            <p>
                              <em>{caseItem.note}</em>
                            </p>
                          )}
                        </div>
                      ))}
                      <p>
                        {t(
                          "termsOfService.content.section6.subsections.payment.subsections.refundPolicy.conclusion",
                        )}
                      </p>
                    </div>

                    {/* 6.2.5 Credit Limitations */}
                    <div>
                      <p>
                        <strong>
                          {t(
                            "termsOfService.content.section6.subsections.payment.subsections.creditLimitations.title",
                          )}
                        </strong>
                      </p>
                      <p>
                        {t(
                          "termsOfService.content.section6.subsections.payment.subsections.creditLimitations.intro",
                        )}
                      </p>
                      {(
                        t(
                          "termsOfService.content.section6.subsections.payment.subsections.creditLimitations.violations",
                          { returnObjects: true },
                        ) as any[]
                      ).map((violation, index) => (
                        <div key={index}>
                          <ul>
                            <li>{violation.type}</li>
                          </ul>
                          <p>{violation.consequence}</p>
                        </div>
                      ))}
                      <p>
                        {t(
                          "termsOfService.content.section6.subsections.payment.subsections.creditLimitations.additional",
                        )}
                      </p>
                    </div>
                  </div>

                  {/* 6.3 Clause 63 */}
                  <p>
                    <strong>
                      {t(
                        "termsOfService.content.section6.subsections.clause63.title",
                      )}
                    </strong>{" "}
                    {t(
                      "termsOfService.content.section6.subsections.clause63.content",
                    )}
                  </p>

                  {/* 6.4 Clause 64 */}
                  <p>
                    <strong>
                      {t(
                        "termsOfService.content.section6.subsections.clause64.title",
                      )}
                    </strong>{" "}
                    {t(
                      "termsOfService.content.section6.subsections.clause64.content",
                    )}
                  </p>

                  {/* 6.5 Clause 65 */}
                  <p>
                    <strong>
                      {t(
                        "termsOfService.content.section6.subsections.clause65.title",
                      )}
                    </strong>{" "}
                    {t(
                      "termsOfService.content.section6.subsections.clause65.content",
                    )}
                  </p>

                  {/* 6.6 Clause 66 */}
                  <p>
                    <strong>
                      {t(
                        "termsOfService.content.section6.subsections.clause66.title",
                      )}
                    </strong>{" "}
                    {t(
                      "termsOfService.content.section6.subsections.clause66.content",
                    )}
                  </p>

                  {/* 6.7 Legal Funds - Array content */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section6.subsections.legalFunds.title",
                        )}
                      </strong>
                    </p>
                    {(
                      t(
                        "termsOfService.content.section6.subsections.legalFunds.content",
                        { returnObjects: true },
                      ) as string[]
                    ).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 7: Quyền sở hữu trí tuệ và Quyền sở hữu 'Credits' */}
              <section id="section7">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t("termsOfService.content.section7.title")}
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  {/* 7.1 Intellectual Property - Array content */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section7.subsections.intellectualProperty.title",
                        )}
                      </strong>
                    </p>
                    {(
                      t(
                        "termsOfService.content.section7.subsections.intellectualProperty.content",
                        { returnObjects: true },
                      ) as string[]
                    ).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* 7.2 Credit Ownership - Array content */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section7.subsections.creditOwnership.title",
                        )}
                      </strong>
                    </p>
                    {(
                      t(
                        "termsOfService.content.section7.subsections.creditOwnership.content",
                        { returnObjects: true },
                      ) as string[]
                    ).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* 7.3 Trademark Regulations - Array content */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section7.subsections.trademarkRegulations.title",
                        )}
                      </strong>
                    </p>
                    {(
                      t(
                        "termsOfService.content.section7.subsections.trademarkRegulations.content",
                        { returnObjects: true },
                      ) as string[]
                    ).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* 7.4 User Content Ownership - Array content */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section7.subsections.userContentOwnership.title",
                        )}
                      </strong>
                    </p>
                    {(
                      t(
                        "termsOfService.content.section7.subsections.userContentOwnership.content",
                        { returnObjects: true },
                      ) as string[]
                    ).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 8: Tuyên bố miễn trừ trách nhiệm và Giới hạn trách nhiệm */}
              <section id="section8">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t("termsOfService.content.section8.title")}
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  {/* 8.1 As Is Service */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section8.subsections.asIsService.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section8.subsections.asIsService.intro",
                      )}
                    </p>
                    <ul>
                      {(
                        t(
                          "termsOfService.content.section8.subsections.asIsService.guarantees",
                          { returnObjects: true },
                        ) as string[]
                      ).map((guarantee, index) => (
                        <li key={index}>{guarantee}</li>
                      ))}
                    </ul>
                  </div>

                  {/* 8.2 Non Liability */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section8.subsections.nonLiability.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section8.subsections.nonLiability.intro",
                      )}
                    </p>
                    <ul>
                      {(
                        t(
                          "termsOfService.content.section8.subsections.nonLiability.exclusions",
                          { returnObjects: true },
                        ) as string[]
                      ).map((exclusion, index) => (
                        <li key={index}>{exclusion}</li>
                      ))}
                    </ul>
                  </div>

                  {/* 8.3 Damage Exclusion */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section8.subsections.damageExclusion.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section8.subsections.damageExclusion.content",
                      )}
                    </p>
                  </div>

                  {/* 8.4 Business Purpose */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section8.subsections.businessPurpose.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section8.subsections.businessPurpose.content",
                      )}
                    </p>
                  </div>

                  {/* 8.5 Time Limit */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section8.subsections.timeLimit.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section8.subsections.timeLimit.content",
                      )}
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: Thẩm quyền xét xử */}
              <section id="section9">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t("termsOfService.content.section9.title")}
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  {/* Array of paragraphs */}
                  {(
                    t("termsOfService.content.section9.paragraphs", {
                      returnObjects: true,
                    }) as string[]
                  ).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>

              {/* Section 10: Các điều khoản khác */}
              <section id="section10">
                <h2 className="text-2xl font-heading font-semibold mb-4">
                  {t("termsOfService.content.section10.title")}
                </h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  {/* 10.1 Contact */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section10.subsections.contact.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section10.subsections.contact.content",
                      )}
                    </p>
                  </div>

                  {/* 10.2 Severability */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section10.subsections.severability.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section10.subsections.severability.content",
                      )}
                    </p>
                  </div>

                  {/* 10.3 Language Precedence */}
                  <div>
                    <p>
                      <strong>
                        {t(
                          "termsOfService.content.section10.subsections.languagePrecedence.title",
                        )}
                      </strong>
                    </p>
                    <p>
                      {t(
                        "termsOfService.content.section10.subsections.languagePrecedence.content",
                      )}
                    </p>
                  </div>
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

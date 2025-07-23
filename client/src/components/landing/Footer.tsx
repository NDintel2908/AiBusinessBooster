import React from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import BCPAILogo from "./BCPAI.webp";
import vnpay from "./partner/vnpay.webp";
import paypal from "./partner/paypal.webp";
import "../../lib/i18n";

export default function Footer() {
  const [, setLocation] = useLocation();
  const { t, i18n } = useTranslation("footer");
  const lang = i18n.language || "en";
  // Xử lý scroll đến section nếu có chỉ thị trong sessionStorage
  React.useEffect(() => {
    if (window.location.pathname === `/${lang}`) {
      const scrollToSection = sessionStorage.getItem("scrollToSection");
      if (scrollToSection) {
        const section = document.getElementById(scrollToSection);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
        window.history.replaceState(null, "", `/${lang}`);
        sessionStorage.removeItem("scrollToSection");
      }
    }
  }, [lang]);

  // Xử lý scroll đến section nếu có chỉ thị trong sessionStorage
  React.useEffect(() => {
    if (window.location.pathname === `/${lang}`) {
      const scrollToSection = sessionStorage.getItem("scrollToSection");
      if (scrollToSection) {
        const section = document.getElementById(scrollToSection);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
        window.history.replaceState(null, "", `/${lang}`);
        sessionStorage.removeItem("scrollToSection");
      }
    }
  }, [lang]);

  // Hàm xử lý chuyển trang sử dụng wouter
  const navigateTo = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation(path);
  };

  return (
    <footer className="py-12 border-t border-gray-800 relative">
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-electric-purple/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          <div>
            <div>
              <div className="w-40 h-40 relative overflow-hidden mb-2 logo">
                <img
                  src={BCPAILogo}
                  alt="BCPAI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-white font-heading text-xl font-bold tracking-wider hero-title">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple"></span>
              </h1>
            </div>
            <div className="text-gray-400 mt-2 mb-6 font-primary space-y-2"></div>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">
              {t("footer.company.title")}
            </h4>
            <ul className="space-y-4 font-primary">
              <li>
                <a
                  href={`/${lang}/#about`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== `/${lang}`) {
                      sessionStorage.setItem("scrollToSection", "about");
                      window.location.href = `/${lang}`;
                    } else {
                      const section = document.getElementById("about");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                        window.history.replaceState(null, "", `/${lang}`);
                      }
                    }
                  }}
                  className="text-gray-400 hover:text-neon-blue transition duration-300"
                >
                  {t("footer.company.aboutUs")}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/#service-section`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== `/${lang}`) {
                      sessionStorage.setItem(
                        "scrollToSection",
                        "service-section",
                      );
                      window.location.href = `/${lang}`;
                    } else {
                      const section =
                        document.getElementById("service-section");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                        window.history.replaceState(null, "", `/${lang}`);
                      }
                    }
                  }}
                  className="text-gray-400 hover:text-neon-blue transition duration-300"
                >
                  {t("footer.company.features")}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/#pricing`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== `/${lang}`) {
                      sessionStorage.setItem("scrollToSection", "pricing");
                      window.location.href = `/${lang}`;
                    } else {
                      const section = document.getElementById("pricing");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                        window.history.replaceState(null, "", `/${lang}`);
                      }
                    }
                  }}
                  className="text-gray-400 hover:text-neon-blue transition duration-300"
                >
                  {t("footer.company.pricing")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">
              {t("footer.resources.title")}
            </h4>
            <ul className="space-y-4 font-primary">
              <li>
                <a
                  href="#"
                  onClick={navigateTo(`/${lang}/payment-policy`)}
                  className="text-gray-400 hover:text-neon-blue transition duration-300"
                >
                  {t("footer.resources.paymentPolicy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={navigateTo(`/${lang}/privacy-policy`)}
                  className="text-gray-400 hover:text-neon-blue transition duration-300"
                >
                  {t("footer.resources.privacyPolicy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={navigateTo(`/${lang}/pricing-comparison`)}
                  className="text-gray-400 hover:text-neon-blue transition duration-300"
                >
                  {t("footer.resources.pricingComparison")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={navigateTo(`/${lang}/terms-of-service`)}
                  className="text-gray-400 hover:text-neon-blue transition duration-300"
                >
                  {t("footer.resources.termsOfService")}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-white font-heading font-semibold mb-6 text-center">
              {t("footer.paymentPartners.title")}
            </h4>
            <div className="flex flex-col items-center justify-center space-y-4">
              <img
                src={vnpay}
                alt="VNPAY"
                className="h-[50px] object-contain filter brightness-100"
              />
              <img
                src={paypal}
                alt="PayPal"
                className="h-[80px] object-contain filter brightness-100"
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">
              {t("footer.companyInfo.title")}
            </h4>
            <ul className="space-y-4 font-primary">
              <li className="flex items-center gap-2 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                {t("footer.companyInfo.taxCode")}
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <svg
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {t("footer.companyInfo.address")}
              </li>
              <li className="flex flex-col gap-1 text-gray-400">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>{t("footer.companyInfo.phone")}</span>
                </div>
                {/* Contact Icons Row */}
                <div className="flex items-center gap-1 ml-7">
                  {/* Zalo Icon */}
                  <a
                    href={`https://zalo.me/${t("footer.companyInfo.phone").replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200"
                    title="Contact via Zalo"
                  >
                    <span className="text-white text-[10px] font-bold">Z</span>
                  </a>

                  {/* WhatsApp Icon */}
                  <a
                    href={`https://wa.me/${t("footer.companyInfo.phone").replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-4 h-4 bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200"
                    title="Contact via WhatsApp"
                  >
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                    </svg>
                  </a>
                </div>
              </li> 
              <li className="flex items-center gap-2 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a 
                  href={`mailto:${t("footer.companyInfo.mail")}`}
                  className="text-blue-400 hover:text-blue-300 transition duration-300 hover:underline"
                >
                  {t("footer.companyInfo.mail")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm font-primary">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}

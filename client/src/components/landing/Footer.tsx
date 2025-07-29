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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mb-12">
          {/* Logo Column */}
          <div className="pr-0 md:pr-8 lg:pr-12">
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

            {/* Social Media Icons */}
            {/* <div className="flex space-x-3 mt-4">
              <a
                href="https://www.facebook.com/business.connect.platform/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center hover:border-[#1877F2] transition duration-300"
                title="Facebook"
              >
                <img src="/images/icon/2023_Facebook_icon.svg" alt="Facebook" className="w-5 h-5" />
              </a>
              <a
                href="https://vn.linkedin.com/company/business-connect-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center hover:border-[#0A66C2] transition duration-300"
                title="LinkedIn"
              >
                <img src="/images/icon/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/84963254259"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center hover:border-[#25D366] transition duration-300"
                title="WhatsApp"
              >
                <img src="/images/icon/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-5 h-5" />
              </a>
              <a
                href="https://zalo.me/3297451762229454190"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center hover:border-[#0068FF] transition duration-300"
                title="Zalo"
              >
                <img src="/images/icon/Icon_of_Zalo.svg" alt="Zalo" className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Company Links Column */}
          <div className="pr-0 md:pr-6 lg:pr-8">
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
                  href={`/${lang}/#features`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== `/${lang}`) {
                      sessionStorage.setItem(
                        "scrollToSection",
                        "features-section",
                      );
                      window.location.href = `/${lang}`;
                    } else {
                      const section =
                        document.getElementById("features-section");
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

          {/* Resources Column */}
          <div className="pr-0 md:pr-6 lg:pr-8">
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
              {/* HIDDEN - Pricing Comparison Link */}
              {/* 
              <li>
                <a
                  href="#"
                  onClick={navigateTo(`/${lang}/pricing-comparison`)}
                  className="text-gray-400 hover:text-neon-blue transition duration-300"
                >
                  {t("footer.resources.pricingComparison")}
                </a>
              </li>
              */}
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

          {/* Payment Partners Column */}
          <div className="flex flex-col items-center pr-0 md:pr-6 lg:pr-8">
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

          {/* Company Info Column */}
          <div className="pr-0">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/84963254259"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-5 h-5 hover:opacity-80 transition-opacity duration-200"
                    title="Contact via WhatsApp"
                  >
                    <img
                      src="/images/icon/whatsapp-svgrepo-com.svg"
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                  </a>

                  <a
                    href="https://zalo.me/3297451762229454190"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-5 h-5 hover:opacity-80 transition-opacity duration-200"
                    title="Contact via Zalo"
                  >
                    <img
                      src="/images/icon/Icon_of_Zalo.svg"
                      alt="Zalo"
                      className="w-5 h-5"
                    />
                  </a>
                </div>
                <span>{t("footer.companyInfo.phone")}</span>
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

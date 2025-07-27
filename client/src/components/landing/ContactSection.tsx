import { useRef } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { GlassCard } from "@/components/ui/glass-card";
import { useToast } from "@/hooks/use-toast";
import { GradientButton } from "@/components/ui/gradient-button";
import { useTranslation, Trans } from "react-i18next";
import "../../lib/i18n";

export default function ContactSection() {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xblyeeve");
  const { t } = useTranslation("contact");

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 bg-electric-purple opacity-10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-blue/20 border border-neon-blue/40 mb-4">
              <span className="text-base md:text-lg font-medium text-brand-accent">
                {t("contactSection.badge")}
              </span>
            </div>
            <h2 className="text-3xl md:text-3xl font-heading font-bold mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple"></span>
              <Trans
                i18nKey="contactSection.title"
                t={t}
                components={{ 1: <span className="text-neon-blue" /> }}
              />
            </h2>
            <p className="text-gray-300 mb-8 font-primary">
              {t("contactSection.description")}
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/business.connect.platform/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center hover:border-[#1877F2] transition duration-300"
                title="Facebook"
              >
                <img src="/images/icon/2023_Facebook_icon.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://vn.linkedin.com/company/business-connect-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center hover:border-[#0A66C2] transition duration-300"
                title="LinkedIn"
              >
                <img src="/images/icon/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/84963254259"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center hover:border-[#25D366] transition duration-300"
                title="WhatsApp"
              >
                <img src="/images/icon/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-6 h-6" />
              </a>
              <a
                href="https://zalo.me/3297451762229454190"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center hover:border-[#0068FF] transition duration-300"
                title="Zalo"
              >
                <img src="/images/icon/Icon_of_Zalo.svg" alt="Zalo" className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassCard className="rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-white">
                {t("contactSection.form.title")}
              </h3>

              {state.succeeded ? (
                <div className="text-center py-8">
                  <p className="text-green-400 text-lg font-primary">
                    {t("contactSection.form.success")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-300 mb-2 font-primary"
                      >
                        {t("contactSection.form.name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg bg-dark-purple/50 border border-gray-700 text-black focus:outline-none focus:border-neon-blue transition duration-300 font-primary"
                        placeholder={t("contactSection.form.namePlaceholder")}
                        required
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-300 mb-2 font-primary"
                      >
                        {t("contactSection.form.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg bg-dark-purple/50 border border-gray-700 text-black focus:outline-none focus:border-neon-blue transition duration-300 font-primary"
                        placeholder={t("contactSection.form.emailPlaceholder")}
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-gray-300 mb-2 font-primary"
                    >
                      {t("contactSection.form.company")}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg bg-dark-purple/50 border border-gray-700 text-black focus:outline-none focus:border-neon-blue transition duration-300 font-primary"
                      placeholder={t("contactSection.form.companyPlaceholder")}
                      required
                    />
                    <ValidationError
                      prefix="Company"
                      field="company"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="requirements"
                      className="block text-gray-300 mb-2 font-primary"
                    >
                      {t("contactSection.form.requirements")}
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-dark-purple/50 border border-gray-700 text-black focus:outline-none focus:border-neon-blue transition duration-300 font-primary"
                      placeholder={t(
                        "contactSection.form.requirementsPlaceholder",
                      )}
                    ></textarea>
                    <ValidationError
                      prefix="Requirements"
                      field="requirements"
                      errors={state.errors}
                    />
                  </div>

                  <GradientButton
                    type="submit"
                    disabled={state.submitting}
                    className="w-full font-semibold px-8 py-3 text-base shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-accent/30 transition-all duration-200"
                    size="lg"
                    animate={!state.submitting}
                  >
                    {state.submitting
                      ? t("contactSection.form.submitting")
                      : t("contactSection.form.submit")}
                  </GradientButton>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

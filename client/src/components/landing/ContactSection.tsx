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
              <span className="text-base md:text-lg font-medium text-neon-blue">
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
                className="w-10 h-10 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:border-neon-blue transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                </svg>
              </a>
              <a
                href="https://vn.linkedin.com/company/business-connect-platform"
                className="w-10 h-10 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:border-neon-blue transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
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
                    className="w-full font-semibold"
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

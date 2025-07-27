import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import "@/lib/i18n";

export default function PricingComparison() {
  const { t } = useTranslation('pricingComparison');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
              {t('pricingComparison.title')}
            </span>
          </h1>
          <p className="text-gray-300 font-primary max-w">
            {t('pricingComparison.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse mb-10">
            <thead>
              <tr className="bg-gray-800/60">
                <th className="px-4 py-3 border border-gray-700 text-left font-heading text-white">
                  {t('pricingComparison.table.headers.number')}
                </th>
                <th className="px-4 py-3 border border-gray-700 text-left font-heading text-white min-w-[200px]">
                  {t('pricingComparison.table.headers.comparison')}
                </th>
                <th className="px-4 py-3 border border-gray-700 text-center font-heading text-white min-w-[150px]">
                  {t('pricingComparison.table.headers.starterPlan')}
                </th>
                <th
                  colSpan={2}
                  className="px-4 py-3 border border-gray-700 text-center font-heading text-white bg-brand-accent/20 min-w-[300px]"
                >
                  {t('pricingComparison.table.headers.premiumUser')}
                </th>
              </tr>
              <tr className="bg-gray-800/30">
                <th className="px-4 py-2 border border-gray-700"></th>
                <th className="px-4 py-2 border border-gray-700"></th>
                <th className="px-4 py-2 border border-gray-700"></th>
                <th className="px-4 py-2 border border-gray-700 text-center font-heading text-white">
                  {t('pricingComparison.table.headers.vietnamCompany')}
                </th>
                <th className="px-4 py-2 border border-gray-700 text-center font-heading text-white">
                  {t('pricingComparison.table.headers.foreignCompany')}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Phần Thông tin chung */}
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-3 border border-gray-700 bg-gray-800/50 font-heading text-brand-accent font-semibold"
                >
                  {t('pricingComparison.table.sections.general.title')}
                </td>
              </tr>
              {(t('pricingComparison.table.sections.general.rows', { returnObjects: true }) as any[]).map((row) => (
                <tr key={row.id}>
                  <td className="px-4 py-3 border border-gray-700 text-center">
                    {row.id}
                  </td>
                  <td className="px-4 py-3 border border-gray-700">{row.feature}</td>
                  <td className="px-4 py-3 border border-gray-700 text-center">
                    {row.starterPlan}
                  </td>
                  {row.vietnamCompany && row.foreignCompany ? (
                    <>
                      <td className="px-4 py-3 border border-gray-700 text-center">
                        {row.id === 2 ? (
                          <p>
                            <span className="font-bold text-brand-accent">
                              {row.vietnamCompany}
                            </span>
                          </p>
                        ) : (
                          <span className="text-white-500">{row.vietnamCompany}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 border border-gray-700 text-center">
                        {row.id === 2 ? (
                          <p>
                            <span className="font-bold text-brand-accent">{row.foreignCompany}</span>
                          </p>
                        ) : (
                          <span className="text-white-500">{row.foreignCompany}</span>
                        )}
                      </td>
                    </>
                  ) : (
                    <td
                      className="px-4 py-3 border border-gray-700 text-center"
                      colSpan={2}
                    >
                      {row.premiumUser === "✓" ? (
                        <span className="text-green-500">✓</span>
                      ) : (
                        row.premiumUser
                      )}
                    </td>
                  )}
                </tr>
              ))}

              {/* Phần Đặc quyền */}
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-3 border border-gray-700 bg-gray-800/50 font-heading text-brand-accent font-semibold"
                >
                  {t('pricingComparison.table.sections.privileges.title')}
                </td>
              </tr>
              {(t('pricingComparison.table.sections.privileges.rows', { returnObjects: true }) as any[]).map((row) => (
                <tr key={row.id}>
                  <td className="px-4 py-3 border border-gray-700 text-center">
                    {row.id}
                  </td>
                  <td className="px-4 py-3 border border-gray-700">
                    {row.feature.split('\n').map((line: string, index: number) => (
                      <span key={index}>
                        {line}
                        {index < row.feature.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </td>
                  <td className="px-4 py-3 border border-gray-700 text-center">
                    {row.starterPlan === "✕" ? (
                      <span className="text-red-500">✕</span>
                    ) : (
                      row.starterPlan
                    )}
                  </td>
                  <td
                    className="px-4 py-3 border border-gray-700 text-center"
                    colSpan={2}
                  >
                    {row.premiumUser === "✓" ? (
                      <span className="text-green-500">✓</span>
                    ) : row.premiumUser.includes('kết nối') ? (
                      <span className="text-white-500">
                        {row.premiumUser.split('\n').map((line: string, index: number) => (
                          <span key={index}>
                            {line}
                            {index < row.premiumUser.split('\n').length - 1 && <p />}
                          </span>
                        ))}
                      </span>
                    ) : (
                      row.premiumUser
                    )}
                  </td>
                </tr>
              ))}

              {/* Phần Dịch vụ AI mở rộng */}
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-3 border border-gray-700 bg-gray-800/50 font-heading text-brand-accent font-semibold"
                >
                  {t('pricingComparison.table.sections.expandedAI.title')}
                </td>
              </tr>
              {(t('pricingComparison.table.sections.expandedAI.rows', { returnObjects: true }) as any[]).map((row) => (
                <tr key={row.id}>
                  <td className="px-4 py-3 border border-gray-700 text-center">
                    {row.id}
                  </td>
                  <td className="px-4 py-3 border border-gray-700">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3 border border-gray-700 text-center">
                    <span className="text-red-500">✕</span>
                  </td>
                  <td
                    className="px-4 py-3 border border-gray-700 text-center"
                    colSpan={2}
                  >
                    <span className="text-green-500">✓</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Slot Connecting Table */}
          <div className="mt-12 mb-10 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-3 border border-gray-700 text-left font-heading text-white min-w-[200px]">
                    {t('pricingComparison.slotConnecting.headers.info')}
                  </th>
                  <th className="px-4 py-3 border border-gray-700 text-center font-heading text-white min-w-[300px] bg-brand-accent/20">
                    {t('pricingComparison.slotConnecting.headers.slotConnecting')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {(t('pricingComparison.slotConnecting.rows', { returnObjects: true }) as any[]).map((row, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 border border-gray-700">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 border border-gray-700">
                      {row.value === "✕" ? (
                        <span className="text-red-500">✕</span>
                      ) : row.feature === "Giá" ? (
                        <p>
                          <strong>{row.value.split(':')[0]}:</strong> {row.value.split(':')[1]}
                        </p>
                      ) : row.feature === "Số lượt kết nối" ? (
                        <span className="italic">{row.value}</span>
                      ) : (
                        row.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 mb-10">
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">
              {t('pricingComparison.importantNotes.title')}
            </h3>
            <ul className="list-disc pl-6 space-y-2 font-primary text-gray-300">
              {(t('pricingComparison.importantNotes.notes', { returnObjects: true }) as string[]).map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center mt-10">
            <a
              href={t('pricingComparison.cta.link')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand-primary to-brand-accent py-3 px-8 rounded-full text-white font-primary font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/30"
            >
              {t('pricingComparison.cta.text')}
            </a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

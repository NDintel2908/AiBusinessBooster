import { useState } from "react";
import { useTranslation } from "react-i18next";

const DirectConversationTooltip = ({ content }: { content: string }) => (
  <span className="group relative inline-flex items-center justify-center w-[13px] h-[13px] rounded-full border-[1.2px] border-[#3882f680] text-[#60a5fa] text-[8.5px] cursor-pointer shrink-0 ml-[4px] align-middle">
    <i className="not-italic font-serif">i</i>
    <span 
      className="hidden group-hover:block absolute bottom-full mb-[6px] left-1/2 -translate-x-1/2 bg-[#1a2f50] border border-[#3882f659] rounded-[8px] p-[8px_12px] w-[240px] z-[50] shadow-xl text-[11.5px] text-[#e2eaf5] leading-[1.5] normal-case tracking-normal font-normal text-left"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </span>
);

export default function PricingSection() {
  const { t } = useTranslation('pricing');
  const [activePlan, setActivePlan] = useState<'starter' | 'premium'>('starter');

  const renderTextWithTooltip = (text: string) => {
    if (!text.includes('{tooltip}')) {
      return <span dangerouslySetInnerHTML={{ __html: text }} />;
    }
    const parts = text.split('{tooltip}');
    return (
      <span>
        <span dangerouslySetInnerHTML={{ __html: parts[0] }} />
        <DirectConversationTooltip content={t('pricingSection.tooltip')} />
        <span dangerouslySetInnerHTML={{ __html: parts[1] }} />
      </span>
    );
  };

  return (
    <section id="pricing" className="bg-[#0d1b2e] px-6 pt-16 pb-20 font-sans text-[#e2eaf5] min-h-[400px]">
      <div className="text-center">
        <div className="inline-block bg-[#3882f61f] border border-[#3882f64d] text-[#60a5fa] text-[12px] px-[14px] py-[4px] rounded-full mb-[14px]">
          {t('pricingSection.badge')}
        </div>
        <h2 className="text-[26px] md:text-[32px] font-[800] text-[#4ea6ff] text-center mb-[8px] leading-[1.25]">
          {t('pricingSection.title')}
        </h2>
        <div className="text-[13px] md:text-[15px] text-[#7a96b8] text-center mb-[36px]">
          {t('pricingSection.description')}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-[16px] max-w-[820px] mx-auto items-start">
        {/* Left: Selectors */}
        <div className="flex flex-col gap-[10px] w-full md:w-[340px] shrink-0">
          {/* Starter Plan Row */}
          <div
            className={`bg-[#132040] rounded-[14px] p-[18px_20px] cursor-pointer transition-all duration-200 flex items-center gap-[14px] select-none border-[1.5px] ${activePlan === 'starter' ? 'border-[#2563eb] bg-[#0f1e38] border-[2px]' : 'border-[#3882f626] hover:border-[#2563eb] hover:bg-[#0f1e38]'}`}
            onMouseEnter={() => setActivePlan('starter')}
            onClick={() => setActivePlan('starter')}
          >
            <div className={`w-[20px] h-[20px] rounded-full border-[2px] shrink-0 flex items-center justify-center ${activePlan === 'starter' ? 'border-[#2563eb] bg-[#2563eb]' : 'border-[#3882f659]'}`}>
              <div className={`w-[8px] h-[8px] rounded-full bg-white transition-opacity duration-150 ${activePlan === 'starter' ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
            <div className="flex-1">
              <div className="text-[15px] font-[700] text-[#e2eaf5]">{t('pricingSection.plans.starter.name')}</div>
              <div className="text-[22px] font-[800] text-white leading-[1.1] mt-[2px]">{t('pricingSection.plans.starter.price')}</div>
              <div className="text-[11px] text-[#7a96b8] mt-[2px]">
                {renderTextWithTooltip(t('pricingSection.plans.starter.subPrice'))}
              </div>
            </div>
          </div>

          {/* Premium Plan Row */}
          <div
            className={`bg-[#132040] rounded-[14px] p-[18px_20px] cursor-pointer transition-all duration-200 flex items-center gap-[14px] select-none border-[1.5px] ${activePlan === 'premium' ? 'border-[#2563eb] bg-[#0f1e38] border-[2px]' : 'border-[#3882f626] hover:border-[#2563eb] hover:bg-[#0f1e38]'}`}
            onMouseEnter={() => setActivePlan('premium')}
            onClick={() => setActivePlan('premium')}
          >
            <div className={`w-[20px] h-[20px] rounded-full border-[2px] shrink-0 flex items-center justify-center ${activePlan === 'premium' ? 'border-[#2563eb] bg-[#2563eb]' : 'border-[#3882f659]'}`}>
              <div className={`w-[8px] h-[8px] rounded-full bg-white transition-opacity duration-150 ${activePlan === 'premium' ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
            <div className="flex-1">
              <div className="text-[15px] font-[700] text-[#e2eaf5]">{t('pricingSection.plans.premium.name')}</div>
              <div className="flex items-center gap-[8px] mt-[2px]">
                <div className="text-[22px] font-[800] text-white leading-[1.1]">{t('pricingSection.plans.premium.price')} <span className="text-[14px] font-[600]">{t('pricingSection.plans.premium.period')}</span></div>
                <span className="bg-[#4ade801f] border border-[#4ade8040] text-[#4ade80] text-[10px] font-[700] px-[9px] py-[3px] rounded-full whitespace-nowrap">{t('pricingSection.plans.premium.saveBadge')}</span>
              </div>
              <div className="text-[11px] text-[#7a96b8] mt-[2px]">{t('pricingSection.plans.premium.subPrice')}</div>
            </div>
          </div>
        </div>

        {/* Right: Detail Panel */}
        <div className="flex-1 bg-[#0f1e38] border-[1.5px] border-[#3882f633] rounded-[14px] min-h-[320px] w-full">
          <div className="bg-[#132040] p-[14px_20px] flex justify-between items-center border-b border-[#3882f61f] rounded-t-[14px]">
            <span className="text-[11px] text-[#566a84] uppercase tracking-[0.07em]">{t('pricingSection.details')}</span>
            <span className="text-[15px] font-[700] text-[#e2eaf5]">
              {activePlan === 'starter' ? t('pricingSection.plans.starter.name') : t('pricingSection.plans.premium.name')}
            </span>
          </div>
          <div className="p-[18px_20px]">
            {activePlan === 'starter' && (
              <div className="animate-in fade-in duration-300">
                <div className="flex items-center gap-[6px] text-[10px] font-[700] tracking-[0.07em] uppercase text-[#4ea6ff] mb-[6px]">
                  <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center">
                    <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  {t('pricingSection.plans.starter.connectingAgent.title')}
                </div>
                <ul className="list-disc pl-[18px] flex flex-col gap-[4px] text-left mb-[8px]">
                  {(t('pricingSection.plans.starter.connectingAgent.items', { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx} className="text-[11px] text-[#7a96b8] leading-[1.4]">
                      {renderTextWithTooltip(item)}
                    </li>
                  ))}
                </ul>
                <hr className="border-t border-[#3882f61a] my-[12px]" />

                {(t('pricingSection.plans.starter.features', { returnObjects: true }) as string[]).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                    <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                      <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}

                <button
                  onClick={() => window.open('https://bcp.global', '_blank')}
                  className="block w-full p-[12px] rounded-[10px] text-[13px] font-[600] cursor-pointer mt-[18px] transition-all hover:-translate-y-[1px] hover:opacity-90 bg-transparent border-[1.5px] border-[#3882f666] text-[#60a5fa]"
                >
                  {t('pricingSection.plans.starter.ctaText')}
                </button>
              </div>
            )}

            {activePlan === 'premium' && (
              <div className="animate-in fade-in duration-300">
                <div className="text-[12px] text-[#7a96b8] mb-[12px] italic">{t('pricingSection.plans.premium.note')}</div>
                <div className="text-[10px] font-[700] tracking-[0.07em] uppercase text-[#4ea6ff] mt-[14px] mb-[8px]">
                  {t('pricingSection.plans.premium.section1Title')}
                </div>
                {(t('pricingSection.plans.premium.features1', { returnObjects: true }) as string[]).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                    <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                      <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {renderTextWithTooltip(feature)}
                  </div>
                ))}

                <hr className="border-t border-[#3882f61a] my-[12px]" />

                <div className="text-[10px] font-[700] tracking-[0.07em] uppercase text-[#4ea6ff] mt-[14px] mb-[8px]">
                  {t('pricingSection.plans.premium.section2Title')}
                </div>
                {(t('pricingSection.plans.premium.features2', { returnObjects: true }) as string[]).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                    <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                      <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {renderTextWithTooltip(feature)}
                  </div>
                ))}

                <button
                  onClick={() => window.open('https://bcp.global', '_blank')}
                  className="block w-full p-[12px] rounded-[10px] text-[13px] font-[600] cursor-pointer mt-[18px] transition-all hover:-translate-y-[1px] hover:opacity-90 bg-[#2563eb] text-white border-none shrink-0"
                >
                  {t('pricingSection.plans.premium.ctaText')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}

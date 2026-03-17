import { useState } from "react";

const DirectConversationTooltip = () => (
  <span className="group relative inline-flex items-center justify-center w-[13px] h-[13px] rounded-full border-[1.2px] border-[#3882f680] text-[#60a5fa] text-[8.5px] cursor-pointer shrink-0 ml-[4px] align-middle">
    <i className="not-italic font-serif">i</i>
    <span className="hidden group-hover:block absolute bottom-full mb-[6px] left-1/2 -translate-x-1/2 bg-[#1a2f50] border border-[#3882f659] rounded-[8px] p-[8px_12px] w-[240px] z-[50] shadow-xl text-[11.5px] text-[#e2eaf5] leading-[1.5] normal-case tracking-normal font-normal text-left">
      <strong className="text-[#4ea6ff] font-[600]">Direct B2B conversation:</strong> A dedicated direct discussion / meeting between business decision-makers.
    </span>
  </span>
);

export default function PricingSection() {
  const [activePlan, setActivePlan] = useState<'starter' | 'premium'>('starter');

  return (
    <section id="pricing" className="bg-[#0d1b2e] px-6 pt-16 pb-20 font-sans text-[#e2eaf5] min-h-[400px]">
      <div className="text-center">
        <div className="inline-block bg-[#3882f61f] border border-[#3882f64d] text-[#60a5fa] text-[12px] px-[14px] py-[4px] rounded-full mb-[14px]">
          Pricing Policy
        </div>
        <h2 className="text-[26px] md:text-[32px] font-[800] text-[#4ea6ff] text-center mb-[8px] leading-[1.25]">
          Choose the plan that's right for you
        </h2>
        <div className="text-[13px] md:text-[15px] text-[#7a96b8] text-center mb-[36px]">
          Flexible solutions for every business scale.
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
              <div className="text-[15px] font-[700] text-[#e2eaf5]">Starter User</div>
              <div className="text-[22px] font-[800] text-white leading-[1.1] mt-[2px]">Free</div>
              <div className="text-[11px] text-[#7a96b8] mt-[2px]">Starts matching at $20 USD / direct B2B conversation<DirectConversationTooltip /></div>
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
              <div className="text-[15px] font-[700] text-[#e2eaf5]">Premium User</div>
              <div className="flex items-center gap-[8px] mt-[2px]">
                <div className="text-[22px] font-[800] text-white leading-[1.1]">$1,200 <span className="text-[14px] font-[600]">USD / Year</span></div>
                <span className="bg-[#4ade801f] border border-[#4ade8040] text-[#4ade80] text-[10px] font-[700] px-[9px] py-[3px] rounded-full whitespace-nowrap">Save 50%</span>
              </div>
              <div className="text-[11px] text-[#7a96b8] mt-[2px]">matching cost</div>
            </div>
          </div>
        </div>

        {/* Right: Detail Panel */}
        <div className="flex-1 bg-[#0f1e38] border-[1.5px] border-[#3882f633] rounded-[14px] min-h-[320px] w-full">
          <div className="bg-[#132040] p-[14px_20px] flex justify-between items-center border-b border-[#3882f61f] rounded-t-[14px]">
            <span className="text-[11px] text-[#566a84] uppercase tracking-[0.07em]">Details</span>
            <span className="text-[15px] font-[700] text-[#e2eaf5]">
              {activePlan === 'starter' ? 'Starter User' : 'Premium User'}
            </span>
          </div>
          <div className="p-[18px_20px]">
            {activePlan === 'starter' && (
              <div className="animate-in fade-in duration-300">
                <div className="flex items-center gap-[6px] text-[10px] font-[700] tracking-[0.07em] uppercase text-[#4ea6ff] mb-[6px]">
                  <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center">
                    <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  Connecting Agent
                </div>
                <ul className="list-disc pl-[18px] flex flex-col gap-[4px] text-left mb-[8px]">
                  <li className="text-[11px] text-[#7a96b8] leading-[1.4]">BCPbot (personal AI agent)</li>
                  <li className="text-[11px] text-[#7a96b8] leading-[1.4]">Recommended by AI</li>
                  <li className="text-[11px] text-[#7a96b8] leading-[1.4]">1:1 direct B2B conversation<DirectConversationTooltip /></li>
                </ul>
                <hr className="border-t border-[#3882f61a] my-[12px]" />
                <div className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                  <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                    <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>Max 30 direct B2B conversations / month</span>
                </div>
                <div className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                  <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                    <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>Standard Business Profile</span>
                </div>
                <div className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                  <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                    <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>Multi-Device Login</span>
                </div>
                <div className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                  <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                    <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                  <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                    <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>Multi-languages (EN / VN / JP / TH / KR)</span>
                </div>

                <button
                  onClick={() => window.open('https://bcp.global', '_blank')}
                  className="block w-full p-[12px] rounded-[10px] text-[13px] font-[600] cursor-pointer mt-[18px] transition-all hover:-translate-y-[1px] hover:opacity-90 bg-transparent border-[1.5px] border-[#3882f666] text-[#60a5fa]"
                >
                  Join & Verify
                </button>
              </div>
            )}

            {activePlan === 'premium' && (
              <div className="animate-in fade-in duration-300">
                <div className="text-[12px] text-[#7a96b8] mb-[12px] italic">Everything in Free, plus:</div>
                <div className="text-[10px] font-[700] tracking-[0.07em] uppercase text-[#4ea6ff] mt-[14px] mb-[8px]">
                  05 values only for Premium User
                </div>
                <div className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                  <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                    <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>Matching up to <strong className="text-[#e2eaf5]">120 direct B2B conversations<DirectConversationTooltip /></strong> / year (save 50% matching cost)</span>
                </div>
                <div className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                  <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                    <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span><strong className="text-[#e2eaf5]">Trust Verified</strong> member with a blue tick — shown on BCP AI</span>
                </div>
                <div className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                  <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                    <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span><strong className="text-[#e2eaf5]">Priority connects</strong> in AI Matching system (Online & Offline)</span>
                </div>
                <div className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                  <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                    <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span><strong className="text-[#e2eaf5]">Dedicated Human Coordinator</strong> support 24/7</span>
                </div>
                <div className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                  <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                    <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span><strong className="text-[#e2eaf5]">Global Business Profile</strong> in 6 languages — bcp.vn</span>
                </div>

                <hr className="border-t border-[#3882f61a] my-[12px]" />

                <div className="text-[10px] font-[700] tracking-[0.07em] uppercase text-[#4ea6ff] mt-[14px] mb-[8px]">
                  03 exclusive support functions
                </div>
                <div className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                  <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                    <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>A designed <strong className="text-[#e2eaf5]">B2B Connecting Map</strong></span>
                </div>
                <div className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                  <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                    <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>Be nominated into the <strong className="text-[#e2eaf5]">"Recommended Suppliers"</strong> group</span>
                </div>
                <div className="flex items-start gap-[8px] text-[12.5px] text-[#b0c4de] leading-[1.4] mb-[7px]">
                  <span className="shrink-0 w-[15px] h-[15px] rounded-full bg-[#22c55e2e] flex items-center justify-center mt-[1px]">
                    <svg className="w-[8px] h-[8px] text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>Be invited & guided to join activities & events in the <strong className="text-[#e2eaf5]">BCP Global</strong> and <strong className="text-[#e2eaf5]">AIPartners Asia</strong> ecosystem</span>
                </div>

                <button
                  onClick={() => window.open('https://bcp.global', '_blank')}
                  className="block w-full p-[12px] rounded-[10px] text-[13px] font-[600] cursor-pointer mt-[18px] transition-all hover:-translate-y-[1px] hover:opacity-90 bg-[#2563eb] text-white border-none shrink-0"
                >
                  Connect Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}

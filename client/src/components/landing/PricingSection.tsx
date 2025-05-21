
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";

interface PricingFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  index: number;
  ctaText?: string;
  ctaLink?: string;
}

function PricingPlan({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  isPopular = false, 
  index,
  ctaText = "Trải nghiệm",
  ctaLink = "https://bcp.global/sign-up"
}: PricingPlanProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <GlassCard 
        className={`rounded-2xl p-6 relative transform transition duration-500 hover:-translate-y-2 flex flex-col h-full ${
          isPopular 
            ? 'border-2 border-electric-purple/60 bg-gradient-to-b from-[rgba(188,19,254,0.05)] to-[rgba(0,123,255,0.05)] shadow-lg shadow-electric-purple/10' 
            : 'border border-gray-700'
        }`}
        gradientBorder={false}
      >
        {isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[rgba(188,19,254,0.2)] to-[rgba(0,123,255,0.2)] text-white px-6 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
            Phổ biến nhất
          </div>
        )}
        
        <div className="text-center mb-8">
          <h3 className="text-2xl font-heading font-bold text-white mb-4">
            {name}
          </h3>
          <div className="flex flex-col items-center justify-center mb-3">
            <div className="flex items-baseline flex-wrap justify-center">
              <span className="text-4xl font-bold text-white font-heading">{price}</span>
              {period && (
                <span className="text-gray-400 ml-2 font-primary">{period}</span>
              )}
            </div>
          </div>
          <p className="text-gray-300 font-primary">{description}</p>
        </div>

        <div className="h-[2px] bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent mb-6"></div>

        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <div className="w-6 flex-shrink-0 flex justify-center">
                {feature.included ? (
                  <svg className={`w-5 h-5 ${feature.highlight ? 'text-electric-purple' : 'text-bright-teal'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                )}
              </div>
              <span className={`text-gray-300 font-primary ${feature.highlight ? 'font-semibold' : ''}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="block">
            <GradientButton 
              className={`w-full font-primary ${isPopular ? 'text-white' : ''}`}
              variant={isPopular ? "primary" : "outline"}
              animate={isPopular}
            >
              {ctaText}
            </GradientButton>
          </a>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function PricingSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const pricingPlans = [
    {
      name: "Starter Plan",
      price: "Miễn phí",
      description: "Bắt đầu khám phá cơ hội kinh doanh",
      features: [
        { text: "Không giới hạn lượt kết nối", included: true },
        { text: "AI Matching cơ bản", included: true },
        { text: "Hỗ trợ trong giờ hành chính", included: true },
        { text: "Hồ sơ doanh nghiệp chuẩn", included: true },
        { text: "Tham gia cộng đồng BCP", included: true },
        { text: "Xác thực nâng cao", included: false },
        { text: "Ưu tiên hiển thị", included: false }
      ]
    },
    {
      name: "Premium Package",
      price: "15.000.000 VND",
      period: "/năm",
      description: "Giải pháp toàn diện cho doanh nghiệp",
      features: [
        { text: "Tất cả tính năng Starter", included: true },
        { text: "Xác thực tick xanh uy tín", included: true, highlight: true },
        { text: "10 lượt kết nối ưu tiên/tháng", included: true, highlight: true },
        { text: "Hỗ trợ 24/7 ưu tiên", included: true },
        { text: "AI Agent chuyên biệt", included: true },
        { text: "Đào tạo AI và networking", included: true },
        { text: "Ưu tiên tính năng mới", included: true }
      ],
      isPopular: true,
      ctaText: "Nâng cấp ngay",
      ctaLink: "https://bcp.global/credit"
    },
    {
      name: "Lượt tìm kiếm Đối tác mới",
      price: "250.000 VND",
      period: "/lượt kết nối",
      description: "Chưa bao gồm 8% VAT",
      features: [
        { text: "Kết nối MUA - BÁN - HỢP TÁC", included: true },
        { text: "Chat TRỰC TIẾP với doanh nghiệp", included: true },
        { text: "Thuật toán AI kết nối thông minh", included: true },
        { text: "Bảo mật - dễ dùng - đáng tin cậy", included: true },
        { text: "Mở rộng ra Nhật Bản và quốc tế", included: true },
        { text: "Hỗ trợ đa ngôn ngữ", included: true },
        { text: "Thanh toán linh hoạt", included: true }
      ],
      ctaText: "Mua ngay",
      ctaLink: "https://bcp.global/credit"
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/3 right-1/3 w-1/3 h-1/3 bg-neon-blue opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1/3 h-1/3 bg-electric-purple opacity-10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-bright-teal/20 border border-bright-teal/40 mb-6">
            <span className="text-base md:text-lg text-bright-teal font-medium">Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple">
              Chọn gói phù hợp với bạn
            </span>
          </h2>
          <p className="text-gray-300 font-primary text-lg">
            Giải pháp linh hoạt cho mọi quy mô doanh nghiệp
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingPlan
              key={plan.name}
              {...plan}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/pricing-comparison"
            className="text-neon-blue hover:text-electric-purple transition-colors duration-300 font-primary inline-flex items-center"
          >
            So sánh chi tiết các gói dịch vụ 
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

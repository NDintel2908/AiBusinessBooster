import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

// Mock components for demonstration
const GlassCard = ({ children, className, gradientBorder }) => (
  <div className={`backdrop-blur-sm bg-white/5 ${className}`}>
    {children}
  </div>
);

const GradientButton = ({ children, className, variant, animate }) => (
  <button className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
    variant === "primary" 
      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600" 
      : "border border-gray-400 text-gray-300 hover:border-purple-400 hover:text-purple-400"
  } ${className}`}>
    {children}
  </button>
);

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
  isWideLayout?: boolean;
  isCenterPlan?: boolean;
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
  ctaLink = "https://bcp.global/sign-up",
  isWideLayout = false,
  isCenterPlan = false
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
            ? 'border-2 border-purple-500/60 bg-gradient-to-b from-purple-500/5 to-blue-500/5 shadow-lg shadow-purple-500/10' 
            : 'border border-gray-700'
        } ${isCenterPlan ? 'border-2 border-blue-400/50 bg-gradient-to-b from-blue-400/5 to-purple-400/5' : ''}`}
        gradientBorder={false}
      >
        {isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white px-6 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
            Phổ biến nhất
          </div>
        )}

        {isCenterPlan && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 text-white px-6 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
            Gói lẻ
          </div>
        )}

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            {name}
          </h3>
          <div className="flex flex-col items-center justify-center mb-3">
            <div className="flex items-baseline flex-wrap justify-center">
              <span className="text-4xl font-bold text-white">{price}</span>
              {period && (
                <span className="text-gray-400 ml-2">{period}</span>
              )}
            </div>
          </div>
          <p className="text-gray-300">{description}</p>
        </div>

        <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-6"></div>

        {isWideLayout ? (
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8 flex-grow">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <div className="w-6 flex-shrink-0 flex justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 mb-8 flex-grow">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <div className="w-6 flex-shrink-0 flex justify-center">
                  {feature.included ? (
                    <svg className={`w-5 h-5 ${feature.highlight ? 'text-purple-500' : 'text-teal-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  )}
                </div>
                <span className={`text-gray-300 ${feature.highlight ? 'font-semibold' : ''}`}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto pt-6">
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="block">
            <GradientButton 
              className="w-full font-semibold"
              variant={isPopular || isCenterPlan ? "primary" : "outline"}
              animate={isPopular || isCenterPlan}
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
        { text: "Kết nối B2B không giới hạn", included: true },
        { text: "AI Matching cơ bản", included: true },
        { text: "Hỗ trợ 24/7", included: true },
        { text: "Hồ sơ doanh nghiệp chuẩn", included: true },
        { text: "Tham gia cộng đồng giao thương BCP Vietnam - APAC", included: true },
      ]
    },
    {
      name: "Premium User",
      price: "30.000.000 VND",
      period: "/năm",
      description: "Giải pháp toàn diện cho doanh nghiệp",
      features: [
        { text: "Tích xanh xác thực Thành viên tin cậy", included: true },
        { text: "Kết nối 10 Đối tác - Khách hàng mới mỗi tháng", included: true },
        { text: "Thiết kế hồ sơ Doanh nghiệp theo thị trường mục tiêu", included: true },
        { text: "Được ưu tiên nhận và gửi kết nối đến Đối tác - Khách hàng mới", included: true },
        { text: "Được mời trải nghiệm sớm Multi AI Agent", included: true },
        { text: "Hỗ trợ trong vòng 2 giờ khi nhận được yêu cầu", included: true },
        { text: "Ưu tiên mời tham gia kết nối giao thương thuộc BCP và đối tác", included: true },
        { text: "Tham gia truyền thông và kết nối cùng Hệ sinh thái AIPartners.asia", included: true }
      ],
      isPopular: true,
      ctaText: "Mua ngay",
      ctaLink: "https://bcp.global/credit",
      buttonTextClassName: "text-black"
    }
  ];

  const oneConnectionPlan = {
    name: "One Connection",
    price: "500.000 VND",
    period: "/kết nối",
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <section id="pricing" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/3 right-1/3 w-1/3 h-1/3 bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1/3 h-1/3 bg-purple-500 opacity-10 blur-[120px] rounded-full"></div>
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-400/20 border border-teal-400/40 mb-3">
              <span className="text-base md:text-lg text-teal-400 font-medium">Chính sách giá</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Chọn gói phù hợp với bạn
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Giải pháp linh hoạt cho mọi quy mô doanh nghiệp
            </p>
          </motion.div>

          {/* Pyramid Layout */}
          <div className="max-w-6xl mx-auto">
            {/* Top Row - One Connection Plan */}
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-2xl">
                <PricingPlan
                  key={oneConnectionPlan.name}
                  {...oneConnectionPlan}
                  index={0}
                  isWideLayout={true}
                  isCenterPlan={true}
                />
              </div>
            </div>

            {/* Bottom Row - Starter Plan and Premium Package */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingPlan
                  key={plan.name}
                  {...plan}
                  index={index + 1}
                />
              ))}
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 mx-auto border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Không chắc chắn gói nào phù hợp?
              </h3>
              <p className="text-gray-300 mb-6">
                Hãy bắt đầu với gói miễn phí và nâng cấp khi cần thiết. Tất cả gói đều có thể thay đổi linh hoạt.
              </p>
              <div className="flex justify-center">
                <a 
                  href="/pricing-comparison"
                  className="text-blue-400 hover:text-purple-500 transition-colors duration-300 inline-flex items-center justify-center px-6 py-3 rounded-lg border border-blue-400/30 hover:border-purple-500/50"
                >
                  So sánh chi tiết các gói
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  index: number;
}

function PricingPlan({ name, price, description, features, isPopular = false, index }: PricingPlanProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <GlassCard 
        className={`rounded-xl p-6 relative transform transition duration-500 hover:-translate-y-2 ${
          isPopular ? '' : 'border border-gray-700'
        }`}
        gradientBorder={isPopular}
      >
        <div className="text-center mb-6 pt-2">
          <h3 className="text-xl font-heading font-semibold text-white mb-2">{name}</h3>
          <div className="flex justify-center items-baseline">
            <span className="text-gray-400 mr-2"></span>
            <span className="text-4xl font-bold text-white font-heading">{price}</span>
            {name === "B2B Connection 1on1" ? (
              <span className="text-gray-400 ml-1 font-primary text-sm">/lượt kết nối</span>
            ) : name === "Premium" ? (
              <span className="text-gray-400 ml-1 font-primary text-sm">/năm</span>
            ) : null}
          </div>
          <p className="text-gray-400 mt-2 font-primary">{description}</p>
        </div>

        <div className="h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent mb-6"></div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <div className="w-6 flex-shrink-0 flex justify-center">
                <svg className="w-5 h-5 text-bright-teal mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-300 font-primary">{feature.text}</span>
            </li>
          ))}
        </ul>

        {name === "Starter" ? (
          <a href="https://bcp.global/sign-up" target="_blank" rel="noopener noreferrer">
            <GradientButton className="w-full font-primary" variant="outline">Trải nghiệm</GradientButton>
          </a>
        ) : (
          <a href="https://bcp.global/credit" target="_blank" rel="noopener noreferrer">
            <GradientButton className="w-full font-primary text-black" animate>Kết nối mua bán ngay</GradientButton>
          </a>
        )}
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
      name: "Starter",
      price: "FREE",
      description: "Phù hợp với startup đang tìm kiếm cơ hội",
      features: [
        { text: "Thuật toán AI kết nối cơ bản", included: true },
        { text: "Hồ sơ doanh nghiệp tiêu chuẩn", included: true },
        { text: "Hỗ trợ qua email", included: true }
      ]
    },
    {
      name: "Premium",
      price: "15.000.000 VND",
      description: "(Chưa bao gồm 8% VAT)",
      features: [
        { text: "Tài khoản xác thực cấp độ ", included: true },
        { text: "Credit 0 đối tác - khách hàng/tháng", included: true },
        { text: "Hiển thị top và active bởi AI", included: true },
        { text: "Dữ liệu công ty được training riêng", included: true },
        { text: "Hỗ trợ bởi AI và Human", included: true }
      ],
      isPopular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/3 right-1/3 w-1/3 h-1/3 bg-neon-blue opacity-10 blur-[120px] rounded-full"></div>
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
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-bright-teal/20 border border-bright-teal/40 mb-4">
            <span className="text-sm font-medium text-bright-teal">Chính sách giá</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple">Chọn gói phù hợp với doanh nghiệp của bạn</span>
          </h2>
          <p className="text-gray-300 font-primary mb-6">
            Lựa chọn từ các tùy chọn giá linh hoạt của chúng tôi được thiết kế phù hợp với doanh nghiệp thuộc mọi quy mô, từ startup đến doanh nghiệp lớn.
          </p>
          <a 
            href="/pricing-comparison"
            onClick={(e) => { 
              e.preventDefault(); 
              window.location.href = '/pricing-comparison'; 
            }}
            className="text-neon-blue hover:text-electric-purple transition-colors duration-300 font-primary underline"
          >
            Xem bảng so sánh chi tiết các gói dịch vụ →
          </a>
        </motion.div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {/* Grid với 3 cột ngang hàng nhau, cách đều */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingPlan
              name="Starter"
              price="FREE"
              description="Phù hợp với startup đang tìm kiếm cơ hội"
              features={[
                { text: "Thuật toán AI kết nối cơ bản", included: true },
                { text: "Hồ sơ doanh nghiệp tiêu chuẩn", included: true },
                { text: "Hỗ trợ qua email", included: true }
              ]}
              index={0}
            />

            <PricingPlan
              name="B2B Connection 1on1"
              price="250.000 VND"
              description="(Chưa bao gồm 8% VAT)/lượt kết nối"
              features={[
                { text: "Kết nối MUA - BÁN - HỢP TÁC", included: true },
                { text: "Chat TRỰC TIẾP với doanh nghiệp", included: true },
                { text: "Thuật toán AI kết nối thông minh", included: true },
                { text: "Bảo mật - dễ dùng - đáng tin cậy", included: true },
                { text: "Mở rộng ra Nhật Bản và quốc tế", included: true }
              ]}
              index={1}
            />

            <PricingPlan
              name="Premium"
              price="15 triệu VND"
              description="(Chưa bao gồm 8% VAT)"
              features={[
                { text: "Tài khoản xác thực cấp độ ", included: true },
                { text: "Credit 0 đối tác - khách hàng/tháng", included: true },
                { text: "Hiển thị top và active bởi AI", included: true },
                { text: "Dữ liệu công ty được training riêng", included: true },
                { text: "Hỗ trợ bởi AI và Human", included: true }
              ]}
              isPopular={true}
              index={2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
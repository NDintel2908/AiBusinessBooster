
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
            <span className="text-gray-400 ml-1 font-primary text-sm">/tháng</span>
          </div>
          <p className="text-gray-400 mt-2 font-primary">{description}</p>
        </div>
        
        <div className="h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent mb-6"></div>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <svg className="w-5 h-5 text-bright-teal mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-300 font-primary">{feature.text}</span>
            </li>
          ))}
        </ul>
        
        {isPopular ? (
          <a href="https://bcp.global/credit" target="_blank" rel="noopener noreferrer">
            <GradientButton className="w-full font-primary text-black" animate>Đăng ký ngay</GradientButton>
          </a>
        ) : (
          <a href="https://bcp.global/sign-up" target="_blank" rel="noopener noreferrer">
            <GradientButton className="w-full font-primary" variant="outline">Trải nghiệm</GradientButton>
          </a>
        )}
      </GlassCard>
    </motion.div>
  );
}

function ConnectionPackage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto mt-20"
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-electric-purple/20 border border-electric-purple/40 mb-4">
          <span className="text-sm font-medium text-electric-purple font-primary">Add-on Package</span>
        </div>
        <h3 className="text-2xl font-heading font-bold text-white mb-4">B2B Connection 1on1</h3>
        <p className="text-gray-300 font-primary">Mở rộng cơ hội kết nối với các đối tác tiềm năng</p>
      </div>

      <GlassCard className="rounded-xl p-8 bg-gradient-to-br from-electric-purple/10 to-transparent border border-electric-purple/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="mb-6">
              <div className="flex items-baseline justify-center md:justify-start">
                <span className="text-4xl font-bold text-white font-heading">250.000 VND</span>
                <span className="text-gray-400 ml-2 font-primary text-sm">/lượt kết nối</span>
              </div>
              <p className="text-gray-400 mt-2 font-primary text-center md:text-left">(Chưa bao gồm 8% VAT)</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-electric-purple mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300 font-primary">Kết nối MUA - BÁN - HỢP TÁC</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-electric-purple mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300 font-primary">Chat TRỰC TIẾP với doanh nghiệp</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-electric-purple mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300 font-primary">Thuật toán AI kết nối thông minh</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-electric-purple mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300 font-primary">Bảo mật - dễ dùng - đáng tin cậy</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-electric-purple mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300 font-primary">Mở rộng ra Nhật Bản và quốc tế
</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-end">
            <div className="mb-6 text-center md:text-right">
              <h4 className="text-lg font-semibold text-white mb-2">Đặc quyền bổ sung</h4>
              <ul className="space-y-2">
                <li className="text-gray-300 font-primary">Bảo mật - dễ dùng - đáng tin cậy</li>
                <li className="text-gray-300 font-primary">Mở rộng ra Nhật Bản và quốc tế</li>
              </ul>
            </div>
            <a href="https://bcp.global/credit" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              <GradientButton 
                className="w-full md:w-auto px-8 py-3 font-primary"
                variant="outline"
                gradientFrom="electric-purple"
                gradientTo="neon-blue"
              >
                Mua Credit ngay
              </GradientButton>
            </a>
          </div>
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
      price: "1.250.000 VND",
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
          <p className="text-gray-300 font-primary">
            Lựa chọn từ các tùy chọn giá linh hoạt của chúng tôi được thiết kế phù hợp với doanh nghiệp thuộc mọi quy mô, từ startup đến doanh nghiệp lớn.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingPlan
              key={plan.name}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              index={index}
            />
          ))}
        </div>

        <ConnectionPackage />
      </div>
    </section>
  );
}


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
        {isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-neon-blue to-electric-purple text-white px-4 py-1 rounded-full text-sm font-medium font-primary">
            Phổ biến
          </div>
        )}
        
        <div className="text-center mb-6 pt-2">
          <h3 className="text-xl font-heading font-semibold text-white mb-2">{name}</h3>
          <div className="flex justify-center items-baseline">
            <span className="text-gray-400 mr-2"></span>
            <span className="text-4xl font-bold text-white font-heading">{price}</span>
            <span className="text-gray-400 ml-1 font-primary">{name === "Connecting Slot" ? "/lượt kết nối thành công" : "/tháng"}</span>
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
        
        <a href="#contact">
          {isPopular ? (
            <GradientButton className="w-full font-primary" animate>Mua ngay</GradientButton>
          ) : (
            <GradientButton className="w-full font-primary" variant="outline">Trải nghiệm</GradientButton>
          )}
        </a>
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
      price: "0",
      description: "Phù hợp với startup đang tìm kiếm cơ hội",
      features: [
        { text: "Thuật toán kết nối AI cơ bản", included: true },
        { text: "Lên đến 10 kết nối mỗi tháng", included: true },
        { text: "Hồ sơ doanh nghiệp tiêu chuẩn", included: true },
        { text: "Hỗ trợ qua email", included: true }
      ]
    },
    {
      name: "Connecting Slot",
      price: "250.000 VND",
      description: "Cho doanh nghiệp đang phát triển cần kết nối chất lượng",
      features: [
        { text: "Thuật toán kết nối AI nâng cao", included: true },
        { text: "Kết nối không giới hạn", included: true },
        { text: "Hồ sơ doanh nghiệp nâng cao", included: true },
        { text: "Hỗ trợ ưu tiên (24/7)", included: true },
        { text: "Bảng phân tích thời gian thực", included: true },
        { text: "Nền tảng nhắn tin trực tiếp", included: true }
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple"></span> Chọn gói phù hợp với doanh nghiệp của bạn
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
      </div>
    </section>
  );
}

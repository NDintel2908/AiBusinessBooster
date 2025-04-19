
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface StatItemProps {
  number: string;
  description: string;
  endValue: number;
}

const StatItem = ({ number, description, endValue }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        setCount(Math.floor(endValue * progress));
        
        if (currentStep === steps) {
          clearInterval(timer);
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    }
  }, [isInView, endValue]);

  return (
    <div className="text-center" ref={ref}>
      <div className="text-[5rem] font-heading font-bold text-[#60A5FA]">
        {count}
        {number.includes("+") && "+"}
      </div>
      <p className="text-[1.1rem] font-primary text-gray-400 max-w-sm mx-auto">{description}</p>
    </div>
  );
};

export default function FeaturesSection() {
  return (
    <section id="features-section" className="relative py-16 md:py-20 px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f8ff] to-[#ffffff] opacity-10"></div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 transform scale-75 md:scale-100 origin-center">
        <div className="relative w-[10rem] h-[7rem]">
          <div className="absolute w-[10rem] h-[7rem] bg-[#4a90e2] rounded-lg transform -rotate-10"></div>
          <div className="absolute w-[8rem] h-[7rem] bg-[#ffde59] rounded-lg transform rotate-10 -right-4 -top-4"></div>
          <div className="absolute w-[6rem] h-[2rem] bg-[#ffb6c1] rounded-md transform -left-2 bottom 0"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-[3rem] font-semibold text-white mb-2">
            Năng lực BCP
          </h2>
          <p className="text-[1.2rem] text-gray-400 font-primary">
            Góc nhìn dựa trên dữ liệu về thành công các kết nối giao thương kể từ năm 2018
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-[3rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <StatItem 
              number="2200+"
              description="Doanh nghiệp tham gia"
              endValue={2200}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StatItem 
              number="1600+"
              description="Kết nối thành công"
              endValue={1600}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <StatItem 
              number="3+"
              description="Quốc gia thành viên"
              endValue={3}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

interface StatItemProps {
  number: string;
  description: string;
}

const StatItem = ({ number, description }: StatItemProps) => (
  <div className="text-center">
    <div className="text-[5rem] font-heading font-bold text-[#0066cc]">{number}</div>
    <p className="text-[1.1rem] font-primary text-[#4a90e2] max-w-sm mx-auto">{description}</p>
  </div>
);

export default function FeaturesSection() {
  return (
    <section className="relative py-16 md:py-20 px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0f8ff] to-[#ffffff] opacity-10"></div>

      {/* Decorative Notes */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 transform scale-75 md:scale-100 origin-center">
        <div className="relative w-[10rem] h-[7rem]">
          <div className="absolute w-[10rem] h-[7rem] bg-[#4a90e2] rounded-lg transform -rotate-10"></div>
          <div className="absolute w-[8rem] h-[7rem] bg-[#ffde59] rounded-lg transform rotate-10 -right-4 -top-4"></div>
          <div className="absolute w-[6rem] h-[2rem] bg-[#ffb6c1] rounded-md transform -left-2 bottom 0"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-[3rem] font-semibold text-[#0066cc] mb-2">
            BCP qua những con số
          </h2>
          <p className="text-[1.2rem] text-[#4a90e2] font-primary">
            Thành tựu được thể hiện dưới góc nhìn dữ liệu
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
              number="2268"
              description="Thành viên"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StatItem 
              number="1654"
              description="Kết nối thành công"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <StatItem 
              number="7"
              description="Năm kinh nghiệm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
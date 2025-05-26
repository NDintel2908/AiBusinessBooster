import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlassCard } from "@/components/ui/glass-card";

interface ChallengeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ChallengeCard = ({ icon, title, description, delay }: ChallengeCardProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, delay: delay * 0.1 }
        }
      }}
    >
      <GlassCard className="rounded-xl p-6" hoverEffect>
        <div className="flex items-center mb-6">
          {icon}
          <h3 className="text-xl font-heading font-semibold ml-4 text-white">{title}</h3>
        </div>
        <p className="text-gray-400 font-primary">{description}</p>
      </GlassCard>
    </motion.div>
  );
};

const challenges = [
  {
    icon: (
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-red-500/90 to-orange-500/90 flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
    ),
    title: "Chi phí bỏ ra cao mà không ra",
    description: "Các phương pháp truyền thống như thuê đội nghiên cứu thị trường, tham gia hội chợ, chạy quảng cáo tốn kém mà không hiệu quả."
  },
  {
    icon: (
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-500/90 to-yellow-500/90 flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
    ),
    title: "Mất quá nhiều thời gian để xác lập một đối tác",
    description: "Việc kết nối và phát triển đối tác thủ công có thể mất nhiều tháng, làm chậm cơ hội tăng trưởng và thâm nhập thị trường."
  },
  {
    icon: (
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/90 to-cyan-500/90 flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
    ),
    title: "Có đối tác, khách hàng nhưng không tin cậy",
    description: "Thiếu thông tin đáng tin cậy khiến việc xác minh độ tin cậy và khả năng tương thích của đối tác tiềm năng trở nên khó khăn."
  },
 
];

export default function ChallengesSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <section id="challenges" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-electric-purple opacity-10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-blue/20 border border-neon-blue/40 mb-4">
            <span className="text-base md:text-lg font-medium text-neon-blue font-primary">Thách thức của thị trường</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            Vấn đề nan giải khi kết nối thị trường <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple">B2B</span>
          </h2>
          <p className="text-gray-300 font-primary">
            Việc kết nối cá nhân qua mạng xã hội ngày càng dễ dàng, NHƯNG việc kết nối giữa Doanh nghiệp với Doanh nghiệp (B2B) vẫn rất tốn kém, mất nhiều thời gian và thiếu tin cậy.	
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              icon={challenge.icon}
              title={challenge.title}
              description={challenge.description}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

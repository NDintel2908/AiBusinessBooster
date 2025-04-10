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
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-neon-blue to-electric-purple flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-heading font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </GlassCard>
    </motion.div>
  );
};

const challenges = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    ),
    title: "Tìm đối tác phù hợp",
    description: "Phương pháp truyền thống gây khó khăn trong việc xác định đối tác kinh doanh thực sự tương thích với mục tiêu chiến lược của bạn."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    title: "Quy trình tốn thời gian",
    description: "Việc kết nối và phát triển đối tác thủ công có thể mất nhiều tháng, làm chậm cơ hội tăng trưởng và thâm nhập thị trường."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    title: "Tin cậy & Xác minh",
    description: "Thiếu thông tin đáng tin cậy khiến việc xác minh độ tin cậy và khả năng tương thích của đối tác tiềm năng trở nên khó khăn."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
      </svg>
    ),
    title: "Phạm vi thị trường hạn chế",
    description: "Các rào cản về địa lý và mạng lưới tạo ra giới hạn nhân tạo, ngăn cản bạn tìm kiếm đối tác toàn cầu lý tưởng."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    ),
    title: "Phân mảnh dữ liệu",
    description: "Thông tin kinh doanh cần thiết bị phân tán trên nhiều nền tảng, khiến việc đánh giá đối tác toàn diện gần như không thể."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
      </svg>
    ),
    title: "Phù hợp văn hóa",
    description: "Việc kết nối truyền thống bỏ qua sự tương thích về văn hóa, dẫn đến các đối tác gặp khó khăn trong giao tiếp và đồng bộ hóa."
  }
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
            <span className="text-sm font-medium text-neon-blue">Thách thức của thị trường</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            Vấn đề nan giải khi kết nối thị trường <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple">B2B</span>
          </h2>
          <p className="text-gray-300">
            Doanh nghiệp ngày nay gặp nhiều khó khăn khi tìm kiếm đối tác phù hợp. Nền tảng ứng dụng AI của chúng tôi giải quyết những thách thức này.
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

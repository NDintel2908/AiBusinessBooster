
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlassCard } from "@/components/ui/glass-card";

export default function ChallengesSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const comparisonData = [
    {
      traditional: {
        title: "Chi phí cao, hiệu quả thấp",
        description: "Thuê đội nghiên cứu thị trường, tham gia hội chợ, chạy quảng cáo tốn kém mà không đảm bảo kết quả"
      },
      bcp: {
        title: "Tiết kiệm chi phí đáng kể",
        description: "AI Matching Agent giúp tối ưu hóa chi phí, chỉ trả tiền cho kết nối thành công"
      }
    },
    {
      traditional: {
        title: "Mất nhiều thời gian",
        description: "Quá trình kết nối và phát triển đối tác thủ công có thể kéo dài nhiều tháng"
      },
      bcp: {
        title: "Kết nối tức thì",
        description: "Thuật toán AI tìm kiếm và kết nối đối tác phù hợp trong thời gian thực"
      }
    },
    {
      traditional: {
        title: "Thiếu độ tin cậy",
        description: "Khó khăn trong việc xác minh độ tin cậy và khả năng tương thích của đối tác tiềm năng"
      },
      bcp: {
        title: "Xác thực đa cấp độ",
        description: "Hệ thống xác minh toàn diện đảm bảo độ tin cậy và minh bạch trong mọi giao dịch"
      }
    }
  ];
  
  return (
    <section id="challenges" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-electric-purple opacity-10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          ref={ref}
          className="text-center max-w-4xl mx-auto mb-16"
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
            <span className="text-base md:text-lg font-medium text-neon-blue font-primary">So sánh thị trường</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            Phương pháp <span className="text-red-400 font-bold">truyền thống</span> vs <span className="text-blue-400 font-bold">BCP.Global</span>
          </h2>
          <p className="text-gray-300 font-primary">
            So sánh rõ ràng giữa các thách thức của phương pháp truyền thống và giải pháp hiện đại từ BCP.Global
          </p>
        </motion.div>
        
        {/* Desktop Layout - 2 Column Grid with Headers */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          {/* Column Headers */}
          <motion.div 
            className="grid grid-cols-2 gap-8 mb-8"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  duration: 0.6,
                  delay: 0.2
                }
              }
            }}
          >
            {/* Traditional Method Header */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center border-2 border-red-400/30">
                <span className="text-3xl">❌</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-red-400 mb-2">Phương pháp truyền thống</h3>
              <p className="text-sm text-gray-400">Cách tiếp cận cũ với nhiều hạn chế</p>
            </div>

            {/* BCP Solution Header */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border-2 border-blue-400/30">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-blue-400 mb-2">BCP.Global Solution</h3>
              <p className="text-sm text-gray-400">Giải pháp thông minh với AI</p>
            </div>
          </motion.div>

          {/* Comparison Rows */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.15,
                  delayChildren: 0.4
                }
              }
            }}
          >
            {comparisonData.map((comparison, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-2 gap-8 items-stretch"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Traditional Method Card */}
                <GlassCard 
                  className={`p-6 border-red-400/20 bg-red-500/5 h-full flex flex-col transition-all duration-300 ${
                    hoveredIndex === index ? 'border-red-400/40 bg-red-500/10 shadow-lg shadow-red-500/20' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <span className="text-2xl mt-1">❌</span>
                    <h4 className="text-lg font-semibold text-red-400">{comparison.traditional.title}</h4>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed flex-1">
                    {comparison.traditional.description}
                  </p>
                  {/* Connection Line */}
                  <div className="absolute right-0 top-1/2 w-8 h-px bg-gradient-to-r from-red-400/50 to-blue-400/50 transform translate-x-4 -translate-y-1/2 opacity-50"></div>
                </GlassCard>

                {/* BCP Solution Card */}
                <GlassCard 
                  className={`p-6 border-blue-400/20 bg-blue-500/5 h-full flex flex-col transition-all duration-300 ${
                    hoveredIndex === index ? 'border-blue-400/40 bg-blue-500/10 shadow-lg shadow-blue-500/20' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <span className="text-2xl mt-1">✅</span>
                    <h4 className="text-lg font-semibold text-blue-400">{comparison.bcp.title}</h4>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed flex-1">
                    {comparison.bcp.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Layout - Stacked Cards */}
        <div className="lg:hidden space-y-8">
          {comparisonData.map((comparison, index) => (
            <motion.div 
              key={index}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {/* Traditional Method Card */}
              <GlassCard className="p-6 border-red-400/20 bg-red-500/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center border border-red-400/30 mr-4">
                    <span className="text-xl">❌</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400">{comparison.traditional.title}</h3>
                    <p className="text-xs text-gray-500">Phương pháp truyền thống</p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {comparison.traditional.description}
                </p>
              </GlassCard>

              {/* VS Divider for Mobile */}
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-blue-400 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VS</span>
                </div>
              </div>

              {/* BCP Solution Card */}
              <GlassCard className="p-6 border-blue-400/20 bg-blue-500/5">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-400/30 mr-4">
                    <span className="text-xl">✅</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400">{comparison.bcp.title}</h3>
                    <p className="text-xs text-gray-500">BCP.Global Solution</p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {comparison.bcp.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

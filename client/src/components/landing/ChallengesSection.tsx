
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlassCard } from "@/components/ui/glass-card";

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
            Phương pháp <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">truyền thống</span> vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple">BCP.Global</span>
          </h2>
          <p className="text-gray-300 font-primary">
            So sánh rõ ràng giữa các thách thức của phương pháp truyền thống và giải pháp hiện đại từ BCP.Global
          </p>
        </motion.div>
        
        {/* Desktop Layout - 3 Column Comparison */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-3 gap-8 items-start"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {/* Left Column - Traditional Methods */}
            <div className="space-y-8">
              <motion.div 
                className="text-center mb-8"
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center border-2 border-red-400/30">
                  <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-red-400 mb-2">Phương pháp truyền thống</h3>
                <p className="text-sm text-gray-400">Cách tiếp cận cũ với nhiều hạn chế</p>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
                <GlassCard className="p-6 border-red-400/20 bg-red-500/5">
                  <h4 className="font-semibold text-red-400 mb-3">Chi phí cao, hiệu quả thấp</h4>
                  <p className="text-sm text-gray-400">Thuê đội nghiên cứu thị trường, tham gia hội chợ, chạy quảng cáo tốn kém mà không đảm bảo kết quả</p>
                </GlassCard>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
                <GlassCard className="p-6 border-red-400/20 bg-red-500/5">
                  <h4 className="font-semibold text-red-400 mb-3">Mất nhiều thời gian</h4>
                  <p className="text-sm text-gray-400">Quá trình kết nối và phát triển đối tác thủ công có thể kéo dài nhiều tháng</p>
                </GlassCard>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
                <GlassCard className="p-6 border-red-400/20 bg-red-500/5">
                  <h4 className="font-semibold text-red-400 mb-3">Thiếu độ tin cậy</h4>
                  <p className="text-sm text-gray-400">Khó khăn trong việc xác minh độ tin cậy và khả năng tương thích của đối tác tiềm năng</p>
                </GlassCard>
              </motion.div>
            </div>

            {/* Center Column - Criteria */}
            <div className="flex flex-col items-center space-y-12 pt-32">
              <motion.div 
                className="flex flex-col items-center space-y-8"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.8,
                      delay: 0.2
                    }
                  }
                }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">VS</span>
                </div>

                <div className="flex flex-col items-center space-y-6">
                  <motion.div 
                    className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/40"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-blue-400 font-medium text-sm">CHI PHÍ</span>
                  </motion.div>

                  <motion.div 
                    className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/40"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-purple-400 font-medium text-sm">THỜI GIAN</span>
                  </motion.div>

                  <motion.div 
                    className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/40"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-cyan-400 font-medium text-sm">ĐỘ TIN CẬY</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - BCP Solution */}
            <div className="space-y-8">
              <motion.div 
                className="text-center mb-8"
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border-2 border-blue-400/30">
                  <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-blue-400 mb-2">BCP.Global Solution</h3>
                <p className="text-sm text-gray-400">Giải pháp thông minh với AI</p>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}>
                <GlassCard className="p-6 border-blue-400/20 bg-blue-500/5">
                  <h4 className="font-semibold text-blue-400 mb-3">Tiết kiệm chi phí đáng kể</h4>
                  <p className="text-sm text-gray-400">AI Matching Agent giúp tối ưu hóa chi phí, chỉ trả tiền cho kết nối thành công</p>
                </GlassCard>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}>
                <GlassCard className="p-6 border-blue-400/20 bg-blue-500/5">
                  <h4 className="font-semibold text-blue-400 mb-3">Kết nối tức thì</h4>
                  <p className="text-sm text-gray-400">Thuật toán AI tìm kiếm và kết nối đối tác phù hợp trong thời gian thực</p>
                </GlassCard>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}>
                <GlassCard className="p-6 border-blue-400/20 bg-blue-500/5">
                  <h4 className="font-semibold text-blue-400 mb-3">Xác thực đa cấp độ</h4>
                  <p className="text-sm text-gray-400">Hệ thống xác minh toàn diện đảm bảo độ tin cậy và minh bạch trong mọi giao dịch</p>
                </GlassCard>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout - Stacked Cards */}
        <div className="lg:hidden space-y-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassCard className="p-6 border-red-400/20 bg-red-500/5">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center border border-red-400/30 mr-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-heading font-semibold text-red-400">Phương pháp truyền thống</h3>
              </div>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Chi phí cao mà không đảm bảo hiệu quả</li>
                <li>• Mất nhiều tháng để xây dựng đối tác</li>
                <li>• Khó xác minh độ tin cậy của đối tác</li>
              </ul>
            </GlassCard>
          </motion.div>

          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">VS</span>
            </div>
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <GlassCard className="p-6 border-blue-400/20 bg-blue-500/5">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-400/30 mr-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-heading font-semibold text-blue-400">BCP.Global Solution</h3>
              </div>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Tiết kiệm chi phí với AI Matching Agent</li>
                <li>• Kết nối đối tác trong thời gian thực</li>
                <li>• Xác thực đa cấp độ đảm bảo tin cậy</li>
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

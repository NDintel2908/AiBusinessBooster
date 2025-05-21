import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import BP from './partner/BusinessPartner.png';
import TP from './partner/TechPartner.png';
import DP from './partner/DevPartner.png';


export default function AboutSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <>
      <section id="about" className="py-16 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-electric-purple opacity-10 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Hình ảnh công ty */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlassCard className="rounded-2xl p-3 relative">
                <img 
                  src="https://cdnmedia.baotintuc.vn/Upload/r2ZmuVn2vsFEWUzMUAXAg/files/2024/12/startupVoetNhat.jpg" 
                  alt="Our Team" 
                  className="w-full h-auto rounded-xl"
                />
              </GlassCard>
            </motion.div>
            
            {/* Nội dung về công ty */}
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="lg:mt-0"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-blue/20 border border-neon-blue/40 mb-3">
                <span className="text-base font-medium text-neon-blue font-primary">Câu chuyện của chúng tôi</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple">Câu chuyện doanh nghiệp</span>
              </h2>
              <p className="text-gray-300 mb-4 font-primary text-base leading-relaxed">
                BCP ra đời từ một phát hiện đơn giản: Dù công nghệ số đã phát triển vượt bậc, việc tìm kiếm đối tác kinh doanh vẫn còn phụ thuộc vào may rủi thay vì dữ liệu.
              </p>
              <p className="text-gray-300 mb-4 font-primary text-base leading-relaxed">
                Với đội ngũ chuyên gia AI và phân tích kinh doanh đa quốc gia, chúng tôi xây dựng nền tảng kết nối MUA - BÁN - HỢP TÁC B2B thông minh, biến trí tuệ nhân tạo thành chìa khóa thay đổi cuộc chơi.
              </p>
              
              <div className="my-6 h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
              
              <motion.div 
                className="mb-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                }}
              >
                <h3 className="text-lg font-heading font-semibold mb-2 text-white">Tầm Nhìn</h3>
                <p className="text-gray-300 font-primary text-base leading-relaxed">
                  Chúng tôi tin vào một thế giới nơi mọi doanh nghiệp đều tìm được đối tác lý tưởng.
                </p>
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
                }}
              >
                <h3 className="text-lg font-heading font-semibold mb-2 text-white">Sứ Mệnh</h3>
                <p className="text-gray-300 font-primary text-base leading-relaxed">
                  Bằng công nghệ AI tiên tiến, BCP phá bỏ mọi rào cản, mở ra cơ hội hợp tác hiệu quả cho mọi tổ chức, dù lớn hay nhỏ.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Tách phần đối tác chiến lược thành section riêng */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-blue/20 border border-neon-blue/40">
                <span className="text-sm font-medium text-neon-blue font-primary">Đối tác chiến lược</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center mt-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <img 
                  src={TP}
                  alt="Tech Partner"
                  className="h-[70px] object-contain filter brightness-100"
                />
                <p className="mt-3 text-gray-400 text-center font-primary text-sm">Đối tác công nghệ</p>
              </div>
              
              <div className="flex flex-col items-center">
                <img 
                  src={BP}
                  alt="Business Partner"
                  className="h-[70px] object-contain filter brightness-100"
                />
                <p className="mt-3 text-gray-400 text-center font-primary text-sm">Đối tác thị trường</p>
              </div>

              <div className="flex flex-col items-center">
                <img 
                  src={DP}
                  alt="Development Partner"
                  className="h-[70px] object-contain filter brightness-100"
                />
                <p className="mt-3 text-gray-400 text-center font-primary text-sm">Đối tác phát triển</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

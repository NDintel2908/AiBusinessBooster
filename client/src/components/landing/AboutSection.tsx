import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import BP from './partner/BusinessPartner.png';
import TP from './partner/TechPartner.png';


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
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-electric-purple opacity-10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            
            <motion.div 
              className="absolute -bottom-6 -right-6 hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              
            </motion.div>

            {/* Partner Section */}
            <motion.div
              className="mt-12"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-blue/20 border border-neon-blue/40">
                  <span className="text-sm font-medium text-neon-blue font-primary">Đối tác chiến lược</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center justify-items-center mt-8">
                <div className="flex flex-col items-center">
                  <img 
                    src={TP}
                    alt="Tech Partner"
                    className="h-[70px] object-contain filter brightness-100"
                  />
                  <p className="mt-4 text-gray-400 text-center font-primary">Đối tác công nghệ</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <img 
                    src= {BP}
                    alt="Business Partner"
                    className="h-[70px] object-contain filter brightness-100"
                  />
                  <p className="mt-4 text-gray-400 text-center font-primary">Đối tác thị trường</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-blue/20 border border-neon-blue/40 mb-4">
              <span className="text-sm font-medium text-neon-blue font-primary">Câu chuyện của chúng tôi</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple">Câu chuyện doanh nghiệp</span>
            </h2>
            <p className="text-gray-300 mb-6 font-primary">
              BCP được thành lập vào năm 2018 từ một nhận định đơn giản: dù công nghệ số đã phát triển mạnh mẽ, việc tìm kiếm đối tác kinh doanh phù hợp vẫn còn quá kém hiệu quả – và phần lớn dựa vào may rủi hơn là dữ liệu.
            </p>
            <p className="text-gray-300 mb-6 font-primary">
              Với đội ngũ chuyên gia AI, phân tích kinh doanh và đổi mới công nghệ – trong đó có cả các thành viên đến từ Nhật Bản – chúng tôi đã bắt đầu hành trình xây dựng một nền tảng kết nối B2B mới, nơi trí tuệ nhân tạo và khoa học dữ liệu trở thành động lực thay đổi cuộc chơi.
            </p>
            
            <div className="my-8 h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
            
            <motion.div 
              className="mb-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              }}
            >
              <h3 className="text-xl font-heading font-semibold mb-4 text-white">Tầm nhìn</h3>
              <p className="text-gray-300 font-primary">
                Chúng tôi hướng tới một thế giới nơi mọi doanh nghiệp đều tìm thấy đối tác lý tưởng của mình – từ đó thúc đẩy đổi mới và tăng trưởng cho toàn bộ nền kinh tế toàn cầu.
              </p>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
              }}
            >
              <h3 className="text-xl font-heading font-semibold mb-4 text-white">Sứ mạng</h3>
              <p className="text-gray-300 font-primary">
                Chúng tôi ứng dụng công nghệ AI tiên tiến nhằm xóa bỏ mọi rào cản khiến doanh nghiệp khó tìm thấy đối tác phù hợp – mở ra cơ hội hợp tác hiệu quả và bền vững cho mọi tổ chức, dù lớn hay nhỏ.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

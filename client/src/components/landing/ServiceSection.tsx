
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const ServiceAccordionItem = ({ 
  value, 
  title, 
  children 
}: { 
  value: string;
  title: string;
  children: React.ReactNode;
}) => (
  <Accordion.Item value={value} className="border-b border-gray-200/10">
    <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left group focus:outline-none" data-state="closed">
      <div className="flex items-center gap-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 group-hover:bg-[#00B7EB] group-focus:bg-[#00B7EB] group-data-[state=open]:bg-[#00B7EB] transition-colors">
          <Plus className="h-4 w-4 text-white transition-transform group-data-[state=open]:rotate-45" />
        </div>
        <span className="text-lg text-white group-hover:text-[#00B7EB] group-focus:text-[#00B7EB] group-data-[state=open]:text-[#00B7EB] transition-colors">{title}</span>
      </div>
    </Accordion.Trigger>
    <Accordion.Content className="pb-4 pl-9">
      <div className="border-l-2 border-[#00B7EB] pl-4 text-gray-400">
        {children}
      </div>
    </Accordion.Content>
  </Accordion.Item>
);

export default function ServiceSection() {
  return (
    <section id="service-section" className="relative py-16 md:py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-[2.5rem] font-bold text-white mb-4 font-heading">
            Sự khác biệt của BCP.Global
          </h2>
          <p className="text-[1.1rem] text-gray-400 max-w-3xl mx-auto font-primary">
            Khám phá sự hỗ trợ đặc biệt và những lợi thế độc đáo giúp BCP nổi bật trong câu chuyện kinh doanh của bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Accordion.Root type="single" defaultValue="career" className="space-y-2">
              <ServiceAccordionItem 
                value="proactive" 
                title="Dựa trên AI, chủ động trò chuyện kết nối mà không spam"
              >
                Doanh nghiệp, bất kể thuộc lĩnh vực nào, đều có nhu cầu MUA & BÁN các sản phẩm hay dịch vụ từ thị trường trong và ngoài nước — BCP.Global trao ngay quyền CHỦ ĐỘNG:
                + Quảng bá chính mình;<br/>
                + Tìm kiếm đối tác phù hợp;<br/>
                + Matching nhu cầu theo thời gian thực;<br/>
                + Chọn thị trường mở rộng;<br/>
                + Trò chuyện bất kể không gian & thời gian;
              </ServiceAccordionItem>
              
              <ServiceAccordionItem 
                value="chat" 
                title="Không qua Trung gian"
              >
                BCP AI hỗ trợ tạo nhóm trò chuyện mới 1on1 cho các Doanh nghiệp trao đổi với đối tác trực tiếp mà không cần có điều phối viên.
              </ServiceAccordionItem>
              
              <ServiceAccordionItem 
                value="security" 
                title="Kết nối không biên giới"
              >
                BCP không chỉ là "cầu nối", mà còn là "bàn đạp" cho các doanh nghiệp dám mơ lớn - vươn mình ra quốc tế. Từ nhịp sống năng động Việt Nam, vươn tới thị trường Nhật Bản tiên tiến, và lan tỏa khắp Đông Nam Á - chúng tôi là cầu nối chiến lược giúp doanh nghiệp bạn vượt ranh giới địa lý.
              </ServiceAccordionItem>

              <ServiceAccordionItem 
                value="connection" 
                title="Bảo mật là ưu tiên hàng đầu"
              >
                Tại BCP, chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức nghiêm ngặt nhằm bảo vệ dữ liệu người dùng, tuân theo các thông lệ tốt nhất trong ngành về hạ tầng đám mây, kiểm soát truy cập và mã hóa dữ liệu.

                BCP cam kết duy trì tính bảo mật (confidentiality), toàn vẹn (integrity) và sẵn sàng (availability) của thông tin, nhằm đảm bảo quyền riêng tư và an toàn cho toàn bộ người dùng và đối tác trên nền tảng.
              </ServiceAccordionItem>
              
            </Accordion.Root>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-xl bg-sky-50/5 flex items-center justify-center py-8 px-6">
              <img 
                src="/Service.png"
                alt="Service illustration"
                className="w-full h-[460px] object-contain mix-blend-lighten opacity-90"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

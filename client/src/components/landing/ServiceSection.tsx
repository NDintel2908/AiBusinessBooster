
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const ServiceAccordionItem = ({ 
  value, 
  title, 
  children, 
  isExpanded 
}: { 
  value: string;
  title: string;
  children: React.ReactNode;
  isExpanded?: boolean;
}) => (
  <Accordion.Item value={value} className="border-b border-gray-200/10">
    <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left">
      <div className="flex items-center gap-3">
        <div className={`flex h-6 w-6 items-center justify-center rounded-full ${isExpanded ? 'bg-blue-500' : 'bg-gray-600'}`}>
          <Plus className="h-4 w-4 text-white" />
        </div>
        <span className={`text-lg ${isExpanded ? 'text-blue-500' : 'text-gray-400'}`}>{title}</span>
      </div>
    </Accordion.Trigger>
    <Accordion.Content className="pb-4 pl-9">
      <div className="border-l-2 border-blue-500 pl-4 text-gray-400">
        {children}
      </div>
    </Accordion.Content>
  </Accordion.Item>
);

export default function ServiceSection() {
  return (
    <section className="relative py-16 md:py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-[2.5rem] font-bold text-white mb-4 font-heading">
            BCP hỗ trợ bạn như thế nào & điều gì làm chúng tôi độc đáo
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
                value="AI intelligence" 
                title="AI học và chủ động kết nối với Doanh nghiệp phù hợp nhất"
                isExpanded={true}
              >
                Hãy quên đi những cuộc họp dài đằng đẵng và những nỗ lực bôn ba tìm kiếm đối tác của phương pháp truyền thống.

                BCP AI học và ghi nhớ từng chi tiết nhỏ về thông tin cũng như nhu cầu của doanh nghiệp bạn. Công nghệ AI thông minh sẽ chủ động gợi ý kết nối với Doanh nghiệp phù hợp nhất. Thông tin càng chi tiết - Matching càng chính xác!
              </ServiceAccordionItem>
              
              <ServiceAccordionItem 
                value="cutoff" 
                title="Không trung gian - Gặp luôn người có thẩm quyền cao nhất"
              >
                Bỏ qua trung gian - BCP AI mở ra con đường "thẳng tắp" trao đổi trực tiếp với người có quyền quyết định cuối cùng - nơi mà mọi thương vụ được định đoạt.
              </ServiceAccordionItem>
              
              <ServiceAccordionItem 
                value="security" 
                title="Bảo mật là ưu tiên hàng đầu"
              >
                Bảo mật dữ liệu là ưu tiên hàng đầu tại BCP
                Tại BCP, chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức nghiêm ngặt nhằm bảo vệ dữ liệu người dùng, tuân theo các thông lệ tốt nhất trong ngành về hạ tầng đám mây, kiểm soát truy cập và mã hóa dữ liệu.

                Mặc dù hiện tại BCP chưa sở hữu các chứng chỉ bảo mật quốc tế như ISO 27001 hoặc SOC 2, chúng tôi đang tích cực xây dựng quy trình vận hành và kiểm soát nội bộ hướng đến các tiêu chuẩn này.

                BCP cam kết duy trì tính bảo mật (confidentiality), toàn vẹn (integrity) và sẵn sàng (availability) của thông tin, nhằm đảm bảo quyền riêng tư và an toàn cho toàn bộ người dùng và đối tác trên nền tảng.
              </ServiceAccordionItem>

              <ServiceAccordionItem 
                value="connection" 
                title="Kết nối không biên giới"
              >
                BCP không chỉ là "cầu nối", mà còn là "bàn đạp" cho các doanh nghiệp dám mơ lớn - vươn mình ra quốc tế. Từ nhịp sống năng động Việt Nam, vươn tới thị trường Nhật Bản tiên tiến, và lan tỏa khắp Đông Nam Á - chúng tôi là cầu nối chiến lược giúp doanh nghiệp bạn vượt ranh giới địa lý.
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
                src="/src/components/landing/Service.png"
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

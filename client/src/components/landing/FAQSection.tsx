
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

// Custom Accordion components
const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "overflow-hidden rounded-xl mb-4 bg-black/20 border border-gray-800/50 backdrop-blur-sm transition-all duration-200 hover:border-electric-purple/30 group faq-accordion-item", 
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-5 font-medium text-white transition-all duration-300 group-hover:text-neon-blue",
        className
      )}
      {...props}
    >
      <span className="text-left font-semibold font-primary">{children}</span>
      <div className="relative flex h-5 w-5 items-center justify-center">
        <span className="absolute h-0.5 w-3 bg-current transition-transform duration-300 data-[state=open]:rotate-0 data-[state=closed]:rotate-0" />
        <span className="absolute h-0.5 w-3 bg-current rotate-90 transition-transform duration-300 data-[state=open]:rotate-0" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="px-5 pb-5 pt-0 text-gray-400 leading-relaxed font-primary">
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

const faqItems = [
  {
    question: "BCP là gì?",
    answer: `BCP - Business Connecting Platform được phát triển bởi Công ty Cổ phần BCP.

    Nền tảng BCP là một hệ sinh thái kỹ thuật số tiên tiến, kết nối hàng nghìn doanh nghiệp trên khắp thế giới. Chúng tôi tạo ra cơ hội để các công ty:

    1. Tìm kiếm đối tác mua bán sản phẩm/dịch vụ
    2. Khám phá cơ hội hợp tác đầu tư
    3. Mở rộng mạng lưới kinh doanh quốc tế`
  },
  {
    question: "BCP phục vụ được bao nhiêu ngành nghề, lĩnh vực?",
    answer: "Cho đến nay chúng tôi không đặt ra bất kỳ giới hạn nào đối với các ngành nghề, lĩnh vực kinh doanh hợp pháp."
  },
  {
    question: "Dữ liệu của tôi và công ty có được bảo mật khi dùng nền tảng này không?",
    answer: "Dữ liệu của bạn và công ty được bảo mật nghiêm ngặt khi sử dụng nền tảng này. Chúng tôi sử dụng mã hóa TLS để bảo vệ đường truyền dữ liệu, dữ liệu được lưu trữ trong cơ sở dữ liệu mã hóa và máy chủ được đặt trong mạng riêng, đảm bảo an toàn. Ngoài ra, tường lửa chặn các IP độc hại và các nhu cầu tấn công phổ biến như SQL injection, giúp bảo vệ dữ liệu của bạn khỏi các mối đe dọa."
  },
  {
    question: "Thông tin doanh nghiệp của tôi có được giữ bí mật không?",
    answer: "Hoàn toàn có. Chúng tôi coi trọng quyền riêng tư dữ liệu một cách nghiêm túc. Bạn kiểm soát chính xác thông tin nào hiển thị cho các đối tác tiềm năng, và tất cả dữ liệu kinh doanh nhạy cảm đều được mã hóa và bảo vệ. Chúng tôi không bao giờ bán thông tin của bạn cho bên thứ ba, và bạn có thể yêu cầu xóa hoàn toàn dữ liệu của mình bất cứ lúc nào."
  },
  {
    question: "Điều gì khiến BCP khác biệt so với các nền tảng kết nối truyền thống?",
    answer: "Khác với các nền tảng truyền thống dựa vào tìm kiếm thủ công hoặc khớp từ khóa cơ bản, BCP sử dụng AI tiên tiến để chủ động xác định các đối tác kinh doanh tối ưu dựa trên phân tích tương thích sâu. Nền tảng của chúng tôi loại bỏ sự phỏng đoán và vô số giờ thường dành cho việc kết nối, làm tăng đáng kể cơ hội tìm kiếm mối quan hệ kinh doanh chuyển đổi."
  }
];

export default function FAQSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-electric-purple opacity-10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            Câu hỏi thường gặp
          </h2>
          <p className="text-gray-400 font-primary">
            Tìm hiểu câu trả lời cho các câu hỏi phổ biến về nền tảng kết nối doanh nghiệp AI của chúng tôi
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
              >
                <AccordionTrigger>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

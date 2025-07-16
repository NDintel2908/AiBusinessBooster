import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GlassCard } from "@/components/ui/glass-card";

const businessData = [
  {
    groupId: "manufacturing",
    groupTitle:
      "Nhóm A - Cung cấp dịch vụ B2B chuyên nghiệp (Professional services)",
    groupColor: "from-blue-500 to-cyan-500",
    sectors: [
      {
        name: "Phát triển gia công phần mềm CNTT, AI và IOT",
        description:
          "Phát triển ứng dụng, hệ thống phần mềm, giải pháp AI và thiết bị IoT thông minh",
        icon: "💻",
      },
      {
        name: "Tư vấn kế toán, tài chính, pháp lý, bảo hiểm",
        description:
          "Cung cấp dịch vụ tư vấn chuyên nghiệp về tài chính, kế toán, pháp lý và bảo hiểm",
        icon: "📊",
      },
      {
        name: "Dịch vụ nhân sự, tuyển dụng và đào tạo",
        description:
          "Tư vấn nhân sự, tuyển dụng nhân tài và phát triển chương trình đào tạo",
        icon: "👥",
      },
      {
        name: "Agency quảng cáo, marketing",
        description:
          "Thiết kế chiến lược marketing, quảng cáo và xây dựng thương hiệu",
        icon: "📢",
      },
      {
        name: "Dịch vụ phân phối, thương mại nội địa",
        description:
          "Phân phối sản phẩm, kinh doanh bán lẻ và thương mại trong nước",
        icon: "🏪",
      },
      {
        name: "Dịch vụ vận chuyển, logistic, phân phối và lưu trữ hàng hoá",
        description:
          "Quản lý chuỗi cung ứng, vận chuyển và kho bãi logistics chuyên nghiệp",
        icon: "🚛",
      },
      {
        name: "Thiết kế kiến trúc, nội thất văn phòng",
        description:
          "Thiết kế kiến trúc, quy hoạch không gian và nội thất chuyên nghiệp",
        icon: "🏗️",
      },
      {
        name: "Kinh doanh bất động sản văn phòng, thương mại, bán lẻ, khu công nghiệp",
        description:
          "Đầu tư, phát triển và kinh doanh các dự án bất động sản thương mại và công nghiệp",
        icon: "🏢",
      },
      {
        name: "Nhóm dịch vụ xuất khẩu, phát triển thị trường xuyên quốc gia",
        description:
          "Hỗ trợ xuất khẩu, mở rộng thị trường quốc tế và thương mại xuyên biên giới",
        icon: "🌍",
      },
    ],
  },
  {
    groupId: "technology",
    groupTitle:
      "Nhóm B - Cung cấp nguyên vật liệu, hàng hóa cho doanh nghiệp sản xuất",
    groupColor: "from-purple-500 to-pink-500",
    sectors: [
      {
        name: "Nông Nghiệp và Thủy Sản",
        description:
          "Cung cấp nguyên liệu thô như nông sản, thủy sản cho các doanh nghiệp chế biến thực phẩm",
        icon: "🌾",
      },
      {
        name: "Thực Phẩm",
        description:
          "Cung cấp nguyên liệu thực phẩm như dầu thực vật, gia vị cho các doanh nghiệp chế biến thực phẩm",
        icon: "🍽️",
      },
      {
        name: "Dệt May",
        description:
          "Cung cấp nguyên liệu như sợi, vải cho các doanh nghiệp may mặc",
        icon: "🧵",
      },
      {
        name: "Giấy",
        description:
          "Cung cấp nguyên liệu như bột giấy, giấy thô cho các doanh nghiệp sản xuất giấy và bao bì",
        icon: "📄",
      },
      {
        name: "Hóa Chất",
        description:
          "Cung cấp nguyên liệu hóa chất như nhựa nguyên sinh, hóa chất cơ bản cho các ngành công nghiệp khác",
        icon: "🧪",
      },
      {
        name: "Vật Tư Xây Dựng",
        description:
          "Cung cấp nguyên liệu như xi măng, thép, gạch cho các công ty xây dựng",
        icon: "🧱",
      },
      {
        name: "Khai Khoáng",
        description:
          "Cung cấp nguyên liệu thô như đá, cát, sỏi, quặng kim loại cho các ngành xây dựng và luyện kim",
        icon: "⛏️",
      },
    ],
  },
  {
    groupId: "services",
    groupTitle:
      "Nhóm C - Sản xuất, gia công cung cấp sản phẩm cho người dùng cuối",
    groupColor: "from-green-500 to-teal-500",
    sectors: [
      {
        name: "Nhà Sản Xuất Thực Phẩm và Đồ Uống",
        description:
          "Chế biến và sản xuất các sản phẩm thực phẩm, đồ uống tiêu dùng phục vụ thị trường bán lẻ",
        icon: "🥤",
      },
      {
        name: "Nhà Sản Xuất Dệt May, Sản Phẩm Thời Trang",
        description:
          "Sản xuất quần áo, phụ kiện thời trang và các sản phẩm dệt may xuất khẩu",
        icon: "👕",
      },
      {
        name: "Nhà Sản Xuất Hàng Tiêu Dùng",
        description:
          "Sản xuất các sản phẩm tiêu dùng thiết yếu như mỹ phẩm, đồ dùng gia đình, văn phòng phẩm",
        icon: "🛍️",
      },
      {
        name: "Nhà Sản Xuất Điện Tử, Thiết Bị Gia Dụng",
        description:
          "Sản xuất và lắp ráp các thiết bị điện tử, máy móc và đồ gia dụng hiện đại",
        icon: "📱",
      },
      {
        name: "Nhà Sản Xuất Xe và Phụ Tùng",
        description:
          "Sản xuất và lắp ráp ô tô, xe máy cùng các linh kiện, phụ tùng thay thế",
        icon: "🚗",
      },
    ],
  },
  {
    groupId: "infrastructure",
    groupTitle: "Nhóm D - Gia công linh kiện & phụ trợ công nghiệp",
    groupColor: "from-orange-500 to-red-500",
    sectors: [
      {
        name: "Gia Công Linh Kiện Phụ Trợ Công Nghiệp",
        description:
          "Sản xuất các chi tiết, bộ phận được sử dụng trong các ngành công nghiệp khác nhau",
        icon: "⚙️",
      },
      {
        name: "Gia Công Linh Kiện Ngành Bán Dẫn",
        description: "Sản xuất, gia công mạch tích hợp và transistor",
        icon: "🔌",
      },
      {
        name: "Gia Công Cơ Khí Chính Xác",
        description:
          "Tiện, phay CNC, gia công khuôn mẫu, phục vụ cho các ngành như ô tô, tự động hóa, và sản xuất máy móc.",
        icon: "🔧",
      },
      {
        name: "Sản Xuất và Cung Cấp Thiết Bị Chuyên Ngành",
        description:
          "Gia công, sản xuất và cung cấp thiết bị chuyên ngành cho các ngành thiết bị y tế, thiết bị tự động hóa, và các phụ tùng ô tô",
        icon: "🏭",
      },
    ],
  },
];

export default function BusinessSectorsSection() {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  // Flatten all sectors for icon grid
  const allSectors = businessData.flatMap((group) =>
    group.sectors.map((sector) => ({
      ...sector,
      groupColor: group.groupColor,
      groupTitle: group.groupTitle,
    })),
  );

  return (
    <section id="business-sectors" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-purple-500 opacity-10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 mb-4">
            <span className="text-base md:text-lg font-medium text-blue-400 font-primary">
              Ngành nghề hỗ trợ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            25 Ngành kinh doanh được{" "}
            <span className="text-blue-400">BCP.Global</span> hỗ trợ
          </h2>
          <p className="text-gray-300 font-primary">
            Khám phá danh sách đầy đủ các ngành kinh doanh mà nền tảng AI của
            chúng tôi có thể hỗ trợ kết nối và phát triển
          </p>
        </motion.div>

        {/* Business Groups Accordion */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">
            Danh sách ngành theo nhóm
          </h3>

          <Accordion type="multiple" className="space-y-4">
            {businessData.map((group, index) => (
              <AccordionItem
                key={group.groupId}
                value={group.groupId}
                className="border-none"
              >
                <GlassCard className="border-gray-700/50 bg-gray-800/30 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-4 h-4 rounded-full bg-gradient-to-r ${group.groupColor}`}
                      ></div>
                      <span className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {group.groupTitle}
                      </span>
                      <span className="text-sm text-gray-400">
                        ({group.sectors.length} ngành)
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {group.sectors.map((sector, sectorIndex) => (
                        <motion.div
                          key={sector.name}
                          className="flex items-start space-x-3 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: sectorIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                        >
                          <span className="text-2xl">{sector.icon}</span>
                          <div>
                            <h4 className="font-semibold text-white mb-1">
                              {sector.name}
                            </h4>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {sector.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </AccordionContent>
                </GlassCard>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">
            Ngành của bạn chưa có trong danh sách? Chúng tôi luôn sẵn sàng mở
            rộng hỗ trợ
          </p>
          <button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Liên hệ tư vấn
          </button>
        </motion.div>
      </div>
    </section>
  );
}

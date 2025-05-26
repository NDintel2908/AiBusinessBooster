
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { GlassCard } from "@/components/ui/glass-card";

const businessData = [
  {
    groupId: "manufacturing",
    groupTitle: "Sản xuất & Chế tạo",
    groupColor: "from-blue-500 to-cyan-500",
    sectors: [
      { 
        name: "Sản xuất thiết bị điện tử", 
        description: "Sản xuất các thiết bị điện tử tiêu dùng, linh kiện và phụ tùng công nghiệp",
        icon: "📱"
      },
      { 
        name: "Công nghiệp ô tô", 
        description: "Sản xuất và lắp ráp xe ô tô, xe máy và phụ tùng",
        icon: "🚗"
      },
      { 
        name: "Dệt may & Thời trang", 
        description: "Sản xuất vải, may mặc và thiết kế thời trang",
        icon: "👔"
      },
      { 
        name: "Thực phẩm & Đồ uống", 
        description: "Chế biến thực phẩm, sản xuất đồ uống và nguyên liệu",
        icon: "🍔"
      },
      { 
        name: "Dược phẩm", 
        description: "Nghiên cứu, phát triển và sản xuất thuốc, vaccine",
        icon: "💊"
      },
      { 
        name: "Hóa chất & Vật liệu", 
        description: "Sản xuất hóa chất công nghiệp, vật liệu xây dựng",
        icon: "🧪"
      }
    ]
  },
  {
    groupId: "technology",
    groupTitle: "Công nghệ & Dịch vụ số",
    groupColor: "from-purple-500 to-pink-500",
    sectors: [
      { 
        name: "Phần mềm & CNTT", 
        description: "Phát triển phần mềm, ứng dụng di động và giải pháp IT",
        icon: "💻"
      },
      { 
        name: "Thương mại điện tử", 
        description: "Nền tảng bán hàng online, marketplace và logistics",
        icon: "🛒"
      },
      { 
        name: "Fintech", 
        description: "Công nghệ tài chính, thanh toán điện tử, blockchain",
        icon: "💳"
      },
      { 
        name: "Giáo dục trực tuyến", 
        description: "Nền tảng học tập, khóa học online và edtech",
        icon: "📚"
      },
      { 
        name: "Gaming & Giải trí số", 
        description: "Phát triển game, content digital và streaming",
        icon: "🎮"
      },
      { 
        name: "IoT & AI", 
        description: "Internet of Things, trí tuệ nhân tạo và automation",
        icon: "🤖"
      }
    ]
  },
  {
    groupId: "services",
    groupTitle: "Dịch vụ & Thương mại",
    groupColor: "from-green-500 to-teal-500",
    sectors: [
      { 
        name: "Bán lẻ & Phân phối", 
        description: "Chuỗi cửa hàng, siêu thị và hệ thống phân phối",
        icon: "🏪"
      },
      { 
        name: "Ngân hàng & Tài chính", 
        description: "Dịch vụ ngân hàng, bảo hiểm và quản lý tài sản",
        icon: "🏦"
      },
      { 
        name: "Du lịch & Khách sạn", 
        description: "Dịch vụ du lịch, khách sạn và nghỉ dưỡng",
        icon: "🏨"
      },
      { 
        name: "Vận tải & Logistics", 
        description: "Vận chuyển hàng hóa, logistics và supply chain",
        icon: "🚛"
      },
      { 
        name: "Y tế & Chăm sóc sức khỏe", 
        description: "Bệnh viện, phòng khám và dịch vụ y tế",
        icon: "🏥"
      },
      { 
        name: "Tư vấn & Dịch vụ chuyên nghiệp", 
        description: "Tư vấn quản lý, pháp lý và dịch vụ B2B",
        icon: "💼"
      }
    ]
  },
  {
    groupId: "infrastructure",
    groupTitle: "Hạ tầng & Năng lượng",
    groupColor: "from-orange-500 to-red-500",
    sectors: [
      { 
        name: "Xây dựng & Bất động sản", 
        description: "Phát triển dự án, xây dựng và quản lý bất động sản",
        icon: "🏗️"
      },
      { 
        name: "Năng lượng tái tạo", 
        description: "Điện mặt trời, gió và các nguồn năng lượng xanh",
        icon: "⚡"
      },
      { 
        name: "Dầu khí & Khai thác", 
        description: "Thăm dò, khai thác và chế biến dầu khí",
        icon: "⛽"
      },
      { 
        name: "Viễn thông", 
        description: "Mạng di động, internet và hạ tầng viễn thông",
        icon: "📡"
      },
      { 
        name: "Nông nghiệp & Thủy sản", 
        description: "Sản xuất nông sản, chăn nuôi và nuôi trồng thủy sản",
        icon: "🌾"
      },
      { 
        name: "Môi trường & Tái chế", 
        description: "Xử lý chất thải, tái chế và bảo vệ môi trường",
        icon: "♻️"
      },
      { 
        name: "Hàng không & Vũ trụ", 
        description: "Hàng không dân dụng, vận tải hàng không và công nghệ vũ trụ",
        icon: "✈️"
      }
    ]
  }
];

export default function BusinessSectorsSection() {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  // Flatten all sectors for icon grid
  const allSectors = businessData.flatMap(group => 
    group.sectors.map(sector => ({
      ...sector,
      groupColor: group.groupColor,
      groupTitle: group.groupTitle
    }))
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
            <span className="text-base md:text-lg font-medium text-blue-400 font-primary">Ngành nghề hỗ trợ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            25 Ngành kinh doanh được <span className="text-blue-400">BCP.Global</span> hỗ trợ
          </h2>
          <p className="text-gray-300 font-primary">
            Khám phá danh sách đầy đủ các ngành kinh doanh mà nền tảng AI của chúng tôi có thể hỗ trợ kết nối và phát triển
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
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${group.groupColor}`}></div>
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
                          transition={{ duration: 0.4, delay: sectorIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-2xl">{sector.icon}</span>
                          <div>
                            <h4 className="font-semibold text-white mb-1">{sector.name}</h4>
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

        {/* Icons Grid Section */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">
            Biểu tượng ngành nghề
          </h3>

          <TooltipProvider>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {allSectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredSector(sector.name)}
                  onMouseLeave={() => setHoveredSector(null)}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className={`
                        flex flex-col items-center p-4 rounded-xl 
                        bg-gray-800/30 border border-gray-700/50 
                        hover:border-blue-400/50 hover:bg-gray-700/50
                        transition-all duration-300 cursor-pointer
                        ${hoveredSector === sector.name ? 'scale-105 shadow-lg shadow-blue-500/20' : ''}
                      `}>
                        <div className={`
                          w-12 h-12 rounded-full bg-gradient-to-r ${sector.groupColor} 
                          flex items-center justify-center mb-3
                          text-2xl shadow-lg
                        `}>
                          {sector.icon}
                        </div>
                        <span className="text-xs font-medium text-gray-300 text-center leading-tight">
                          {sector.name}
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs p-3 bg-gray-900 border border-gray-700">
                      <div className="space-y-2">
                        <div className="font-semibold text-white">{sector.name}</div>
                        <div className="text-sm text-gray-400">{sector.description}</div>
                        <div className={`text-xs bg-gradient-to-r ${sector.groupColor} bg-clip-text text-transparent font-medium`}>
                          {sector.groupTitle}
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </div>
          </TooltipProvider>
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
            Ngành của bạn chưa có trong danh sách? Chúng tôi luôn sẵn sàng mở rộng hỗ trợ
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            Liên hệ tư vấn
          </button>
        </motion.div>
      </div>
    </section>
  );
}

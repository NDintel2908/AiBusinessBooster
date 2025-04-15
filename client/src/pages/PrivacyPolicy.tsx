
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    { id: 1, title: "Thông tin người dùng cung cấp" },
    { id: 2, title: "Cách BCP sử dụng thông tin người dùng" },
    { id: 3, title: "Cách BCP chia sẻ thông tin người dùng" },
    { id: 4, title: "Cách BCP lưu trữ thông tin người dùng" },
    { id: 5, title: "Quyền và lựa chọn của người dùng" },
    { id: 6, title: "Bảo mật thông tin" },
    { id: 7, title: "Thời gian thông tin được lưu trữ" },
    { id: 8, title: "Điều khoản bổ sung" },
    { id: 9, title: "Liên hệ" }
  ];

  return (
    <div className="min-h-screen bg-deep-dark text-gray-200">
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <nav className="sticky top-32">
              <ul className="space-y-2 border-l border-gray-800">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`block w-full text-left pl-4 py-2 transition-colors duration-200 ${
                        activeSection === section.id
                          ? "border-l-2 border-electric-purple text-electric-purple font-semibold -ml-[1px]"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      {section.id}. {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-9"
          >
            <h1 className="text-4xl font-heading font-bold mb-4 text-white">Điều Khoản Dịch Vụ</h1>
            <p className="text-gray-400 mb-8">Cập nhật: Tháng 3/2024</p>

            <div className="prose prose-invert max-w-none space-y-8 font-primary">
              <section id="section1">
                <h2 className="text-2xl font-heading font-semibold mb-4">1. Thông tin người dùng cung cấp</h2>
                <p className="text-gray-300">
                  Khi sử dụng nền tảng BCP, chúng tôi thu thập các thông tin mà bạn cung cấp trực tiếp cho chúng tôi, bao gồm:
                  • Thông tin doanh nghiệp (tên công ty, mã số thuế, địa chỉ)
                  • Thông tin người đại diện (họ tên, email, số điện thoại)
                  • Thông tin kinh doanh (ngành nghề, sản phẩm/dịch vụ, quy mô)
                </p>
              </section>

              <section id="section2">
                <h2 className="text-2xl font-heading font-semibold mb-4">2. Cách BCP sử dụng thông tin người dùng</h2>
                <p className="text-gray-300">
                  BCP sử dụng thông tin của bạn để:
                  • Cung cấp và cải thiện dịch vụ kết nối B2B
                  • Phân tích và đề xuất đối tác phù hợp
                  • Bảo mật và xác thực tài khoản
                  • Gửi thông báo và cập nhật về dịch vụ
                </p>
              </section>

              {/* Add remaining sections similarly */}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    { id: 1, title: "Điều khoản chung" },
    { id: 2, title: "Quy định về tài khoản" },
    { id: 3, title: "Quyền và nghĩa vụ của người dùng" }, 
    { id: 4, title: "Quyền và nghĩa vụ của BCP" },
    { id: 5, title: "Phí dịch vụ và thanh toán" },
    { id: 6, title: "Sở hữu trí tuệ" },
    { id: 7, title: "Giới hạn trách nhiệm" },
    { id: 8, title: "Chấm dứt dịch vụ" },
    { id: 9, title: "Luật áp dụng và giải quyết tranh chấp" }
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
            
            <div className="prose prose-invert max-w-none space-y-6">
              <section id="section1">
                <h2 className="text-2xl font-heading font-semibold mb-4">1. Điều khoản chung</h2>
                <p>Chào mừng bạn đến với Business Connecting Platform ("BCP" hoặc "Nền tảng"). Điều khoản Dịch vụ này quy định các điều kiện pháp lý chi phối việc sử dụng Nền tảng của bạn.</p>
                <p>Bằng việc truy cập hoặc sử dụng Nền tảng, bạn đồng ý bị ràng buộc bởi các điều khoản và điều kiện được quy định trong tài liệu này.</p>
              </section>

              <section id="section2">
                <h2 className="text-2xl font-heading font-semibold mb-4">2. Quy định về tài khoản</h2>
                <p>Để sử dụng dịch vụ của BCP, bạn cần tạo một tài khoản doanh nghiệp. Bạn cam kết rằng mọi thông tin cung cấp là chính xác, đầy đủ và cập nhật.</p>
              </section>

              {/* Add more sections as needed */}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

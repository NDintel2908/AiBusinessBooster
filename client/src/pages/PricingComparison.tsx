import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function PricingComparison() {
  return (
    <div className="min-h-screen bg-deep-dark text-gray-200">
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple">
              So sánh chi tiết các gói dịch vụ
            </span>
          </h1>
          <p className="text-gray-300 font-primary max-w-3xl">
            Lựa chọn gói dịch vụ phù hợp với nhu cầu kinh doanh của bạn. So sánh các tính năng và đặc quyền để có quyết định đúng đắn.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse mb-10">
            <thead>
              <tr className="bg-gray-800/60">
                <th className="px-4 py-3 border border-gray-700 text-left font-heading text-white">#</th>
                <th className="px-4 py-3 border border-gray-700 text-left font-heading text-white min-w-[200px]">Các điểm so sánh</th>
                <th className="px-4 py-3 border border-gray-700 text-center font-heading text-white min-w-[150px]">Starter Plan</th>
                <th colSpan={2} className="px-4 py-3 border border-gray-700 text-center font-heading text-white bg-yellow-600/30 min-w-[300px]">
                  Premium Company
                </th>
                <th className="px-4 py-3 border border-gray-700 text-center font-heading text-white min-w-[150px]">Slot Connecting</th>
              </tr>
              <tr className="bg-gray-800/30">
                <th className="px-4 py-2 border border-gray-700"></th>
                <th className="px-4 py-2 border border-gray-700"></th>
                <th className="px-4 py-2 border border-gray-700"></th>
                <th className="px-4 py-2 border border-gray-700 text-center font-heading text-white">Công ty Việt</th>
                <th className="px-4 py-2 border border-gray-700 text-center font-heading text-white">Công ty nước ngoài</th>
                <th className="px-4 py-2 border border-gray-700"></th>
              </tr>
            </thead>
            <tbody>
              {/* Phần Thông tin chung */}
              <tr>
                <td colSpan={6} className="px-4 py-3 border border-gray-700 bg-gray-800/50 font-heading text-red-500 font-semibold">
                  THÔNG TIN CHUNG
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">1</td>
                <td className="px-4 py-3 border border-gray-700">Hình thức</td>
                <td className="px-4 py-3 border border-gray-700 text-center">X</td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>Subscription</td>
                <td className="px-4 py-3 border border-gray-700 text-center">X</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">2</td>
                <td className="px-4 py-3 border border-gray-700">Giá cả</td>
                <td className="px-4 py-3 border border-gray-700 text-center">Miễn phí</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <p><span className="font-bold text-red-500">1.250.000 VND/tháng</span></p>
                  <p>hoặc</p>
                  <p><span className="font-bold text-red-500">15.000.000 VND/năm</span></p>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <p><span className="font-bold text-red-500">50 USD/tháng</span></p>
                  <p>hoặc</p>
                  <p><span className="font-bold text-red-500">600 USD/năm</span></p>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center">250.000 VND/lượt kết nối</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">3</td>
                <td className="px-4 py-3 border border-gray-700">Thuế GTGT (VAT)</td>
                <td className="px-4 py-3 border border-gray-700 text-center">8%</td>
                <td className="px-4 py-3 border border-gray-700 text-center">8%</td>
                <td className="px-4 py-3 border border-gray-700 text-center">8%</td>
                <td className="px-4 py-3 border border-gray-700 text-center">8%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">4</td>
                <td className="px-4 py-3 border border-gray-700">Hồ sơ doanh nghiệp</td>
                <td className="px-4 py-3 border border-gray-700 text-center">Cơ bản</td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>Đầy đủ + Xác thực</td>
                <td className="px-4 py-3 border border-gray-700 text-center">Theo gói đăng ký</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">5</td>
                <td className="px-4 py-3 border border-gray-700">AI hỗ trợ tìm kiếm đối tác</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-green-500">✓</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  <span className="text-green-500">✓</span> Ưu tiên
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-green-500">✓</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">6</td>
                <td className="px-4 py-3 border border-gray-700">Trò chuyện 1on1 với đối tác</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-red-500">✕</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>Xác thực cấp 3</td>
                <td className="px-4 py-3 border border-gray-700 text-center">Xác thực cấp 2</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">7</td>
                <td className="px-4 py-3 border border-gray-700">Tìm kiếm đối tác quốc tế</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-green-500">✓</span> Hạn chế
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  <span className="text-green-500">✓</span> Đầy đủ
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-green-500">✓</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">8</td>
                <td className="px-4 py-3 border border-gray-700">Hỗ trợ</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <p>Email: <span className="text-green-500">✓</span></p>
                  <p>Zalo: <span className="text-green-500">✓</span></p>
                  <p>Whatsapp: <span className="text-green-500">✓</span></p>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  <p>Email: <span className="text-green-500">✓</span></p>
                  <p>Zalo: <span className="text-green-500">✓</span></p>
                  <p>Whatsapp: <span className="text-green-500">✓</span></p>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <p>Email: <span className="text-green-500">✓</span></p>
                  <p>Zalo: <span className="text-green-500">✓</span></p>
                  <p>Whatsapp: <span className="text-green-500">✓</span></p>
                </td>
              </tr>

              {/* Phần Đặc quyền */}
              <tr>
                <td colSpan={6} className="px-4 py-3 border border-gray-700 bg-gray-800/50 font-heading text-red-500 font-semibold">
                  ĐẶC QUYỀN
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">9</td>
                <td className="px-4 py-3 border border-gray-700">Nhân viên hỗ trợ</td>
                <td className="px-4 py-3 border border-gray-700 text-center">AI</td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>AI + Human</td>
                <td className="px-4 py-3 border border-gray-700 text-center">AI</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">10</td>
                <td className="px-4 py-3 border border-gray-700">Xác thực cấp độ cao nhất</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-red-500">✕</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  <span className="text-green-500">✓</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-red-500">✕</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">11</td>
                <td className="px-4 py-3 border border-gray-700">Training dữ liệu công ty riêng</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-red-500">✕</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  <span className="text-green-500">✓</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-red-500">✕</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">12</td>
                <td className="px-4 py-3 border border-gray-700">Hiển thị top và active bởi AI</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-red-500">✕</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  <span className="text-green-500">✓</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-red-500">✕</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 mb-10">
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">Các lưu ý quan trọng:</h3>
            <ul className="list-disc pl-6 space-y-2 font-primary text-gray-300">
              <li>Giá trên chưa bao gồm 8% VAT theo quy định của pháp luật.</li>
              <li>Đăng ký gói Premium Company năm sẽ được ưu đãi 2 tháng miễn phí.</li>
              <li>Xác thực cấp độ cao nhất giúp tăng độ tin cậy và tỷ lệ kết nối thành công.</li>
              <li>Slot Connecting có thể được mua riêng lẻ hoặc kết hợp với các gói dịch vụ khác.</li>
            </ul>
          </div>

          <div className="flex justify-center mt-10">
            <a href="https://bcp.global/credit" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-neon-blue to-electric-purple py-3 px-8 rounded-full text-white font-primary font-semibold transition-all duration-300 hover:shadow-glow">
              Đăng ký ngay
            </a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
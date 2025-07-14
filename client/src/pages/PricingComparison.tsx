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
                  Premium User
                </th>
              </tr>
              <tr className="bg-gray-800/30">
                <th className="px-4 py-2 border border-gray-700"></th>
                <th className="px-4 py-2 border border-gray-700"></th>
                <th className="px-4 py-2 border border-gray-700"></th>
                <th className="px-4 py-2 border border-gray-700 text-center font-heading text-white">Công ty Việt</th>
                <th className="px-4 py-2 border border-gray-700 text-center font-heading text-white">Công ty nước ngoài</th>
              </tr>
            </thead>
            <tbody>
              {/* Phần Thông tin chung */}
              <tr>
                <td colSpan={5} className="px-4 py-3 border border-gray-700 bg-gray-800/50 font-heading text-red-500 font-semibold">
                  THÔNG TIN CHUNG
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">1</td>
                <td className="px-4 py-3 border border-gray-700">Hình thức</td>
                <td className="px-4 py-3 border border-gray-700 text-center">Trial</td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>Subscription</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">2</td>
                <td className="px-4 py-3 border border-gray-700">Giá</td>
                <td className="px-4 py-3 border border-gray-700 text-center">Miễn phí</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                 
                  <p><span className="font-bold text-red-500">30.000.000 VND/năm</span></p>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  
                  <p><span className="font-bold text-red-500">1200 USD/năm</span></p>
                </td>
              </tr>

              
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">3</td>
                <td className="px-4 py-3 border border-gray-700">VAT</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-white-500">8%</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  <span className="text-white-500">8%</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">4</td>
                <td className="px-4 py-3 border border-gray-700">Số lượt kết nối</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  Không giới hạn
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>Không giới hạn</td>
              </tr>
              
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">5</td>
                <td className="px-4 py-3 border border-gray-700">AI hỗ trợ cơ bản</td>
                <td className="px-4 py-3 border border-gray-700 text-center">✓</td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}><span className="text-green-500">✓</span></td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">6</td>
                <td className="px-4 py-3 border border-gray-700">AI Matching Agent</td>
                <td className="px-4 py-3 border border-gray-700 text-center">✓ (phải mua credits)</td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}><span className="text-green-500">✓</span></td>
              </tr>
              

              {/* Phần Đặc quyền */}
              <tr>
                <td colSpan={5} className="px-4 py-3 border border-gray-700 bg-gray-800/50 font-heading text-red-500 font-semibold">
                  ĐẶC QUYỀN
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">7</td>
                <td className="px-4 py-3 border border-gray-700">Hồ sơ</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  Tiêu chuẩn	
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  Nâng cao
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">8</td>
                <td className="px-4 py-3 border border-gray-700">Hỗ trợ bởi AI & Human</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  Trong vòng 2 tiếng kể từ lúc nhận được request	
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  24/7
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">9</td>
                <td className="px-4 py-3 border border-gray-700">Xác thực cấp độ cao nhất<br/>(verified nhận tích xanh)</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-red-500">✕</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  <span className="text-green-500">✓</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">10</td>
                <td className="px-4 py-3 border border-gray-700">Hiển thị trên top qua keyword<br/>(được chọn lọc & hiển thị top bởi<br/>AI gần với các keywords)</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-red-500">✕</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  <span className="text-green-500">✓</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">11</td>
                <td className="px-4 py-3 border border-gray-700">Ưu tiên nhận demand & kết quả</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-red-500">✕</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  <span className="text-green-500">✓</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">12</td>
                <td className="px-4 py-3 border border-gray-700">Chi phí cho 1 lượt trò chuyện cùng đối tác</td>
                <td className="px-4 py-3 border border-gray-700 text-center">500.000 VND/lượt</td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  <span className="text-white-500">Được 10 kết nối mới mỗi tháng
                  
                  <p>Không áp dụng cộng dồn	</p></span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">13</td>
                <td className="px-4 py-3 border border-gray-700">Dữ liệu DN được training riêng bởi human & AI</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-red-500">✕</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  <span className="text-green-500">✓</span>
                </td>
              </tr>

              {/* Phần Dịch vụ AI mở rộng */}
              <tr>
                <td colSpan={5} className="px-4 py-3 border border-gray-700 bg-gray-800/50 font-heading text-red-500 font-semibold">
                  DỊCH VỤ AI MỞ RỘNG
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">14</td>
                <td className="px-4 py-3 border border-gray-700">Được ưu tiên trải nghiệm các tính năng AI mới</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-red-500">✕</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  <span className="text-green-500">✓</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">15</td>
                <td className="px-4 py-3 border border-gray-700">Mời tham gia các sự kiện chương trình kết nối giao thương global của BCP</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-red-500">✕</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  <span className="text-green-500">✓</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-700 text-center">16</td>
                <td className="px-4 py-3 border border-gray-700">Được mời tham gia đào tạo AI và kết nối với hệ sinh thái AIPartners.asia</td>
                <td className="px-4 py-3 border border-gray-700 text-center">
                  <span className="text-red-500">✕</span>
                </td>
                <td className="px-4 py-3 border border-gray-700 text-center" colSpan={2}>
                  <span className="text-green-500">✓</span>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Slot Connecting Table */}
          <div className="mt-12 mb-10 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-3 border border-gray-700 text-left font-heading text-white min-w-[200px]">Thông tin</th>
                  <th className="px-4 py-3 border border-gray-700 text-center font-heading text-white min-w-[300px] bg-[#e9e5f7]/20">
                    Slot Connecting
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border border-gray-700">Hình thức</td>
                  <td className="px-4 py-3 border border-gray-700">
                    <span className="text-red-500">✕</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-gray-700">Giá</td>
                  <td className="px-4 py-3 border border-gray-700">
                    <p><strong>Gửi</strong>: 20 USD = 500,000 VND/lượt ~ 100 credits</p>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-gray-700">VAT</td>
                  <td className="px-4 py-3 border border-gray-700">8%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-gray-700">Số lượt kết nối</td>
                  <td className="px-4 py-3 border border-gray-700 italic">
                    Chỉ có thể sử dụng AI Matching khi đạt Verified level 2
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

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
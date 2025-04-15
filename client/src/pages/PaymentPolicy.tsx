
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function PaymentPolicy() {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    { id: 1, title: "Phương thức thanh toán" },
    { id: 2, title: "Quy trình thanh toán" },
    { id: 3, title: "Chính sách hoàn tiền" },
    { id: 4, title: "Bảo mật thông tin thanh toán" },
    { id: 5, title: "Xử lý lỗi giao dịch" },
    { id: 6, title: "Điều khoản bổ sung" },
    { id: 7, title: "Liên hệ" }
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
            <h1 className="text-4xl font-heading font-bold mb-4 text-white">Chính sách Thanh toán</h1>
            <p className="text-gray-400 mb-8">Cập nhật: Tháng 3/2024</p>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <section id="section1">
                <h2 className="text-2xl font-heading font-semibold mb-4">1. Phương thức thanh toán</h2>
                <p>BCP chấp nhận các phương thức thanh toán sau:</p>
                <ul>
                  <li>Chuyển khoản ngân hàng</li>
                  <li>Thẻ tín dụng/ghi nợ quốc tế (Visa, Mastercard, JCB)</li>
                  <li>Ví điện tử (MoMo, ZaloPay, VNPay)</li>
                </ul>
                <p>Tất cả các giao dịch đều được thực hiện thông qua các cổng thanh toán được cấp phép hoạt động tại Việt Nam, đảm bảo an toàn và bảo mật cho người dùng.</p>
              </section>

              <section id="section2">
                <h2 className="text-2xl font-heading font-semibold mb-4">2. Quy trình thanh toán</h2>
                <p>Quy trình thanh toán trên BCP bao gồm các bước sau:</p>
                <ul>
                  <li>Chọn gói dịch vụ/số lượng Credit cần mua</li>
                  <li>Chọn phương thức thanh toán</li>
                  <li>Xác nhận thông tin và hoàn tất thanh toán</li>
                  <li>Nhận thông báo xác nhận giao dịch thành công</li>
                </ul>
                <p>Credit sẽ được cộng vào tài khoản ngay sau khi giao dịch được xác nhận thành công.</p>
              </section>

              <section id="section3">
                <h2 className="text-2xl font-heading font-semibold mb-4">3. Chính sách hoàn tiền</h2>
                <p>BCP áp dụng chính sách hoàn tiền trong các trường hợp sau:</p>
                <ul>
                  <li>Lỗi hệ thống dẫn đến trừ tiền hai lần cho một giao dịch</li>
                  <li>Giao dịch không thành công nhưng đã bị trừ tiền</li>
                  <li>Các trường hợp đặc biệt khác được xem xét theo từng trường hợp cụ thể</li>
                </ul>
                <p>Yêu cầu hoàn tiền cần được gửi trong vòng 24 giờ kể từ thời điểm phát sinh vấn đề.</p>
              </section>

              <section id="section4">
                <h2 className="text-2xl font-heading font-semibold mb-4">4. Bảo mật thông tin thanh toán</h2>
                <p>BCP cam kết bảo mật thông tin thanh toán của người dùng:</p>
                <ul>
                  <li>Sử dụng công nghệ mã hóa SSL 256-bit cho mọi giao dịch</li>
                  <li>Không lưu trữ thông tin thẻ thanh toán</li>
                  <li>Tuân thủ các tiêu chuẩn bảo mật quốc tế PCI DSS</li>
                </ul>
              </section>

              <section id="section5">
                <h2 className="text-2xl font-heading font-semibold mb-4">5. Xử lý lỗi giao dịch</h2>
                <p>Trong trường hợp gặp lỗi giao dịch:</p>
                <ul>
                  <li>Liên hệ ngay với bộ phận hỗ trợ qua email: connect@bcp.global</li>
                  <li>Cung cấp mã giao dịch và chứng từ thanh toán liên quan</li>
                  <li>Thời gian xử lý: 1-3 ngày làm việc</li>
                </ul>
              </section>

              <section id="section6">
                <h2 className="text-2xl font-heading font-semibold mb-4">6. Điều khoản bổ sung</h2>
                <p>BCP có quyền thay đổi chính sách thanh toán này mà không cần thông báo trước. Mọi thay đổi sẽ được cập nhật trên trang web và có hiệu lực ngay lập tức.</p>
              </section>

              <section id="section7">
                <h2 className="text-2xl font-heading font-semibold mb-4">7. Liên hệ</h2>
                <p>Mọi thắc mắc về thanh toán, vui lòng liên hệ:</p>
                <ul>
                  <li>Email: connect@bcp.global</li>
                  <li>Hotline: 0767673182</li>
                  <li>Địa chỉ: Tầng 2, 81 Cách Mạng Tháng Tám, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

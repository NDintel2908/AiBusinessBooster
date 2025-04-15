
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function PaymentPolicy() {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    { id: 1, title: "Phương thức thanh toán" },
    { id: 2, title: "Điều khoản và điều kiện thanh toán" },
    { id: 3, title: "Bảo mật thanh toán" },
    { id: 4, title: "Quản lý đăng ký và nâng cấp" },
    { id: 5, title: "Tuân thủ pháp lý" }
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
                <p>BCP cung cấp nhiều tuỳ chọn thanh toán để đáp ứng nhu cầu đa dạng của Doanh nghiệp:</p>
                <ul>
                  <li>Thanh toán qua mã QR (VNPay): Quét mã VNPayQR để thanh toán dễ dàng</li>
                  <li>Ví điện tử PayPal: Hỗ trợ thanh toán quốc tế qua thẻ Visa, Mastercard, Amex, Discover...</li>
                  <li>Thanh toán định kỳ: Áp dụng cho các gói dịch vụ SaaS với hình thức thanh toán hàng tháng hoặc hàng năm.</li>
                </ul>
                <p>Mọi giao dịch được thực hiện qua cổng thanh toán đối tác, đảm bảo an toàn và bảo mật theo chuẩn quốc tế.</p>
              </section>

              <section id="section2">
                <h2 className="text-2xl font-heading font-semibold mb-4">2. Quy trình thanh toán</h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p><strong>2.1. Thời hạn thanh toán</strong></p>
                  <p>Thanh toán phải được thực hiện ngay khi đặt hàng hoặc trước khi kích hoạt dịch vụ.</p>
                  <p>Đối với các gói định kỳ, Doanh nghiệp sẽ nhận được thông báo nhắc nhở trước 7 ngày về việc gia hạn.</p>
                  <p>Trong trường hợp Doanh nghiệp thanh toán trễ hạn, BCP sẽ áp dụng phí phạt 5% trên tổng giá trị hoá đơn trong lần thanh toán tiếp theo (sau 30 ngày kể từ ngày đến hạn).</p>

                  <p><strong>2.2. Chính sách hoàn tiền</strong></p>
                  <p>Các Doanh nghiệp sẽ được hưởng chính sách hoàn tiền khi thoả mãn đủ các điều kiện sau:</p>
                  <ul>
                    <li>Huỷ dịch vụ trong vòng 7 ngày kể từ ngày mua (không áp dụng cho gói Slot Connecting);</li>
                    <li>Chưa sử dụng gói dịch vụ để kết nối, sử dụng đặc quyền của các gói dịch vụ định kỳ.</li>
                    <li>Hoàn tiền đầy đủ nếu khách hàng hủy dịch vụ trong vòng 14 ngày kể từ ngày mua (áp dụng cho gói dùng thử).</li>
                  </ul>
                  <p>Trong trường hợp Doanh nghiệp đã sử dụng phần lớn thời gian hoặc tài nguyên dịch vụ do BCP cung cấp, các yêu cầu hoàn tiền sẽ không khả dụng.</p>
                  <p>Doanh nghiệp có thể tìm hiểu thêm về Dịch vụ trả phí của BCP tại Điều khoản Dịch vụ.</p>

                </div>
              </section>

              <section id="section3">
                <h2 className="text-2xl font-heading font-semibold mb-4">3. Chính sách hoàn tiền</h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p>BCP cam kết bảo vệ thông tin khách hàng bằng cách:</p>
                  <ul>
                    <li>Mã hóa dữ liệu (SSL/TLS): Tất cả thông tin giao dịch sẽ được mã hóa để đảm bảo an toàn.</li>
                    <li>Tuân thủ PCI DSS: Hệ thống thanh toán tuân thủ tiêu chuẩn bảo mật ngành thẻ để ngăn ngừa gian lận.</li>
                  </ul>

                </div>
              </section>

              <section id="section4">
                <h2 className="text-2xl font-heading font-semibold mb-4">4. Bảo mật thông tin thanh toán</h2>
                Doanh nghiệp có thể đăng ký nâng cấp các gói dịch vụ bất kỳ lúc nào thông qua cổng quản lý dịch vụ. Trong trường hợp Doanh nghiệp cần được hỗ trợ có thể liên hệ ngay với chúng tôi thông qua chatbot AI hoặc email: connect@bcp.global
              </section>

              <section id="section5">
                <h2 className="text-2xl font-heading font-semibold mb-4">5. Xử lý lỗi giao dịch</h2>
                <div className="prose prose-invert max-w-none space-y-6">
                  <p>Chính sách thanh toán của BCP tuân thủ các quy định pháp luật Việt Nam và Quốc tế:</p>
                  <ul>
                    <li>Luật bảo vệ dữ liệu cá nhân (GDPR): Bảo vệ quyền riêng tư và dữ liệu của khách hàng;</li>
                    <li>Đảm bảo minh bạch về phí và các điều khoản giao dịch.</li>
                  </ul>

                  </div>
              </section>

              
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

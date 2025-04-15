
import { motion } from "framer-motion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-deep-dark text-gray-200">
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-white">Chính sách Quyền Riêng Tư</h1>
          <p>
            Chào mừng bạn đến với Business Connecting Platform ("BCP" hoặc "Nền tảng").

            Chính sách Quyền Riêng Tư này áp dụng cho các dịch vụ của BCP, bao gồm trang web, ứng dụng, sản phẩm, phần mềm, nội dung và các dịch vụ liên quan khác, được truy cập thông qua bất kỳ nền tảng hoặc thiết bị nào có liên kết với Chính sách này. Nền tảng được cung cấp và vận hành bởi Công ty Cổ phần BCP (“chúng tôi”).

            Chúng tôi cam kết bảo vệ và tôn trọng quyền riêng tư của bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng, chia sẻ và xử lý thông tin doanh nghiệp của người dùng cũng như các doanh nghiệp khác có liên quan đến Nền tảng của chúng tôi. Nếu bạn không đồng ý với Chính sách này, vui lòng không sử dụng Nền tảng.

            BCP bảo lưu quyền thay đổi Chính sách này bất kỳ lúc nào, và các cập nhật sẽ được thông báo đến bạn qua các phương tiện phù hợp, chẳng hạn như tin nhắn trong Nền tảng. Chúng tôi khuyến nghị bạn thường xuyên xem xét Chính sách này cùng với Điều khoản và Điều kiện sử dụng ("Điều khoản") để hiểu rõ cách chúng tôi thu thập và sử dụng thông tin của bạn ("dữ liệu doanh nghiệp", "dữ liệu người dùng" hoặc "thông tin doanh nghiệp").

            Bằng cách cài đặt, sử dụng, đăng ký hoặc truy cập dịch vụ theo bất kỳ hình thức nào, bạn đồng ý với Chính sách Quyền Riêng Tư này và xác nhận rằng bạn đã cung cấp sự chấp thuận rõ ràng, đầy đủ về việc xử lý dữ liệu doanh nghiệp của mình theo các điều khoản trong Chính sách này.

          </p>
          <div className="prose prose-invert max-w-none space-y-6 font-primary">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Giới thiệu</h2>
              <p>BCP cam kết bảo vệ quyền riêng tư của bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn khi bạn sử dụng nền tảng của chúng tôi.</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">2. Thông tin chúng tôi thu thập</h2>
              <p>Chúng tôi thu thập các thông tin sau:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Thông tin doanh nghiệp</li>
                <li>Thông tin liên hệ</li>
                <li>Dữ liệu sử dụng dịch vụ</li>
                <li>Thông tin giao dịch</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">3. Mục đích sử dụng thông tin</h2>
              <p>Chúng tôi sử dụng thông tin của bạn để:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Cung cấp và cải thiện dịch vụ</li>
                <li>Kết nối với đối tác phù hợp</li>
                <li>Bảo mật tài khoản</li>
                <li>Gửi thông tin cập nhật</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">4. Bảo mật thông tin</h2>
              <p>Chúng tôi áp dụng các biện pháp bảo mật nghiêm ngặt để bảo vệ thông tin của bạn, bao gồm mã hóa dữ liệu, kiểm soát truy cập và giám sát an ninh liên tục.</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Liên hệ</h2>
              <p>Nếu bạn có bất kỳ câu hỏi nào về chính sách quyền riêng tư của chúng tôi, vui lòng liên hệ:</p>
              <p>Email: support@bcp.ai</p>
              <p>Điện thoại: 0767673182</p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

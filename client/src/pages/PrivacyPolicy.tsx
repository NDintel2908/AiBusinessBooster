
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-deep-dark text-gray-200">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-white">Chính sách Quyền Riêng Tư</h1>
          
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
    </div>
  );
}

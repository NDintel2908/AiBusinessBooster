
import { motion } from "framer-motion";

export default function ServiceSection() {
  return (
    <section id="service-section" className="relative py-16 md:py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-[2.5rem] font-bold text-white mb-4 font-heading">
            Sự khác biệt của BCP.Global
          </h2>
          <p className="text-[1.1rem] text-gray-400 max-w-3xl mx-auto font-primary">
            Khám phá sự hỗ trợ đặc biệt và những lợi thế độc đáo giúp BCP nổi bật trong câu chuyện kinh doanh của bạn.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto h-[600px]">
          {/* Central Logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 flex items-center justify-center border-4 border-blue-400 shadow-2xl shadow-blue-500/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">JobTest</div>
                <div className="text-sm text-blue-200">POWERED BY AI - GENERATIVE AI TALENT</div>
              </div>
            </div>
            {/* Orbital rings */}
            <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
            <div className="absolute -inset-8 border border-blue-400/20 rounded-full"></div>
            <div className="absolute -inset-16 border border-blue-400/10 rounded-full"></div>
          </div>

          {/* Top Left - Đánh giá toàn diện */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 w-80"
          >
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Đánh giá toàn diện</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Đa dạng các bài đánh giá: trắc nghiệm, khả năng nói, tròi, tố chất, phong cách lãnh đạo, mức độ phù hợp công việc, phổ họp vận hóc, phân hỏi 360, đội ngũ kế cận.</li>
                <li>• Đánh giá trước khi tuyển dụng, onboarding, đào tạo, phát triển lãnh đạo, bổ nhiệm,...</li>
              </ul>
            </div>
          </motion.div>

          {/* Top Right - Giám sát gian lận */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-0 right-0 w-80"
          >
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Giám sát gian lận</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Xác thực không gian thi cử thỏa mãn đinh gió với sự giám sát thông qua màn hình và webcam.</li>
                <li>• Ngăn chặn sao chép vần bản bằng cách vô hiệu hóa chức năng sao chép vần bản khi đang giá, ứng viên không thể sao chép về chia sẻ với người khác.</li>
                <li>• Tính năng giám sát thi có theo dõi hoạt động của ứng viên khi thoát khỏi màn hình đánh giá.</li>
                <li>• Cá nhân hóa bộ câu hỏi đánh giá giúp giảm thiểu khả năng sao chép giữa các ứng viên.</li>
              </ul>
            </div>
          </motion.div>

          {/* Bottom Left - Tùy biến linh hoạt */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-0 w-80"
          >
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Tùy biến linh hoạt</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Tùy biến giao diện, thay đổi mẫu sắc theo nhận diện thương hiệu của công ty.</li>
                <li>• Đa ngôn ngữ - đa thiết bị</li>
                <li>• Truy cập mọi lúc, mọi nơi.</li>
                <li>• Mở phòng tình huống, gamified như trong môi trường làm việc thật.</li>
                <li>• Tham chiếu điểm chuẩn thị trường, ngành, vị trí công việc của hơn 24 tính vực ngành nghề.</li>
              </ul>
            </div>
          </motion.div>

          {/* Bottom Right - Tự động hóa, quy trình đánh giá */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute bottom-0 right-0 w-80"
          >
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Tự động hóa, quy trình đánh giá</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Tự động hóa quy trình đánh giá từ việc tạo đánh giá cho đến thư mời, lúc chọ kết quả.</li>
                <li>• Đảm bảo tính bảo mật cho các bên tham gia đánh giá.</li>
                <li>• Thực hiện đánh giá hàng chức nghìn lượt ứng viên, nhân viên cùng lúc.</li>
              </ul>
            </div>
          </motion.div>

          {/* Connecting lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top connections */}
            <div className="absolute top-24 left-1/2 w-32 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent transform -translate-x-full"></div>
            <div className="absolute top-24 left-1/2 w-32 h-0.5 bg-gradient-to-l from-blue-400/50 to-transparent"></div>
            
            {/* Bottom connections */}
            <div className="absolute bottom-24 left-1/2 w-32 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent transform -translate-x-full"></div>
            <div className="absolute bottom-24 left-1/2 w-32 h-0.5 bg-gradient-to-l from-blue-400/50 to-transparent"></div>
            
            {/* Left connections */}
            <div className="absolute left-24 top-1/2 w-0.5 h-32 bg-gradient-to-b from-blue-400/50 to-transparent transform -translate-y-full"></div>
            <div className="absolute left-24 top-1/2 w-0.5 h-32 bg-gradient-to-t from-blue-400/50 to-transparent"></div>
            
            {/* Right connections */}
            <div className="absolute right-24 top-1/2 w-0.5 h-32 bg-gradient-to-b from-blue-400/50 to-transparent transform -translate-y-full"></div>
            <div className="absolute right-24 top-1/2 w-0.5 h-32 bg-gradient-to-t from-blue-400/50 to-transparent"></div>
          </div>

          {/* Corner icons */}
          <div className="absolute top-20 left-20 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          
          <div className="absolute top-20 right-20 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
            </svg>
          </div>
          
          <div className="absolute bottom-20 left-20 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
            </svg>
          </div>
          
          <div className="absolute bottom-20 right-20 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

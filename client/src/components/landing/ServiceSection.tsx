
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

        {/* Mobile Layout - Stacked */}
        <div className="grid grid-cols-1 md:hidden gap-8 max-w-lg mx-auto">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-md"
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Đánh giá toàn diện
            </h3>
            <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
              <li>• Đa dạng các bài đánh giá: trắc nghiệm, khả năng nói tròi, tố chất, phong cách lãnh đạo, mức độ phù hợp công việc, phổ họp vận hóc, phân hỏi 360, đội ngũ kế cận.</li>
              <li>• Đánh giá trước khi tuyển dụng, onboarding, đào tạo, phát triển lãnh đạo, bổ nhiệm.</li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-md"
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
              Giám sát gian lận
            </h3>
            <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
              <li>• Xác thực không gian thi cử thỏa mãn đinh gió với sự giám sát thông qua màn hình và webcam.</li>
              <li>• Ngăn chặn sao chép vần bản bằng cách vô hiệu hóa chức năng sao chép vần bản khi đang giá, ứng viên không thể sao chép về chia sẻ với người khác.</li>
              <li>• Tính năng giám sát thi có theo dõi hoạt động của ứng viên khi thoát khỏi màn hình đánh giá.</li>
              <li>• Cá nhân hóa bộ câu hỏi đánh giá giúp giảm thiểu khả năng sao chép giữa các ứng viên.</li>
            </ul>
          </motion.div>

          {/* Center Logo for Mobile */}
          <div className="flex flex-col items-center my-8">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 flex items-center justify-center border-4 border-blue-400 shadow-2xl shadow-blue-500/20 relative">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">JobTest</div>
                <div className="text-xs text-blue-200">POWERED BY AI</div>
              </div>
              {/* Orbital rings */}
              <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -inset-4 border border-blue-400/20 rounded-full"></div>
            </div>
          </div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-md"
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
              </svg>
              Tùy biến linh hoạt
            </h3>
            <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
              <li>• Tùy biến giao diện, thay đổi mẫu sắc theo nhận diện thương hiệu của công ty.</li>
              <li>• Đa ngôn ngữ - đa thiết bị</li>
              <li>• Truy cập mọi lúc, mọi nơi.</li>
              <li>• Mở phòng tình huống, gamified như trong môi trường làm việc thật.</li>
              <li>• Tham chiếu điểm chuẩn thị trường, ngành, vị trí công việc của hơn 24 tính vực ngành nghề.</li>
            </ul>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-md"
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Tự động hóa, quy trình đánh giá
            </h3>
            <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
              <li>• Tự động hóa quy trình đánh giá từ việc tạo đánh giá cho đến thư mời, lúc chọ kết quả.</li>
              <li>• Đảm bảo tính bảo mật cho các bên tham gia đánh giá.</li>
              <li>• Thực hiện đánh giá hàng chức nghìn lượt ứng viên, nhân viên cùng lúc.</li>
            </ul>
          </motion.div>
        </div>

        {/* Desktop Layout - 3 Column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column - Two Cards */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-md transition-opacity duration-500"
            >
              <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Đánh giá toàn diện
              </h3>
              <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
                <li>• Đa dạng các bài đánh giá: trắc nghiệm, khả năng nói tròi, tố chất, phong cách lãnh đạo, mức độ phù hợp công việc, phổ họp vận hóc, phân hỏi 360, đội ngũ kế cận.</li>
                <li>• Đánh giá trước khi tuyển dụng, onboarding, đào tạo, phát triển lãnh đạo, bổ nhiệm.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-md transition-opacity duration-500"
            >
              <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
                Tùy biến linh hoạt
              </h3>
              <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
                <li>• Tùy biến giao diện, thay đổi mẫu sắc theo nhận diện thương hiệu của công ty.</li>
                <li>• Đa ngôn ngữ - đa thiết bị</li>
                <li>• Truy cập mọi lúc, mọi nơi.</li>
                <li>• Mở phòng tình huống, gamified như trong môi trường làm việc thật.</li>
                <li>• Tham chiếu điểm chuẩn thị trường, ngành, vị trí công việc của hơn 24 tính vực ngành nghề.</li>
              </ul>
            </motion.div>
          </div>

          {/* Center Column - Logo */}
          <div className="flex justify-center relative">
            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 flex items-center justify-center border-4 border-blue-400 shadow-2xl shadow-blue-500/20 relative">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">JobTest</div>
                <div className="text-sm text-blue-200">POWERED BY AI</div>
                <div className="text-xs text-blue-300">GENERATIVE AI TALENT</div>
              </div>
              
              {/* Animated orbital rings */}
              <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -inset-8 border border-blue-400/20 rounded-full"></div>
              <div className="absolute -inset-16 border border-blue-400/10 rounded-full"></div>
            </div>

            {/* Connecting lines - radial effect */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Left connections */}
              <div className="absolute left-0 top-1/4 w-20 h-0.5 bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
              <div className="absolute left-0 top-3/4 w-20 h-0.5 bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
              
              {/* Right connections */}
              <div className="absolute right-0 top-1/4 w-20 h-0.5 bg-gradient-to-l from-cyan-400/50 to-transparent"></div>
              <div className="absolute right-0 top-3/4 w-20 h-0.5 bg-gradient-to-l from-cyan-400/50 to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Two Cards */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-md transition-opacity duration-500"
            >
              <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                Giám sát gian lận
              </h3>
              <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
                <li>• Xác thực không gian thi cử thỏa mãn đinh gió với sự giám sát thông qua màn hình và webcam.</li>
                <li>• Ngăn chặn sao chép vần bản bằng cách vô hiệu hóa chức năng sao chép vần bản khi đang giá, ứng viên không thể sao chép về chia sẻ với người khác.</li>
                <li>• Tính năng giám sát thi có theo dõi hoạt động của ứng viên khi thoát khỏi màn hình đánh giá.</li>
                <li>• Cá nhân hóa bộ câu hỏi đánh giá giúp giảm thiểu khả năng sao chép giữa các ứng viên.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-md transition-opacity duration-500"
            >
              <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Tự động hóa, quy trình đánh giá
              </h3>
              <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
                <li>• Tự động hóa quy trình đánh giá từ việc tạo đánh giá cho đến thư mời, lúc chọ kết quả.</li>
                <li>• Đảm bảo tính bảo mật cho các bên tham gia đánh giá.</li>
                <li>• Thực hiện đánh giá hàng chức nghìn lượt ứng viên, nhân viên cùng lúc.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

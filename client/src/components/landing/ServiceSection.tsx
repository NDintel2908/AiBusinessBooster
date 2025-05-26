
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
        <div className="md:hidden space-y-12 max-w-lg mx-auto">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
              
              Chủ động thông qua công nghệ AI
            </h3>
            <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
              <li>• Quảng cáo chính mình;</li>
              <li>• Tìm & lựa chọn đối tác phù hợp;</li>
              <li>• Chọn thị trường mở rộng.</li>
            </ul>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
              
              Kết nối với người ra quyết định cuối cùng
            </h3>
            <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
              <li>• Tiếp cận ĐÚNG NGƯỜI, ĐÚNG NHU CẦU – giúp rút ngắn thời gian đàm phán và nâng cao hiệu quả hợp tác.
</li>
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

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
              
              Trợ lý AI kết nối đa năng
            </h3>
            <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
              <li>• Thu thập đầy đủ thông tin chính xác & cung cấp thêm market size, cơ hội thị trường;</li>
              <li>• AI đề xuất các dữ liệu về quy mô thị trường, phân tích cơ hội và cung cấp đầy đủ thông tin đối tác – hỗ trợ lãnh đạo ra quyết định nhanh chóng và chính xác.
</li>
            </ul>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
             
              Cam kết bảo mật
            </h3>
            <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
              <li>• Toàn bộ dữ liệu và trao đổi đều được mã hóa, tuân thủ các tiêu chuẩn bảo mật quốc tế – bảo vệ quyền riêng tư và lợi ích kinh doanh của bạn.</li>
            </ul>
          </motion.div>
        </div>

        {/* Desktop Layout - 3 Column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="grid grid-rows-2 gap-12 h-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-4 flex items-center">
               
                Chủ động thông qua công nghệ AI
              </h3>
              <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
                <li>• Quảng cáo chính mình;</li>
                <li>• Tìm & lựa chọn đối tác phù hợp;</li>
                <li>• Chọn thị trường mở rộng.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                
                Trợ lý AI kết nối đa năng
              </h3>
              <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
                <li>• Thu thập đầy đủ thông tin chính xác & cung cấp thêm market size, cơ hội thị trường;</li>
                <li>• AI đề xuất các dữ liệu về quy mô thị trường, phân tích cơ hội và cung cấp đầy đủ thông tin đối tác – hỗ trợ lãnh đạo ra quyết định nhanh chóng và chính xác.
</li>
              </ul>
            </motion.div>
          </div>

          {/* Center Column - Logo with Feature Icons */}
          <div className="flex justify-center items-center h-full">
            <div className="relative w-96 h-96 grid place-items-center">
              {/* Multi-layered Glowing Background */}
              <div className="absolute inset-0 rounded-full animate-pulse-glow">
                {/* Outermost glow layer */}
                <div className="absolute inset-0 rounded-full bg-gradient-radial from-blue-500/10 via-cyan-400/5 to-transparent blur-3xl"></div>
                {/* Middle glow layer */}
                <div className="absolute inset-4 rounded-full bg-gradient-radial from-blue-400/20 via-cyan-400/10 to-transparent blur-2xl"></div>
                {/* Inner glow layer */}
                <div className="absolute inset-8 rounded-full bg-gradient-radial from-blue-300/30 via-cyan-400/15 to-transparent blur-xl"></div>
              </div>

              {/* Central Logo Circle */}
              <div className="relative w-60 h-60 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 flex items-center justify-center border-4 border-blue-400/60 shadow-2xl shadow-blue-500/40 animate-spin-slow ring-glow pulse-outline z-10">
                <div className="text-center relative z-20">
                  <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg">JobTest</div>
                  <div className="text-sm text-blue-200 drop-shadow-md">POWERED BY AI</div>
                  <div className="text-xs text-blue-300 drop-shadow-sm">GENERATIVE AI TALENT</div>
                </div>
                
                {/* Rotating orbital light particles */}
                <div className="absolute inset-0 rounded-full animate-spin-slow">
                  <div className="absolute top-2 left-1/2 w-3 h-3 bg-cyan-400 rounded-full blur-sm -translate-x-1/2 animate-glow-intense shadow-lg shadow-cyan-400/80"></div>
                  <div className="absolute bottom-2 left-1/2 w-3 h-3 bg-electric-purple rounded-full blur-sm -translate-x-1/2 animate-glow-intense shadow-lg shadow-purple-400/80"></div>
                  <div className="absolute left-2 top-1/2 w-3 h-3 bg-bright-teal rounded-full blur-sm -translate-y-1/2 animate-glow-intense shadow-lg shadow-teal-400/80"></div>
                  <div className="absolute right-2 top-1/2 w-3 h-3 bg-neon-blue rounded-full blur-sm -translate-y-1/2 animate-glow-intense shadow-lg shadow-blue-400/80"></div>
                </div>
                
                {/* Multiple animated orbital rings */}
                <div className="absolute inset-0 border-2 border-blue-400/40 rounded-full animate-pulse"></div>
                <div className="absolute -inset-4 border border-cyan-400/30 rounded-full animate-spin-reverse"></div>
                <div className="absolute -inset-8 border border-blue-400/20 rounded-full animate-pulse-slow"></div>
                <div className="absolute -inset-12 border border-blue-300/10 rounded-full"></div>
              </div>

              {/* Feature Icons positioned precisely on circle edge */}
              {/* Top Left - Comprehensive Assessment */}
              <motion.div 
                className="absolute w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl shadow-cyan-500/40 animate-float-gentle icon-hover-effect"
                style={{ 
                  top: 'calc(50% - 170px * 0.707 - 28px)', 
                  left: 'calc(50% - 170px * 0.707 - 28px)' 
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.15, rotate: 10 }}
              >
                <svg className="w-7 h-7 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </motion.div>

              {/* Top Right - Fraud Detection */}
              <motion.div 
                className="absolute w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/40 animate-float-gentle-delayed icon-hover-effect"
                style={{ 
                  top: 'calc(50% - 170px * 0.707 - 28px)', 
                  right: 'calc(50% - 170px * 0.707 - 28px)' 
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.15, rotate: -10 }}
              >
                <svg className="w-7 h-7 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </motion.div>

              {/* Bottom Left - Flexible Customization */}
              <motion.div 
                className="absolute w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/40 animate-float-gentle icon-hover-effect"
                style={{ 
                  bottom: 'calc(50% - 170px * 0.707 - 28px)', 
                  left: 'calc(50% - 170px * 0.707 - 28px)' 
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.15, rotate: 10 }}
              >
                <svg className="w-7 h-7 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </motion.div>

              {/* Bottom Right - Automation */}
              <motion.div 
                className="absolute w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-xl shadow-orange-500/40 animate-float-gentle-delayed icon-hover-effect"
                style={{ 
                  bottom: 'calc(50% - 170px * 0.707 - 28px)', 
                  right: 'calc(50% - 170px * 0.707 - 28px)' 
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.15, rotate: -10 }}
              >
                <svg className="w-7 h-7 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
              </motion.div>

              {/* Radial connecting energy lines */}
              <div className="absolute inset-0 animate-pulse-connection pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-t from-cyan-400/60 via-cyan-400/30 to-transparent transform -translate-x-1/2 -translate-y-full rotate-45 blur-sm"></div>
                <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-t from-purple-400/60 via-purple-400/30 to-transparent transform -translate-x-1/2 -translate-y-full -rotate-45 blur-sm"></div>
                <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-green-400/60 via-green-400/30 to-transparent transform -translate-x-1/2 rotate-45 blur-sm"></div>
                <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-orange-400/60 via-orange-400/30 to-transparent transform -translate-x-1/2 -rotate-45 blur-sm"></div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-2 gap-12 h-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                
                Kết nối với người ra quyết định
              </h3>
              <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
                <li>• Tiếp cận ĐÚNG NGƯỜI, ĐÚNG NHU CẦU – giúp rút ngắn thời gian đàm phán và nâng cao hiệu quả hợp tác.
</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                
                Cam kết bảo mật
              </h3>
              <ul className="text-sm text-slate-300 leading-relaxed space-y-2">
                <li>• Toàn bộ dữ liệu và trao đổi đều được mã hóa, tuân thủ các tiêu chuẩn bảo mật quốc tế – bảo vệ quyền riêng tư và lợi ích kinh doanh của bạn.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

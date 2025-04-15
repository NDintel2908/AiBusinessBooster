import { Link, useLocation } from 'wouter';
import BCPAILogo from './BCPAI.png';

export default function Footer() {
  const [, setLocation] = useLocation();
  
  const handlePrivacyPolicyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation('/privacy-policy');
  };
  
  return (
    <footer className="py-12 border-t border-gray-800 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-electric-purple/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div>
              <div className="w-40 h-40 relative overflow-hidden mb-2 logo">
                <img src={BCPAILogo} alt="BCPAI Logo" className="w-full h-full object-contain" />
              </div>
              <h1 className="text-white font-heading text-xl font-bold tracking-wider hero-title">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple"></span>
              </h1>
            </div>
            <div className="text-gray-400 mt-2 mb-6 font-primary space-y-2">
              
            </div>
            
          </div>
          
          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Công ty</h4>
            <ul className="space-y-4 font-primary">
              <li><a href="#about" className="text-gray-400 hover:text-neon-blue transition duration-300">Về chúng tôi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">Tuyển dụng</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">Báo chí</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Tài nguyên</h4>
            <ul className="space-y-4 font-primary">
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">Tài liệu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">Trung tâm hỗ trợ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">API</a></li>
              <li><a href="#" onClick={handlePrivacyPolicyClick} className="text-gray-400 hover:text-neon-blue transition duration-300">Chính sách Quyền Riêng Tư</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">Điều khoản Dịch vụ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Thông tin công ty</h4>
            <ul className="space-y-4 font-primary">
              <li className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Mã số thuế: 0317026053
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Địa chỉ: Tầng 2, 81 Cách Mạng Tháng Tám, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Việt Nam
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Số điện thoại: 0767673182
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm font-primary">
          © {new Date().getFullYear()} Business Connecting Platform (BCP). Bản quyền đã được đăng ký.
        </div>
      </div>
    </footer>
  );
}

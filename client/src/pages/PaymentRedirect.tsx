import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function PaymentRedirect() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Hàm để lấy và xử lý tham số paymentUrl từ URL
    const processRedirect = () => {
      // Lấy URL parameters
      const params = new URLSearchParams(window.location.search);
      const paymentUrl = params.get('paymentUrl');

      if (paymentUrl) {
        try {
          // Giải mã URL (decode)
          const decodedUrl = decodeURIComponent(paymentUrl);
          console.log('Redirecting to:', decodedUrl);
          
          // Chuyển hướng người dùng đến URL thanh toán
          window.location.href = decodedUrl;
        } catch (error) {
          console.error('Error decoding URL:', error);
          // Hiển thị thông báo lỗi nếu có vấn đề với URL
        }
      } else {
        console.error('No payment URL provided');
        // Hiển thị thông báo lỗi nếu không có URL thanh toán
      }
    };

    // Thực hiện redirect ngay khi component được mount
    processRedirect();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-2xl text-white mb-4">Đang chuyển hướng đến trang thanh toán...</h1>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue mx-auto"></div>
      </div>
    </div>
  );
}
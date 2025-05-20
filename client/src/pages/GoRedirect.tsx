import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

export default function GoRedirect() {
  const [, setLocation] = useLocation();
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    // Hàm chuyển hướng
    const redirectToPayment = () => {
      try {
        // Lấy URL parameters
        const params = new URLSearchParams(window.location.search);
        const paymentUrl = params.get('paymentUrl');

        if (!paymentUrl) {
          // Nếu không có paymentUrl, chuyển hướng về trang chủ
          console.log('No payment URL found, redirecting to home page');
          setIsRedirecting(false);
          setLocation('/');
          return;
        }

        // Giải mã URL và chuyển hướng
        const decodedUrl = decodeURIComponent(paymentUrl);
        console.log('Redirecting to payment URL:', decodedUrl);
        
        // Chuyển hướng ngay lập tức
        window.location.href = decodedUrl;
      } catch (err) {
        console.error('Error during redirect:', err);
        // Nếu có lỗi, cũng chuyển hướng về trang chủ
        setIsRedirecting(false);
        setLocation('/');
      }
    };

    // Thực hiện chuyển hướng ngay khi component mount
    redirectToPayment();
  }, [setLocation]);

  // Chỉ hiển thị spinner khi đang thực hiện chuyển hướng
  if (isRedirecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center p-6 max-w-md">
          <h1 className="text-2xl text-white mb-6">Đang chuyển hướng đến cổng thanh toán...</h1>
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-neon-blue mx-auto"></div>
        </div>
      </div>
    );
  }
  
  // Trả về null vì đã chuyển hướng hoặc sẽ chuyển hướng
  return null;
}
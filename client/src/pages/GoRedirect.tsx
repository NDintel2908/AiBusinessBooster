import { useEffect, useState } from 'react';

export default function GoRedirect() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Hàm chuyển hướng
    const redirectToPayment = () => {
      try {
        // Lấy URL parameters
        const params = new URLSearchParams(window.location.search);
        const paymentUrl = params.get('paymentUrl');

        if (!paymentUrl) {
          setError('Không tìm thấy URL thanh toán');
          return;
        }

        // Giải mã URL và chuyển hướng
        const decodedUrl = decodeURIComponent(paymentUrl);
        console.log('Redirecting to payment URL:', decodedUrl);
        
        // Chuyển hướng ngay lập tức
        window.location.href = decodedUrl;
      } catch (err) {
        console.error('Error during redirect:', err);
        setError('Có lỗi xảy ra khi chuyển hướng');
      }
    };

    // Thực hiện chuyển hướng ngay khi component mount
    redirectToPayment();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center p-6 max-w-md">
        {error ? (
          <div className="text-red-500 text-xl font-bold mb-4">{error}</div>
        ) : (
          <>
            <h1 className="text-2xl text-white mb-6">Đang chuyển hướng đến cổng thanh toán...</h1>
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-neon-blue mx-auto"></div>
          </>
        )}
      </div>
    </div>
  );
}
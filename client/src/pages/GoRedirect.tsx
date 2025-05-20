import { useEffect, useState } from 'react';

export default function GoRedirect() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Immediately try to redirect - execute in the next tick for browser compatibility
    setTimeout(() => {
      try {
        // Get URL parameters
        const params = new URLSearchParams(window.location.search);
        const paymentUrl = params.get('paymentUrl');

        if (!paymentUrl) {
          setError('Không tìm thấy URL thanh toán');
          return;
        }

        try {
          // Directly decode and redirect with no delay
          const decodedUrl = decodeURIComponent(paymentUrl);
          // Immediate redirect
          window.location.replace(decodedUrl);
        } catch (decodeError) {
          console.error('Error decoding URL:', decodeError);
          setError('URL thanh toán không hợp lệ');
        }
      } catch (err) {
        console.error('Error during redirect process:', err);
        setError('Có lỗi xảy ra khi chuyển hướng');
      }
    }, 0);
  }, []);

  // This component will only briefly render before redirection
  // or will show error state if redirection fails
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
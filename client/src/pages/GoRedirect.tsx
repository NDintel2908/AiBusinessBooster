import { useEffect, useState } from 'react';

// Script sẽ chạy ngay khi component được render
const redirectScript = `
  (function() {
    try {
      const params = new URLSearchParams(window.location.search);
      const paymentUrl = params.get('paymentUrl');
      
      if (paymentUrl) {
        const decodedUrl = decodeURIComponent(paymentUrl);
        window.location.replace(decodedUrl);
      }
    } catch (e) {
      console.error('Redirect error:', e);
    }
  })();
`;

export default function GoRedirect() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Chuyển hướng ngay lập tức khi component mount
    try {
      const params = new URLSearchParams(window.location.search);
      const paymentUrl = params.get('paymentUrl');

      if (!paymentUrl) {
        setError('Không tìm thấy URL thanh toán');
        return;
      }

      const decodedUrl = decodeURIComponent(paymentUrl);
      // Sử dụng replace để không lưu lịch sử và chuyển hướng nhanh hơn
      window.location.replace(decodedUrl);
    } catch (err) {
      console.error('Error during redirect process:', err);
      setError('Có lỗi xảy ra khi chuyển hướng');
    }
  }, []);

  // Thêm script vào head để chuyển hướng nhanh nhất có thể
  // ngay cả trước khi React kịp render
  return (
    <>
      {/* @ts-ignore */}
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      {error && (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-red-500 text-xl font-bold mb-4">{error}</div>
        </div>
      )}
    </>
  );
}
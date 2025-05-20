import { useEffect, useState } from 'react';

// Script sẽ chạy ngay khi component được render - theo yêu cầu của khách hàng
const redirectScript = `
  (function() {
    try {
      const url = new URL(location.href);
      const params = new URLSearchParams(url.search);
      const paymentUrl = params.get('paymentUrl');
      
      if (paymentUrl) {
        location.href = paymentUrl;
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
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      const paymentUrl = params.get('paymentUrl');

      if (!paymentUrl) {
        setError('Không tìm thấy URL thanh toán');
        return;
      }

      // Chuyển hướng trực tiếp không cần decode
      window.location.href = paymentUrl;
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
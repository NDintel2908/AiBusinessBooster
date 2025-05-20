import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

export default function GoPage() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [noPaymentUrl, setNoPaymentUrl] = useState(false);
  const [title, setTitle] = useState("BCP Payment Gateway");

  useEffect(() => {
    document.title = title;
    
    // Function to extract query parameters from URL
    const getPaymentUrl = () => {
      const url = new URL(window.location.href);
      return url.searchParams.get('paymentUrl');
    };

    // Function to perform redirection
    const performRedirect = () => {
      try {
        const paymentUrl = getPaymentUrl();
        
        if (!paymentUrl) {
          // Nếu không có paymentUrl, chuyển hướng về trang chủ
          console.log('No payment URL found, redirecting to home page');
          window.location.href = '/';
          return;
        }
        
        // Decode the URL and redirect
        const decodedUrl = decodeURIComponent(paymentUrl);
        console.log('Redirecting to payment URL:', decodedUrl);
        
        // Redirect directly without any delay
        window.location.href = decodedUrl;
      } catch (err) {
        console.error('Error during redirect:', err);
        setError('Có lỗi xảy ra khi chuyển hướng đến cổng thanh toán');
        setIsLoading(false);
      }
    };

    // Execute redirect immediately
    performRedirect();
    
    // Clean-up function
    return () => {
      // Any cleanup if needed
    };
  }, [title]);

  // Additional script to ensure immediate redirect
  const redirectScript = `
    (function() {
      const params = new URLSearchParams(window.location.search);
      const paymentUrl = params.get('paymentUrl');
      
      if (paymentUrl) {
        try {
          const decodedUrl = decodeURIComponent(paymentUrl);
          window.location.href = decodedUrl;
        } catch (err) {
          console.error('Redirect script error:', err);
        }
      } else {
        // Nếu không có paymentUrl, chuyển hướng về trang chủ
        window.location.href = '/';
      }
    })();
  `;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <script>{redirectScript}</script>
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="text-center p-8 max-w-md w-full">
          {error ? (
            <div className="text-red-500 text-xl font-bold mb-4 bg-black/30 p-6 rounded-lg border border-red-500/30">{error}</div>
          ) : (
            <>
              {!noPaymentUrl ? (
                <>
                  <h1 className="text-2xl text-white mb-6">Đang chuyển hướng đến cổng thanh toán...</h1>
                  {isLoading && (
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                  )}
                </>
              ) : (
                <div className="backdrop-blur-md bg-black/30 p-8 rounded-xl border border-blue-500/30 shadow-xl">
                  <h1 className="text-3xl font-bold text-white mb-4">Cổng thanh toán BCP</h1>
                  <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
                  <p className="text-blue-200 mb-6">Hệ thống thanh toán an toàn và bảo mật cho dịch vụ kết nối kinh doanh thông minh.</p>
                  
                  <div className="mt-6 flex flex-col space-y-4">
                    <div className="bg-black/20 p-4 rounded-md border border-blue-500/20">
                      <h3 className="text-blue-400 text-lg font-medium mb-2">Hướng dẫn</h3>
                      <p className="text-gray-300 text-sm">Trang này được sử dụng để chuyển hướng thanh toán cho dịch vụ của BCP. Liên hệ với chúng tôi để biết thêm thông tin.</p>
                    </div>
                    
                    <a href="/" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 mt-4">
                      Quay về trang chủ
                    </a>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
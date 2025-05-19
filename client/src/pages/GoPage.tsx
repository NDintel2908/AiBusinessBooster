import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

export default function GoPage() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
          // Nếu không có paymentUrl, chuyển hướng về trang chủ sau 2 giây
          setIsLoading(true);
          setTimeout(() => {
            window.location.href = '/';
          }, 2000);
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
  }, []);

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
      }
    })();
  `;

  return (
    <>
      <Helmet>
        <script>{redirectScript}</script>
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center p-6 max-w-md">
          {error ? (
            <div className="text-red-500 text-xl font-bold mb-4">{error}</div>
          ) : (
            <>
              <h1 className="text-2xl text-white mb-6">
                {getPaymentUrl() ? "Đang chuyển hướng đến cổng thanh toán..." : "Đang chuyển hướng về trang chủ..."}
              </h1>
              {isLoading && (
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-neon-blue mx-auto"></div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
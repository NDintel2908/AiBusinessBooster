import { useEffect, useState } from 'react';

export default function GoRedirect() {
  const [error, setError] = useState<string | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    // Function to redirect to payment
    const redirectToPayment = async () => {
      try {
        // Get URL parameters
        const params = new URLSearchParams(window.location.search);
        const paymentUrl = params.get('paymentUrl');

        if (!paymentUrl) {
          setError('Không tìm thấy URL thanh toán');
          setIsRedirecting(false);
          return;
        }

        // For debugging - log the received URL
        console.log('Payment URL received:', paymentUrl);
        
        try {
          // Directly decode and redirect
          const decodedUrl = decodeURIComponent(paymentUrl);
          console.log('Redirecting to payment URL:', decodedUrl);
          
          // Set a small timeout to ensure the UI updates before redirect
          setTimeout(() => {
            // Redirect immediately
            window.location.href = decodedUrl;
          }, 500);
        } catch (decodeError) {
          console.error('Error decoding URL:', decodeError);
          setError('URL thanh toán không hợp lệ');
          setIsRedirecting(false);
        }
      } catch (err) {
        console.error('Error during redirect process:', err);
        setError('Có lỗi xảy ra khi chuyển hướng');
        setIsRedirecting(false);
      }
    };

    // Perform redirect when component mounts
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
            {isRedirecting && (
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-neon-blue mx-auto"></div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
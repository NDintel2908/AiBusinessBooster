// Đây là script sẽ được chèn vào trang index.html để xử lý subdomain
// Script này sẽ kiểm tra nếu người dùng đang truy cập subdomain go.bcp.global
// và không có path /go, thì sẽ hiển thị trang chủ đầy đủ

(function() {
  // Kiểm tra xem URL hiện tại có phải là subdomain go.bcp.global không
  const host = window.location.hostname;
  const path = window.location.pathname;
  
  // Nếu URL chính xác là go.bcp.global/ (trang chủ của subdomain)
  if (host === 'go.bcp.global' && (path === '/' || path === '')) {
    console.log('Detected go.bcp.global subdomain, showing homepage');
    // Không cần làm gì, trang chủ sẽ được hiển thị
  }
  
  // Nếu URL là go.bcp.global/go và có tham số paymentUrl
  if (host === 'go.bcp.global' && path.startsWith('/go')) {
    const paymentUrl = new URLSearchParams(window.location.search).get('paymentUrl');
    if (paymentUrl) {
      try {
        // Decode URL và chuyển hướng đến cổng thanh toán
        const decodedUrl = decodeURIComponent(paymentUrl);
        console.log('Redirecting to payment URL:', decodedUrl);
        window.location.href = decodedUrl;
      } catch (err) {
        console.error('Error decoding payment URL:', err);
        // Nếu có lỗi, chuyển hướng về trang chủ
        window.location.href = '/';
      }
    } else {
      // Nếu /go nhưng không có tham số paymentUrl, chuyển hướng về trang chủ
      window.location.href = '/';
    }
  }
})();
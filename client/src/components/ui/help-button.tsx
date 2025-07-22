import React from "react";

export function HelpButton() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleClick = () => {
    window.open("https://zalo.me/3297451762229454190", "_blank");
  };

  // Hiển thị tooltip sau một khoảng thời gian
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);

      // Ẩn tooltip sau 5 giây
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);

      return () => clearTimeout(hideTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: isHovered ? "#0056b3" : "#007bff",
    color: "white",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: isHovered
      ? "0px 4px 15px rgba(0, 123, 255, 0.5), 0px 0px 20px rgba(0, 123, 255, 0.3)"
      : "0px 2px 5px rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
    border: "none",
    outline: "none",
    transition: "all 0.3s ease",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  };

  const pulseAnimation = {
    animation: "pulse 2s infinite",
  };

  const tooltipStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "90px",
    right: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "white",
    padding: "10px 15px",
    borderRadius: "6px",
    fontSize: "14px",
    maxWidth: "200px",
    zIndex: 1001,
    visibility: showTooltip ? "visible" : "hidden",
    opacity: showTooltip ? 1 : 0,
    transition: "opacity 0.3s ease, visibility 0.3s ease",
  };

  return (
    <>
      <div style={tooltipStyle}>
        Cần hỗ trợ? Nhấn vào đây để liên hệ với chúng tôi qua Zalo
      </div>
      <button
        style={{ ...buttonStyle, ...(showTooltip && pulseAnimation) }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Hỗ trợ khách hàng"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
            }
          }
        `}
      </style>
    </>
  );
}

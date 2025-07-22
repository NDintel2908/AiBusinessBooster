import React from "react";
import { useTranslation } from "react-i18next";

export function HelpButton() {
  const { t } = useTranslation("app");
  const [isHovered, setIsHovered] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  const [hoverTimeout, setHoverTimeout] = React.useState<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    // Click vẫn có thể toggle menu, nhưng chủ yếu dùng hover
    setShowMenu(!showMenu);
  };

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout to hide menu, will be cleared if mouse enters menu
    const timeout = setTimeout(() => {
      setShowMenu(false);
    }, 300);
    setHoverTimeout(timeout);
  };

  const handleMenuMouseEnter = () => {
    // Clear timeout when mouse enters menu
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setShowMenu(true);
  };

  const handleMenuMouseLeave = () => {
    // Hide menu immediately when leaving menu area
    setShowMenu(false);
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleOptionClick = (url: string) => {
    window.open(url, "_blank");
    setShowMenu(false);
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

  // Cleanup timeout when component unmounts
  React.useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Click outside to close menu - không cần thiết nữa vì dùng hover
  // React.useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     const target = event.target as Element;
  //     if (!target.closest('.help-button-container')) {
  //       setShowMenu(false);
  //     }
  //   };

  //   if (showMenu) {
  //     document.addEventListener('click', handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, [showMenu]);

  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: isHovered ? '#0056b3' : '#007bff',
    color: 'white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    cursor: 'pointer',
    boxShadow: isHovered 
      ? '0px 4px 15px rgba(0, 123, 255, 0.5), 0px 0px 20px rgba(0, 123, 255, 0.3)' 
      : '0px 2px 5px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    border: 'none',
    outline: 'none',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  };

  const pulseAnimation = {
    animation: 'pulse 2s infinite',
  };

  const tooltipStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '90px',
    right: '30px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '6px',
    fontSize: '14px',
    maxWidth: '200px',
    zIndex: 1001,
    visibility: showTooltip && !showMenu ? 'visible' : 'hidden',
    opacity: showTooltip && !showMenu ? 1 : 0,
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
  };

  const menuStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '90px',
    right: '20px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.15)',
    zIndex: 1002,
    overflow: 'hidden',
    visibility: showMenu ? 'visible' : 'hidden',
    opacity: showMenu ? 1 : 0,
    transform: showMenu ? 'translateY(0)' : 'translateY(10px)',
    transition: 'all 0.3s ease',
    minWidth: '180px',
  };

  const menuOptions = [
    {
      name: t("helpButton.options.zalo"),
      url: 'https://zalo.me/3297451762229454190',
      icon: '/images/zalo.webp',
      color: '#0084ff'
    },
    {
      name: t("helpButton.options.messenger"),
      url: 'https://google.com',
      icon: '/images/messenger.png',
      color: '#0084ff'
    },
    {
      name: t("helpButton.options.whatsapp"),
      url: 'https://google.com',
      icon: '/images/whatsapp.png',
      color: '#25d366'
    }
  ];

  return (
    <div className="help-button-container">
      <div style={tooltipStyle}>
        {t("helpButton.tooltip")}
      </div>

      <div 
        style={menuStyle}
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMenuMouseLeave}
      >
        {menuOptions.map((option, index) => (
          <button
            key={option.name}
            onClick={() => handleOptionClick(option.url)}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '14px',
              color: '#333',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <img 
              src={option.icon} 
              alt={option.name}
              style={{ 
                width: '20px', 
                height: '20px',
                objectFit: 'contain'
              }}
            />
            <span style={{ fontWeight: '500' }}>{option.name}</span>
          </button>
        ))}
      </div>

      <button 
        style={{...buttonStyle, ...(showTooltip && !showMenu && pulseAnimation)}}
        onClick={handleClick}
        onMouseEnter={() => {
          setIsHovered(true);
          handleMouseEnter();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseLeave();
        }}
        aria-label={t("helpButton.ariaLabel")}
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
          style={{
            transform: showMenu ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
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
    </div>
  );
}
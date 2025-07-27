import React, { useState, useEffect } from "react";

interface GlitchWelcomeProps {
  onComplete?: () => void;
}

const GlitchWelcome: React.FC<GlitchWelcomeProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showText, setShowText] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [textBlur, setTextBlur] = useState(true);

  useEffect(() => {
    const showTextTimer = setTimeout(() => {
      setShowText(true);
    }, 500);

    const clearTextTimer = setTimeout(() => {
      setTextBlur(false);
      setFadeIn(true);
    }, 2000);

    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000); // Extended fade out time

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 5500); // Extended total time to 5.5 seconds

    return () => {
      clearTimeout(showTextTimer);
      clearTimeout(clearTextTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className="glitch-welcome-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: fadeOut ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.8s ease-out",
        willChange: "opacity",
      }}
    >
      {/* Welcome Text */}
      {showText && (
        <div style={{ textAlign: "center" }}>
          <h1
            className="welcome-text"
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              position: "relative",
              letterSpacing: "3px",
              margin: 0,
              padding: 0,
              fontFamily: "system-ui, -apple-system, sans-serif",
              opacity: fadeOut ? 0 : fadeIn ? 1 : 0,
              transform: fadeIn ? "scale(1)" : "scale(0.95)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              willChange: "opacity, transform",
            }}
          >
            <span style={{ color: "#fff" }}>Welcome to </span>
            <span style={{ color: "#60A5FA" }}>BCP.Global</span>
          </h1>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
            .welcome-text {
              font-size: 2.5rem !important;
              letter-spacing: 2px !important;
            }
          }
          @media (max-width: 480px) {
            .welcome-text {
              font-size: 2rem !important;
              letter-spacing: 1px !important;
            }
          }
        `,
        }}
      />
    </div>
  );
};

export default GlitchWelcome;

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import "../styles/WelcomePopup.css";

function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { isDarkMode, setIsDarkMode } = useTheme();

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsVisible(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleThemeSelect = (selectedTheme) => {
    setIsDarkMode(selectedTheme === "dark");
  };

  if (!isVisible) return null;

  return (
    <div className="welcome-popup-overlay">
      <div className="welcome-popup">
        <h2>{t("WELCOME_TITLE")}</h2>
        <div className="welcome-section">
          <h3>{t("WELCOME_LANGUAGE")}</h3>
          <div className="language-options">
            <button
              className={`language-button ${language === "EN" ? "active" : ""}`}
              onClick={() => handleLanguageSelect("EN")}
            >
              English
            </button>
            <button
              className={`language-button ${
                language === "PT-BR" ? "active" : ""
              }`}
              onClick={() => handleLanguageSelect("PT-BR")}
            >
              Português
            </button>
          </div>
        </div>
        <div className="welcome-section">
          <h3>{t("WELCOME_THEME")}</h3>
          <div className="theme-options">
            <button
              className={`theme-button ${!isDarkMode ? "active" : ""}`}
              onClick={() => handleThemeSelect("light")}
            >
              Light
            </button>
            <button
              className={`theme-button ${isDarkMode ? "active" : ""}`}
              onClick={() => handleThemeSelect("dark")}
            >
              Dark
            </button>
          </div>
        </div>
        <div className="welcome-info">
          <p>{t("WELCOME_INFO")}</p>
        </div>
        <button className="continue-button" onClick={() => setIsVisible(false)}>
          {t("WELCOME_CONTINUE")}
        </button>
      </div>
    </div>
  );
}

export default WelcomePopup;

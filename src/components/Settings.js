import React from "react";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { usePopup } from "../context/PopupContext";
import "../styles/Settings.css";

function Settings() {
  const { language, toggleLanguage, t } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();
  const { activePopup, openPopup, closePopup } = usePopup();
  const isOpen = activePopup === "settings";

  const toggleSettings = () => {
    if (isOpen) {
      closePopup();
    } else {
      openPopup("settings");
    }
  };

  return (
    <div className="settings-container">
      <button
        className={`settings-button ${isOpen ? "active" : ""}`}
        onClick={toggleSettings}
        aria-label="Settings"
      >
        <FaCog />
      </button>

      <div className={`settings-popup ${isOpen ? "open" : ""}`}>
        <div className="settings-option">
          <span className="settings-label">{t("LANGUAGE")}</span>
          <button className="toggle-button" onClick={toggleLanguage}>
            {language}
          </button>
        </div>

        <div className="settings-option">
          <span className="settings-label">{t("THEME")}</span>
          <button className="toggle-button" onClick={toggleTheme}>
            {isDarkMode ? <BsMoon /> : <BsSun />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;

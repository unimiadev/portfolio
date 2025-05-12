import React, { createContext, useState, useContext, useEffect } from "react";
import { translations } from "../translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Get initial language from localStorage or default to EN
    const savedLanguage = localStorage.getItem("language") || "EN";
    // Validate that the language exists in our translations
    return translations[savedLanguage] ? savedLanguage : "EN";
  });

  useEffect(() => {
    // Update localStorage when language changes
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "PT-BR" : "EN");
  };

  const t = (key) => {
    // Make sure the language and key exist in translations
    if (!translations[language]) {
      console.warn(`Language '${language}' not found in translations, falling back to EN`);
      return translations["EN"][key] || key;
    }
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

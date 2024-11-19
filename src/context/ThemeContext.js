import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get initial theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    // Update localStorage and body dataset when theme changes
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.dataset.theme = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
} 
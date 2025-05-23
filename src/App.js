import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { PopupProvider } from "./context/PopupContext";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Settings from "./components/Settings";
import Notification from "./components/Notification";
import WelcomePopup from "./components/WelcomePopup";
import ParticleBackground from "./components/ParticleBackground";
import "./styles/variables.css";
import "./App.css";

function AppContent() {
  const { language } = useLanguage();

  return (
    <Router>
      <div className="App" data-language={language}>
        <ParticleBackground />
        <WelcomePopup />
        <Settings />
        <Notification />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Analytics />
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PopupProvider>
          <AppContent />
        </PopupProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

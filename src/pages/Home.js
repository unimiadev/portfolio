import React, { useEffect, useRef } from "react";
import { useLanguage } from '../context/LanguageContext';
import "../styles/Home.css";

function Home() {
  const { t } = useLanguage();
  const contentRef = useRef(null);

  useEffect(() => {
    // Force reflow on component mount
    if (contentRef.current) {
      contentRef.current.style.display = 'none';
      void contentRef.current.offsetHeight; // Force reflow
      contentRef.current.style.display = '';

      // Add initialized class after a brief delay
      setTimeout(() => {
        const titles = contentRef.current.querySelectorAll('.title');
        titles.forEach(title => title.classList.add('initialized'));
      }, 100);
    }

    // Cleanup function
    return () => {
      if (contentRef.current) {
        const titles = contentRef.current.querySelectorAll('.title');
        titles.forEach(title => title.classList.remove('initialized'));
      }
    };
  }, []);

  return (
    <div className="home-container">
      <div className="center-content" ref={contentRef}>
        <img
          src="/assets/media/images/center_img.png"
          alt="Center"
          className="center-image"
        />
        <h1 className="title title-1">UNIMIA</h1>
        <h1 className="title title-2">{t('CREATIVE')}</h1>
        <h1 className="title title-3">{t('DESIGN')}</h1>
        <h1 className="title title-4">
          {t('CODE_AS_MAGIC')} <br />
          {t('AS_A')} <span className="sparkle-text">{t('UNICORN')}</span>
        </h1>
      </div>
    </div>
  );
}

export default Home;

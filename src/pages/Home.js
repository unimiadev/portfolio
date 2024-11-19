import React from "react";
import { useLanguage } from '../context/LanguageContext';
import "../styles/Home.css";

function Home() {
  const { t } = useLanguage();

  return (
    <div className="home-container">
      <div className="center-content">
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

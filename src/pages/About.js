import React, { useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import "../styles/About.css";

function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useLanguage();

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="about-container">
      <section
        className={`profile-section ${isFlipped ? "flipped" : ""}`}
        onClick={handleClick}
      >
        <div className={`profile-content ${isFlipped ? "hidden" : ""}`}>
          <img
            src="/assets/media/images/profile.jpg"
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-info">
            <span className="floating-text float-1">{t('CLICK_ME')}</span>
            <span className="floating-text float-2">{t('CLICK_ME')}</span>
            <span className="floating-text float-3">{t('CLICK_ME')}</span>
            <span className="floating-text float-4">{t('CLICK_ME')}</span>
            <span className="floating-text float-5">{t('CLICK_ME')}</span>

            <h1 className="main-title">MATHEUS ABREU E LIMA</h1>
            <p className="subtitle">{t('ALIAS_SUBTITLE')}</p>
            <p className="info-text">{t('YEARS_OLD')}</p>
            <p className="info-text">{t('LOCATION')}</p>
          </div>
        </div>
        <div className={`flipped-content ${isFlipped ? "visible" : ""}`}>
          <p className="flipped-text">
            {t('ABOUT_TEXT')} <br /><br />
            {t('HIRE_ME_ANYWAY')}
          </p>
        </div>
      </section>

      <div className="info-sections">
        <div className="info-side left-side">
          <div className="info-column">
            <h2 className="column-title">{t('EDUCATION')}</h2>
            <p className="column-subtitle">{t('ACADEMIC_DEGREE')}</p>
            <p className="column-text">{t('EDUCATION_DEGREE')}</p>
            <p className="column-detail">{t('EDUCATION_GRADUATION')}</p>

            <div className="section-divider"></div>

            <p className="column-subtitle">COMPLEMENTARY COURSES</p>
            <p className="column-text">
              THE COMPLETE FLUTTER DEVELOPMENT BOOTCAMP WITH DART
              <br />
              <span className="light-weight">THE APP BREWERY - 2022</span>
            </p>
            <p className="column-text">
              THE COMPLETE WEB DEVELOPER IN 2022
              <br />
              <span className="light-weight">ZERO TO MASTERY - 2022</span>
            </p>
            <p className="column-text">
              REACT + REDUX: FUNDAMENTOS E 2 APPS DO ABSOLUTO ZERO
              <br />
              <span className="light-weight">COD3R - 2022</span>
            </p>
            <p className="column-text">
              THE COMPLETE WEB DEVELOPMENT BOOTCAMP
              <br />
              <span className="light-weight">THE APP BREWERY - 2021</span>
            </p>
            <p className="column-text">
              CRIAÇÃO DE APPS ANDROID/IOS/WEB COM FLUTTER
              <br />
              <span className="light-weight">FLUTTER BRASIL - 2021</span>
            </p>
            <p className="column-text">
              CURSO WEBMASTER FRONT-END COMPLETO
              <br />
              <span className="light-weight">DANKI CODE - 2020</span>
            </p>
          </div>
          <div className="info-column">
            <h2 className="column-title">{t('SKILLS')}</h2>
            <p className="column-subtitle">{t('TECHNICAL_EXPERTISE')}</p>
            <p className="column-text">
              {t('SKILLS_JAVASCRIPT')}
              <span className="light-weight">{t('SKILLS_JAVASCRIPT_DETAILS')}</span>;
              <br />
              {t('SKILLS_CSHARP')}
              <span className="light-weight">{t('SKILLS_CSHARP_DETAILS')}</span>;
              <br />
              {t('SKILLS_MOBILE')}
              <span className="light-weight">{t('SKILLS_MOBILE_DETAILS')}</span>
              <br />
              {t('SKILLS_DATABASES')}
              <span className="light-weight">{t('SKILLS_DATABASES_DETAILS')}</span>
              <br />
              {t('SKILLS_CLOUD')}
              <span className="light-weight">{t('SKILLS_CLOUD_DETAILS')}</span>
              <br />
              {t('SKILLS_UIUX')}
              <span className="light-weight">{t('SKILLS_UIUX_DETAILS')}</span>
              <br />
              {t('SKILLS_VERSION')}
              <span className="light-weight">{t('SKILLS_VERSION_DETAILS')}</span>
            </p>
          </div>
        </div>

        <div className="info-side right-side">
          <div className="info-column">
            <h2 className="column-title">{t('EXPERIENCE')}</h2>
            <p className="column-subtitle">{t('PROFESSIONAL_JOURNEY')}</p>
            <p className="column-text">{t('EXPERIENCE_AUTOMASUL')}</p>
            <p className="column-detail">{t('EXPERIENCE_AUTOMASUL_DATE')}</p>
            <p className="light-weight">
              {t('EXPERIENCE_AUTOMASUL_DETAILS').map((detail, index) => (
                <React.Fragment key={index}>
                  - {detail}<br />
                </React.Fragment>
              ))}
            </p>

            <p className="column-text">{t('EXPERIENCE_CENTRO')}</p>
            <p className="column-detail">{t('EXPERIENCE_CENTRO_DATE')}</p>
            <p className="light-weight">
              {t('EXPERIENCE_CENTRO_DETAILS').map((detail, index) => (
                <React.Fragment key={index}>
                  - {detail}<br />
                </React.Fragment>
              ))}
            </p>

            <p className="column-text">{t('EXPERIENCE_SONTAG')}</p>
            <p className="column-detail">{t('EXPERIENCE_SONTAG_DATE')}</p>
            <p className="light-weight">
              {t('EXPERIENCE_SONTAG_DETAILS').map((detail, index) => (
                <React.Fragment key={index}>
                  - {detail}<br />
                </React.Fragment>
              ))}
            </p>

            <p className="column-text">{t('EXPERIENCE_SCHOLARSHIP')}</p>
            <p className="column-detail">{t('EXPERIENCE_SCHOLARSHIP_DATE')}</p>
            <p className="light-weight">
              {t('EXPERIENCE_SCHOLARSHIP_DETAILS').map((detail, index) => (
                <React.Fragment key={index}>
                  - {detail}<br />
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="info-column">
            <h2 className="column-title">{t('LANGUAGES')}</h2>
            <p className="column-subtitle">{t('COMMUNICATION')}</p>
            <p className="column-text">
              {t('PORTUGUESE')} - <span className="light-weight">{t('NATIVE')}</span>
              <br />
              {t('ENGLISH')} - <span className="light-weight">{t('FLUENT')}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

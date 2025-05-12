import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { FaLightbulb, FaUserAlt, FaCogs } from "react-icons/fa";
import "../styles/About.css";

function About() {
  const [activeSection, setActiveSection] = useState('story');
  const [aboutTextParts, setAboutTextParts] = useState([]);
  const { t } = useLanguage();

  useEffect(() => {
    // Split the about text into sections based on paragraphs
    const textParts = t("ABOUT_TEXT").split('\n\n');
    setAboutTextParts(textParts);
  }, [t]);

  return (
    <div className="about-container">
      <section className="profile-section">
        <div className="profile-content">
          <img
            src="/assets/media/images/profile.jpg"
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-info">
            <h1 className="main-title">MATHEUS ABREU E LIMA</h1>
            <p className="subtitle">{t("ALIAS_SUBTITLE")}</p>
            <p className="info-text">{t("DEVELOPER_TITLE")}</p>
            <p className="info-text">{t("LOCATION")}</p>
          </div>
        </div>
      </section>
      
      <div className="narrative-tabs">
        <button 
          className={`tab-button ${activeSection === 'story' ? 'active' : ''}`}
          onClick={() => setActiveSection('story')}
        >
          <FaUserAlt /> <span>My Story</span>
        </button>
        <button 
          className={`tab-button ${activeSection === 'value' ? 'active' : ''}`}
          onClick={() => setActiveSection('value')}
        >
          <FaLightbulb /> <span>My Approach</span>
        </button>
        <button 
          className={`tab-button ${activeSection === 'personality' ? 'active' : ''}`}
          onClick={() => setActiveSection('personality')}
        >
          <FaUserAlt /> <span>Beyond Code</span>
        </button>
        <button 
          className={`tab-button ${activeSection === 'process' ? 'active' : ''}`}
          onClick={() => setActiveSection('process')}
        >
          <FaCogs /> <span>My Process</span>
        </button>
      </div>
      
      <section className="narrative-section">
        {aboutTextParts.length > 0 && (
          <div className="narrative-content">
            {activeSection === 'story' && (
              <div className="narrative-part">
                <h2>My Journey</h2>
                <p>{aboutTextParts[0]}</p>
              </div>
            )}
            {activeSection === 'value' && (
              <div className="narrative-part">
                <h2>What Sets Me Apart</h2>
                <p>{aboutTextParts[1]}</p>
              </div>
            )}
            {activeSection === 'personality' && (
              <div className="narrative-part">
                <h2>Beyond The Code</h2>
                <p>{aboutTextParts[2]}</p>
              </div>
            )}
            {activeSection === 'process' && (
              <div className="narrative-part">
                <h2>My Development Process</h2>
                <p>{aboutTextParts[3]}</p>
              </div>
            )}
          </div>
        )}
      </section>

      <div className="info-sections">
        <div className="info-side">
          <div className="info-column">
            <h2 className="column-title">{t("EDUCATION")}</h2>
            <p className="column-subtitle">{t("ACADEMIC_DEGREE")}</p>
            <p className="column-text">{t("EDUCATION_DEGREE")}</p>
            <p className="column-detail">{t("EDUCATION_GRADUATION")}</p>

            <div className="section-divider"></div>

            <p className="column-subtitle">{t("COMPLEMENTARY_COURSES")}</p>
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
          </div>
          
          <div className="info-column">
            <h2 className="column-title">{t("LANGUAGES")}</h2>
            <p className="column-subtitle">{t("COMMUNICATION")}</p>
            <p className="column-text">
              {t("PORTUGUESE")} -{" "}
              <span className="light-weight">{t("NATIVE")}</span>
              <br />
              {t("ENGLISH")} -{" "}
              <span className="light-weight">{t("FLUENT")}</span>
            </p>
          </div>
        </div>

        <div className="info-side">
          <div className="info-column">
            <h2 className="column-title">{t("SKILLS")}</h2>
            <p className="column-subtitle">{t("TECHNICAL_EXPERTISE")}</p>
            <p className="column-text">
              {t("SKILLS_JAVASCRIPT")}
              <span className="light-weight">
                {t("SKILLS_JAVASCRIPT_DETAILS")}
              </span>
              <br />
              {t("SKILLS_CSHARP")}
              <span className="light-weight">{t("SKILLS_CSHARP_DETAILS")}</span>
              <br />
              {t("SKILLS_MOBILE")}
              <span className="light-weight">{t("SKILLS_MOBILE_DETAILS")}</span>
              <br />
              {t("SKILLS_DATABASES")}
              <span className="light-weight">
                {t("SKILLS_DATABASES_DETAILS")}
              </span>
              <br />
              {t("SKILLS_CLOUD")}
              <span className="light-weight">{t("SKILLS_CLOUD_DETAILS")}</span>
              <br />
              {t("SKILLS_UIUX")}
              <span className="light-weight">{t("SKILLS_UIUX_DETAILS")}</span>
              <br />
              {t("SKILLS_VERSION")}
              <span className="light-weight">
                {t("SKILLS_VERSION_DETAILS")}
              </span>
            </p>
          </div>
          
          <div className="info-column">
            <h2 className="column-title">{t("EXPERIENCE")}</h2>
            <p className="column-subtitle">{t("PROFESSIONAL_JOURNEY")}</p>

            <p className="column-text">{t("EXPERIENCE_EXPERTVISION")}</p>
            <p className="column-detail">{t("EXPERIENCE_EXPERTVISION_DATE")}</p>

            <p className="column-text">{t("EXPERIENCE_FREELANCE")}</p>
            <p className="column-detail">{t("EXPERIENCE_FREELANCE_DATE")}</p>

            <p className="column-text">{t("EXPERIENCE_AUTOMASUL")}</p>
            <p className="column-detail">{t("EXPERIENCE_AUTOMASUL_DATE")}</p>
            
            <p className="column-text">{t("EXPERIENCE_SCHOLARSHIP")}</p>
            <p className="column-detail">{t("EXPERIENCE_SCHOLARSHIP_DATE")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import React, { useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { t } = useLanguage();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:unimiadev@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <div className="contact-container">
      <div className="title-container">
        <h1 className="contact-title">{t('CONTACT')}</h1>
        <span className="waving-emoji" role="img" aria-label="waving hand">
          👋
        </span>
      </div>

      <div className="social-links">
        <a
          href="https://github.com/unimia"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abreuelimamatheus/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin />
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={t('YOUR_NAME')}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t('YOUR_EMAIL')}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder={t('YOUR_MESSAGE')}
            className="form-input form-textarea"
          />
        </div>

        <button type="submit" className="form-button">
          {t('SEND_MESSAGE')}
        </button>
      </form>

      <p className="alternative-contact">
        {t('OR_EMAIL_DIRECTLY')}{" "}
        <a href="mailto:contact@unimia.dev" className="email-link">
          CONTACT@UNIMIA.DEV
        </a>
      </p>
    </div>
  );
}

export default Contact;

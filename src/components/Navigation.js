import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const { t } = useLanguage();

  // Handle mouse movement for dock-like behavior
  useEffect(() => {
    if (isHomePage) return; // Don't apply to home page

    const handleMouseMove = (e) => {
      const navElement = document.querySelector('.nav-container');
      if (!navElement) return;

      const navRect = navElement.getBoundingClientRect();
      const isNearNav = (
        e.clientY > window.innerHeight - navRect.height - 100 && // 100px threshold
        e.clientX > navRect.left - 50 && // 50px threshold on sides
        e.clientX < navRect.right + 50
      );

      if (isNearNav) {
        setIsVisible(true);
        if (timeoutId) clearTimeout(timeoutId);
      } else {
        const id = setTimeout(() => setIsVisible(false), 1000);
        setTimeoutId(id);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isHomePage, timeoutId]);

  // Close menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && 
          !event.target.closest('.nav-container') && 
          !event.target.closest('.hamburger')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <div className={`nav-overlay ${isOpen ? 'open' : ''}`}></div>
      {window.innerWidth <= 768 && (
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <nav className={`nav-container ${isOpen ? 'open' : ''} ${!isHomePage ? 'page-nav' : ''} ${isVisible || isOpen ? 'visible' : ''}`}>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          onClick={closeMenu}
        >
          {t('HOME')}
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          onClick={closeMenu}
        >
          {t('ABOUT_ME')}
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          onClick={closeMenu}
        >
          {t('PROJECTS')}
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          onClick={closeMenu}
        >
          {t('CONTACT')}
        </NavLink>
      </nav>
    </>
  );
}

export default Navigation; 
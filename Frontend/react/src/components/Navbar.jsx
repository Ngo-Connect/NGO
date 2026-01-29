import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { FaHandHoldingHeart, FaSun, FaMoon, FaCloud, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import NGOlogoImg from '../assets/NGO-CONNECT-Logo.png';
import NGOImg from '../assets/Logo.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // State to trigger animation
  
  const location = useLocation(); 

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  // Handle Theme Toggle with Animation
  const handleThemeToggle = () => {
    setIsAnimating(true); // Start animation
    toggleTheme(); // Switch theme
    
    // Remove animation class after it finishes (500ms)
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getThemeIcon = () => {
    if (theme === 'light') return <FaSun size={18} color="#f59e0b" />;
    if (theme === 'grey') return <FaCloud size={18} color="#9ca3af" />;
    return <FaMoon size={18} color="#fbbf24" />;
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* 1. DEFINE ANIMATION STYLES */}
      <style>
        {`
          @keyframes spin-theme {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(0.8); } /* Shrink slightly */
            100% { transform: rotate(360deg) scale(1); }
          }
          .theme-spin-effect {
            animation: spin-theme 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
        `}
      </style>

      <nav 
        className="navbar navbar-expand-md sticky-top shadow-sm" 
        style={{ 
          backgroundColor: 'var(--nav-bg)', 
          transition: 'background-color 0.3s ease',
          padding: '0.8rem 2rem'
        }}
      >
        <div className="container-fluid p-0">
          
          {/* BRANDING WITH PNG LOGO */}
          <Link 
            className="navbar-brand d-flex align-items-center" 
            to="/" 
            onClick={closeNav}
            style={styles.brand}
          >
            {/* Replaced Icon with Image */}
            <img 
              src={NGOImg} 
              alt="NGO Connect Logo" 
              style={{ height: '40px', marginRight: '10px', objectFit: 'contain' }} 
            />
            <span>NGO-Connect</span>
          </Link>

          {/* MOBILE TOGGLER */}
          <button 
            className="navbar-toggler border-0 p-0" 
            type="button" 
            onClick={toggleNav}
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
            style={{ color: 'var(--text-primary)' }} 
          >
            {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* COLLAPSIBLE CONTENT */}
          <div 
            className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} 
            id="navbarContent"
          >
            {/* NAVIGATION LINKS (Right Aligned) */}
            <ul className="navbar-nav ms-auto mb-2 mb-md-0 gap-md-4 gap-3 text-center pt-3 pt-md-0">
              {['Home', 'Campaigns', 'Our Mission', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                const active = isActive(path);

                return (
                  <li className="nav-item" key={item}>
                    <Link 
                      to={path} 
                      className={`nav-link ${active ? 'active' : ''}`} 
                      onClick={closeNav}
                      style={{
                        ...styles.navLink,
                        ...(active ? styles.activeNavLink : {}) 
                      }} 
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* RIGHT SIDE: Theme Toggle with Animation */}
            <div className="d-flex align-items-center justify-content-center gap-3 mt-3 mt-md-0 ms-md-4">
              <button 
                onClick={handleThemeToggle} 
                className={`btn btn-link text-decoration-none p-0 d-flex align-items-center justify-content-center ${isAnimating ? 'theme-spin-effect' : ''}`}
                style={styles.themeBtn}
                title="Switch Theme"
              >
                {getThemeIcon()}
              </button>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

const styles = {
  brand: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--primary)',
    letterSpacing: '-0.5px',
  },
  navLink: {
    color: 'var(--text-secondary)',
    fontWeight: '600',
    fontSize: '0.95rem',
    transition: 'color 0.3s, border-bottom 0.3s',
    borderBottom: '2px solid transparent',
  },
  activeNavLink: {
    color: 'var(--primary)',
    borderBottom: '2px solid var(--primary)',
    fontWeight: '700',
  },
  themeBtn: {
    background: 'var(--nav-bg)',
    border: '1px solid rgba(128, 128, 128, 0.2)',
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    // Note: We removed the inline transition here so it doesn't conflict with the keyframe animation
  },
};

export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaGlobe, FaSun, FaMoon, FaCloud } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext'; // Import the hook

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Access global theme state

  // Helper to show the correct icon based on current theme
  const getThemeIcon = () => {
    if (theme === 'light') return <FaSun color="#f39c12" />; // Orange Sun
    if (theme === 'grey') return <FaCloud color="#b0b3b8" />; // Grey Cloud
    return <FaMoon color="#f1c40f" />; // Yellow Moon (Dark mode)
  };

  return (
    // Note: backgroundColor is now var(--nav-bg)
    <nav style={{ ...styles.nav, backgroundColor: 'var(--nav-bg)', boxShadow: 'var(--shadow)' }}>
      
      {/* 1. BRANDING */}
      <Link to="/" style={styles.logo}>
        <FaHandHoldingHeart style={{ marginRight: '8px', fontSize: '1.8rem' }} />
        <span>NGO-Connect</span>
      </Link>

      {/* 2. MIDDLE NAVIGATION */}
      <div style={styles.middleLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/campaigns" style={styles.link}>Campaigns</Link>
        <Link to="/about" style={styles.link}>Our Mission</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>

      {/* 3. UTILITY & THEME TOGGLE */}
      <div style={styles.authGroup}>
        
        {/* --- THEME TOGGLE BUTTON --- */}
        <button 
          onClick={toggleTheme} 
          style={styles.iconBtn} 
          title={`Current mode: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
        >
          {getThemeIcon()}
        </button>

        <button style={styles.iconBtn} title="Change Language">
          <FaGlobe size={18} color="var(--text-secondary)" />
        </button>

        <Link to="/login" style={styles.link}>
          Login
        </Link>

        <Link 
          to="/register" 
          style={isHover ? { ...styles.registerBtn, ...styles.registerBtnHover } : styles.registerBtn}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          Join the Cause
        </Link>
      </div>
    </nav>
  );
};

// --- STYLES ---
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.8rem 2rem',
    // backgroundColor handled inline above to use variable
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'background-color 0.3s ease', // Smooth color transition
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--primary)', // Uses variable
    textDecoration: 'none',
    letterSpacing: '-0.5px',
  },
  middleLinks: {
    display: 'flex',
    gap: '30px',
  },
  authGroup: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'var(--text-secondary)', // Uses variable
    fontWeight: '600',
    fontSize: '0.95rem',
    transition: 'color 0.3s',
  },
  iconBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50%',
    transition: 'background 0.3s',
  },
  registerBtn: {
    textDecoration: 'none',
    backgroundColor: 'var(--primary)', // Uses variable
    color: 'var(--btn-text)',         // Uses variable (black text on dark mode usually looks better on green)
    padding: '10px 20px',
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    boxShadow: '0 4px 6px rgba(0,0,0, 0.2)',
    transition: 'all 0.3s ease',
  },
  registerBtnHover: {
    transform: 'translateY(-2px)',
    filter: 'brightness(1.1)', // Universal hover effect for any color
  }
};

export default Navbar;
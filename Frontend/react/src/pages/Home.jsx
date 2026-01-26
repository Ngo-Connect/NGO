import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronDown } from "react-icons/fa"; 
import videoBg from "../assets/background_video3.mp4";

// --- IMPORT THE NEW COMPONENTS ---
import TrustedBySection from "../pages/TrustedBySection";
import OurProcessSection from "../pages/OurProcessSection";
import TestimonialsSection from "../pages/TestimonialsSection";
import FooterSection from "../pages/FooterSection";
import StoriesSection from "../pages/StoriesSection";

const Home = () => {
  const greetings = [
    "Welcome", "स्वागतम्", "नमस्कार", "नमस्ते", "ਜੀ ਆਇਆਂ ਨੂੰ", 
    "నమస్కారం", "ꯇꯔꯥꯝꯅ ꯑꯣꯛꯆꯔꯤ", "வணக்கம்", "خیر مقدم", "ସ୍ୱାଗତ", 
    "স্বাগতম", "ನಮಸ್ಕಾರ", "স্বাগতম", "خوش آمدید", "സ്വാഗതം", "સ્વાગત છે", 
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  // --- BUTTON STYLES ---
  const btnStyles = {
    primary: {
      backgroundColor: '#10b981', 
      color: 'white',
      padding: '18px 40px', 
      borderRadius: '60px', 
      border: 'none',
      fontSize: '1.1rem',   
      fontWeight: '700',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', 
      gap: '10px',
      boxShadow: '0 8px 20px rgba(16, 185, 129, 0.4)', 
      transition: 'all 0.3s ease', 
      width: '100%', 
    },
    glass: {
      backgroundColor: 'rgba(255, 255, 255, 0.15)', 
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '2px solid rgba(255, 255, 255, 0.5)', 
      color: 'white',
      padding: '18px 40px', 
      borderRadius: '60px', 
      fontSize: '1.1rem',   
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      width: '100%', 
    }
  };

  const bottomTextStyle = {
    position: 'absolute',
    bottom: '20px',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.85rem',
    zIndex: 2,
    textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
    fontWeight: '500'
  };

  return (
    <div
      className="hide-scrollbar" 
      style={{
        height: "100%", 
        width: "100%",
        overflowY: "auto", 
        overflowX: "hidden", 
        position: "relative"
      }}
    >
      {/* --- RESPONSIVE CSS & ANIMATION --- */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
          .bounce-arrow {
            animation: bounce 2s infinite;
          }

          /* Default (Desktop) Sizes */
          .hero-title { font-size: 3rem; }
          .hero-desc { font-size: 1.2rem; }
          .hero-btn-group { flex-direction: row; }
          .hero-btn-wrapper { width: auto; }

          /* Mobile Adjustments (Max Width 768px) */
          @media (max-width: 768px) {
            .hero-title { font-size: 2rem !important; }
            .hero-desc { font-size: 1rem !important; padding: 0 15px; }
            .hero-btn-group { flex-direction: column !important; gap: 15px !important; width: 100%; padding: 0 20px; }
            .hero-btn-wrapper { width: 100% !important; }
          }
        `}
      </style>

      {/* =========================================
          SECTION 1: HERO (Video Background)
         ========================================= */}
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        
        {/*1. BACKGROUND VIDEO*/}
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        {/* 2. DARK OVERLAY */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 0,
          }}
        ></div>

        {/* 3. MAIN CENTER CONTENT (MODIFIED HERE) */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            color: "#fff",
            height: "100%", 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", // Centers vertically
            // paddingTop: "20vh",  <-- REMOVED THIS
          }}
        >
          {/* Responsive Title */}
          <h1
            key={index}
            className="fade-text hero-title"
            style={{
              marginBottom: "10px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              minHeight: "60px",
            }}
          >
            {greetings[index]} to NGO-Connect
          </h1>

          {/* Responsive Description */}
          <p
            className="hero-desc"
            style={{
              marginBottom: "40px", 
              maxWidth: "800px",
              lineHeight: "1.6",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            Connecting Donors, NGOs, and Beneficiaries for a better tomorrow. We bridge the gap between resources and need. Join us in building sustainable futures for communities through education, healthcare, food, etc.
          </p>

          {/* --- RESPONSIVE BUTTONS SECTION --- */}
          <div 
            className="hero-btn-group"
            style={{ display: "flex", gap: "25px", justifyContent: "center", marginTop: "10px" }}
          >
            
            <Link to="/login" className="hero-btn-wrapper" style={{ textDecoration: 'none' }}>
              <button 
                style={btnStyles.primary}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 10px 25px rgba(16, 185, 129, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.4)';
                }}
              >
                Login to Account <FaArrowRight />
              </button>
            </Link>

            <Link to="/register" className="hero-btn-wrapper" style={{ textDecoration: 'none' }}>
              <button 
                style={btnStyles.glass}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                Join as New Member
              </button>
            </Link>

          </div>
        </div>

        {/* 4. CORNER TEXTS (Hidden on Mobile) */}
        <div className="d-none d-md-block" style={{ ...bottomTextStyle, left: '20px' }}>
          &copy; Copyright Group-1 @ CDAC-ACTS Know-IT
        </div>

        {/* --- DOWNWARD BOUNCING ARROW --- */}
        <div 
          className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
          style={{ zIndex: 2 }}
        >
          <div 
            className="bounce-arrow"
            style={{ cursor: 'pointer', opacity: 0.8 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <FaChevronDown size={32} color="white" />
          </div>
        </div>
        {/* ------------------------------- */}

        <div className="d-none d-md-block" style={{ ...bottomTextStyle, right: '20px', textAlign: 'right' }}>
          Made with <span style={{ color: '#ff4d4d', fontSize: '1.2em' }}>&hearts;</span> by Group-1 at Know-IT(Pune)
        </div>
      </div>

      {/* =========================================
          SECTION 2: SCROLLABLE CONTENT
         ========================================= */}
      <TrustedBySection />
      <StoriesSection />
      <OurProcessSection />
      <TestimonialsSection />
      <FooterSection />

    </div>
  );
};

export default Home;
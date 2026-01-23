import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // Import the arrow icon
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

  // --- UPDATED BUTTON STYLES FOR "CHUBBY" LOOK ---
  const btnStyles = {
    primary: {
      backgroundColor: '#10b981', // Bright Emerald Green
      color: 'white',
      padding: '18px 40px', // INCREASED PADDING (Chubbier)
      borderRadius: '60px', // Rounder corners
      border: 'none',
      fontSize: '1.1rem',   // Slightly larger text
      fontWeight: '700',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      boxShadow: '0 8px 20px rgba(16, 185, 129, 0.4)', // Softer, larger shadow
      transition: 'all 0.3s ease', // Smooth transition for hover effects
    },
    glass: {
      backgroundColor: 'rgba(255, 255, 255, 0.15)', // Slightly more visible glass
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '2px solid rgba(255, 255, 255, 0.5)', // Thicker, cute border
      color: 'white',
      padding: '18px 40px', // INCREASED PADDING (Chubbier)
      borderRadius: '60px', // Rounder corners
      fontSize: '1.1rem',   // Slightly larger text
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
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
      {/* =========================================
          SECTION 1: HERO (Video Background)
         ========================================= */}
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        
        {/* 1. BACKGROUND VIDEO */}
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

        {/* 3. MAIN CENTER CONTENT */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            paddingTop: "20vh", 
            color: "#fff",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            key={index}
            className="fade-text"
            style={{
              fontSize: "3rem",
              marginBottom: "10px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              minHeight: "60px",
            }}
          >
            {greetings[index]} to NGO-Connect
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "40px", // More space before buttons
              maxWidth: "800px",
              lineHeight: "1.6",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            Connecting Donors, NGOs, and Beneficiaries for a better tomorrow. We bridge the gap between resources and need. Join us in building sustainable futures for communities through education, healthcare, food, etc.
          </p>

          {/* --- UPDATED BUTTONS SECTION --- */}
          <div style={{ display: "flex", gap: "25px", justifyContent: "center", marginTop: "10px" }}>
            
            {/* Primary Button (Green Pill with Arrow) */}
            <Link to="/login" style={{ textDecoration: 'none' }}>
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

            {/* Secondary Button (Glass/Blur Effect) */}
            <Link to="/register" style={{ textDecoration: 'none' }}>
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

        {/* 4. CORNER TEXTS */}
        <div style={{ ...bottomTextStyle, left: '20px' }}>
          &copy; Copyright Group-1 @ CDAC-ACTS Know-IT
        </div>
        <div style={{ ...bottomTextStyle, right: '20px', textAlign: 'right' }}>
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
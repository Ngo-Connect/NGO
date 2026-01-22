import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import videoBg from '../assets/background_video.mp4';
// import videoBg from "../assets/background_video2.mp4";
import videoBg from "../assets/background_video3.mp4";

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

  // Common style for bottom text to keep code clean
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
      style={{
        position: "relative",
        height: "100%", // CHANGED: Just fill the parent div
        width: "100%",
        overflow: "hidden", // Ensures video doesn't spill out
      }}
    >
      {/* --- 1. BACKGROUND VIDEO --- */}
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

      {/* --- 2. DARK OVERLAY --- */}
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

      {/* --- 3. MAIN CENTER CONTENT --- */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          paddingTop: "15vh",
          color: "#fff",
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
            marginBottom: "30px",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          Connecting Donors, NGOs, and Beneficiaries for a better tomorrow.
        </p>

        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <Link to="/login">
            <button className="btn btn-primary">Login to Account</button>
          </Link>
          <Link to="/register">
            <button className="btn" style={{ background: "#fff", color: "#333" }}>
              Join as New Member
            </button>
          </Link>
        </div>
      </div>

      {/* --- 4. BOTTOM LEFT: COPYRIGHT --- */}
      <div style={{ ...bottomTextStyle, left: '20px' }}>
        &copy; Copyright CDAC-ACTS Know-IT
      </div>

      {/* --- 5. BOTTOM RIGHT: MADE WITH LOVE --- */}
      <div style={{ ...bottomTextStyle, right: '20px', textAlign: 'right' }}>
        Made with <span style={{ color: '#ff4d4d', fontSize: '1.2em' }}>&hearts;</span> by Group-1 at Know-IT(Pune)
      </div>

    </div>
  );
};

export default Home;
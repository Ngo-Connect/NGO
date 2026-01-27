import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

// --- IMPORT YOUR IMAGES HERE ---
import janhaviImg from "../assets/Janhavi_Photo.png";
import neelamImg from "../assets/Neelam_Photo.png";
import satyaImg from "../assets/Satyavrat_Photo.png";
import yashImg from "../assets/Yash_Photo.png";
import dacClassImg from "../assets/DAC_Classroom.jpg";

const Contact = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Janhavi Bhor",
      phone: "+91 75229 96429",
      email: "janhavibhor285@gmail.com",
      github: "https://github.com/janhavibhor285-art",
      linkedin: "www.linkedin.com/in/janhavi-bhor-53433b260",
      img: janhaviImg,
    },
    {
      id: 2,
      name: "Neelam Bhapkar",
      phone: "+91 87553 46520",
      email: "neelambhapkar2610@gmail.com",
      github: "https://github.com/NeelamBhapkar",
      linkedin: "https://www.linkedin.com/in/neelam-bhapkar-ba3a99250/",
      img: neelamImg,
    },
    {
      id: 3,
      name: "Satyavrat Bind",
      phone: "+91 87701 44345",
      email: "satyavrat.bind1234@gmail.com",
      github: "https://github.com/Sb21k",
      linkedin: "https://www.linkedin.com/in/satyavrat-bind/",
      img: satyaImg,
    },
    {
      id: 4,
      name: "Yash Sinhe",
      phone: "+91 89997 97953",
      email: "yashsinhe17@gmail.com",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      img: yashImg,
    },
  ];

  return (
    // 1. MAIN WRAPPER: Fixed background, no scroll
    <div style={styles.backgroundWrapper}>
      
      {/* 2. OVERLAY: Dark layer */}
      <div style={styles.overlay}></div>

      {/* 3. CONTENT */}
      <div style={styles.pageContainer}>
        {/* Updated Text Color to Green */}
        <h1 style={styles.heading}>Meet the Team</h1>
        <p style={styles.subHeading}>The minds behind NGO-Connect (Group 1)</p>

        <div style={styles.gridContainer}>
          {teamMembers.map((member) => (
            <div key={member.id} style={styles.card}>
              {/* Left Side: Image */}
              <div style={styles.imageSection}>
                <img src={member.img} alt={member.name} style={styles.image} />
              </div>

              {/* Right Side: Info */}
              <div style={styles.infoSection}>
                <h2 style={styles.name}>{member.name}</h2>
                <span style={styles.role}>{member.role}</span>

                <div style={styles.divider}></div>

                {/* Contact Details */}
                <div style={styles.contactRow}>
                  <FaPhoneAlt style={styles.icon} />
                  <span style={styles.text}>{member.phone}</span>
                </div>

                <div style={styles.contactRow}>
                  <FaEnvelope style={styles.icon} />
                  <span style={styles.text}>{member.email}</span>
                </div>

                {/* Social Links */}
                <div style={styles.socialRow}>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.link}
                  >
                    <FaGithub size={20} /> GitHub Profile
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.link}
                  >
                    <FaLinkedin size={20} /> LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- STYLES ---
const styles = {
  // NEW: Background Wrapper to handle Image + No Scroll
  backgroundWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden', // Ensures no scrollbar
    backgroundImage: `url(${dacClassImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  // NEW: Dark Overlay
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 70% dark overlay
    zIndex: 0,
  },
  // UPDATED: Container logic to center everything
  pageContainer: {
    position: 'relative',
    zIndex: 1,
    padding: "20px",
    maxWidth: "1300px", // Slightly wider to fit 2x2 easily
    width: "100%",
  },
  heading: {
    textAlign: "center",
    color: "#10b981", // CHANGED TO GREEN
    fontSize: "2.5rem",
    marginBottom: "10px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
  },
  subHeading: {
    textAlign: "center",
    color: "#f0f0f0", // Light grey for visibility against dark bg
    marginBottom: "40px",
    fontSize: "1.2rem",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
  },
  // UPDATED: Grid to force 2x2 layout so it fits on one screen
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Forced 2 columns
    gap: "30px",
  },
  // --- CARDS (Kept EXACTLY as original) ---
  card: {
    display: "flex",
    backgroundColor: "var(--nav-bg)", 
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "var(--shadow)",
    transition: "transform 0.3s ease",
    border: "1px solid rgba(128, 128, 128, 0.1)",
  },
  imageSection: {
    flex: "0 0 150px", 
    backgroundColor: "#ccc",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  infoSection: {
    flex: 1,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    margin: "0",
    color: "var(--text-primary)",
    fontSize: "1.5rem",
  },
  role: {
    color: "var(--primary)",
    fontWeight: "600",
    marginBottom: "10px",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  divider: {
    height: "1px",
    backgroundColor: "var(--text-secondary)",
    opacity: 0.2,
    margin: "10px 0",
  },
  contactRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
    color: "var(--text-secondary)",
  },
  icon: {
    color: "var(--primary)",
    marginRight: "10px",
  },
  text: {
    fontSize: "0.95rem",
  },
  socialRow: {
    marginTop: "15px",
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    textDecoration: "none",
    color: "var(--text-primary)",
    fontSize: "0.9rem",
    fontWeight: "bold",
    border: "1px solid var(--text-secondary)",
    padding: "5px 10px",
    borderRadius: "5px",
    opacity: 0.8,
    transition: "opacity 0.2s",
  },
};

export default Contact;
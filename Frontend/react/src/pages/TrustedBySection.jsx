import React from 'react';
import knowItLogo from '../assets/know-it-logo3.png';
import cdacActsLogo from '../assets/cdac-acts-logo.png';


const TrustedBySection = () => {
  const logos = [
    knowItLogo,
    cdacActsLogo,
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
  ];

  // We duplicate the array to ensure the loop is seamless (Conveyor belt trick)
  const duplicatedLogos = [...logos, ...logos]; 

  const styles = {
    section: {
      backgroundColor: '#fff',
      padding: '50px 0',
      textAlign: 'center',
    },
    heading: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#666',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '40px',
    },
    // The "Track" that actually moves
    scrollTrack: {
      display: 'flex',
      gap: '80px', // Space between logos
      width: 'max-content', // Force track to be as wide as its content
      animation: 'scroll 25s linear infinite', // The magical animation
    },
    logo: {
      height: '35px',
      width: 'auto',
      filter: 'grayscale(100%)',
      opacity: '0.6',
      transition: 'opacity 0.3s',
      cursor: 'pointer',
    }
  };

  return (
    <section style={styles.section}>
      {/* 1. Define the Keyframes Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }
          /* Optional: Pause animation on hover for better UX */
          .logo-track:hover {
            animation-play-state: paused !important;
          }
          .logo-item:hover {
            opacity: 1 !important;
            filter: grayscale(0%) !important;
          }
        `}
      </style>

      <div className="container">
        <h3 style={styles.heading}>TRUSTED BY ORGANIZATIONS WORLDWIDE</h3>

        {/* 2. The Window (Hides the overflow) */}
        <div className="overflow-hidden w-100">
          
          {/* 3. The Moving Track */}
          <div className="logo-track" style={styles.scrollTrack}>
            {duplicatedLogos.map((logo, index) => (
              <img 
                key={index} 
                src={logo} 
                alt={`partner-logo-${index}`} 
                className="logo-item"
                style={styles.logo} 
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
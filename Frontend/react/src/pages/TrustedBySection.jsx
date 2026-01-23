import React from 'react';

const TrustedBySection = () => {
  // Placeholder logo URLs. Replace with your actual logo images.
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // Microsoft
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",    // Amazon
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", // Apple
    "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" // Meta
  ];

  const styles = {
    container: {
      textAlign: 'center',
      padding: '40px 20px',
      backgroundColor: '#fff',
    },
    heading: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#666',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '30px',
    },
    logoContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '40px',
    },
    logo: {
      height: '30px',
      width: 'auto',
      filter: 'grayscale(100%)', // Make logos gray
      opacity: '0.6',
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>TRUSTED BY ORGANIZATIONS WORLDWIDE</h3>
      <div style={styles.logoContainer}>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`logo-${index}`} style={styles.logo} />
        ))}
      </div>
    </div>
  );
};

export default TrustedBySection;
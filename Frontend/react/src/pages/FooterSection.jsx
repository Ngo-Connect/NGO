import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const FooterSection = () => {
  const styles = {
    footer: {
      backgroundColor: '#0a1929', // Dark blue background
      color: '#fff',
      padding: '60px 40px',
      fontFamily: 'sans-serif',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
      gap: '40px',
    },
    column: {
      flex: '1 1 200px',
      marginBottom: '20px',
    },
    logoBox: {
        backgroundColor: '#1565c0',
        padding: '10px',
        display: 'inline-block',
        marginBottom: '20px',
        fontWeight: 'bold',
        fontSize: '18px'
    },
    description: {
      lineHeight: '1.6',
      color: '#ccc',
      marginBottom: '20px',
    },
    socialIcons: {
      display: 'flex',
      gap: '15px',
    },
    icon: {
      backgroundColor: '#1e2a3a',
      padding: '10px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    heading: {
      fontSize: '18px',
      marginBottom: '20px',
      color: '#fff',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
    },
    linkItem: {
      marginBottom: '12px',
    },
    link: {
      textDecoration: 'none',
      color: '#ccc',
      transition: 'color 0.3s',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
      color: '#ccc',
    },
    contactIcon: {
      marginRight: '10px',
      color: '#22c55e', // Green color
    },
    newsletterText: {
      color: '#ccc',
      marginBottom: '20px',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    input: {
      padding: '12px',
      borderRadius: '4px',
      border: '1px solid #333',
      backgroundColor: '#1e2a3a',
      color: '#fff',
      outline: 'none',
    },
    button: {
      padding: '12px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#22c55e', // Green color
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Column 1: Company Info */}
        <div style={styles.column}>
          <div style={styles.logoBox}>
            Logo Here
            <br />
            <span style={{fontSize: '12px', fontWeight: 'normal'}}>+2349162671360</span>
          </div>
          <p style={styles.description}>
            Empowering communities through sustainable development, education, and healthcare initiatives worldwide.
          </p>
          <div style={styles.socialIcons}>
            <div style={styles.icon}><FaFacebookF /></div>
            <div style={styles.icon}><FaTwitter /></div>
            <div style={styles.icon}><FaInstagram /></div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.linkList}>
            {['About Us', 'Our Campaigns', 'FAQ', 'Contact'].map((link, index) => (
              <li key={index} style={styles.linkItem}>
                <a href="#" style={styles.link}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Contact Us</h4>
          <div style={styles.contactItem}>
            <FaMapMarkerAlt style={styles.contactIcon} />
            <span>CDAC-ACTS Know-IT</span>
          </div>
          <div style={styles.contactItem}>
            <FaPhoneAlt style={styles.contactIcon} />
            <span>+2349162671360</span>
          </div>
          <div style={styles.contactItem}>
            <FaPhoneAlt style={styles.contactIcon} />
            <span>+918475451254</span>
          </div>
          <div style={styles.contactItem}>
            <FaEnvelope style={styles.contactIcon} />
            <span>support@ngo_connect.com.org</span>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div style={{...styles.column, flex: '1 1 250px'}}>
          <h4 style={styles.heading}>Newsletter</h4>
          <p style={styles.newsletterText}>
            Subscribe to get updates on our latest projects and impact.
          </p>
          <div style={styles.inputGroup}>
            <input type="email" placeholder="Your email address" style={styles.input} />
            <button style={styles.button}>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
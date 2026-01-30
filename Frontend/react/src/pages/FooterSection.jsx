import React from 'react';
import { FaLinkedinIn, FaGithub, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const FooterSection = () => {
  const styles = {
    footer: {
      backgroundColor: '#0a1929', 
      color: '#fff',
      padding: '60px 40px',
      fontFamily: 'serif',
    },
  container: {
  maxWidth: '1300px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1.5fr 2fr',
  gap: '60px',
  alignItems: 'start',
 },
    column: {
      flex: '1 1 200px',
      marginBottom: '20px',
    },

    brand: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    description: {
      lineHeight: '1.7',
      color: '#ccc',
      marginBottom: '25px',
      maxWidth: '320px',
    },
    socialIcons: {
      display: 'flex',
      gap: '18px',
      fontSize: '20px',
    },
    icon: {
      cursor: 'pointer',
    },

    heading: {
      fontSize: '20px',
      marginBottom: '20px',
      color: '#fff',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
    },
    linkItem: {
      marginBottom: '14px',
      color: '#ccc',
      cursor: 'pointer',
    },

      contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
      color: '#ccc',
    },
    contactIcon: {
      marginRight: '10px',
      color: '#22c55e',
    },

  subscribeBox: {
  display: 'flex',
  alignItems: 'center',
  border: '2px solid #fff',
  borderRadius: '50px',
  overflow: 'hidden',
  width: '100%',
  maxWidth: '420px',
  height: '58px',
},

    subscribeInput: {
  flex: 1,
  padding: '0 22px',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: '#fff',
  fontSize: '16px',
},
    subscribeButton: {
      padding: '14px 28px',
      backgroundColor: '#fff',
      color: '#000',
      border: 'none',
      fontWeight: '500',
      cursor: 'pointer',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        <div style={styles.column}>
          <div style={styles.brand}>NGO-Connect</div>

          <p style={styles.description}>
            Empowering communities through sustainable development, education, and healthcare initiatives worldwide.
          </p>

          <div style={styles.socialIcons}>
           <FaLinkedinIn style={styles.socialIcon} />
            <FaGithub style={styles.socialIcon} />
          </div>
        </div>

          <div style={styles.column}>
          <h4 style={styles.heading}>Navigate</h4>
          <ul style={styles.linkList}>
            {["Home", "Campaigns", "Our Mission", "Contact"].map(
              (item, index) => (
                <li key={index} style={styles.linkItem}>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Contact Us</h4>

          <div style={styles.contactItem}>
            <FaMapMarkerAlt style={styles.contactIcon} />
            <span>
              <a
                href="https://maps.app.goo.gl/FqC2oJ3V6Z9mi2JH7"
                style={{ color: '#ccc', textDecoration: 'none' }}
              >
                KNOW-IT, C-DAC ACTS (ATC), Pune
              </a>
            </span>
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

        <div style={{ ...styles.column, flex: '1 1 250px' }}>
          <h4 style={styles.heading}>Subscribe Us</h4>

          <div style={styles.subscribeBox}>
            <input
              type="email"
              placeholder="Enter Email"
              style={styles.subscribeInput}
            />
            <button style={styles.subscribeButton}>Subscribe</button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
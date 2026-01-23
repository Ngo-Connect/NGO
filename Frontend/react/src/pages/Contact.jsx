import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  // Mock Data for Group Members
  const teamMembers = [
    {
      id: 1,
      name: "Janhavi Bhor",
      phone: "+91 75229 96429",
      email: "member1@cdac.in",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      img: "https://via.placeholder.com/150" // Dummy Image
    },
    {
      id: 2,
      name: "Neelam Bhapkar",
      phone: "+91 87553 46520",
      email: "member2@cdac.in",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      img: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Satyavrat Bind",
      phone: "+91 87701 44345",
      email: "member3@cdac.in",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      img: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Yash Sinhe",
      phone: "+91 89997 97953",
      email: "yashsinhe17@gmail.com",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      img: "https://via.placeholder.com/150"
    },
  ];

  return (
    <div style={styles.pageContainer}>
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
                <a href={member.github} target="_blank" rel="noreferrer" style={styles.link}>
                  <FaGithub size={20} /> GitHub Profile
                </a>
                <a href={member.linkedin} target="_blank" rel="noreferrer" style={styles.link}>
                  <FaLinkedin size={20} /> LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- STYLES ---
const styles = {
  pageContainer: {
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '80vh', // Ensures it takes up space even if content is small
  },
  heading: {
    textAlign: 'center',
    color: 'var(--primary)',
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  subHeading: {
    textAlign: 'center',
    color: 'var(--text-secondary)',
    marginBottom: '50px',
    fontSize: '1.2rem',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', // Responsive Grid
    gap: '30px',
  },
  card: {
    display: 'flex',
    backgroundColor: 'var(--nav-bg)', // Adapts to Dark Mode
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: 'var(--shadow)',
    transition: 'transform 0.3s ease',
    border: '1px solid rgba(128, 128, 128, 0.1)', // Subtle border for definition
  },
  imageSection: {
    flex: '0 0 150px', // Fixed width for image container
    backgroundColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  infoSection: {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    margin: '0',
    color: 'var(--text-primary)',
    fontSize: '1.5rem',
  },
  role: {
    color: 'var(--primary)',
    fontWeight: '600',
    marginBottom: '10px',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  divider: {
    height: '1px',
    backgroundColor: 'var(--text-secondary)',
    opacity: 0.2,
    margin: '10px 0',
  },
  contactRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    color: 'var(--text-secondary)',
  },
  icon: {
    color: 'var(--primary)',
    marginRight: '10px',
  },
  text: {
    fontSize: '0.95rem',
  },
  socialRow: {
    marginTop: '15px',
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    textDecoration: 'none',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    border: '1px solid var(--text-secondary)',
    padding: '5px 10px',
    borderRadius: '5px',
    opacity: 0.8,
    transition: 'opacity 0.2s',
  }
};

export default Contact;
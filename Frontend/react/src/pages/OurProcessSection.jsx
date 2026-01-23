import React from 'react';
import { FaSearch, FaHandsHelping, FaChartLine } from 'react-icons/fa';

const OurProcessSection = () => {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Identify Needs",
      description: "We work directly with communities to understand their most pressing challenges and priorities."
    },
    {
      icon: <FaHandsHelping />,
      title: "Take Action",
      description: "We implement sustainable solutions with local partners, ensuring long-term positive change."
    },
    {
      icon: <FaChartLine />,
      title: "Measure Impact",
      description: "We track results and share transparent reports with our donors about every dollar spent."
    }
  ];

  const styles = {
    section: {
      backgroundColor: '#fff',
      padding: '60px 20px',
      textAlign: 'center',
      fontFamily: 'sans-serif',
    },
    subheading: {
      color: '#22c55e', // Green color
      fontWeight: 'bold',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '10px',
    },
    heading: {
      fontSize: '36px',
      color: '#1a202c',
      marginBottom: '50px',
      fontWeight: 'bold',
    },
    stepsContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    stepCard: {
      flex: '1 1 300px',
      maxWidth: '350px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    iconBox: {
      backgroundColor: '#22c55e', // Green color
      color: '#fff',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '32px',
      marginBottom: '20px',
    },
    stepTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1a202c',
      marginBottom: '15px',
    },
    stepDescription: {
      color: '#4a5568',
      lineHeight: '1.6',
    }
  };

  return (
    <section style={styles.section}>
      <h4 style={styles.subheading}>OUR PROCESS</h4>
      <h2 style={styles.heading}>How We Make Impact</h2>
      <div style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} style={styles.stepCard}>
            <div style={styles.iconBox}>
              {step.icon}
            </div>
            <h3 style={styles.stepTitle}>{step.title}</h3>
            <p style={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcessSection;
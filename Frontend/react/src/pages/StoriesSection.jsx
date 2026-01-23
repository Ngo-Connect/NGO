import React from 'react';

const StoriesSection = () => {
  const stories = [
    {
      category: "EDUCATION",
      title: "500+ Children Educated",
      description: "Your donations have helped provide school supplies, uniforms, and tuition fees for over 500 children in underserved communities.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "HEALTHCARE",
      title: "1000+ Medical Treatments",
      description: "Our mobile health clinics have provided essential medical care to families who otherwise couldn't afford treatment.",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "NUTRITION",
      title: "10,000 Meals Served",
      description: "We have established community kitchens that provide nutritious daily meals to homeless individuals and families in crisis.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const styles = {
    section: {
      backgroundColor: '#fff',
      padding: '80px 20px',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      position: 'relative', // Needed for absolute positioning of lights
      overflow: 'hidden',   // Ensures light doesn't spill out
    },
    // --- NEW STYLES FOR LIGHT EFFECT ---
    topGlow: {
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '120%',
      height: '300px',
      background: 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
      pointerEvents: 'none', // Ensures clicks go through to content
      zIndex: 0,
      animation: 'pulseGlow 4s ease-in-out infinite alternate',
    },
    bottomGlow: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '120%',
      height: '300px',
      background: 'radial-gradient(circle at 50% 100%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
      pointerEvents: 'none',
      zIndex: 0,
      animation: 'pulseGlow 4s ease-in-out infinite alternate-reverse',
    },
    // -----------------------------------
    subheading: {
      color: '#10b981',
      fontWeight: 'bold',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '15px',
      display: 'block',
      position: 'relative', // Brings text above the light
      zIndex: 1,
    },
    heading: {
      fontSize: '42px',
      fontFamily: 'serif',
      color: '#1a202c',
      marginBottom: '60px',
      marginTop: '0',
      fontWeight: 'bold',
      position: 'relative', // Brings text above the light
      zIndex: 1,
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'left',
      position: 'relative', // Brings cards above the light
      zIndex: 1,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    },
    image: {
      width: '100%',
      height: '220px',
      objectFit: 'cover',
    },
    content: {
      padding: '25px',
    },
    badge: {
      backgroundColor: '#10b981',
      color: '#fff',
      padding: '6px 12px',
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      display: 'inline-block',
      marginBottom: '15px',
      letterSpacing: '1px',
    },
    cardTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#1a202c',
      marginBottom: '12px',
      marginTop: '0',
    },
    cardDescription: {
      color: '#4a5568',
      fontSize: '16px',
      lineHeight: '1.6',
      marginBottom: '0',
    }
  };

  return (
    <section style={styles.section}>
      {/* Inject animation keyframes */}
      <style>
        {`
          @keyframes pulseGlow {
            0% { opacity: 0.5; transform: translateX(-50%) scale(1); }
            100% { opacity: 1; transform: translateX(-50%) scale(1.1); }
          }
        `}
      </style>

      {/* --- ADDED LIGHT DIVS --- */}
      <div style={styles.topGlow} />
      <div style={styles.bottomGlow} />
      {/* ------------------------ */}

      <span style={styles.subheading}>IMPACT</span>
      <h2 style={styles.heading}>Stories from the Field</h2>
      
      <div style={styles.gridContainer}>
        {stories.map((story, index) => (
          <div 
            key={index} 
            style={styles.card}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img src={story.image} alt={story.title} style={styles.image} />
            <div style={styles.content}>
              <span style={styles.badge}>{story.category}</span>
              <h3 style={styles.cardTitle}>{story.title}</h3>
              <p style={styles.cardDescription}>{story.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoriesSection;
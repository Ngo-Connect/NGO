import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const StoriesSection = () => {
  // --- 1. STATE FOR MODAL ---
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      category: "EDUCATION",
      title: "500+ Children Educated",
      description: "Providing school supplies and tuition for children in underserved communities.",
      fullDetails: "Thanks to the generous donations, we have been able to partner with 5 local schools. We provided textbooks, uniforms, and paid tuition fees for over 500 children who were previously out of school.", // Added extra detail for modal
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "HEALTHCARE",
      title: "1000+ Treatments",
      description: "Mobile clinics providing essential medical care to families who couldn't afford it.",
      fullDetails: "Our mobile clinics traveled to 15 remote villages this year. We treated cases of malaria, malnutrition, and provided prenatal care to expectant mothers, saving countless lives.",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "NUTRITION",
      title: "10,000 Meals Served",
      description: "Community kitchens providing daily nutritious meals to families in crisis.",
      fullDetails: "We established 3 new community kitchens. These kitchens run 7 days a week, providing hot, nutritious meals to homeless individuals and families affected by the recent economic downturn.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "RELIEF",
      title: "Emergency Shelter",
      description: "Providing temporary housing for families displaced by natural disasters.",
      fullDetails: "Following the recent floods, we set up temporary shelters accommodating 200 families. We provided bedding, clean water, and hygiene kits to ensure their safety and dignity.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const styles = {
    section: {
      backgroundColor: '#fff',
      padding: '40px 20px', 
      textAlign: 'center',
      fontFamily: 'sans-serif',
      position: 'relative',
      overflow: 'hidden',
    },
    topGlow: {
      position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
      width: '100%', height: '200px',
      background: 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
      pointerEvents: 'none', zIndex: 0,
    },
    bottomGlow: {
      position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
      width: '100%', height: '200px',
      background: 'radial-gradient(circle at 50% 100%, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
      pointerEvents: 'none', zIndex: 0,
    },
    subheading: {
      color: '#10b981', fontWeight: 'bold', fontSize: '12px',
      textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px',
      display: 'block', position: 'relative', zIndex: 1,
    },
    heading: {
      fontSize: '32px', 
      fontFamily: 'serif', color: '#1a202c', marginBottom: '30px', marginTop: '0',
      fontWeight: 'bold', position: 'relative', zIndex: 1,
    },
    
    // --- COMPACT CARD STYLES ---
    cardContainer: {
      maxWidth: '800px', 
      margin: '0 auto',
      paddingBottom: '40px' 
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
      textAlign: 'left',
      display: 'flex',       
      flexDirection: 'row',  
      height: '220px',       
      alignItems: 'center',
      cursor: 'pointer', // Important to show it's clickable
      transition: 'transform 0.2s', // Smooth hover effect
    },
    imageContainer: {
      width: '40%',
      height: '100%',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    content: {
      width: '60%',
      padding: '25px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    badge: {
      backgroundColor: '#ecfdf5', 
      color: '#047857',           
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '10px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      display: 'inline-block',
      width: 'fit-content',
      marginBottom: '10px',
      letterSpacing: '0.5px',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1a202c',
      marginBottom: '8px',
      marginTop: '0',
    },
    cardDescription: {
      color: '#4a5568',
      fontSize: '14px',
      lineHeight: '1.5',
      marginBottom: '0',
      display: '-webkit-box',     
      WebkitLineClamp: '3',
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    }
  };

  return (
    <section style={styles.section}>
      <style>
        {`
          .carousel-indicators { margin-bottom: 0; }
          .carousel-indicators [data-bs-target] {
            background-color: #10b981;
            width: 8px; height: 8px; border-radius: 50%;
          }
          /* Hover effect for card */
          .story-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.12) !important;
          }
          @media (max-width: 576px) {
            .story-card { flex-direction: column !important; height: auto !important; }
            .story-img { width: 100% !important; height: 180px !important; }
            .story-content { width: 100% !important; }
          }
        `}
      </style>

      <div style={styles.topGlow} />
      <div style={styles.bottomGlow} />

      <span style={styles.subheading}>IMPACT</span>
      <h2 style={styles.heading}>Stories from the Field</h2>

      <div id="storiesCarousel" className="carousel slide" data-bs-ride="carousel" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className="carousel-inner">
          {stories.map((story, index) => (
            <div 
              className={`carousel-item ${index === 0 ? 'active' : ''}`} 
              key={index}
              data-bs-interval="4000"
            >
              <div style={styles.cardContainer}>
                
                {/* 2. TRIGGER MODAL ON CLICK */}
                <div 
                  style={styles.card} 
                  className="story-card"
                  data-bs-toggle="modal" 
                  data-bs-target="#storyModal"
                  onClick={() => setSelectedStory(story)} // Set state on click
                >
                  
                  <div style={styles.imageContainer} className="story-img">
                    <img src={story.image} alt={story.title} style={styles.image} />
                  </div>

                  <div style={styles.content} className="story-content">
                    <span style={styles.badge}>{story.category}</span>
                    <h3 style={styles.cardTitle}>{story.title}</h3>
                    <p style={styles.cardDescription}>{story.description}</p>
                    <small className="text-success fw-bold mt-2">Read More →</small>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="carousel-indicators">
          {stories.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#storiesCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
            ></button>
          ))}
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#storiesCarousel" data-bs-slide="prev" style={{ width: '5%' }}>
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: 'invert(1) grayscale(100)' }}></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#storiesCarousel" data-bs-slide="next" style={{ width: '5%' }}>
          <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: 'invert(1) grayscale(100)' }}></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>

      {/* --- 3. BOOTSTRAP MODAL COMPONENT --- */}
      <div className="modal fade" id="storyModal" tabIndex="-1" aria-labelledby="storyModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '16px' }}>
            
            {/* Modal Header (Hidden but functional for Close btn) */}
            <div className="modal-header border-0 p-3">
              <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">
                {selectedStory?.category}
              </span>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body p-0">
              {/* Large Image */}
              {selectedStory && (
                <div style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                   <img 
                      src={selectedStory.image} 
                      alt={selectedStory.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                   />
                </div>
              )}
              
              <div className="p-4 text-start">
                <h2 className="fw-bold mb-3" style={{ color: '#1a202c' }}>
                  {selectedStory?.title}
                </h2>
                <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                  {selectedStory?.fullDetails || selectedStory?.description}
                </p>
                
                {/* Optional: Add extra info or CTA inside modal */}
                <div className="mt-4 p-3 bg-light rounded-3 border-start border-4 border-success">
                   <strong>Impact:</strong> Every donation contributed to this specific milestone. 
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer border-0 p-4">
              <button type="button" className="btn btn-secondary rounded-pill px-4" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success rounded-pill px-4">Support Similar Cause</button>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default StoriesSection;
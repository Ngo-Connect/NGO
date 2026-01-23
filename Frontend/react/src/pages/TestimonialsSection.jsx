import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Monthly Donor",
      quote: "Seeing the direct impact of my donations has been incredible. This organization truly changes lives.",
      image: "https://i.pravatar.cc/150?img=1" // Placeholder image
    },
    {
      name: "Michael Chen",
      role: "Volunteer",
      quote: "Volunteering here opened my eyes to the power of community. Every small action creates ripples of change.",
      image: "https://i.pravatar.cc/150?img=2" // Placeholder image
    },
    {
      name: "Amara Okafor",
      role: "Beneficiary",
      quote: "Thanks to this organization, my children now have access to education and a brighter future ahead.",
      image: "https://i.pravatar.cc/150?img=3" // Placeholder image
    }
  ];

  const styles = {
    section: {
      backgroundColor: '#f0fdf4', // Light green background
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
    cardsContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '30px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      flex: '1 1 300px',
      maxWidth: '350px',
      textAlign: 'left',
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    avatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginRight: '15px',
    },
    name: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#1a202c',
      margin: 0,
    },
    role: {
      fontSize: '14px',
      color: '#22c55e', // Green color
      margin: 0,
    },
    quote: {
      fontStyle: 'italic',
      color: '#4a5568',
      lineHeight: '1.6',
    }
  };

  return (
    <section style={styles.section}>
      <h4 style={styles.subheading}>TESTIMONIALS</h4>
      <h2 style={styles.heading}>What People Say</h2>
      <div style={styles.cardsContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.userInfo}>
              <img src={testimonial.image} alt={testimonial.name} style={styles.avatar} />
              <div>
                <h5 style={styles.name}>{testimonial.name}</h5>
                <p style={styles.role}>{testimonial.role}</p>
              </div>
            </div>
            <p style={styles.quote}>"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
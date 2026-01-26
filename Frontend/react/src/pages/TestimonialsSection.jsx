import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Monthly Donor",
      quote: "Seeing the direct impact of my donations has been incredible. This organization truly changes lives.",
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Michael Chen",
      role: "Volunteer",
      quote: "Volunteering here opened my eyes to the power of community. Every small action creates ripples of change.",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Amara Okafor",
      role: "Beneficiary",
      quote: "Thanks to this organization, my children now have access to education and a brighter future ahead.",
      image: "https://i.pravatar.cc/150?img=9"
    },
    {
      name: "David Smith",
      role: "Partner NGO",
      quote: "Their transparency and dedication make them one of the best partners we have ever worked with.",
      image: "https://i.pravatar.cc/150?img=3"
    }
  ];

  // Duplicate data to create the seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-5" style={{ backgroundColor: '#f0fdf4' }}>
      
      {/* --- CUSTOM CSS FOR ANIMATION --- */}
      <style>
        {`
          @keyframes scroll-horizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); } /* Move 1/3rd because we tripled the data */
          }
          .testimonial-track {
            animation: scroll-horizontal 40s linear infinite;
            width: max-content; /* Ensure track is wide enough */
          }
          /* Pause on hover */
          .testimonial-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="container-fluid">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <h6 className="text-success fw-bold text-uppercase ls-2" style={{ letterSpacing: '2px', fontSize: '14px' }}>
            Testimonials
          </h6>
          <h2 className="fw-bold display-6 text-dark">
            What People Say
          </h2>
        </div>

        {/* --- SCROLLING WRAPPER (Bootstrap classes) --- */}
        <div className="w-100 overflow-hidden">
          
          {/* TRACK (Bootstrap + Custom Animation) */}
          <div className="d-flex align-items-center gap-4 testimonial-track ps-3">
            
            {duplicatedTestimonials.map((item, index) => (
              
              /* CARD (Bootstrap classes) */
              <div 
                key={index} 
                className="card border-0 shadow-sm rounded-4 flex-shrink-0" 
                style={{ width: '400px' }} // Fixed width needed for smooth scrolling
              >
                <div className="card-body p-4">
                  
                  {/* User Profile */}
                  <div className="d-flex align-items-center mb-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="rounded-circle me-3 border border-2 border-success p-1"
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }} 
                    />
                    <div>
                      <h5 className="fw-bold mb-0 text-dark">{item.name}</h5>
                      <small className="text-success fw-bold text-uppercase">{item.role}</small>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="card-text text-secondary fst-italic fs-6">
                    "{item.quote}"
                  </p>
                  
                </div>
              </div>

            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
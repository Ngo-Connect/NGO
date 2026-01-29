import React, { useState } from 'react';
import { FaSearch, FaFilter, FaHandHoldingHeart } from 'react-icons/fa';

const Campaign = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  // Mock Data
  const campaigns = [
    {
      id: 1,
      title: "Education for Rural Kids",
      category: "Education",
      description: "Help us build a new school building and provide books for children in remote villages.",
      goal: 500000,
      raised: 350000,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      daysLeft: 12
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      category: "Health",
      description: "Installing water purifiers in 50 communities to prevent waterborne diseases.",
      goal: 200000,
      raised: 45000,
      image: "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&q=80&w=800",
      daysLeft: 45
    },
    {
      id: 3,
      title: "Reforestation Project",
      category: "Environment",
      description: "Planting 10,000 trees to restore local biodiversity and combat climate change.",
      goal: 150000,
      raised: 145000,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      daysLeft: 5
    },
    {
      id: 4,
      title: "Emergency Food Relief",
      category: "Disaster Relief",
      description: "Providing hot meals and grocery kits to families affected by recent floods.",
      goal: 800000,
      raised: 200000,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      daysLeft: 20
    },
    {
      id: 5,
      title: "Animal Shelter Support",
      category: "Animals",
      description: "Funding medical supplies and food for rescued street dogs and cats.",
      goal: 100000,
      raised: 12000,
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800",
      daysLeft: 60
    },
    {
      id: 6,
      title: "Women Empowerment",
      category: "Social",
      description: "Skill development workshops to help women start their own small businesses.",
      goal: 300000,
      raised: 150000,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
      daysLeft: 30
    }
  ];

  // Filter Logic
  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || campaign.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={styles.pageContainer}>
      
      {/* 1. HEADER SECTION */}
      <div style={styles.header}>
        <h1 style={styles.heading}>Active Campaigns</h1>
        <p style={styles.subHeading}>Choose a cause that speaks to your heart and make a difference today.</p>
        
        {/* Search & Filter Bar */}
        <div style={styles.filterBar}>
          <div style={styles.searchBox}>
            <FaSearch color="#888" />
            <input 
              type="text" 
              placeholder="Search campaigns..." 
              style={styles.input}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div style={styles.selectBox}>
            <FaFilter color="#888" />
            <select 
              style={styles.select} 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Environment">Environment</option>
              <option value="Disaster Relief">Disaster Relief</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. GRID LAYOUT */}
      <div style={styles.grid}>
        {filteredCampaigns.map(campaign => {
          const percentage = Math.min((campaign.raised / campaign.goal) * 100, 100);
          
          return (
            <div key={campaign.id} style={styles.card}>
              <div style={styles.imageContainer}>
                <img src={campaign.image} alt={campaign.title} style={styles.image} />
                <span style={styles.categoryBadge}>{campaign.category}</span>
              </div>

              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{campaign.title}</h3>
                <p style={styles.cardDesc}>{campaign.description}</p>
                
                {/* Progress Bar */}
                <div style={styles.progressContainer}>
                  <div style={{...styles.progressBar, width: `${percentage}%`}}></div>
                </div>
                
                <div style={styles.statsRow}>
                  <div>
                    <span style={styles.statLabel}>Raised</span>
                    <div style={styles.statValue}>₹{campaign.raised.toLocaleString()}</div>
                  </div>
                  <div style={{textAlign: 'right'}}>
                    <span style={styles.statLabel}>Goal</span>
                    <div style={styles.statValue}>₹{campaign.goal.toLocaleString()}</div>
                  </div>
                </div>

                <div style={styles.divider}></div>

                <div style={styles.footerRow}>
                  <span style={styles.daysLeft}>🕒 {campaign.daysLeft} days left</span>
                  <button style={styles.donateBtn}>
                    Donate Now <FaHandHoldingHeart style={{marginLeft: '5px'}}/>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- STYLES ---
const styles = {
  pageContainer: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: '#f9fafb',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#111827',
    marginBottom: '10px',
    fontWeight: '800',
  },
  subHeading: {
    color: '#6b7280',
    fontSize: '1.1rem',
    marginBottom: '30px',
  },
  filterBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '10px 15px',
    borderRadius: '50px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    width: '300px',
  },
  input: {
    border: 'none',
    outline: 'none',
    marginLeft: '10px',
    fontSize: '1rem',
    width: '100%',
  },
  selectBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '10px 15px',
    borderRadius: '50px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  select: {
    border: 'none',
    outline: 'none',
    marginLeft: '10px',
    fontSize: '1rem',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  
  // --- GRID ---
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', // Responsive Columns
    gap: '30px',
  },
  
  // --- CARD ---
  card: {
    backgroundColor: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    position: 'relative',
    height: '200px',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  categoryBadge: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    color: '#10b981',
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  cardContent: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '10px',
  },
  cardDesc: {
    color: '#6b7280',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    marginBottom: '20px',
    flex: 1,
  },
  progressContainer: {
    width: '100%',
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '15px',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#10b981',
    borderRadius: '4px',
    transition: 'width 1s ease-in-out',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  statLabel: {
    fontSize: '0.85rem',
    color: '#9ca3af',
    display: 'block',
    marginBottom: '2px',
  },
  statValue: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#374151',
  },
  divider: {
    height: '1px',
    backgroundColor: '#f3f4f6',
    margin: '0 0 15px 0',
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  daysLeft: {
    fontSize: '0.9rem',
    color: '#6b7280',
    fontWeight: '500',
  },
  donateBtn: {
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.2s',
  }
};

export default Campaign;
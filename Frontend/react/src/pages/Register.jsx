import React, { useState } from 'react';
import videoBg from '../assets/register_background.mp4'; 

const Register = () => {
  const [role, setRole] = useState('Donor');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Testing Output: Registering new [${role}]`);
    alert(`Registration request sent for role: ${role}`);
  };

  return (
    <div style={{ 
      /* --- FIX START --- */
      /* Instead of calc(), we use absolute positioning to fill the remaining space */
      position: 'fixed', 
      top: '70px', // Push it down by approx navbar height (adjust if needed)
      left: 0,
      right: 0,
      bottom: 0,
      /* --- FIX END --- */
      
      overflow: 'hidden',
      display: 'flex',            
      justifyContent: 'center',   
      alignItems: 'center',       
      zIndex: 0 
    }}>
      
      {/* --- 1. BACKGROUND VIDEO --- */}
      <video 
        autoPlay 
        loop 
        muted 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* --- 2. DARK OVERLAY --- */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        zIndex: 0
      }}></div>

      {/* --- 3. FORM CONTENT --- */}
      <div className="auth-box" style={{ 
        position: 'relative', 
        zIndex: 1, 
        width: '100%', 
        maxWidth: '400px',
        maxHeight: '90vh', // Ensures form doesn't get cut off on small screens
        overflowY: 'auto'  // Adds scroll inside the box if screen is too short
      }}>
        <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>Register</h2>
        <p className="subtitle">Join NGO-Connect today</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>I want to register as:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="Admin">Admin</option>
              <option value="NGO">NGO Organization</option>
              <option value="Donor">Donor</option>
              <option value="Beneficiary">Beneficiary</option>
            </select>
          </div>

          <div className="form-group">
            <label>Full Name / Organization Name:</label>
            <input type="text" placeholder="Enter name" required />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="name@example.com" required />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Create password" required />
          </div>

          <button type="submit" className="btn btn-secondary full-width">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
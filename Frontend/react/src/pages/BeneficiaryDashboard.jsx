import React from 'react';
import { useNavigate } from 'react-router-dom';

const BeneficiaryDashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{ padding: '40px' }}>
      <h1>Beneficiary Portal</h1>
      <p>Find available aid and track your requests.</p>
      
      <div style={{ marginTop: '30px', display: 'grid', gap: '20px' }}>
        <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
          <h3>Request Aid</h3>
          <p>Apply for financial, medical, or educational assistance.</p>
          <button style={{ color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Start Application &rarr;</button>
        </div>
      </div>
      <button onClick={() => { localStorage.clear(); navigate('/login'); }} style={{ marginTop: '20px' }}>Logout</button>
    </div>
  );
};
export default BeneficiaryDashboard;
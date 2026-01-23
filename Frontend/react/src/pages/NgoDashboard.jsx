import React from 'react';
import { useNavigate } from 'react-router-dom';

const NgoDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div style={{ padding: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>NGO Dashboard</h1>
        <button onClick={() => { localStorage.clear(); navigate('/login'); }} style={{ padding: '8px 16px', cursor: 'pointer' }}>Logout</button>
      </div>
      
      <div style={{ marginTop: '40px', padding: '30px', border: '2px dashed #ccc', borderRadius: '10px', textAlign: 'center' }}>
        <h2>Create a New Campaign</h2>
        <p>Start raising funds for your cause today.</p>
        <button style={{ marginTop: '10px', padding: '10px 20px', background: '#10b981', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>+ Add Campaign</button>
      </div>
    </div>
  );
};
export default NgoDashboard;
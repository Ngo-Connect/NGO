import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonorDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>My Impact</h1>
      <p>Hello, <strong>{user.username}</strong>! Thank you for your support.</p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Donation History</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #eee', textAlign: 'left' }}>
              <th style={{ padding: '10px' }}>Date</th>
              <th style={{ padding: '10px' }}>Campaign</th>
              <th style={{ padding: '10px' }}>Amount</th>
              <th style={{ padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px' }}>2024-03-15</td>
              <td style={{ padding: '10px' }}>Education for All</td>
              <td style={{ padding: '10px' }}>₹2,000</td>
              <td style={{ padding: '10px', color: 'green' }}>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={() => { localStorage.clear(); navigate('/login'); }} style={{ marginTop: '40px' }}>Logout</button>
    </div>
  );
};
export default DonorDashboard;
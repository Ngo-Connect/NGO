import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaChartLine, FaDollarSign, FaFileInvoice, FaHeartbeat, FaHandHoldingHeart } from 'react-icons/fa';

const DonorDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // --- Mock Data ---
  const stats = [
    { title: "Total Donated", value: "₹8,000", icon: <FaHeart color="#ef4444" />, bg: "#fee2e2" },
    { title: "Donations Made", value: "2", icon: <FaChartLine color="#3b82f6" />, bg: "#dbeafe" },
    { title: "Lives Impacted", value: "6", icon: <FaDollarSign color="#10b981" />, bg: "#d1fae5" },
    { title: "Receipts Generated", value: "2", icon: <FaFileInvoice color="#8b5cf6" />, bg: "#ede9fe" },
  ];

  const history = [
    { date: "1/15/2024", beneficiary: "Priya Sharma", description: "Educational support", amount: "₹5,000", status: "completed" },
    { date: "2/10/2024", beneficiary: "Priya Sharma", description: "Medical assistance", amount: "₹3,000", status: "completed" },
    { date: "3/05/2024", beneficiary: "Rohan Das", description: "Food & Nutrition", amount: "₹1,500", status: "pending" },
  ];

  return (
    <div style={styles.dashboardContainer}>
      
      {/* HEADER */}
      <div style={styles.headerRow}>
        <div>
          <h1 style={styles.pageTitle}>Donor Dashboard</h1>
          <p style={styles.welcomeText}>Welcome back, <strong>{user.username || "Rajesh Kumar"}</strong></p>
        </div>
        <button onClick={() => { localStorage.clear(); navigate('/login'); }} style={styles.logoutBtn}>
          Logout
        </button>
      </div>

      {/* STATS CARDS */}
      <div style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} style={styles.statCard}>
            <div>
              <span style={styles.statTitle}>{stat.title}</span>
              <h2 style={styles.statValue}>{stat.value}</h2>
            </div>
            <div style={{ ...styles.iconBox, backgroundColor: stat.bg }}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* MAIN CONTENT (Form & Impact) */}
      <div style={styles.mainGrid}>
        
        {/* Donation Form */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Make a Donation</h3>
            <p style={styles.cardSub}>Support beneficiaries with your contribution</p>
          </div>
          <div style={styles.formContainer}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Beneficiary Name</label>
              <input type="text" placeholder="Enter beneficiary name" style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Amount (₹)</label>
              <input type="number" placeholder="Enter amount" style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Description (Optional)</label>
              <input type="text" placeholder="Purpose of donation" style={styles.input} />
            </div>
            <button style={styles.donateBtn}>
              <FaHeart style={{ marginRight: '8px' }} /> Donate Now
            </button>
          </div>
        </div>

        {/* Impact Summary */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Your Impact</h3>
            <p style={styles.cardSub}>See how your donations are making a difference</p>
          </div>
          <div style={styles.impactBox}>
            <h2 style={styles.impactValue}>₹8,000</h2>
            <p style={styles.impactLabel}>Total contribution to date</p>
          </div>
          <div style={styles.impactList}>
            <div style={styles.impactItem}><span>Education Support</span><strong>45%</strong></div>
            <div style={styles.impactItem}><span>Healthcare</span><strong>30%</strong></div>
            <div style={styles.impactItem}><span>Food & Nutrition</span><strong>25%</strong></div>
          </div>
          <div style={{ padding: '20px' }}>
            <span style={styles.label}>Recognition Badge</span>
            <div style={styles.badge}>⭐ Gold Contributor</div>
          </div>
        </div>
      </div>

      {/* --- DONATION HISTORY TABLE --- */}
      <div style={styles.historyCard}>
        <div style={styles.cardHeader}>
          <h3 style={styles.cardTitle}>Donation History</h3>
          <p style={styles.cardSub}>Your past donations and receipts</p>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Beneficiary</th>
                <th style={styles.th}>Description</th>
                <th style={styles.th}>Amount</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {history.map((row, i) => (
                <tr key={i} style={styles.tableRow}>
                  <td style={styles.td}>{row.date}</td>
                  <td style={styles.td}>{row.beneficiary}</td>
                  <td style={styles.tdColor}>{row.description}</td>
                  <td style={{ ...styles.td, fontWeight: '700' }}>{row.amount}</td>
                  <td style={styles.td}>
                    <span style={{
                      ...styles.statusBadge,
                      backgroundColor: row.status === 'completed' ? '#d1fae5' : '#fef3c7',
                      color: row.status === 'completed' ? '#065f46' : '#92400e'
                    }}>
                      {row.status}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <button style={styles.viewBtn}>
                      <FaFileInvoice style={{ fontSize: '14px' }} /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

// --- STYLES ---
const styles = {
  dashboardContainer: {
    padding: '30px',
    width: '100%',            // Forces full width
    boxSizing: 'border-box',  // Prevents padding from causing scrollbars
    margin: '0',              // Removes centering margins
    backgroundColor: '#f8f9fa',
    minHeight: '100%', 
  },
  headerRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' },
  pageTitle: { fontSize: '1.8rem', fontWeight: 'bold', color: '#111827', margin: 0 },
  welcomeText: { color: '#6b7280', marginTop: '4px', fontSize: '0.95rem' },
  logoutBtn: { padding: '8px 16px', backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '6px', cursor: 'pointer', color: '#ef4444', fontWeight: '600' },
  
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '30px' },
  statCard: { backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  statTitle: { fontSize: '0.85rem', color: '#6b7280', display: 'block', marginBottom: '5px' },
  statValue: { fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', margin: 0 },
  iconBox: { width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' },

  mainGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '25px', marginBottom: '30px' },
  card: { backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
  cardHeader: { padding: '16px 20px', borderBottom: '1px solid #f3f4f6', backgroundColor: '#fff' },
  cardTitle: { margin: 0, fontSize: '1.05rem', fontWeight: '700', color: '#1f2937' },
  cardSub: { margin: '4px 0 0 0', fontSize: '0.85rem', color: '#6b7280' },
  
  formContainer: { padding: '20px' },
  inputGroup: { marginBottom: '15px' },
  label: { display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#374151' },
  input: { width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' },
  donateBtn: { width: '100%', padding: '12px', backgroundColor: '#6b7280', color: 'white', border: 'none', borderRadius: '6px', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' },

  impactBox: { backgroundColor: '#fdf2f8', padding: '20px', margin: '20px', borderRadius: '8px' },
  impactValue: { color: '#be185d', fontSize: '1.8rem', margin: 0 },
  impactLabel: { color: '#831843', margin: '5px 0 0 0', fontSize: '0.85rem' },
  impactList: { padding: '0 20px' },
  impactItem: { display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f3f4f6', color: '#4b5563', fontSize: '0.9rem' },
  badge: { display: 'inline-block', backgroundColor: '#fef3c7', color: '#b45309', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', marginTop: '5px' },

  historyCard: { backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden', marginBottom: '40px' },
  table: { width: '100%', borderCollapse: 'collapse', minWidth: '600px' },
  th: { textAlign: 'left', padding: '16px 24px', color: '#6b7280', fontSize: '0.85rem', fontWeight: '600', borderBottom: '1px solid #f3f4f6' },
  tableRow: { borderBottom: '1px solid #f9fafb' },
  td: { padding: '16px 24px', fontSize: '0.95rem', color: '#111827', verticalAlign: 'middle' },
  tdColor: { padding: '16px 24px', fontSize: '0.95rem', color: '#6b7280', verticalAlign: 'middle' },
  statusBadge: { padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', display: 'inline-block', textTransform: 'lowercase' },
  viewBtn: { display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 16px', backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '6px', color: '#374151', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer' }
};

export default DonorDashboard;
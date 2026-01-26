import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaHeart, FaChartLine, FaAward } from "react-icons/fa";

// --- CSS CONSTANT OBJECT ---
const styles = {
  dashboardWrapper: {
    padding: "30px 40px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "#f6faf8",
    minHeight: "100vh",
    color: "#333",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  title: { fontSize: "24px", fontWeight: "bold", margin: 0 },
  subtitle: { color: "gray", fontSize: "14px", marginTop: "4px" },
  logoutBtn: {
    background: "#dc2626",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },
  statCard: {
    background: "white",
    borderRadius: "16px",
    padding: "20px",
    position: "relative",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
  },
  iconBase: {
    position: "absolute",
    top: "16px",
    right: "16px",
    fontSize: "20px",
    padding: "8px",
    borderRadius: "50%",
  },
  middleGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1.2fr",
    gap: "24px",
    marginBottom: "30px",
  },
  card: {
    background: "white",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
  },
  progressBar: {
    height: "8px",
    background: "#e5e7eb",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "8px",
  },
  metricRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid #f1f1f1",
  },
};

const NgoDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={styles.dashboardWrapper}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>NGO Dashboard</h1>
          <p style={styles.subtitle}>Helping Hands Foundation - Welcome, NGO Admin</p>
        </div>
        <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
      </div>

      {/* Stats Cards */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <p style={styles.subtitle}>Active Campaigns</p>
          <h2 style={{ fontSize: "28px", margin: "8px 0" }}>12</h2>
          <FaAward style={{ ...styles.iconBase, color: "#2563eb", background: "#dbeafe" }} />
        </div>
        <div style={styles.statCard}>
          <p style={styles.subtitle}>Total Beneficiaries</p>
          <h2 style={{ fontSize: "28px", margin: "8px 0" }}>456</h2>
          <FaUsers style={{ ...styles.iconBase, color: "#16a34a", background: "#dcfce7" }} />
        </div>
        <div style={styles.statCard}>
          <p style={styles.subtitle}>Funds Received</p>
          <h2 style={{ fontSize: "28px", margin: "8px 0" }}>₹12.5L</h2>
          <FaHeart style={{ ...styles.iconBase, color: "#dc2626", background: "#fee2e2" }} />
        </div>
        <div style={styles.statCard}>
          <p style={styles.subtitle}>Impact Score</p>
          <h2 style={{ fontSize: "28px", margin: "8px 0" }}>94%</h2>
          <FaChartLine style={{ ...styles.iconBase, color: "#7c3aed", background: "#ede9fe" }} />
        </div>
      </div>

      {/* Middle Section */}
      <div style={styles.middleGrid}>
        <div style={styles.card}>
          <h3 style={{ marginBottom: "10px" }}>Active Campaigns</h3>
          <div style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
              <span>Education for Rural Kids</span>
              <span style={styles.subtitle}>₹3.5L raised of ₹5L</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{ width: "85%", height: "100%", background: "#2563eb" }}></div>
            </div>
          </div>
          
          <div style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
              <span>Clean Water Initiative</span>
              <span style={styles.subtitle}>₹45k raised of ₹2L</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{ width: "50%", height: "100%", background: "#16a34a" }}></div>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
              <span>Emergency Food Relief</span>
              <span style={styles.subtitle}>₹2L raised of ₹8L</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{ width: "50%", height: "100%", background: "#ce0b0b" }}></div>
            </div>
          </div>
        </div>
  

        <div style={styles.card}>
          <h3 style={{ marginBottom: "10px" }}>Impact Metrics</h3>
          <div style={styles.metricRow}><span>Beneficiaries</span><strong>234</strong></div>
          <div style={styles.metricRow}><span>Meals Provided</span><strong>5,678</strong></div>
          <div style={styles.metricRow}><span>Students</span><strong>145</strong></div>
          <div style={styles.metricRow}><span>Checkups</span><strong>89</strong></div>
        </div>
      </div>

      {/* Recent Donations */}
      <div style={styles.card}>
        <h3 style={{ marginBottom: "15px" }}>Recent Donations</h3>
        <div style={styles.metricRow}>
          <div>
            <strong>Rajesh Kumar</strong>
            <p style={styles.subtitle}>Educational support</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontWeight: "bold" }}>₹5,000</span>
            <p style={styles.subtitle}>12/15/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoDashboard;
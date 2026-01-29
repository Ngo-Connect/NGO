import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaChartLine, FaDollarSign, FaFileInvoice, FaSignOutAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const DonorDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // --- Mock Data ---
  const stats = [
    { title: "Total Donated", value: "₹8,000", icon: <FaHeart />, iconColor: "text-danger", bg: "bg-danger bg-opacity-10" },
    { title: "Donations Made", value: "2", icon: <FaChartLine />, iconColor: "text-primary", bg: "bg-primary bg-opacity-10" },
    { title: "Lives Impacted", value: "6", icon: <FaDollarSign />, iconColor: "text-success", bg: "bg-success bg-opacity-10" },
    { title: "Receipts Generated", value: "2", icon: <FaFileInvoice />, iconColor: "text-primary", bg: "bg-info bg-opacity-10" },
  ];

  const history = [
    { date: "1/15/2024", beneficiary: "Priya Sharma", description: "Educational support", amount: "₹5,000", status: "completed" },
    { date: "2/10/2024", beneficiary: "Priya Sharma", description: "Medical assistance", amount: "₹3,000", status: "completed" },
    { date: "3/05/2024", beneficiary: "Rohan Das", description: "Food & Nutrition", amount: "₹1,500", status: "pending" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="container-fluid min-vh-100 bg-light py-5">
      <div className="container">
        
        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-5 bg-white p-4 rounded shadow-sm">
          <div>
            <h1 className="h3 mb-1 fw-bold text-dark">Donor Dashboard</h1>
            <p className="text-muted mb-0">
              Welcome back, <strong className="text-primary">{user.username || "Rajesh Kumar"}</strong>
            </p>
          </div>
          <button 
            onClick={handleLogout} 
            className="btn btn-outline-danger d-flex align-items-center gap-2 fw-semibold"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {/* STATS CARDS */}
        <div className="row g-4 mb-5">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3 col-sm-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body d-flex justify-content-between align-items-center p-4">
                  <div>
                    <span className="text-muted small fw-semibold text-uppercase">{stat.title}</span>
                    <h2 className="mb-0 fw-bold text-dark mt-1">{stat.value}</h2>
                  </div>
                  <div className={`rounded-circle p-3 d-flex align-items-center justify-content-center ${stat.bg} ${stat.iconColor}`} style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN CONTENT (Form & Impact) */}
        <div className="row g-4 mb-5">
          
          {/* Donation Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
                <h4 className="card-title fw-bold mb-1">Make a Donation</h4>
                <p className="text-muted small">Support beneficiaries with your contribution</p>
              </div>
              <div className="card-body p-4">
                <form>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-secondary">Beneficiary Name</label>
                    <input type="text" className="form-control" placeholder="Enter beneficiary name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-secondary">Amount (₹)</label>
                    <input type="number" className="form-control" placeholder="Enter amount" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-secondary">Description (Optional)</label>
                    <input type="text" className="form-control" placeholder="Purpose of donation" />
                  </div>
                  <button type="button" className="btn btn-secondary w-100 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2 mt-2">
                    <FaHeart /> Donate Now
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Impact Summary */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
                <h4 className="card-title fw-bold mb-1">Your Impact</h4>
                <p className="text-muted small">See how your donations make a difference</p>
              </div>
              <div className="card-body p-4">
                <div className="bg-danger bg-opacity-10 p-4 rounded mb-4 text-center">
                  <h2 className="text-danger fw-bold mb-0">₹8,000</h2>
                  <p className="text-danger small mb-0 fw-semibold">Total contribution to date</p>
                </div>
                
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2 border-bottom pb-2">
                    <span className="text-muted small">Education Support</span>
                    <strong className="text-dark small">45%</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-2 border-bottom pb-2">
                    <span className="text-muted small">Healthcare</span>
                    <strong className="text-dark small">30%</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-muted small">Food & Nutrition</span>
                    <strong className="text-dark small">25%</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="d-block small fw-bold text-secondary mb-2">Recognition Badge</span>
                  <span className="badge bg-warning text-dark border border-warning px-3 py-2 rounded-pill">
                    ⭐ Gold Contributor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DONATION HISTORY TABLE */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
            <h4 className="card-title fw-bold mb-1">Donation History</h4>
            <p className="text-muted small">Your past donations and receipts</p>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th className="py-3 px-4 text-secondary small text-uppercase">Date</th>
                    <th className="py-3 px-4 text-secondary small text-uppercase">Beneficiary</th>
                    <th className="py-3 px-4 text-secondary small text-uppercase">Description</th>
                    <th className="py-3 px-4 text-secondary small text-uppercase">Amount</th>
                    <th className="py-3 px-4 text-secondary small text-uppercase">Status</th>
                    <th className="py-3 px-4 text-secondary small text-uppercase text-end">Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((row, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3 fw-semibold text-dark">{row.date}</td>
                      <td className="px-4 py-3">{row.beneficiary}</td>
                      <td className="px-4 py-3 text-muted small">{row.description}</td>
                      <td className="px-4 py-3 fw-bold">{row.amount}</td>
                      <td className="px-4 py-3">
                        <span className={`badge rounded-pill fw-semibold px-3 py-2 ${
                          row.status === 'completed' 
                            ? 'bg-success bg-opacity-10 text-success' 
                            : 'bg-warning bg-opacity-10 text-warning'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-end">
                        <button className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-2">
                          <FaFileInvoice /> View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DonorDashboard;
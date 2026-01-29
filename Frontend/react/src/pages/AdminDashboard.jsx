import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsersCog, FaClipboardCheck, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="container-fluid min-vh-100 bg-light py-5">
      <div className="container">
        
        {/* Header Section */}
        <header className="d-flex justify-content-between align-items-center mb-5 p-4 bg-white rounded shadow-sm">
          <div>
            <h1 className="h3 mb-0 text-dark fw-bold">Admin Control Panel</h1>
            <p className="text-muted mb-0 mt-1">
              Welcome back, <strong className="text-primary">{user.username}</strong>
            </p>
          </div>
          <button 
            onClick={handleLogout} 
            className="btn btn-danger d-flex align-items-center gap-2"
          >
            <FaSignOutAlt /> Logout
          </button>
        </header>
        
        {/* Dashboard Grid */}
        <div className="row g-4">
          
          {/* Tile 1: Pending Approvals */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle">
                    <FaClipboardCheck size={24} className="text-success" />
                  </div>
                  <h5 className="card-title mb-0 text-secondary">Pending Approvals</h5>
                </div>
                <h2 className="display-4 fw-bold text-success mb-0">12</h2>
                <small className="text-muted">Requests waiting for review</small>
              </div>
            </div>
          </div>

          {/* Tile 2: Total Users */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle">
                    <FaUsers size={24} className="text-primary" />
                  </div>
                  <h5 className="card-title mb-0 text-secondary">Total Users</h5>
                </div>
                <h2 className="display-4 fw-bold text-primary mb-0">1,204</h2>
                <small className="text-muted">Registered accounts on platform</small>
              </div>
            </div>
          </div>

          {/* Tile 3: Account Management (Clickable) */}
          <div className="col-md-4">
            <div 
              className="card border-0 shadow-sm h-100 cursor-pointer user-select-none"
              onClick={() => navigate('/admin/users')}
              style={{ cursor: 'pointer', transition: 'transform 0.2s', borderLeft: '5px solid #6366f1' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="card-body p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="bg-indigo bg-opacity-10 p-3 rounded-circle" style={{ backgroundColor: '#e0e7ff' }}>
                    <FaUsersCog size={24} style={{ color: '#6366f1' }} />
                  </div>
                  <h5 className="card-title mb-0 text-dark fw-bold">Account Management</h5>
                </div>
                <p className="card-text text-secondary mb-0">
                  View, edit, or delete user accounts and manage roles.
                </p>
                <div className="mt-3 text-end">
                    <small className="fw-bold" style={{ color: '#6366f1' }}>Manage Users →</small>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
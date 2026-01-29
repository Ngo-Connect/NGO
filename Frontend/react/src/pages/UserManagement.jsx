import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit, FaArrowLeft, FaUserCog } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // 1. Fetch Data from Spring Boot API
  useEffect(() => {
    fetch('http://localhost:8085/api/admin/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  // 2. Delete Handler
  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      fetch(`http://localhost:8085/api/admin/users/${userId}`, {
        method: 'DELETE',
      })
      .then(() => {
        setUsers(users.filter(user => user.userId !== userId));
      });
    }
  };

  // 3. Edit Handler (Toggle Status)
  const handleToggleStatus = (userId) => {
    fetch(`http://localhost:8085/api/admin/users/${userId}/status`, {
        method: 'PUT'
    })
    .then(res => res.json())
    .then(updatedUser => {
        setUsers(users.map(u => u.userId === userId ? updatedUser : u));
    });
  };

  return (
    <div className="container-fluid py-5 bg-light min-vh-100">
      <div className="container">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/admin-dashboard')} 
          className="btn btn-outline-secondary mb-4 d-flex align-items-center gap-2 shadow-sm"
        >
          <FaArrowLeft /> Back to Dashboard
        </button>

        {/* Header Card */}
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-body d-flex align-items-center justify-content-between">
            <div>
              <h2 className="mb-0 fw-bold text-primary">
                <FaUserCog className="me-2" /> User Management
              </h2>
              <p className="text-muted mb-0 mt-1">Manage user roles, statuses, and accounts</p>
            </div>
            <span className="badge bg-primary rounded-pill px-3 py-2 fs-6">
              Total Users: {users.length}
            </span>
          </div>
        </div>

        {/* Table Card */}
        <div className="card shadow border-0 rounded-3">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover table-striped mb-0 align-middle">
                <thead className="table-dark">
                  <tr>
                    <th className="py-3 ps-4">ID</th>
                    <th className="py-3">Username</th>
                    <th className="py-3">Email</th>
                    <th className="py-3">Role</th>
                    <th className="py-3 text-center">Status</th>
                    <th className="py-3 text-end pe-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map(user => (
                      <tr key={user.userId}>
                        <td className="ps-4 fw-bold text-secondary">#{user.userId}</td>
                        <td className="fw-semibold">{user.username}</td>
                        <td className="text-muted">{user.email}</td>
                        <td>
                          <span className="badge bg-info text-dark bg-opacity-10 border border-info">
                            {user.role?.roleName}
                          </span>
                        </td>
                        <td className="text-center">
                          <span 
                            className={`badge rounded-pill px-3 ${
                              user.accountStatus === 'Active' ? 'bg-success' : 'bg-secondary'
                            }`}
                          >
                            {user.accountStatus}
                          </span>
                        </td>
                        <td className="text-end pe-4">
                          <div className="btn-group shadow-sm">
                            <button 
                                className="btn btn-sm btn-outline-primary" 
                                onClick={() => handleToggleStatus(user.userId)}
                                title="Toggle Status"
                            >
                                <FaEdit />
                            </button>
                            <button 
                                className="btn btn-sm btn-outline-danger" 
                                onClick={() => handleDelete(user.userId)}
                                title="Delete User"
                            >
                                <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-5 text-muted">
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserManagement;
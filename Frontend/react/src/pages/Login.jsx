import React, { useState } from 'react';

const Login = () => {
  const [role, setRole] = useState('Beneficiary');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Testing Output: Logging in as [${role}]`);
    alert(`Login request sent for role: ${role}`);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <p className="subtitle">Welcome back to the community</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="Admin">Admin</option>
              <option value="NGO">NGO Organization</option>
              <option value="Donor">Donor</option>
              <option value="Beneficiary">Beneficiary</option>
            </select>
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="name@example.com" required />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter password" required />
          </div>

          <button type="submit" className="btn btn-primary full-width">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  // 1. Get user data from storage
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  // 2. CHECK: Is user logged in?
  if (!token || !user) {
    // If no token, kick them to login
    return <Navigate to="/login" replace />;
  }

  // 3. CHECK: Does user have the right Role? (Optional but recommended)
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // If user is a "Donor" trying to access "Admin" page, kick them home
    return <Navigate to="/" replace />;
  }

  // 4. If all checks pass, render the page (Dashboard)
  return children;
};

export default ProtectedRoute;
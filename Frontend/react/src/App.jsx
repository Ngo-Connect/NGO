import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact'; 
import CursorMask from './components/CursorMask'; 

// --- IMPORT DASHBOARDS ---
import AdminDashboard from './pages/AdminDashboard';
import NgoDashboard from './pages/NgoDashboard';
import DonorDashboard from './pages/DonorDashboard';
import BeneficiaryDashboard from './pages/BeneficiaryDashboard';
import RegisterSuccessfully from './pages/RegisterSuccessfully';
import Campaigns from './pages/Campaign'; 
import ForgotPassword from './pages/ForgotPassword';

// --- NEW IMPORT: THE SECURITY GUARD ---
import ProtectedRoute from './components/ProtectedRoute';

// --- TITLE UPDATER COMPONENT ---
const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    // Map your paths to specific titles
    const routeTitles = {
      "/": "Home",
      "/login": "Login",
      "/register": "Join Us",
      "/contact": "Contact Us",
      "/campaigns": "Active Campaigns",
      "/register-success": "Welcome!",
      "/forgot-password": "Reset Password",
      "/admin-dashboard": "Admin Panel",
      "/ngo-dashboard": "NGO Dashboard",
      "/donor-dashboard": "Donor Portal",
      "/beneficiary-dashboard": "Impact Portal",
    };

    const currentTitle = routeTitles[location.pathname] || "Connect";
    document.title = `NGO-Connect | ${currentTitle}`;
  }, [location]);

  return null; // This component doesn't render anything visually
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Syncs the <title> tag with the current route */}
        <PageTitleUpdater />

        {/* The Mask Cursor sits on top */}
        <CursorMask />

        {/* --- LAYOUT FIX STARTS HERE --- */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100vh',  
          overflow: 'hidden' 
        }}>
          
          <Navbar /> 
          
          <div style={{ flex: 1, position: 'relative', overflowY: 'auto', overflowX: 'hidden' }}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/register-success" element={<RegisterSuccessfully />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* Protected Routes */}
              <Route 
                path="/admin-dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['Admin']}>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />

              <Route 
                path="/ngo-dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['NGO']}>
                    <NgoDashboard />
                  </ProtectedRoute>
                } 
              />

              <Route 
                path="/donor-dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['Donor']}>
                    <DonorDashboard />
                  </ProtectedRoute>
                } 
              />

              <Route 
                path="/beneficiary-dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['Beneficiary']}>
                    <BeneficiaryDashboard />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
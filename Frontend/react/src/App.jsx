import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      {/* The Mask Cursor sits on top */}
        <CursorMask />

        {/* --- LAYOUT FIX STARTS HERE --- */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100vh',  // Force full screen height
          overflow: 'hidden' // Prevent double scrollbars
        }}>
          
          {/* Navbar takes its natural height automatically */}
          <Navbar /> 
          
          {/* Main Content fills the EXACT remaining space */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />

              {/* Protected Dashboard Routes */}
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/ngo-dashboard" element={<NgoDashboard />} />
              <Route path="/donor-dashboard" element={<DonorDashboard />} />
              <Route path="/beneficiary-dashboard" element={<BeneficiaryDashboard />} />
              <Route path="/register-success" element={<RegisterSuccessfully />} />
            </Routes>
          </div>
          
        </div>
       
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const navigate = useNavigate();

  // --- State for Logic ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Load "Remember Me" email on startup
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5096/api/Auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // 1. Handle "Remember Me"
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      // 2. STORE JWT TOKEN & USER DATA
      localStorage.setItem("token", data.token); 
      localStorage.setItem("user", JSON.stringify(data));

      // 3. Redirect based on Role
      switch (data.role) {
        case "Admin": navigate("/admin-dashboard"); break;
        case "NGO": navigate("/ngo-dashboard"); break;
        case "Donor": navigate("/donor-dashboard"); break;
        case "Beneficiary": navigate("/beneficiary-dashboard"); break;
        default: navigate("/");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // FIXED LAYOUT: position: fixed + overflow: hidden ensures NO SCROLLBARS ever.
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden', margin: 0, padding: 0, backgroundColor: '#fff' }}>
      
      <div className="row g-0 h-100">
        
        {/* --- LEFT PANEL --- */}
        <div 
          className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center text-white p-5"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.85), rgba(6, 95, 70, 0.9)), url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div style={{ maxWidth: "450px" }}>
            <h1 className="display-4 fw-bold mb-2">Welcome Back</h1>
            <h2 className="h2 mb-4">to NGO-Connect</h2>
            <p className="lead mb-4 opacity-75 fs-6">Continue your journey of making a positive impact in communities worldwide.</p>
            
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center fs-6">
                <span className="bg-white bg-opacity-25 rounded-circle p-1 me-3 d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                   <FaCheck size={12} />
                </span>
                Track your donations
              </div>
              <div className="d-flex align-items-center fs-6">
                <span className="bg-white bg-opacity-25 rounded-circle p-1 me-3 d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                   <FaCheck size={12} />
                </span>
                Support multiple campaigns
              </div>
              <div className="d-flex align-items-center fs-6">
                <span className="bg-white bg-opacity-25 rounded-circle p-1 me-3 d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                   <FaCheck size={12} />
                </span>
                See your impact in real-time
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT PANEL --- */}
        <div className="col-md-6 d-flex align-items-center justify-content-center position-relative h-100 bg-white">
          
          <Link 
            to="/" 
            className="text-decoration-none position-absolute top-0 start-0 m-4 fw-bold d-flex align-items-center gap-2" 
            style={{ color: '#10b981', zIndex: 10 }}
          >
            <FaArrowLeft /> Back
          </Link>

          <div className="w-100 px-4" style={{ maxWidth: "400px" }}>
            <div className="mb-4">
              <h2 className="fw-bold text-dark h3">Sign In</h2>
              <p className="text-muted small">Enter your credentials to access your account</p>
            </div>

            {error && (
              <div className="alert alert-danger py-2 small d-flex align-items-center" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-bold small text-secondary mb-1">Email Address</label>
                <input
                  type="email"
                  className="form-control bg-light border-0"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ fontSize: '0.95rem', padding: '10px' }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold small text-secondary mb-1">Password</label>
                <input
                  type="password"
                  className="form-control bg-light border-0"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ fontSize: '0.95rem', padding: '10px' }}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input shadow-none"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    style={{ cursor: 'pointer', borderColor: '#10b981' }} 
                  />
                  <label className="form-check-label small text-muted" htmlFor="rememberMe" style={{ cursor: 'pointer' }}>
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" className="small text-decoration-none fw-bold" style={{ color: '#10b981' }}>
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="btn w-100 text-white fw-bold shadow-sm"
                disabled={isLoading}
                style={{ 
                  backgroundColor: '#10b981', 
                  borderRadius: '25px',
                  padding: '10px 0',
                  fontSize: '1rem'
                }}
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </form>

            <div className="text-center mt-4 text-muted small">
              Don't have an account? 
              <Link to="/register" className="ms-1 text-decoration-none fw-bold" style={{ color: '#10b981' }}>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
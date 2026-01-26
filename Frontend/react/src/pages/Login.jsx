import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheck } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  // --- State for Logic ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // <--- NEW STATE
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // --- State for Responsive Design ---
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // --- 1. Load "Remember Me" Data on Mount ---
  useEffect(() => {
    // Check if an email was saved previously
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }

    // Responsive listener
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

      // --- 2. Handle "Remember Me" Logic on Success ---
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      localStorage.setItem("user", JSON.stringify(data));

      switch (data.role) {
        case "Admin":
          navigate("/admin-dashboard");
          break;
        case "NGO":
          navigate("/ngo-dashboard");
          break;
        case "Donor":
          navigate("/donor-dashboard");
          break;
        case "Beneficiary":
          navigate("/beneficiary-dashboard");
          break;
        default:
          navigate("/");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Styles (Unchanged) ---
  const styles = {
    container: {
      display: "flex",
      height: "100%", 
      width: "100%",
      flexDirection: isMobile ? "column" : "row",
      fontFamily: "'Segoe UI', sans-serif",
      overflow: "hidden", 
    },
    leftPanel: {
      flex: 1,
      backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.85), rgba(6, 95, 70, 0.9)), url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      display: isMobile ? "none" : "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "60px",
    },
    leftContent: {
      maxWidth: "500px",
      margin: "0 auto", 
    },
    welcomeTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "20px",
      lineHeight: "1.2",
    },
    welcomeSub: {
      fontSize: "1.1rem",
      marginBottom: "40px",
      opacity: "0.9",
      lineHeight: "1.6",
    },
    benefitItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
      fontSize: "1.1rem",
      fontWeight: "500",
    },
    checkIcon: {
      backgroundColor: "rgba(255,255,255,0.2)",
      borderRadius: "50%",
      padding: "5px",
      marginRight: "15px",
      fontSize: "14px",
    },
    rightPanel: {
      flex: 1,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",    
      backgroundColor: "#fff",
      padding: "20px",
    },
    centerDiv: {
      width: "100%",
      maxWidth: "420px",
      display: "flex",
      flexDirection: "column",
    },
    backLink: {
      position: "absolute",
      top: "30px",
      left: "30px",
      textDecoration: "none",
      color: "#10b981",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "0.95rem",
      cursor: "pointer",
      zIndex: 10,
    },
    headerTitle: {
      fontSize: "2.2rem",
      fontWeight: "bold",
      color: "#111827",
      marginBottom: "10px",
      textAlign: "left",
    },
    headerSub: {
      color: "#6b7280",
      marginBottom: "30px",
      fontSize: "1rem",
      textAlign: "left",
    },
    inputGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "0.9rem",
      fontWeight: "600",
      color: "#374151",
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      backgroundColor: "#f9fafb",
      fontSize: "1rem",
      outline: "none",
      transition: "border-color 0.2s, background-color 0.2s",
      boxSizing: "border-box",
    },
    optionsRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
      fontSize: "0.9rem",
    },
    checkboxContainer: {
      display: "flex",
      alignItems: "center",
      color: "#4b5563",
    },
    checkbox: {
      marginRight: "8px",
      width: "16px",
      height: "16px",
      cursor: "pointer",
      accentColor: "#10b981",
    },
    forgotLink: {
      color: "#10b981",
      textDecoration: "none",
      fontWeight: "600",
    },
    submitBtn: {
      width: "100%",
      padding: "16px",
      backgroundColor: "#10b981",
      color: "white",
      border: "none",
      borderRadius: "30px",
      fontSize: "1.1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    errorMsg: {
      backgroundColor: "#fee2e2",
      color: "#ef4444",
      padding: "12px",
      borderRadius: "8px",
      marginBottom: "20px",
      textAlign: "center",
      fontSize: "0.9rem",
    },
    signupText: {
      textAlign: "center",
      marginTop: "25px",
      color: "#6b7280",
    },
    signupLink: {
      color: "#10b981",
      fontWeight: "bold",
      textDecoration: "none",
      marginLeft: "5px",
    },
  };

  return (
    <div style={styles.container}>
      
      {/* --- LEFT PANEL --- */}
      <div style={styles.leftPanel}>
        <div style={styles.leftContent}>
          <h1 style={styles.welcomeTitle}>Welcome Back to<br />NGO-Connect</h1>
          <p style={styles.welcomeSub}>
            Continue your journey of making a positive impact in communities worldwide.
          </p>
          
          <div style={styles.benefitItem}>
            <FaCheck style={styles.checkIcon} /> Track your donations
          </div>
          <div style={styles.benefitItem}>
            <FaCheck style={styles.checkIcon} /> Support multiple campaigns
          </div>
          <div style={styles.benefitItem}>
            <FaCheck style={styles.checkIcon} /> See your impact in real-time
          </div>
        </div>
      </div>

      {/* --- RIGHT PANEL --- */}
      <div style={styles.rightPanel}>
        
        <Link to="/" style={styles.backLink}>
          <FaArrowLeft /> Back to Home
        </Link>

        <div style={styles.centerDiv}>
          <h2 style={styles.headerTitle}>Sign In</h2>
          <p style={styles.headerSub}>Enter your credentials to access your account</p>

          {error && <div style={styles.errorMsg}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                onFocus={(e) => {
                  e.target.style.borderColor = "#10b981";
                  e.target.style.backgroundColor = "#fff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#d1d5db";
                  e.target.style.backgroundColor = "#f9fafb";
                }}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                onFocus={(e) => {
                  e.target.style.borderColor = "#10b981";
                  e.target.style.backgroundColor = "#fff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#d1d5db";
                  e.target.style.backgroundColor = "#f9fafb";
                }}
                required
              />
            </div>

            <div style={styles.optionsRow}>
              <label style={styles.checkboxContainer}>
                {/* --- 3. Connect Checkbox to State --- */}
                <input 
                  type="checkbox" 
                  style={styles.checkbox} 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <Link to="/forgot-password" style={styles.forgotLink}>Forgot password?</Link>
            </div>

            <button
              type="submit"
              style={styles.submitBtn}
              disabled={isLoading}
              onMouseEnter={(e) => !isLoading && (e.target.style.backgroundColor = "#059669")}
              onMouseLeave={(e) => !isLoading && (e.target.style.backgroundColor = "#10b981")}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p style={styles.signupText}>
            Don't have an account? 
            <Link to="/register" style={styles.signupLink}>Sign up</Link>
          </p>
        </div>
      </div>

    </div>
  );
};

export default Login;
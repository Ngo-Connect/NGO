import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle, FaLock } from "react-icons/fa";

const ForgotPassword = () => {
  // --- States ---
  const [step, setStep] = useState(1); // 1: Email, 2: Reset Password, 3: Success
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // --- STEP 1: VERIFY EMAIL ---
  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5096/api/Auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "User does not exist.");
      }

      // Success: Move to Step 2
      setStep(2);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // --- STEP 2: RESET PASSWORD ---
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5096/api/Auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to reset password.");
      }

      // Success: Move to Step 3
      setStep(3);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        {/* Back Button (Only show on Step 1) */}
        {step === 1 && (
          <Link to="/login" style={styles.backLink}>
            <FaArrowLeft /> Back to Login
          </Link>
        )}

        {/* --- STEP 1: EMAIL VERIFICATION --- */}
        {step === 1 && (
          <>
            <h2 style={styles.title}>Forgot Password?</h2>
            <p style={styles.subText}>Enter your email to verify your account.</p>

            {error && <div style={styles.errorMsg}>{error}</div>}

            <form onSubmit={handleVerifyEmail}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <button type="submit" style={styles.submitBtn} disabled={isLoading}>
                {isLoading ? "Verifying..." : "Verify Email"}
              </button>
            </form>
          </>
        )}

        {/* --- STEP 2: RESET PASSWORD FORM --- */}
        {step === 2 && (
          <>
            <h2 style={styles.title}>Reset Password</h2>
            <p style={styles.subText}>Create a new password for <strong>{email}</strong></p>

            {error && <div style={styles.errorMsg}>{error}</div>}

            <form onSubmit={handleResetPassword}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>New Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <button type="submit" style={styles.submitBtn} disabled={isLoading}>
                {isLoading ? "Updating..." : "Reset Password"}
              </button>
            </form>
          </>
        )}

        {/* --- STEP 3: SUCCESS MESSAGE --- */}
        {step === 3 && (
          <div style={{ textAlign: "center" }}>
            <div style={styles.iconCircle}>
              <FaCheckCircle size={30} color="#10b981" />
            </div>
            <h2 style={styles.title}>Password Updated!</h2>
            <p style={styles.subText}>
              Your password has been changed successfully. You can now login with your new credentials.
            </p>
            
            <Link to="/login" style={styles.submitBtn} className="no-decoration-btn">
              Back to Login
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

// --- STYLES ---
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    fontFamily: "'Segoe UI', sans-serif",
    padding: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    width: "100%",
    maxWidth: "400px",
    position: "relative",
  },
  backLink: {
    position: "absolute",
    top: "20px",
    left: "20px",
    textDecoration: "none",
    color: "#6b7280",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "0.9rem",
    fontWeight: "600",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "10px",
    textAlign: "center",
    marginTop: "20px",
  },
  subText: {
    color: "#6b7280",
    marginBottom: "30px",
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: "1.5",
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
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box",
  },
  submitBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#10b981",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
    textDecoration: "none",
    display: "block",
    textAlign: "center",
    boxSizing: "border-box",
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
  iconCircle: {
    width: "60px",
    height: "60px",
    backgroundColor: "#ecfdf5",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 20px auto",
  }
};

export default ForgotPassword;
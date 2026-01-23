import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import successVideo from "../assets/success_bg.mp4";

const RegisterSuccessfully = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || "User";

  return (
    <div style={styles.page}>
      {/* Background Video */}
      <video autoPlay loop muted style={styles.video}>
        <source src={successVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div style={styles.overlay}></div>
      

      <div style={styles.card}>
        <h2 style={styles.heading}>🎉 Registration Successful!</h2>
        <p style={styles.text}>
          Your {role} account has been created successfully.
        </p>

        <button style={styles.btn} onClick={() => navigate("/login")}>
          Redirect to Login
        </button>
      </div>
    </div>
  );
};

export default RegisterSuccessfully;

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    top: 0,
    left: 0,
    zIndex: -2,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.55)",
    zIndex: -1,
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "16px",
    width: "90%",
    maxWidth: "420px",
    textAlign: "center",
    boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
  },
  heading: {
    color: "#2e7d32",
    marginBottom: "12px",
  },
  text: {
    color: "#555",
    marginBottom: "25px",
  },
  btn: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
  },
};

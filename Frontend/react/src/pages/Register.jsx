import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import videoBg from "../assets/register_background.mp4";

const Register = () => {
  const navigate = useNavigate();

  // --- State Variables ---
  const [role, setRole] = useState("Donor");

  // Dropdown Data (Fetched from API)
  const [statesList, setStatesList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);

  // Selected Values (IDs) - Renamed for clarity to match your usage
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  // --- 1. Fetch States on Load ---
  useEffect(() => {
    fetch("http://localhost:5096/api/Auth/states")
      .then((res) => res.json())
      .then((data) => setStatesList(data))
      .catch((err) => console.error("Error fetching states:", err));
  }, []);

  // --- 2. Fetch Cities when State Changes ---
  useEffect(() => {
    if (state) {
      fetch(`http://localhost:5096/api/Auth/cities/${state}`)
        .then((res) => res.json())
        .then((data) => setCitiesList(data))
        .catch((err) => console.error("Error fetching cities:", err));
    } else {
      setCitiesList([]);
    }
  }, [state]);

  // --- 3. Handle Form Submit ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username: e.target[0].value,
      email: e.target[1].value,
      phoneNo: e.target[2].value,
      panNo: e.target[3].value,
      password: e.target[4].value,
      address: e.target[5].value,
      stateId: parseInt(state),
      cityId: parseInt(city),
      roleName: role,
    };

    try {
      const response = await fetch("http://localhost:5096/api/Auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        navigate("/register-success", { state: { role: role } });
      } else {
        const errorData = await response.json();
        alert("Registration failed: " + (errorData.message || "Unknown error"));
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <div style={styles.page}>
      <video autoPlay loop muted style={styles.video}>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div style={styles.overlay}></div>

      <div style={styles.card}>
        <h2 style={styles.heading}>Create Account</h2>
        <p style={styles.subheading}>Join NGO-Connect and make an impact 🌱</p>

        {/* Role Tabs */}
        <div style={styles.roleTabs}>
          {["NGO", "Donor", "Beneficiary"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              style={{
                ...styles.roleBtn,
                background:
                  role === r
                    ? "linear-gradient(135deg, #43cea2, #185a9d)"
                    : "transparent",
                color: role === r ? "#fff" : "#333",
              }}
            >
              {r}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username / Organization Name</label>
            <input
              type="text"
              placeholder="Enter name"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="name@example.com"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>PAN Number</label>
            <input
              type="text"
              placeholder="ABCDE1234F"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Create password"
              style={styles.input}
              required
            />
          </div>

          {/* Address Section */}
          <div style={styles.addressBox}>
            <label style={styles.label}>Address</label>
            <textarea
              placeholder="Enter full address"
              rows="3"
              style={styles.textarea}
              required
            />

            <div style={styles.addressRow}>
              {/* STATE DROPDOWN */}
              <select
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                  setCity(""); // Reset city when state changes
                }}
                style={styles.select}
                required
              >
                <option value="">Select State</option>
                {statesList.map((st) => (
                  <option key={st.stateId} value={st.stateId}>
                    {st.stateName}
                  </option>
                ))}
              </select>

              {/* CITY DROPDOWN */}
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={styles.select}
                disabled={!state}
                required
              >
                <option value="">Select City</option>
                {citiesList.map((ct) => (
                  <option key={ct.cityId} value={ct.cityId}>
                    {ct.cityName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" style={styles.submitBtn}>
            Register as {role}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

/* ===================== STYLES ===================== */
const styles = {
  page: {
    position: "fixed",
    top: "70px",
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -2,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
    zIndex: -1,
  },
  card: {
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(12px)",
    borderRadius: "18px",
    padding: "28px",
    width: "100%",
    maxWidth: "480px",
    maxHeight: "90vh",
    overflowY: "auto",
    boxShadow: "0 20px 45px rgba(0,0,0,0.3)",
  },
  heading: {
    textAlign: "center",
    fontSize: "26px",
    fontWeight: "700",
    color: "#185a9d",
  },
  subheading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#555",
  },
  roleTabs: {
    display: "flex",
    gap: "8px",
    background: "#f3f4f6",
    padding: "6px",
    borderRadius: "12px",
    marginBottom: "18px",
  },
  roleBtn: {
    flex: 1,
    border: "none",
    padding: "9px",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },
  inputGroup: {
    marginBottom: "12px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "4px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
    resize: "none",
  },
  addressBox: {
    marginTop: "10px",
    marginBottom: "16px",
  },
  addressRow: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  select: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  submitBtn: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    marginTop: "10px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
  },
};

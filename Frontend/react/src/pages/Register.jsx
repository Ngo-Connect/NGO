import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import videoBg from "../assets/register_background.mp4";
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("Donor");
  const [statesList, setStatesList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    fetch("http://localhost:5096/api/Auth/states")
      .then((res) => res.json())
      .then((data) => setStatesList(data))
      .catch((err) => console.error("Error fetching states:", err));
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      // ... (payload construction remains same)
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
    // ... (fetch logic remains same)
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
    <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center overflow-hidden" style={{ height: '100vh' }}>
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="position-absolute w-100 h-100"
        style={{ objectFit: "cover", zIndex: -2 }}
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Overlay - Made slightly darker so the transparent form pops */}
      <div 
        className="position-absolute w-100 h-100" 
        style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.6))", zIndex: -1 }}
      ></div>

      {/* Glass Card */}
      <div className="container">
        <div 
          className="card border-0 mx-auto shadow-lg"
          style={styles.glassCard}
        >
          <div className="card-body p-4">
            
            {/* Header */}
            <div className="text-center mb-3">
              {/* Changed text color to white for better contrast on transparent background */}
              <h3 className="fw-bold m-0 text-white">Create Account</h3>
              <p className="text-white-50 small mb-0">Join NGO-Connect and make an impact 🌱</p>
            </div>

            {/* Role Tabs */}
            <div className="d-flex justify-content-center gap-2 mb-3 p-1 rounded-3 bg-black bg-opacity-25 mx-auto" style={{ maxWidth: "500px" }}>
              {["NGO", "Donor", "Beneficiary"].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`btn btn-sm flex-fill fw-bold transition-all ${role === r ? 'text-white shadow-sm' : 'text-white-50'}`}
                  style={{
                    background: role === r ? "linear-gradient(135deg, #10b981, #059669)" : "transparent",
                    border: "none",
                    borderRadius: "8px",
                    padding: "6px",
                    fontSize: "0.9rem"
                  }}
                >
                  {r}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="row g-2"> 
                
                {/* Inputs - Changed bg to handle transparency better */}
                <div className="col-md-6">
                  <input type="text" className="form-control form-control-sm bg-light bg-opacity-50 text-dark border-0" placeholder="Username / Org Name" required />
                </div>

                <div className="col-md-6">
                  <input 
                    type="email" 
                    className="form-control form-control-sm bg-light bg-opacity-50 text-dark border-0" 
                    placeholder="Email Address" 
                    required 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.com$"
                    title="Please enter a valid email ending in .com"
                  />
                </div>

                <div className="col-md-6">
                  <input type="tel" className="form-control form-control-sm bg-light bg-opacity-50 text-dark border-0" placeholder="Phone Number" required />
                </div>

                <div className="col-md-6">
                  <input type="text" className="form-control form-control-sm bg-light bg-opacity-50 text-dark border-0" placeholder="PAN Number" required />
                </div>

                <div className="col-12">
                  <input type="password" className="form-control form-control-sm bg-light bg-opacity-50 text-dark border-0" placeholder="Password" required />
                </div>

                <div className="col-12">
                  <textarea className="form-control form-control-sm bg-light bg-opacity-50 text-dark border-0" rows="2" placeholder="Full Address" required style={{ resize: 'none' }}></textarea>
                </div>

                <div className="col-md-6">
                  <select 
                    className="form-select form-select-sm bg-light bg-opacity-50 text-dark border-0"
                    value={state}
                    onChange={(e) => { setState(e.target.value); setCity(""); }}
                    required
                  >
                    <option value="">Select State</option>
                    {statesList.map((st) => (
                      <option key={st.stateId} value={st.stateId}>{st.stateName}</option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6">
                  <select 
                    className="form-select form-select-sm bg-light bg-opacity-50 text-dark border-0"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    disabled={!state}
                    required
                  >
                    <option value="">Select City</option>
                    {citiesList.map((ct) => (
                      <option key={ct.cityId} value={ct.cityId}>{ct.cityName}</option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Footer Actions */}
              <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top border-white border-opacity-25">
                <div className="small text-white-50">
                  <span>Have an account? </span>
                  <Link to="/login" className="text-decoration-none fw-bold text-white">Login</Link>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-sm text-white fw-bold px-4 rounded-pill shadow-sm"
                  style={{ background: "linear-gradient(135deg, #10b981, #059669)", border: "none" }}
                >
                  Register
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  glassCard: {
    maxWidth: "850px",
    // UPDATED: Much lower opacity for more transparency (0.25 and 0.1 alpha)
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1))",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    // UPDATED: More subtle border
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "20px",
  }
};

export default Register;
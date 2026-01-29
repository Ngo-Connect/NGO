import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaClipboardList, FaCheckCircle, FaRupeeSign } from 'react-icons/fa';
import axios from 'axios';

const BeneficiaryDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const beneficiaryId = user?.userId;

  const [requests, setRequests] = useState([]);
  const [form, setForm] = useState({
    itemId: '',
    amountNeeded: '',
    description: ''
  });
  const [proofFile, setProofFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    amountNeeded: '',
    description: ''
  });

  const fetchRequests = async () => {
    const res = await axios.get(
      `http://localhost:8084/api/beneficiary/requests/${beneficiaryId}`
    );
    setRequests(res.data);
  };

  useEffect(() => {
    if (beneficiaryId) fetchRequests();
  }, [beneficiaryId]);

  // ✅ Single active request rule
  const hasActiveRequest = requests.some(
    r => r.requestStatus === "OPEN" || r.requestStatus === "PENDING"
  );

  // ✅ CREATE REQUEST WITH PROOF
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!proofFile) {
      alert("Please upload proof document");
      return;
    }

    const formData = new FormData();
    formData.append("beneficiaryId", beneficiaryId);
    formData.append("itemId", Number(form.itemId));
    formData.append("amountNeeded", form.amountNeeded);
    formData.append("description", form.description);
    formData.append("proofDocument", proofFile);

    try {
      await axios.post(
        "http://localhost:8084/api/beneficiary/request",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Request submitted successfully");
      setForm({ itemId: '', amountNeeded: '', description: '' });
      setProofFile(null);
      fetchRequests();

    } catch (err) {
      alert(err.response?.data || "Failed to submit request");
    }
  };

  // ✅ EDIT
  const handleEdit = (r) => {
    setEditingId(r.requestId);
    setEditForm({
      amountNeeded: r.amountNeeded,
      description: r.description
    });
  };

  // ✅ UPDATE
  const handleUpdate = async (id) => {
    await axios.put(
      `http://localhost:8084/api/beneficiary/request/${id}`,
      editForm
    );
    setEditingId(null);
    fetchRequests();
  };

  // ✅ DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this request?")) return;
    await axios.delete(
      `http://localhost:8084/api/beneficiary/request/${id}`
    );
    fetchRequests();
  };

  // ✅ STATS
  const stats = [
    { title: "Total Requests", value: requests.length, icon: <FaClipboardList />, bg: "#dbeafe" },
    { title: "Approved Requests", value: requests.filter(r => r.requestStatus === 'APPROVED').length, icon: <FaCheckCircle />, bg: "#d1fae5" },
    { title: "Funds Received", value: "₹0", icon: <FaRupeeSign />, bg: "#ede9fe" },
  ];

  return (
    <div style={styles.dashboardContainer}>
      <div style={styles.headerRow}>
        <h1 style={styles.pageTitle}>Beneficiary Dashboard</h1>
        <button style={styles.logoutBtn}
          onClick={() => { localStorage.clear(); navigate('/login'); }}>
          Logout
        </button>
      </div>

      {/* STATS */}
      <div style={styles.statsGrid}>
        {stats.map((s, i) => (
          <div key={i} style={styles.statCard}>
            <div>
              <span style={styles.statTitle}>{s.title}</span>
              <h2 style={styles.statValue}>{s.value}</h2>
            </div>
            <div style={{ ...styles.iconBox, background: s.bg }}>{s.icon}</div>
          </div>
        ))}
      </div>

      {/* CREATE REQUEST */}
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Create Aid Request</h3>

        {hasActiveRequest && (
          <div style={styles.warningBox}>
            ⚠ You already have an active request. Please wait until it is closed.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input style={styles.input} placeholder="Item ID"
            value={form.itemId}
            onChange={e => setForm({ ...form, itemId: e.target.value })}
            required
          />

          <input style={styles.input} type="number" placeholder="Amount Needed"
            value={form.amountNeeded}
            onChange={e => setForm({ ...form, amountNeeded: e.target.value })}
            required
          />

          <input style={styles.input} placeholder="Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            required
          />

          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            style={styles.input}
            onChange={e => setProofFile(e.target.files[0])}
            required
          />

          <button
            style={{
              ...styles.submitBtn,
              backgroundColor: hasActiveRequest ? '#9ca3af' : '#16a34a',
              cursor: hasActiveRequest ? 'not-allowed' : 'pointer'
            }}
            disabled={hasActiveRequest}
          >
            {hasActiveRequest ? "Active Request Exists" : "Submit Request"}
          </button>
        </form>
      </div>

      {/* REQUEST TABLE */}
      <div style={styles.historyCard}>
        <h3 style={styles.cardTitle}>My Requests</h3>

        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
  {requests.map(r => {
    
    // ✅ PASTE HERE (inside map, before return)
    const canModify =
      r.requestStatus !== 'APPROVED' &&
      r.requestStatus !== 'FULFILLED' &&
      r.requestStatus !== 'CLOSED';

    return (
      <tr key={r.requestId}>
        <td>{r.requestId}</td>

        <td>
          {editingId === r.requestId ? (
            <input
              value={editForm.description}
              onChange={e =>
                setEditForm({ ...editForm, description: e.target.value })
              }
            />
          ) : (
            r.description
          )}
        </td>

        <td>
          {editingId === r.requestId ? (
            <input
              type="number"
              value={editForm.amountNeeded}
              onChange={e =>
                setEditForm({ ...editForm, amountNeeded: e.target.value })
              }
            />
          ) : (
            `₹${r.amountNeeded}`
          )}
        </td>

        <td>
          <span
            style={{
              ...styles.statusBadge,
              backgroundColor:
                r.requestStatus === 'APPROVED'
                  ? '#dcfce7'
                  : r.requestStatus === 'PENDING'
                  ? '#fef3c7'
                  : '#fee2e2',
              color:
                r.requestStatus === 'APPROVED'
                  ? '#166534'
                  : r.requestStatus === 'PENDING'
                  ? '#92400e'
                  : '#991b1b'
            }}
          >
            {r.requestStatus}
          </span>
        </td>

        <td>
          {editingId === r.requestId ? (
            <>
              <button
                style={styles.saveBtn}
                onClick={() => handleUpdate(r.requestId)}
              >
                Save
              </button>
              <button
                style={styles.cancelBtn}
                onClick={() => setEditingId(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                style={{
                  ...styles.editBtn,
                  opacity: canModify ? 1 : 0.5,
                  cursor: canModify ? 'pointer' : 'not-allowed'
                }}
                disabled={!canModify}
                onClick={() => handleEdit(r)}
              >
                Edit
              </button>

              <button
                style={{
                  ...styles.deleteBtn,
                  opacity: canModify ? 1 : 0.5,
                  cursor: canModify ? 'pointer' : 'not-allowed'
                }}
                disabled={!canModify}
                onClick={() => handleDelete(r.requestId)}
              >
                Delete
              </button>
            </>
          )}
        </td>
      </tr>
    );
  })}
</tbody>

        </table>
      </div>
    </div>
  );
};

/* ================= STYLES ================= */

const styles = {
  dashboardContainer: { padding: '32px', background: '#f8fafc', minHeight: '100vh' },
  headerRow: { display: 'flex', justifyContent: 'space-between', marginBottom: '24px' },
  pageTitle: { fontSize: '2rem', fontWeight: '700', color: '#065f46' },
  logoutBtn: { background: '#dc2626', color: '#fff', border: 'none', padding: '8px 18px', borderRadius: '8px' },

  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '20px' },
  statCard: { background: '#fff', padding: '20px', borderRadius: '14px', display: 'flex', justifyContent: 'space-between' },
  statTitle: { fontSize: '0.85rem', color: '#6b7280' },
  statValue: { fontSize: '1.6rem', fontWeight: '700' },
  iconBox: { width: 42, height: 42, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' },

  card: { background: '#fff', padding: '22px', borderRadius: '16px', marginTop: '30px' },
  cardTitle: { fontWeight: '700', color: '#065f46' },

  input: { width: '100%', padding: '10px', marginBottom: '12px', borderRadius: '8px', border: '1px solid #d1d5db' },
  submitBtn: { width: '100%', padding: '12px', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: '700' },

  historyCard: { background: '#fff', marginTop: '32px', padding: '22px', borderRadius: '16px' },
  table: { width: '100%', borderCollapse: 'collapse' },

  statusBadge: { padding: '6px 14px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '700' },

  editBtn: { background: '#facc15', padding: '6px 14px', borderRadius: '8px', marginRight: '8px' },
  deleteBtn: { background: '#fee2e2', padding: '6px 14px', borderRadius: '8px' },
  saveBtn: { background: '#22c55e', padding: '6px 14px', borderRadius: '8px', marginRight: '8px' },
  cancelBtn: { background: '#e5e7eb', padding: '6px 14px', borderRadius: '8px' },

  warningBox: {
    background: '#fef3c7',
    color: '#92400e',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '12px',
    fontWeight: '600'
  }
};

export default BeneficiaryDashboard;

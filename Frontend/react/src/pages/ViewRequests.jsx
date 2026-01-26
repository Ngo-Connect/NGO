
import {useNavigate}from "react-router-dom";
import {useState, useEffect }from "react";

export default function FetchRequest(){
    const navigate =  useNavigate();
    const [requests,setRequest] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/getAll")
        .then(resp => {if(resp.ok)
            return resp.json();
            else
                return []
        })
        .then(data =>setRequest(data))
        .catch(err =>console.log("Failed to fetch data"))
    }, [])
    return(
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Active Beneficiary Requests</h2>
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Back to Dashboard
                </button>
            </div>

            <div className="table-responsive">
                <table className="table table-hover table-bordered shadow-sm">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Amount Needed</th>
                            <th>Request Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.length > 0 ? (
                            requests.map((req) => (
                                <tr key={req.request_id}>
                                    <td>{req.request_id}</td>
                                    <td>{req.description}</td>
                                    <td>
                            
                                        {req.amount_needed ? `${req.amount_needed}` : "Physical Items"}
                                    </td>
                                    <td>{new Date(req.request_date).toLocaleDateString()}</td>
                                    <td>
                                        <span className={`badge ${req.request_status === 'ACTIVE' ? 'bg-success' : 'bg-warning text-dark'}`}>
                                            {req.request_status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn btn-info btn-sm">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">No active requests found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
    
}
import { useState } from "react";

const LogDailyActivities = () => {
  const [state, setState] = useState({ steps: "", water: "", sleep: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({...state, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(state));
  };

return (
<main className="container py-5">
<h4 className="text-center fw-bold mb-5"> Log Daily Activities </h4>


<h6 className="fw-bold">Today's Steps</h6>
<div className="progress mb-5" style={{ height: "25px" }}>
  <div className="progress-bar bg-primary" style={{ width: "85%" }}>
    8500 / 10000 steps
  </div>
</div>


<form className="card shadow border-0 rounded-4 p-4 mb-5">
  <label className="form-label fw-semibold">Steps</label>
  <input className="form-control mb-3" name="steps" placeholder="Enter steps walked..." type="text"
  onChange={handleChange} />

  <label className="form-label fw-semibold">Water (glasses)</label>
  <input className="form-control mb-3" name="water" placeholder="Enter glasses of water..." type="text"
  onChange={handleChange} />

  <label className="form-label fw-semibold">Sleep (hours)</label>
  <input className="form-control mb-3" name="sleep" placeholder="Enter hours slept..." type="text"
  onChange={handleChange} />

  <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold" onClick={handleSubmit}>Add Activity</button>
</form>


<h6 className="fw-bold">Your Daily Activities</h6>
<table className="table table-hover">
  <thead className="table-info">
    <tr className="fw-bold">
      <th>Steps</th>
      <th>Water</th>
      <th>Sleep</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>8,500</td>
      <td>6 glasses</td>
      <td>7 hrs</td>
      <td>2026-11-10</td>
    </tr>
    <tr>
      <td>10,200</td>
      <td>8 glasses</td>
      <td>8 hrs</td>
      <td>2026-11-09</td>
    </tr>
    <tr>
      <td>9,250</td>
      <td>7 glasses</td>
      <td>6 hrs</td>
      <td>2026-11-08</td>
    </tr>
  </tbody>
</table>
</main>
)
}

export default LogDailyActivities;
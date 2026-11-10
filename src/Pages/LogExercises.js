import { useState } from "react";

const LogExercises = () => {
  const [state, setState] = useState({ exercise: "", sets: "", reps: "" });

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
<h4 className="text-center fw-bold mb-5"> Log Exercises </h4>


<form className="card shadow border-0 rounded-4 p-4 mb-5">
  <label className="form-label fw-semibold">Exercise</label>
  <input className="form-control mb-3" name="exercise" placeholder="Enter exercise name..." type="text"
  onChange={handleChange} />

  <label className="form-label fw-semibold">Sets</label>
  <input className="form-control mb-3" name="sets" placeholder="Enter number of sets..." type="text"
  onChange={handleChange} />

  <label className="form-label fw-semibold">Reps</label>
  <input className="form-control mb-3" name="reps" placeholder="Enter reps per set..." type="text"
  onChange={handleChange} />

  <button type="submit" className="btn btn-warning w-100 py-2 fw-semibold" onClick={handleSubmit}>Add Exercise</button>
</form>


<h6 className="fw-bold">Your Exercises</h6>
<table className="table table-hover">
  <thead className="table-info">
    <tr className="fw-bold">
      <th>Exercise</th>
      <th>Sets</th>
      <th>Reps</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Push-ups</td>
      <td>3</td>
      <td>15</td>
      <td>2026-11-10</td>
    </tr>
    <tr>
      <td>Squats</td>
      <td>4</td>
      <td>12</td>
      <td>2026-11-10</td>
    </tr>
    <tr>
      <td>Pull-ups</td>
      <td>3</td>
      <td>8</td>
      <td>2026-11-09</td>
    </tr>
    <tr>
      <td>Plank</td>
      <td>3</td>
      <td>60 sec</td>
      <td>2026-11-09</td>
    </tr>
  </tbody>
</table>
</main>
)
}

export default LogExercises;
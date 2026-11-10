
const Home = () => {
return (
<main className="container py-5">
<h1 className="text-center fw-bold mb-5" style={{ color: "#6C757D " }}> Home </h1>

<h2>
Welcome to HealthTrack! 


</h2>


<br></br>

 <button type="button" className="btn btn-info btn-lg rounded-pill fw-semibold px-5" onClick={() => window.location.href = "/services"}>Get Started</button>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div className="row g-4 mb-5 text-center">
  <div className="col-12 col-md-4">
    <div className="card shadow border-0 rounded-4 p-4">
      <h2 className="fw-bold text-primary">8,500</h2>
      <p className="text-secondary mb-0">Steps Today</p>
    </div>
  </div>
  <div className="col-12 col-md-4">
    <div className="card shadow border-0 rounded-4 p-4">
      <h2 className="fw-bold text-success">1,450</h2>
      <p className="text-secondary mb-0">Calories Eaten</p>
    </div>
  </div>
  <div className="col-12 col-md-4">
    <div className="card shadow border-0 rounded-4 p-4">
      <h2 className="fw-bold text-warning">4</h2>
      <p className="text-secondary mb-0">Workouts This Week</p>
    </div>
  </div>
</div>

<h6 className="fw-bold">Your Steps </h6>
<table className="table table-light table-hover">
  <thead className="table-info">
    
    <tr className="fw-bold">
      <th>Steps</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>8,500</td>
      <td>2026-10-02</td>
    </tr>
    <tr>
      <td>10,200</td>
      <td>2026-10-01</td>
      
    </tr>
  </tbody>

  <tbody>
    <tr>
      <td>9,250</td>
      <td>2026-9-30</td>
    </tr>
    <tr>
      <td>11,460</td>
      <td>2026-9-28</td>
      
    </tr>
  </tbody>
</table>

<h6 className="fw-bold">Average Steps: 9,850 </h6>


</main>




    
)
}
export default Home;






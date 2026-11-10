const Services = () => {
  return (
    <div className="container py-5">
        <h1 className="text-center fw-bold mb-5" style={{ color: "#6C757D " }}>Our Services</h1>
      <button type="button" className="btn btn-primary w-100 py-2 fw-semibold rounded-pill" onClick = {() => window.location.href = "/log-daily-activities"}>Log your Daily Activities!</button>
<br></br>
<br></br>

<button type="button" className="btn btn-success w-100 py-2 fw-semibold rounded-pill" onClick = {() => window.location.href = "/log-meals"}>Log your Meals!</button>
<br></br>
<br></br>

<button type="button" className="btn btn-warning w-100 py-2 fw-semibold rounded-pill" onClick = {() => window.location.href = "/log-exercises"}>Log your Exercises!</button>
    </div>
    );
}

export default Services;
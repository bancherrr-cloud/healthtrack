import { useState } from "react";

const GOAL = 2000;


const getKey = (d) => {
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
};

const LogMeals = () => {

  const [meals, setMeals] = useState(JSON.parse(localStorage.getItem("meals")) || []);
  const [state, setState] = useState({ meal: "", calories: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({...state, [name]: value});
  };

 
  const saveMeals = (newMeals) => {
    setMeals(newMeals);
    localStorage.setItem("meals", JSON.stringify(newMeals));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.meal === "" || state.calories === "") {
      alert("Please fill in both fields");
      return;
    }
    const newMeal = {
      id: Date.now(),
      meal: state.meal,
      calories: Number(state.calories),
      date: getKey(new Date())
    };
    alert(JSON.stringify(newMeal));
    saveMeals([...meals, newMeal]);
    setState({ meal: "", calories: "" });
  };

  const handleDelete = (id) => {
    saveMeals(meals.filter((m) => m.id !== id));
  };


  const today = getKey(new Date());
  let total = 0;
  for (let i = 0; i < meals.length; i++) {
    if (meals[i].date === today) {
      total += meals[i].calories;
    }
  }
  let percent = (total / GOAL) * 100;
  if (percent > 100) {
    percent = 100;
  }

  
 

return (
<main className="container py-5">
<h4 className="text-center fw-bold mb-5"> Log Meal </h4>

{/* Daily goal bar */}
<h6 className="fw-bold">Today's Calories</h6>
<div className="progress mb-5" style={{ height: "25px" }}>
  <div className="progress-bar bg-success" style={{ width: percent + "%" }}>
    {total} / {GOAL} kcal
  </div>
</div>


<form className="card shadow border-0 rounded-4 p-4 mb-5">
  <label className="form-label fw-semibold">Meal Name</label>
  <input className="form-control mb-3" name="meal" placeholder="Enter meal name..." type="text"
  value={state.meal} onChange={handleChange} />

  <label className="form-label fw-semibold">Calories</label>
  <input className="form-control mb-3" name="calories" placeholder="Enter calories..." type="number"
  value={state.calories} onChange={handleChange} />

  <button type="submit" className="btn btn-success w-100 py-2 fw-semibold" onClick={handleSubmit}>Add Meal</button>
</form>


<h6 className="fw-bold">Your Meals</h6>
<div className="table-responsive">
<table className="table table-hover mb-5">
  <thead className="table-info">
    <tr className="fw-bold">
      <th>Meal</th>
      <th>Calories</th>
      <th>Date</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {meals.map((m) => (
      <tr key={m.id}>
        <td>{m.meal}</td>
        <td>{m.calories}</td>
        <td>{m.date}</td>
        <td><button type="button" className="btn btn-sm btn-danger" onClick={() => handleDelete(m.id)}>Delete</button></td>
      </tr>
    ))}
  </tbody>
</table>
</div>


</main>
)
}

export default LogMeals;
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import About from './Pages/About';
import LogMeals from './Pages/LogMeals';
import LogExercises from './Pages/LogExercises';
import LogDailyActivities from './Pages/LogDailyActivities';



const App = () => {

     const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    let newTheme = "dark";
    if (theme === "dark") {
      newTheme = "light";
    }
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    

    
    <div data-bs-theme={theme} className="bg-body text-body" style={{ minHeight: "100vh" }}>
        <Router>
      <NavBar theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/log-meals" element={<LogMeals />} />
        <Route path="/log-exercises" element={<LogExercises />} />
        <Route path="/log-daily-activities" element={<LogDailyActivities />} />
      </Routes>
  
      </Router>
        <Footer />
    </div>
    
  );
}

export default App;
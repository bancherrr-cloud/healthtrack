import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5 border-top border-info border-3">
      <div className="container">

        <div className="row text-center text-md-start">

       
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-info">HealthTrack</h5>
            <p className="text-secondary">
              Your own personal health tracker, helping you stay on top of your fitness and wellness goals.
            </p>
          </div>

          
          <div className="col-6 col-md-2 mb-4">
            <h5 className="fw-semibold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-1"><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li className="mb-1"><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li className="mb-1"><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li className="mb-1"><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          
          <div className="col-6 col-md-3 mb-4">
            <h5 className="fw-semibold">Track</h5>
            <ul className="list-unstyled">
              <li className="mb-1"><a href="/log-meals" className="text-white text-decoration-none">Log Meals</a></li>
              <li className="mb-1"><a href="/log-exercises" className="text-white text-decoration-none">Log Exercises</a></li>
              <li className="mb-1"><a href="/log-daily-activities" className="text-white text-decoration-none">Log Daily Activities</a></li>
            </ul>
          </div>

      
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold">Contact Us</h5>
            <p className="text-secondary mb-2">
              <EmailIcon fontSize="small" /> baroudzein@hotmail.com
            </p>
            <p className="text-secondary mb-2">
              <PhoneIcon fontSize="small" /> +961 81 266 231
            </p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          <p className="mb-0 text-secondary">
            © 2026 HealthTrack. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
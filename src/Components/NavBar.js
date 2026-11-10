
const NavBar = (props) => {

 



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container">

        <a className="navbar-brand fw-bold" href="/">
        HealthTrack
        </a>

      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>

          </ul>
<button className="btn btn-outline-light ms-lg-3" onClick={props.toggleTheme}>
  Toggle Dark Mode
</button>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;

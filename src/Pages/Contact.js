import { useState } from "react";




const Contact = () => {
    const [state, setState] = useState({ fname: "", email: "", message: "" });
   const handleChange = (e) => {
             const name = e.target.name;
             const value = e.target.value;
             setState({...state, [name]: value});  //...state (imp)
         };
         const handleSubmit = e => {
          e.preventDefault();
            alert(JSON.stringify(state));
        };
  return (
    
    <div className="container py-5">
        <h1 className="text-center fw-bold mb-5">Contact Us</h1>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
         <form id = "contact-form" className="card shadow border-0 rounded-4 p-4 p-md-5">
            <label className="form-label fw-semibold" htmlFor="name">Full Name</label>

            <input className="form-control mb-3" name = "fname" placeholder="Enter full name..." type="text"
            onChange={handleChange}/>


 <label className="form-label fw-semibold" htmlFor="email">Email</label>
            
            <input className="form-control mb-3" name = "email" placeholder="Enter your email..." type="text"
            onChange={handleChange}/>

            <label className="form-label fw-semibold" htmlFor="message">Message</label>
            
            <input className="form-control mb-3" name = "message" placeholder="Enter your message..." type="text"
            onChange={handleChange}/>
        
        <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold" onClick={handleSubmit}>Send Message</button>
        </form>
        </div>
        </div>
    </div>
    
  );
}

export default Contact;
import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
         <div className="image">
        <img
          src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h2>Contact</h2>
      </div>
      <form >
        <h2>Contact</h2>
        <div className="input-field">
          <label htmlFor="">Your Name</label>
          <input type="text" />
        </div>
        <div className="input-field">
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div className="input-field">
          <label htmlFor="">Phone no.</label>
          <input type="number" />
        </div>
        <div className="input-field">
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;

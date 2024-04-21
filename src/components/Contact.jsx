import React, { useState } from "react";

import "./Contact.css";
import { Form } from "react-router-dom";
function Contact() {
  AOS.init();

  const [form, setform] = useState({});

  const handleformchange = (e) => {
    setform(
      {...form,[e.target.name]: e.target.value});
  };

  const handleformsubmit = async (e) => {
    e.preventDefault()
    let a=await fetch ("http://127.0.0.1:3000/" , {method:"POST", body:JSON.stringify(form), headers:{"Content-Type": "application/json"}},)
    let b= await a.json()
    console.log(b);
  
  };

  return (
    <>
      <section id="contact">
        <div className="contact">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="900"
          >
            <h1>Contact</h1>
            <p>Fill the form and get in touch with us</p>
          </div>
         
          <form
            onSubmit={handleformsubmit}
            data-aos="flip-left"
            data-aos-duration="3000"
            data-aos-delay="1000"
          >
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              required minLength={3} 
              onChange={handleformchange}
            />
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              onChange={handleformchange}
            />
            <label>Phone</label>
            <input
              type="text"
              placeholder="Enter Phone"
              name="phone"
              onChange={handleformchange} minLength={10} maxLength={10}
              required
            />
                        <textarea onChange={handleformchange} cols="10" rows="3" name="feedback" placeholder="Your Feedback" style={{fontSize:"1rem"}}></textarea>

            <button className="formbtn">Contact</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;

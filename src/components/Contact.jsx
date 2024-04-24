import React, { useState } from "react";

import "./Contact.css";
import { Form } from "react-router-dom";
function Contact() {
  AOS.init();

  const [form, setform] = useState({
    name: "",
    email: "",
    phone: "",
    feedback: "",
  });
  const [errors, setErrors] = useState({});
  const [submittedMessage, setSubmittedMessage] = useState("");

  const validateForm = () => {
    const errors = {};
    if (form.name.length < 3) {
      errors.name = "Name must be at least 3 characters long";
    }
    if (form.phone.length !== 10) {
      errors.phone = "Phone number must be exactly 10 characters long";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleformchange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleformsubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        let a = await fetch("http://127.0.0.1:3000/", {
          method: "POST",
          body: JSON.stringify(form),
          headers: { "Content-Type": "application/json" },
        });
        let b = await a.json();
        console.log(b);
        setform({});

        setSubmittedMessage("*Form submitted successfully!");

        setTimeout(() => {
          setform({
            name: "",
            email: "",
            phone: "",
            feedback: "",
          });
        }, 200);
        setTimeout(() => {
          setSubmittedMessage("");
        }, 5000);
      } catch (error) {
        console.log("error", error);
        setSubmittedMessage(
          "*sorry we are offline click on contact links on home page"
        );
      }
    }
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
              required
              minLength={3}
              onChange={handleformchange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
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
              onChange={handleformchange}
              minLength={10}
              maxLength={10}
              required
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
            <textarea
              onChange={handleformchange}
              cols="10"
              rows="3"
              name="feedback"
              placeholder="Your Feedback"
              style={{ fontSize: "1rem" }}
            ></textarea>
            <button className="formbtn">Contact</button>
            <div className="errmsg">{submittedMessage}</div>

          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;

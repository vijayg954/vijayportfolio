import React, { useState } from "react";
import "./Navbar.css";
import img11 from "./../../public/img11.png"
// import { Link, a } from "react-router-dom";

const Navbar = () => {
  let [navbar, setnavbar] = useState(true);
  AOS.init();
  return (
    <div className="container">
      <div className="nav2 " data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="200">
        <img src={img11} >
        </img>
      </div>
      <div className={navbar ? "nav3" : "nav4"}>
        <div className="navb " data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="200">
          <a className="navb1 " href="/">
            Home
          </a>
          <a className="navb1" href="#about">
            About
          </a>
          <a className="navb1" href="#services">
            Services
          </a>
          <a className="navb1" href="#Projects">
            projects
          </a>
          <a className="navb1" href="#contact">
            Contact
          </a>
          {/* <a className="navb1" href="#footer">
            Footer
          </a> */}
        </div>
      </div>
      <div className="bars">
        <i
          className="fa-solid fa-bars "
          onClick={() => {
            setnavbar(!navbar);
          }}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;

// className={(e)=>{return e.isActive?"hrefggle1":""}}

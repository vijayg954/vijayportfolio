import React from "react";
import "./Services.css";
const Services = () => {
  AOS.init();
  return (
    <div>
      <div id="services">
        <div className="services" data-aos="fade-down-right" data-aos-duration="2000" data-aos-delay="300">
          <h1>SERVICES</h1>
          <p >We provide the services which is common but in unique and eye catching way </p>
        </div>
        <div className="servicecards">
          <div className="servicecard" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300">
          <i className="fa-solid fa-display" id="serviceid"></i>
            <h3>Web Development </h3>
            <p>We provide Frontend and Backend web development</p>
            {/* <a href="#">
            Read More <i className="fa-solid fa-arrow-right-long"></i>
            </a> */}
          </div>
          <div className="servicecard" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
              <i className="fa-solid fa-code" id="serviceid"></i>
            <h3>Web Designing </h3>
            <p>We can create new designs and can modify your old designs as well</p>
            {/* <a href="#">
              Read More <i className="fa-solid fa-arrow-right-long" ></i>
            </a> */}
          </div>
          <div className="servicecard" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="700">
              <i className="fa-brands fa-codepen" id="serviceid"></i>
            <h3>UI/ UX Design </h3>
            <p>Our design is always unique and provide best user experiances</p>
            {/* <a href="#">
            Read More <i className="fa-solid fa-arrow-right-long" ></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

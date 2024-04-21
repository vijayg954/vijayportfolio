import React from "react";
import "./Footer.css"

const Footer = () => {
  AOS.init();
  return (
    <div>
      <section className="footer" id="footer" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" >
        <div className="footerlinks">
          <h2>Portfolio</h2>
          <div>

          <p> Get in touch with us on social media </p>
          <div className="footersocial">
          <a href="https://github.com/vijayg954" target="_blank"> <i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/vijay-gupta27/" target="_blank"> <i className="fa-brands fa-linkedin"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100002347086272" target="_blank"> <i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/vijay_1431/" target="_blank"> <i className="fa-brands fa-instagram"></i></a>
          </div>
          </div>
        </div>
        <div className="footerlinks">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
          </ul>
        </div>
        <div className="footerlinks">
          <h3>Information</h3>
          <ul>
            <li>
              <a href="#">Membership</a>
            </li>
            <li>
              <a href="#">Privacy & Policy</a>
            </li>
            <li>
              <a href="#">Project Terms & Conditionsts</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;

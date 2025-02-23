// import React from "react";
import proimg from "./../../public/img7.png";
import proimg1 from "./../../public/img8.png";
import proimg2 from "./../../public/img9.png";
import proimg3 from "./../../public/img12.png";
import book from "./../../public/book.png";
import blog from "./../../public/blog.jpg.png";
import ecom from "./../../public/ecom.png";
import weather from "./../../public/weather.png";
import calculator from "./../../public/calculator.png";
import "./Projects.css";

const Projects = () => {
  AOS.init();
  return (
    <div>
      <section id="Projects">
        <div className="Project">
          <h2
            data-aos="zoom-out-right"
            data-aos-duration="2500"
            data-aos-delay="400"
          >
            Project Title
          </h2>
          <p data-aos="fade-in" data-aos-duration="2000" data-aos-delay="700">
            Here are our some projects <br />
            click on projects for live preview
          </p>
        </div>

        <div className="projectcards">
        
          <div
            className="projectcard"
            data-aos="fade-up-left"
            data-aos-duration="2000"
            data-aos-delay="900"
          >
            <img src={ecom} alt="" />
            <div>
              <h1>Ecommerce full Stack Web App</h1>
              <p>created by using React, Nodejs, MongoDB Atlas, Express js</p>
              <a href="https://ecommerce27.vercel.app/">
                Read more <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>


          <div
            className="projectcard"
            data-aos="fade-up-left"
            data-aos-duration="2000"
            data-aos-delay="900"
          >
            <img src={blog} alt="" />
            <div>
              <h1> Studytoppers Full Stack Web App</h1>
              <p>created by using React, Nodejs, MongoDB Atlas, Express js</p>
              <a href="https://studytoppers.netlify.app">
                Read more <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>



          <div
            className="projectcard"
            data-aos="fade-up-left"
            data-aos-duration="2000"
            data-aos-delay="900"
          >
            <img src={book} alt="" />
            <div>
              <h1>Book Store Full Stack Web App</h1>
              <p>created by using React, Nodejs, MongoDB Atlas Tailwind CSS</p>
              <a href="https://bookapp123.netlify.app/">
                Read more <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>

          <div
            className="projectcard"
            data-aos="fade-down-left"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            <img src={proimg1} alt="" />
            <div>
              <h1>Rock Paper and Scissor Game</h1>
              <p>
                This is a fun game Rock Paper and Scissor created with HTML CSS
                and JAVASCRIPT. in this game one player is user and another one
                is computer.
              </p>
              <a href="https://rockpaperscissoregame.netlify.app/">
                Read more <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>

          <div
            className="projectcard"
            data-aos="fade-up-right"
            data-aos-duration="2000"
            data-aos-delay="700"
          >
            <img src={proimg2} alt="" />
            <div>
              <h1>Animated OCHI WEBSITE CLONE</h1>
              <p>
                A very attractive animated website OCHI's clone made by me with
                the help of REACT, FRAMER MOTION, GSAP, LOCOMOTIVE SCROLL(run in
                desktop view)
              </p>
              <a href="https://projectochiclone.netlify.app/">
                Read more <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>

          <div
            className="projectcard"
            data-aos="fade-down-right"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <img src={proimg} alt="" />
            <div>
              <h1>Online CARD generator from Fetch Api data</h1>
              <p>
                This is card generator fetch data from JSON PLACEHOLDER and set
                data in card forms{" "}
              </p>
              <a href="https://fetchcardsdata.netlify.app/">
                Read more <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>

          <div
            className="projectcard"
            data-aos="fade-down-right"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <img src={calculator} alt="" />
            
          </div>

          <div
            className="projectcard"
            data-aos="fade-down-right"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <img src={weather} alt="" />
            
          </div>


         
        </div>
      </section>
    </div>
  );
};

export default Projects;

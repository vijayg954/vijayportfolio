import React from "react";
import proimg from "./../../public/img7.png";
import proimg1 from "./../../public/img8.png";
import proimg2 from "./../../public/img9.png";
import proimg3 from "./../../public/img12.png";
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
          <p  data-aos="fade-in" data-aos-duration="2000" data-aos-delay="700">
            
            Here are our some projects <br/>
            click on projects for live preview
          </p>
        </div>

        <div className="projectcards">
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
              <a href="https://rockpapergamevg.netlify.app/">
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
            data-aos="fade-up-right"
            data-aos-duration="2000"
            data-aos-delay="700"
          >
            <img src={proimg2} alt="" />
            <div>
              <h1>Animated OCHI WEBSITE CLONE</h1>
              <p>
                A very attractive animated website OCHI's clone made by me with
                the help of REACT, FRAMER MOTION, GSAP, LOCOMOTIVE SCROLL(run in desktop view)
              </p>
              <a href="https://projectochiclone.netlify.app/">
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
            <img src={proimg3} alt="" />
            <div>
              <h1>Animated Loader circle shape</h1>
              <p>
                in this small project i have created 3 circluler animated Loader
                using Html and CSS{" "}
              </p>
              <a href="https://circleloaderproject.netlify.app/">
                Read more <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

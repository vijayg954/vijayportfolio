import React from "react";
import "./About.css";
import ProgressBar from "@ramonak/react-progress-bar";
import aboutimg from "./../../public/img6.jpg";
const About = () => {
  AOS.init();
  return (
    <div>
      <section id="about">
        <div
          className="aboutimg"
          data-aos="flip-right"
          data-aos-duration="1500"
          data-aos-delay="400"
        >
          <img src={aboutimg} alt="" />
        </div>
        {/* <div className="aboutinfo" >
          <h1 data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="200">ABOUT ME</h1>
          
          <h2 data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="400">VIJAY GUPTA</h2>
          <h3 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600">
            I am <span>MERN STACK DEVELOPER</span>
          </h3>
          <p data-aos="fade-up-right" data-aos-duration="1500" data-aos-delay="300">vg ajfkas kldfj kloaj fkla sjkla klashk ajfkas kldfj aloaj fklas jkla klash klash lashkl</p>
          <div id="btns">
          <a href="./../../public/img5.jpg" download="my image"> <button className="btns" data-aos="fade-up-left" data-aos-duration="1500" data-aos-delay="400">DOWNLOAD RESUME</button></a>
          </div>
        </div> */}

        <div className="aboutinfo" data-aos="flip-right"
          data-aos-duration="1500"
          data-aos-delay="400">
          <h1 className="aboutskill">SKILLS</h1>
          <p>HTML & CSS</p>
          <div className="outside1">
            <ProgressBar
              completed={90}
              bgColor="#2896b2"
              animateOnRender={true}
            />
          </div>
          
          <p>JAVASCRIPT</p>
          <div className="outside1">
            <ProgressBar
              completed={70}
              bgColor="#2896b2"
              animateOnRender={true}
            />
          </div>
          <p>REACT JS</p>
          <div className="outside1">
            <ProgressBar
              completed={60}
              bgColor="#2896b2"
              animateOnRender={true}
            />
          </div>
          <p>NODE JS</p>
          <div className="outside1">
            <ProgressBar
              completed={60}
              bgColor="#2896b2"
              animateOnRender={true}
            />
          </div>
          <p>EXPRESS JS</p>
          <div className="outside1">
            <ProgressBar
              completed={60}
              bgColor="#2896b2"
              animateOnRender={true}
            />
          </div>
          <p>MONGO DB</p>
          <div className="outside1">
            <ProgressBar
              completed={60}
              bgColor="#2896b2"
              animateOnRender={true}
            />
          </div>
          <p>TAILWIND CSS</p>
          <div className="outside1">
            <ProgressBar
              completed={70}
              bgColor="#2896b2"
              animateOnRender={true}
            />
          </div>
          <p>GITHUB</p>
          <div className="outside1">
            <ProgressBar
              completed={60}
              bgColor="#2896b2"
              animateOnRender={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from "react";
import "./Home.css";
import heroimg from "./../../public/img4.jpg";
import { motion } from "framer-motion";

const Home = () => {
  AOS.init();
  return (
    <div>
      <div>
        <section>
          <div className="hero">
            <div className="heroinfo">
              
                <motion.h1
                  initial={{ x: "100%" }}
                  animate={{ x: "0%" }}
                  transition={{
                    ease: "linear",
                    repeat: 0,
                    duration: 2,
                  }}
                  className="text-[21vw] pr-10    font-semibold leading-none uppercase -mt-7 -mb-4"
                >
               Hi, I am
                </motion.h1>
                 
              
              <h2>
                <span>
                  <motion.h1
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{
                      ease: "linear",
                      repeat: 0,
                      duration: 2,
                    }}
                    className="text-[21vw] pr-10    font-semibold leading-none uppercase -mt-7 -mb-4"
                  >
                    VIJAY GUPTA
                  </motion.h1>
                </span>
              </h2>

              <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">
                jkldss ds dsdjf ls fsklfj afkl klfjf wee riwe oir f, askj fhkl
                asnf, asshfklahsf
              </p>
              <div className="heroicon"  >
               
               <a href="https://github.com/vijayg954" target="_blank"> <i className="fa-brands fa-github" data-aos="fade-up-left" data-aos-duration="1500" data-aos-delay="400"></i></a>
               <a href="https://www.linkedin.com/in/vijay-gupta27/" target="_blank"><i className="fa-brands fa-linkedin" data-aos="fade-up-right" data-aos-duration="1500" data-aos-delay="300"></i></a>
               <a href="https://www.instagram.com/vijay_1431/" target="_blank"><i className="fa-brands fa-instagram" data-aos="fade-up-right" data-aos-duration="1500" data-aos-delay="300"></i></a>
               <a href="https://www.facebook.com/profile.php?id=100002347086272" target="_blank"><i className="fa-brands fa-facebook" data-aos="fade-up-left" data-aos-duration="1500" data-aos-delay="400"></i></a>
              </div>
              <div id="btns"  data-aos="fade-up-right" data-aos-duration="1500" data-aos-delay="400">
                <a href="./../../public/img5.jpg" download="my image"><button className="btns">Download Resume</button></a>
              </div>
            </div>
            <div className="heroimg"  data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
              <img src={heroimg} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

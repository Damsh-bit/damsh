import React from "react";
import HTML5 from "../../assets/html5.png";
import CSS3 from "../../assets/css3.png";
import REACT from "../../assets/react.png";
import JS from "../../assets/JS.png";
import Tailwind from "../../assets/tailwind.png";
import PHP from "../../assets/php.png";
import Python from "../../assets/python.png";
import Mysql from "../../assets/mysql.png";
import Java from "../../assets/Java.png";
import Title from "react-vanilla-tilt";

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Frontend = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  },[])
  return (
  <div className="skills__section">
      <h2 data-aos="fade-left" className="section__title">Conocimientos</h2>
      <span data-aos="fade-left" className="section__subtitle">Lenguajes</span>
    
    <Title id="card">
    <div data-aos="fade-left" className="skills__content">
      
      <h3 className="skills__title">Frontend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img src={HTML5} alt="HTML5-logo" />
            <div>
              <h3 alt="HTML5" className="skills__name">
                HTML5
              </h3>
            </div>
          </div>

          <div className="skills__data">
            <img src={CSS3} alt="CSS3-logo" />
            <div>
              <h3 className="skills__name">CSS3</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src={JS} alt="JS-logo" />
            <div>
              <h3 className="skills__name">JavaScript</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src={REACT} alt="REACT-logo" />
            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src={Tailwind} alt="Tailwind-logo" />
            <div>
              <h3 className="skills__name">Tailwind</h3>
            </div>
          </div>
        </div>
      </div>
      <h3 className="skills__title">Backend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img src={PHP} alt="PHP-logo" />
            <div>
              <h3 className="skills__name">PHP</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src={Python} alt="Python-logo" />
            <div>
              <h3 className="skills__name">Python</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src={Mysql} alt="Mysql-logo" />
            <div>
              <h3 className="skills__name">Mysql</h3>
            </div>
          </div>

          <div className="skills__data">
            <img src={Java} alt="Java-logo" />
            <div>
              <h3 className="skills__name">Java</h3>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </Title>
    </div>
  );
};

export default Frontend;

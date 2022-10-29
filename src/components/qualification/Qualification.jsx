import React, { useState } from "react";
import "./qualification.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  },[])
  return (
    <section className="qualification ">
      <h2 data-aos="fade-right" className="section__title">Mi carrera</h2>
      <span data-aos="fade-right" className="section__subtitle">Mi camino personal</span>

      <div data-aos="fade-right" className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon">
              Educación
            </i>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon">
              Experiencia
            </i>
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Tecnicatura en programación
                </h3>
                <span className="qualification__subtitle">
                  Universidad Nacional de Lomas de Zamora
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
              <div>
                <h3 className="qualification__title">Curso Intermedio Python</h3>
                <span className="qualification__subtitle">
                  EducacionIT
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Curso Básico JavaScript
                </h3>
                <span className="qualification__subtitle">Platzi</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
              <div>
                <h3 className="qualification__title">Curso Básico Java SE </h3>
                <span className="qualification__subtitle">
                  Platzi
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachiller en Economía
                </h3>
                <span className="qualification__subtitle">Instituto del Salvador</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2013-2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }onClick={() => toggleTab(2)}
          >
            
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Freelancer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Presente
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="secondBloob">
       </div>
       <div className="thirdBloob">
       </div>
       <div className="fourBloob">
       </div>
    </section>
  );
};

export default Qualification;

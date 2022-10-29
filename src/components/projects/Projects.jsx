import React from "react";
import "./projects.css";
import NATOR from "../../assets/Nator.png";
import ToDoPage from "../../assets/ToDoPage.png";
import Port from "../../assets/port.png";
import pokedamsh from "../../assets/pokedamsh.png";

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  },[])
  return (
    <section id="projects" className="projects section">
      <h2 data-aos="zoom-in-down" className="section__title">Proyectos</h2>
      <span data-aos="zoom-in-down" className="section__subtitle">Mis trabajos</span>

      <div  className="projects__container container grid ">
        <div data-aos="zoom-in-up" className="project__data card">
          <img src={NATOR} alt="project" className="project__image" />
          <div class="card-bio">
            <p>Ecommerce para tienda de muebles para el hogar.</p>
          </div>
          <h2 className="project__title">Nator Furniture</h2>
          <span className="project__subtitle">PHP - HTML - JS - CSS</span>
        </div>

        <div data-aos="zoom-in-up" className="project__data card">
          <img src={ToDoPage} alt="project" className="project__image" />
          <div class="card-bio">
            <p>Página para organizar tareas diarias.</p>
          </div>
          <h2 className="project__title">To do Page</h2>
          <span className="project__subtitle">PHP - HTML - JS - CSS</span>
        </div>

        <div data-aos="zoom-in-up" className="project__data card">
          <img src={Port} alt="project" className="project__image" />
          <div class="card-bio">
            <p>Portfolio personal para mi desarollo web.</p>
          </div>
          <h2 className="project__title">My Port</h2>
          <span className="project__subtitle">React - HTML - JS - CSS</span>
        </div>

        <div data-aos="zoom-in-up" className="project__data card">
          <img src={pokedamsh} alt="project" className="project__image" />
          <div class="card-bio">
            <p>Pokedex utilizando la pokeAPI.</p>
          </div>
          <h2 className="project__title">Pokedamsh</h2>
          <span className="project__subtitle">React - HTML - JS - CSS</span>
          <div className="project__url">
          <a href="https://github.com/Damsh-bit/pokedamsh" rel="noreferrer" target="_blank">code</a>
          <a href="https://damsh-bit.github.io/pokedamsh/" rel="noreferrer" target="_blank">demo</a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;

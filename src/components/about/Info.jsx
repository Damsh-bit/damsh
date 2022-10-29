import React from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Info = () =>{
    useEffect(() => {
        Aos.init({
          duration: 1500
        });
      },[])
    return(  
       <div className="about__info grid">
        
        <div data-aos="zoom-in-left" className="about__box">
        <i className='bx bx-award about__icon'></i>

            <h3 className="about__title">Experiencia</h3>
            <span className="about__subtitle">1 Año desarrollando</span>
        </div>
        
        
        <div  data-aos="zoom-in-down"className="about__box ">
        <i className='bx bx-briefcase-alt about__icon' ></i>

            <h3 className="about__title">Completados</h3>
            <span className="about__subtitle">10 Proyectos</span>
        </div>
        
        
        <div data-aos="zoom-in-left" className="about__box">
        <i className='bx bx-support about__icon' ></i>

            <h3 className="about__title">Horarios</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
        
       </div>
       
    )
}

export default Info
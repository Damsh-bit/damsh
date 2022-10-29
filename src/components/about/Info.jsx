import React from "react";


const Info = () =>{
    return(  
       <div className="about__info grid">
        
        <div className="about__box">
        <i className='bx bx-award about__icon'></i>

            <h3 className="about__title">Experiencia</h3>
            <span className="about__subtitle">1 Año desarrollando</span>
        </div>
        
        
        <div className="about__box ">
        <i className='bx bx-briefcase-alt about__icon' ></i>

            <h3 className="about__title">Completados</h3>
            <span className="about__subtitle">10 Proyectos</span>
        </div>
        
        
        <div className="about__box">
        <i className='bx bx-support about__icon' ></i>

            <h3 className="about__title">Horarios</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
        
       </div>
       
    )
}

export default Info
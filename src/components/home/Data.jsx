import React from 'react';

const Data = () => {
    return (
        <div className="home__data">
            <h3 className="home__pretitle">¡Hola¡ Soy</h3>
            <h1 className="home__title"> Damián Coronel</h1>
            <h3 className="home__subtitle">Frontend developer</h3>
            <p className="home__description">Soy técnico en programación graduado en UNLZ - Buenos Aires, Argentina. <br />
Actualmente vivo en Buenos Aires y soy muy dedicado y apasionado en ser el mejor en mi trabajo.
            </p>

            <a href="#contact" className="button button--flex">
                Contactame! <i className="uil uil-telegram-alt"></i>
            </a>
        </div>
    )
}

export default Data
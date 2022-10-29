import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l1kv0zl",
        "template_4d0lttv",
        form.current,
        "IWNCBYPJysDbEvXKA"
      )
      e.target.reset()
  };

  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  },[])
  return (
    <section className="contact section" id="contact">
      <h2 data-aos="fade-up" className="section__title">Contacto</h2>
      <span data-aos="fade-down" className="section__subtitle">Trabajemos juntos!</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 data-aos="zoom-in-up" className="contact__title">Cuentame tu proyecto</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div data-aos="fade-left" className="contact__form-div">
              <label className="contact__form-tag">Nombre</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Ingresá tu nombre"
                required
              />
            </div>

            <div data-aos="fade-right" className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Ingresá tu email"
                required
              />
            </div>

            <div data-aos="fade-left" className="contact__form-div">
              <label className="contact__form-tag">Asunto</label>
              <input
                type="text"
                name="asunto"
                className="contact__form-input"
                placeholder="Ingresá tu asunto"
                required
              />
            </div>

            <div data-aos="fade-right" className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Proyecto</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Ingresá tu proyecto"
                required
              ></textarea>
            </div>

            <button className="button button--flex">
              Enviar <i className="uil uil-telegram-alt"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

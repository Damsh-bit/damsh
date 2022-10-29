import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  },[])
  return (
    <section  className="home section" id="home">
       <div className="firstBloob">
       </div>
      <div data-aos="fade-down" className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;

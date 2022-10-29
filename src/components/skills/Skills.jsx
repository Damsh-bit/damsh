import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Qualification from "../qualification/Qualification";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="skills__container container grid ">
        <Qualification />
        <Frontend />
        
      </div>
    </section>
  );
};

export default Skills;

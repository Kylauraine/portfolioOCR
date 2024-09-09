import React from "react";
import "./About.scss";
import LogoDark from "../../Assets/logo-dark.png";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <img className="about__logo" src={LogoDark} alt="Logo" />

        <div className="about__text">
          <h1 className="about__name ">DÉVELOPPEUSE WEB JUNIOR</h1>
          <h2 className="about__title">À propos</h2>
          Bonjour ! <br />
          Je m'appelle Laura Preston, je suis une développeuse web junior basée en région parisienne.
          <br />
          Après une formation intensive de 6 mois chez Open Classrooms, je suis à la recherche de ma première opportunité professionnelle en tant que
          développeuse front-end.
          <br />
        </div>
      </div>
    </section>
  );
};

export default About;

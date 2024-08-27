import React from "react";
import "./About.scss";
import LogoDark from "../../Assets/logo-dark.png";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <img className="about__logo" src={LogoDark} alt="Logo" />

        <div className="about__text">
          <h2 className="about__title">About</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem, quia, quos, quod consequatur voluptate quas voluptas
          dignissimos voluptatum iusto doloribus. Quisquam voluptatem, quia, quos, quod consequatur voluptate quas voluptas dignissimos voluptatum
          iusto doloribus.
        </div>
      </div>
    </section>
  );
};

export default About;

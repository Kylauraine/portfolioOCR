import React from "react";
import "./Header.scss";
import Portrait from "../../Assets/portrait.jpg";

const Header = () => {
  return (
    <header className="header">
      <img src={Portrait} alt="Portrait" className="header__portrait" />

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#home">Accueil</a>
          </li>
          <li className="header__nav-item">
            <a href="#about">À propos</a>
          </li>
          <li className="header__nav-item">
            <a href="#about">Compétences</a>
          </li>
          <li className="header__nav-item">
            <a href="#about">Projets</a>
          </li>
          <li className="header__nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

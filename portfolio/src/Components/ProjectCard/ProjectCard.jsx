import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card__image" />
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        {link && (
          <a href={link} className="project-card__link" target="_blank" rel="noopener noreferrer">
            Voir le projet
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

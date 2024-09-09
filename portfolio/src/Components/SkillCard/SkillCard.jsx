import React from "react";
import "./SkillCard.scss";

const SkillCard = ({ skill, description }) => {
  return (
    <div className="skill-card">
      <h3 className="skill-card__title">{skill}</h3>
      <p className="skill-card__description">{description}</p>
    </div>
  );
};

export default SkillCard;

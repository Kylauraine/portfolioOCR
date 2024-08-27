import React from "react";
import "./Skills.scss";
import ProgressBar from "../../ProgressBar/Progressbar";

const Skills = () => {
  return (
    <section className="skills">
      <h2>Compétences</h2>

      <ProgressBar skill="HTML" level={90} />
      <ProgressBar skill="CSS" level={80} />
      <ProgressBar skill="JavaScript" level={70} />
      <ProgressBar skill="React" level={60} />
      <ProgressBar skill="Node.js" level={50} />
      <ProgressBar skill="Express" level={40} />
      <ProgressBar skill="MongoDB" level={30} />
      <ProgressBar skill="Git" level={20} />
      <ProgressBar skill="Anglais" level={10} />
    </section>
  );
};

export default Skills;

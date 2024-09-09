import React from "react";
import "./Skills.scss";
import ProgressBar from "../ProgressBar/Progressbar";
import SkillsCard from "../SkillCard/SkillCard";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__block">
        <h2>Mises en application</h2>
        <SkillsCard skill="Intégration avec HTML et CSS" description="Conversion d'une maquette Figma en site web" />
        <SkillsCard skill="JavaScript" description="Manipulation de données et gestion des événements" />
        <SkillsCard skill="React" description="Création d'une app React et de composants" />
        <SkillsCard skill="Node.js" description="Mise en place d'opérations CRUD et sécurisation des données" />
        <SkillsCard skill="Git" description="Gestion des versions et des branches" />
        <SkillsCard skill="Anglais" description="Licence d'Anglais et séjour ERASMUS en Angleterre" />
        <SkillsCard skill="Social Media marketing" description="5 ans d'expérience en Community Management et Social Media Management" />
      </div>

      <div className="skills__block">
        <h2>Compétences en développement</h2>

        <ProgressBar skill="HTML" level={85} />
        <ProgressBar skill="CSS" level={80} />
        <ProgressBar skill="JavaScript" level={55} />
        <ProgressBar skill="React" level={60} />
        <ProgressBar skill="Node.js" level={40} />
        <ProgressBar skill="Git" level={70} />

        <h2>Compétences additionnelles</h2>
        <ProgressBar skill="Anglais" level={90} />
        <ProgressBar skill="Social Media marketing" level={85} />
      </div>
    </div>
  );
};

export default Skills;

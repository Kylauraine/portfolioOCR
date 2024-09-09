import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import "./Projects.scss"; // Styles pour la mise en page de la liste de projets

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "Un site web pour présenter mes projets.",
      image: "portfolio_image_url", // Remplace par l'URL de ton image
      link: "https://monportfolio.com",
    },
    {
      title: "Application météo",
      description: "Une application météo utilisant l'API OpenWeather.",
      image: "weather_app_image_url", // Remplace par l'URL de ton image
      link: "https://monapp.com",
    },
    {
      title: "E-commerce",
      description: "Site de vente en ligne avec paiement sécurisé.",
      image: "ecommerce_image_url", // Remplace par l'URL de ton image
      link: "https://ecommerce.com",
    },
    // Ajoute d'autres projets ici
  ];

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} title={project.title} description={project.description} image={project.image} link={project.link} />
      ))}
    </div>
  );
};

export default Projects;

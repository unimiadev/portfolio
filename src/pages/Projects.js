import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Projects.css";

function Projects() {
  const { t } = useLanguage();

  const closedSourceProjects = [
    {
      id: 1,
      title: t("PROJECT_SEUCURSO_TITLE"),
      description: t("PROJECT_SEUCURSO_DESC"),
      image: "/assets/media/images/seucurso.png",
      link: "https://cursos.seucursodigital.com",
      tags: ["JAVASCRIPT", "REACT.JS", "FIREBASE", "RESPONSIVE DESIGN"],
    },
    {
      id: 2,
      title: t("PROJECT_BEHARV_TITLE"),
      description: t("PROJECT_BEHARV_DESC"),
      image: "/assets/media/images/beharv.png",
      link: "https://beharv.com",
      tags: ["JAVASCRIPT", "REACT.JS", "FIREBASE", "RESPONSIVE DESIGN"],
    },
    {
      id: 3,
      title: t("PROJECT_LARHHUB_TITLE"),
      description: t("PROJECT_LARHHUB_DESC"),
      image: "/assets/media/images/larhhub.png",
      link: "https://larhub.vercel.app",
      tags: ["JAVASCRIPT", "NEXT.JS", "PYTHON", "DJANGO", "RESPONSIVE DESIGN"],
    },
    {
      id: 4,
      title: t("PROJECT_EXPERTVISION_TITLE"),
      description: t("PROJECT_EXPERTVISION_DESC"),
      image: "/assets/media/images/expertvision.png",
      link: "https://expertvision.com.br",
      tags: ["JAVASCRIPT", "REACT.JS", "FIREBASE", "RESPONSIVE DESIGN"],
    },
  ];

  const openSourceProjects = [
    {
      id: 1,
      title: t("PROJECT_NATAN_TITLE"),
      description: t("PROJECT_NATAN_DESC"),
      image: "/assets/media/images/project1.png",
      link: "https://github.com/unimiadev/natan-tattoo-landing",
      tags: [
        "REACT.JS",
        "JAVASCRIPT",
        "CSS3",
        "RESPONSIVE DESIGN",
        "LANDING PAGE",
      ],
    },
    {
      id: 2,
      title: t("PROJECT_PORTFOLIO_TITLE"),
      description: t("PROJECT_PORTFOLIO_DESC"),
      image: "/assets/media/images/project2.png",
      link: "https://github.com/unimiadev/portfolio",
      tags: [
        "REACT.JS",
        "JAVASCRIPT",
        "CSS3",
        "RESPONSIVE DESIGN",
        "ANIMATIONS",
        "PORTFOLIO",
      ],
    },
  ];

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className={`project-image ${
            project.title === t("PROJECT_SEUCURSO_TITLE") ||
            project.title === t("PROJECT_LARHHUB_TITLE")
              ? "project-image-top"
              : ""
          }`}
        />
      </div>
      <div className="project-content">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <button
          className="project-button"
          onClick={() => window.open(project.link, "_blank")}
        >
          {t("VIEW_PROJECT")}
        </button>
      </div>
    </div>
  );

  return (
    <div className="projects-container">
      <div className="title-container">
        <h1 className="projects-title">{t("PROJECTS")}</h1>
      </div>

      <div className="projects-section">
        <h2 className="section-title">{t("CLOSED_SOURCE_PROJECTS")}</h2>
        <div className="projects-grid">
          {closedSourceProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="projects-section">
        <h2 className="section-title">{t("OPEN_SOURCE_PROJECTS")}</h2>
        <div className="projects-grid">
          {openSourceProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

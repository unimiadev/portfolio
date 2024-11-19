import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Projects.css";

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('PROJECT_NATAN_TITLE'),
      description: t('PROJECT_NATAN_DESC'),
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
      title: t('PROJECT_PORTFOLIO_TITLE'),
      description: t('PROJECT_PORTFOLIO_DESC'),
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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div className="projects-container">
      <div className="title-container">
        <h1 className="projects-title">{t("PROJECTS")}</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
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
        ))}
      </div>

      <div className="more-projects">
        <button className="more-projects-button" onClick={toggleModal}>
          {t("MORE_PROJECTS")}
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}>
              ×
            </button>
            <img
              src="/assets/media/images/crying.gif"
              alt="GitHub Projects"
              className="modal-image"
            />
            <p className="modal-text">
              {t("NO_PROJECTS_YET")}
              <br />
              <br />
              <span className="modal-text-highlight">{t("IF_ALLOWED")}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;

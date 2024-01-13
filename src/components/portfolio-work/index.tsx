import React, { useState } from "react";
import { Projects } from "../../models/Project";

interface PortfolioProps {
  projectItems: Projects[];
}

const PortfolioWork: React.FC<PortfolioProps> = ({
  projectItems,
}) => {
  const [projectsOpen, setProjectsOpen] = useState(false);

  const toggleProjectsDisplay = () => {
    setProjectsOpen(!projectsOpen);
  };

  return (
    <>
      <div
        id="projectClick"
        className="navigation__project"
        onClick={toggleProjectsDisplay}>
        <div>
          <a className="navigation__project--text">PORTFOLIO</a>
          <i
            className={`bi bi-chevron-compact-down navigation__arrowIcon ${
              projectsOpen ? "open" : ""
            }`}
            id="portfolioIcon"></i>
        </div>
      </div>

      {projectsOpen && (
        <div id="workWrapper">
          {projectItems.map((project, index) => (
            <div key={index} className="project">
              <h3 className="project__name">{project.name}</h3>
              <img
                className="project__image"
                src={project.image}
                alt={project.name}
              />
              <p className="project__description">
                {project.describtion}
              </p>
              <a className="project__websidelink" href={project.link}>
                testa sidan!
              </a>
              <a className="project__link" href={project.githublink}>
                <i className="bi bi-github"></i>
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PortfolioWork;

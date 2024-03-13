import React, { useState } from "react";
import { PortfolioProps } from "./PortfolioWork.types";
import {
  Project,
  ProjectDescription,
  ProjectImage,
  ProjectName,
  ToggleButton,
  WebsiteLink,
  WorkWrapper,
} from "./PortfolioWork.styles";

const PortfolioWork: React.FC<PortfolioProps> = ({
  projectItems,
}) => {
  const [projectsOpen, setProjectsOpen] = useState(false);

  const toggleProjectsDisplay = () => {
    setProjectsOpen(!projectsOpen);
  };
  return (
    <>
      <ToggleButton
        onClick={toggleProjectsDisplay}
        aria-expanded={projectsOpen}
        aria-label="Toggle Portfolio"
      >
        PROJEKT
      </ToggleButton>
      {projectsOpen && (
        <WorkWrapper>
          {projectItems.map((project, index) => (
            <Project key={index}>
              <ProjectName>{project.name}</ProjectName>
              <ProjectImage />
              <ProjectDescription>
                {project.description}
              </ProjectDescription>
              <WebsiteLink href={project.slug}>
                Test the Site!
              </WebsiteLink>
            </Project>
          ))}
        </WorkWrapper>
      )}
    </>
  );
};

export default PortfolioWork;

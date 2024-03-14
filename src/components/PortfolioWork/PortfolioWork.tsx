import React, { useState } from "react";
import { PortfolioProps } from "./PortfolioWork.types";
import {
  Project,
  ProjectDescription,
  ProjectImage,
  ProjectName,
  WebsiteLink,
  WorkWrapper,
} from "./PortfolioWork.styles";

const PortfolioWork: React.FC<PortfolioProps> = ({
  projectItems,
}) => {
  return (
    <>
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
    </>
  );
};

export default PortfolioWork;

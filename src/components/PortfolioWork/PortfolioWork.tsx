import React from "react";
import { PortfolioProps } from "./PortfolioWork.types";
import {
  Card,
  CardContent,
  CardImageFront,
  CardInner,
  LiveDemo,
  Project,
  ProjectDescription,
  ProjectName,
  WorkWrapper,
} from "./PortfolioWork.styles";
import { useRouter } from "next/router";

const PortfolioWork: React.FC<PortfolioProps> = ({
  projectItems,
}) => {
  const router = useRouter();

  const handleLiveDemoClick = (projectName: string) => {
    const projectUrl = `https://junitaberglin-${projectName}.netlify.app/`;
    window.open(projectUrl, "_blank");
  };

  return (
    <WorkWrapper>
      {projectItems.map((project) => (
        <Project key={project.projectId}>
          <Card>
            <CardInner>
              <CardImageFront
                src={project.image.url}
                alt={project.name}
              />
              <CardContent>
                <ProjectName>{project.name}</ProjectName>
                <ProjectDescription>
                  {project.description}
                </ProjectDescription>
                <LiveDemo
                  onClick={() => handleLiveDemoClick(project.slug)}>
                  Go take a look!
                </LiveDemo>
              </CardContent>
            </CardInner>
          </Card>
        </Project>
      ))}
    </WorkWrapper>
  );
};

export default PortfolioWork;

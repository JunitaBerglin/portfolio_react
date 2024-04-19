import React from "react";
import { PortfolioProps } from "./PortfolioWork.types";
import {
  Card,
  CardContent,
  CardImageFront,
  CardInner,
  Project,
  ProjectDescription,
  ProjectName,
  WorkWrapper,
} from "../PortfolioWork/PortfolioWork.styles";
import { useRouter } from "next/router";
import Button from "../Home/Animation/Button";

const PortfolioWork: React.FC<PortfolioProps> = ({
  projectItems,
}) => {
  const router = useRouter();

  const handleLiveDemoClick = (projectUrl: string) => {
    console.log("Opening project URL:", projectUrl);
    if (typeof projectUrl === "string" && projectUrl.trim() !== "") {
      window.open(projectUrl, "_blank");
    } else {
      console.error(
        "Project URL is not defined or not a string:",
        projectUrl
      );
    }
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
                {project.showDemoButton && (
                  <Button
                    onClick={() =>
                      handleLiveDemoClick(project.githubName)
                    }>
                    Take a look!
                  </Button>
                )}
              </CardContent>
            </CardInner>
          </Card>
        </Project>
      ))}
    </WorkWrapper>
  );
};

export default PortfolioWork;

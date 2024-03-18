import React, { useState } from "react";
import {
  PortfolioWrapper,
  ProjectText,
  SectionContainer,
} from "./PortfolioAccordion.styles";

import PortfolioWork from "../PortfolioWork/PortfolioWork";
import { Contact } from "../contact/Contact";
import { PortfolioProps } from "../PortfolioWork/PortfolioWork.types";
import HomePage from "../Home/Home";
import { SectionName } from "./PortfolioAccordion.types";
import { ProjectTextCV } from "../CV/CV.styles";
import AnimatedArrowComponent from "../Home/Animation/Arrow";
import { About } from "../about/about";

const PortfolioAccordion: React.FC<PortfolioProps> = ({
  projectItems,
}) => {
  const [openSection, setOpenSection] = useState<SectionName>(null);

  const toggleSection = (section: SectionName) => {
    setOpenSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  return (
    <PortfolioWrapper>
      <HomePage />
      <AnimatedArrowComponent />
      <SectionContainer onClick={() => toggleSection("about")}>
        <ProjectText>ABOUT</ProjectText>
      </SectionContainer>
      {openSection === "about" && <About />}

      <SectionContainer onClick={() => toggleSection("projects")}>
        <ProjectText>PROJECTS</ProjectText>
      </SectionContainer>
      {openSection === "projects" && (
        <PortfolioWork projectItems={projectItems} />
      )}

      <SectionContainer onClick={() => toggleSection("contact")}>
        <ProjectText>CONTACT</ProjectText>
      </SectionContainer>
      {openSection === "contact" && <Contact />}
      <SectionContainer>
        <ProjectTextCV href="/Junita_Berglin_CV_2024.pdf">
          CV
        </ProjectTextCV>
      </SectionContainer>
    </PortfolioWrapper>
  );
};

export default PortfolioAccordion;

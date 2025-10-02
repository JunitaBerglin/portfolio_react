import React, { useState } from "react";
import { PortfolioProps } from "../PortfolioWork/PortfolioWork.types";
import { SectionName } from "./PortfolioAccordion.types";
import {
  PortfolioWrapper,
  ProjectText,
  SectionContainer,
  ArrowIcon,
} from "./PortfolioAccordion.styles";
import HomePage from "../Home/Home";
import AnimatedArrowComponent from "../Home/Animation/Arrow";
import PortfolioWork from "../PortfolioWork/PortfolioWork";
import { About } from "../about/about";
import { Contact } from "../contact/Contact";
import { ProjectTextCV, RightArrowIcon } from "../CV/cv.styles";

const PortfolioAccordion: React.FC<PortfolioProps> = ({ projectItems }) => {
  const [openSection, setOpenSection] = useState<SectionName>(null);

  const toggleSection = (section: SectionName) => {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <PortfolioWrapper>
      <HomePage />
      <AnimatedArrowComponent />
      <SectionContainer onClick={() => toggleSection("about")}>
        <ProjectText>ABOUT</ProjectText>
        <ArrowIcon isOpen={openSection === "about"} viewBox="0 0 24 24">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        </ArrowIcon>
      </SectionContainer>
      {openSection === "about" && <About />}

      <SectionContainer onClick={() => toggleSection("projects")}>
        <ProjectText>PROJECTS</ProjectText>
        <ArrowIcon isOpen={openSection === "projects"} viewBox="0 0 24 24">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        </ArrowIcon>
      </SectionContainer>
      {openSection === "projects" && (
        <PortfolioWork projectItems={projectItems} />
      )}

      <SectionContainer onClick={() => toggleSection("contact")}>
        <ProjectText>CONTACT</ProjectText>
        <ArrowIcon isOpen={openSection === "contact"} viewBox="0 0 24 24">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        </ArrowIcon>
      </SectionContainer>
      {openSection === "contact" && <Contact />}
      <SectionContainer>
        <ProjectTextCV href="/Junita_Berglin_CV.pdf">CV</ProjectTextCV>
        <RightArrowIcon viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </RightArrowIcon>
      </SectionContainer>
    </PortfolioWrapper>
  );
};

export default PortfolioAccordion;

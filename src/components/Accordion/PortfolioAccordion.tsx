import React, { useState } from "react";
import {
  ProjectText,
  SectionContainer,
} from "./PortfolioAccordion.styles";
import { About } from "../About/About";
import PortfolioWork from "../PortfolioWork/PortfolioWork";
import { Contact } from "../Contact/Contact";
import { PortfolioProps } from "../PortfolioWork/PortfolioWork.types";
import HomePage from "../Home/Home";
import { ProjectTextCV } from "../CV/cv.styles";
import { SectionName } from "./PortfolioAccordion.types";

const PortfolioAccordion: React.FC<PortfolioProps> = ({
  projectItems,
}) => {
  const [openSection, setOpenSection] = useState<SectionName>(null);

  const toggleSection = (section: SectionName) => {
    setOpenSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  console.log("projekts ==>", projectItems);

  return (
    <>
      <HomePage />
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
        <ProjectTextCV href="/cv">CV</ProjectTextCV>
      </SectionContainer>
    </>
  );
};

export default PortfolioAccordion;

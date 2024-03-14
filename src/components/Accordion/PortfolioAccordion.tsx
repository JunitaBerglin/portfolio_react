import React, { useState } from "react";

import { SectionContainer } from "./PortfolioAccordion.styles";
import { About } from "../About/About";
import PortfolioWork from "../PortfolioWork/PortfolioWork";
import { Contact } from "../Contact/Contact";
import { PortfolioProps } from "../PortfolioWork/PortfolioWork.types";
import HomePage from "../Home/Home";

const PortfolioAccordion: React.FC<PortfolioProps> = ({
  projectItems,
}) => {
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isPortfolioOpen, setPortfolioOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);

  const toggleAbout = () => setAboutOpen(!isAboutOpen);
  const togglePortfolio = () => setPortfolioOpen(!isPortfolioOpen);
  const toggleContact = () => setContactOpen(!isContactOpen);

  return (
    <>
      <HomePage />
      <button onClick={toggleAbout}>About</button>
      {isAboutOpen && (
        <SectionContainer>
          <About />
        </SectionContainer>
      )}

      <button onClick={togglePortfolio}>Portfolio</button>
      {isPortfolioOpen && (
        <SectionContainer>
          <PortfolioWork projectItems={projectItems} />
        </SectionContainer>
      )}

      <button onClick={toggleContact}>Contact</button>
      {isContactOpen && (
        <SectionContainer>
          <Contact />
        </SectionContainer>
      )}
    </>
  );
};

export default PortfolioAccordion;

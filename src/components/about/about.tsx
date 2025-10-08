import React from "react";
import { AboutSection } from "../Home/Home.styles";
import {
  AboutCard,
  AboutImage,
  AboutWrapper,
  CardContentAbout,
} from "./about.styles";
import { CardInner } from "../PortfolioWork/PortfolioWork.styles";

export const About: React.FC = () => {
  return (
    <AboutSection>
      <AboutWrapper>
        <AboutCard>
          <CardInner>
            <AboutImage src="/portfolio-image-junita.jpg" alt="Picture of me" />
            <CardContentAbout>
              Hello, I’m Junita! A full stack developer driven by innovation and
              creativity. My experience from the game industry and insight into
              business strategy give me a broad view on technical challenges.
              With a background as an occupational therapist, I bring strong
              people skills, energy, and positivity that build successful teams.
              Combining analytical thinking with a sense of aesthetics, I create
              solutions that are both functional and visually appealing.
            </CardContentAbout>
          </CardInner>
        </AboutCard>
      </AboutWrapper>
    </AboutSection>
  );
};

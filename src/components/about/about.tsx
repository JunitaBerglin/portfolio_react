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
              Hello, I’m Junita! <br /> I am a full stack developer, with drive
              and passion for innovation, I combine a creative approach with
              technical skills, which I see as my strength. With lessons learned
              from the multifaceted game industry and with insight into both
              business strategies and company structures, I approach technical
              challenges with a broad perspective. My background as an
              occupational therapist has given me the ability to deal with all
              different types of people, and I contribute with a lot of energy
              and positivity which generates successful teams. This, together
              with my analytical skills and my sense of aesthetics, I deliver
              solutions that are not only functional but also thoughtful and
              visually appealing.
            </CardContentAbout>
          </CardInner>
        </AboutCard>
      </AboutWrapper>
    </AboutSection>
  );
};

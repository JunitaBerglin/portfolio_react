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
            <AboutImage
              src="/IMG_5660_VSCO.jpg"
              alt="Picture of me"
            />
            <CardContentAbout>
              Hello, I’m Junita! Front end developer driven by a
              passion for innovation and a keen interest in AI, I
              combine a creative mindset with technical skills and
              believe that is my strength. With knowledge of the
              multifaceted gaming industry, my experiences enrich my
              approach to user-centered design. My occupational
              therapy background has given me strong social skills and
              contributes to a refined aesthetic sense, ensuring that
              I deliver not only functional but also visually engaging
              digital solutions. If you're interested in talking more
              - don't hesitate to contact me!
            </CardContentAbout>
          </CardInner>
        </AboutCard>
      </AboutWrapper>
    </AboutSection>
  );
};

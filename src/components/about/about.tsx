import React from "react";

import { AboutSection } from "../Home/Home.styles";
import {
  CardImageFront,
  CardInner,
} from "../PortfolioWork/PortfolioWork.styles";
import {
  AboutCard,
  AboutWrapper,
  CardContentAbout,
  ImgWrapper,
} from "./about.styles";

export const About: React.FC = () => {
  return (
    <AboutSection>
      <AboutWrapper>
        <AboutCard>
          <CardInner>
            <ImgWrapper>
              <CardImageFront
                src="/IMG_5660_VSCO.jpg"
                alt="Picture of me"
              />
            </ImgWrapper>
            <CardContentAbout>
              Hello, I’m Junita! I am a junior front end developer,
              currently studying at Medieinstitutet in Stockholm. As a
              former occupational therapist, I always have a creative
              perspective in mind and I love what innovation can do
              for people. Next up for me is an internship this autumn.
              I hope to find a place where I can contribute as well as
              learn and develop my front end skills. So if you're
              interested in talking more - don't hesitate to contact
              me!
            </CardContentAbout>
          </CardInner>
        </AboutCard>
      </AboutWrapper>
    </AboutSection>
  );
};

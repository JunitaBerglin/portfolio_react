import React, { useState } from "react";
import {
  AboutDescription,
  AboutImage,
  AboutWrapper,
  ImgWrapper,
} from "./About.styles";

export const About: React.FC = () => {
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);

  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
  };

  return (
    <section className={aboutOpen ? "open" : ""}>
      <div id="aboutClick" onClick={toggleAbout}>
        <div>
          <a>ABOUT</a>
          <i
            className={`bi bi-chevron-compact-down navigation__arrowIcon ${
              aboutOpen ? "open" : ""
            }`}
            id="aboutIcon"
          ></i>
        </div>
      </div>
      {aboutOpen && (
        <AboutWrapper>
          <AboutDescription>
            Hello, I’m Junita! I am a junior front end developer,
            currently studying at Medieinstitutet in Stockholm. As a
            former occupational therapist, I always have a creative
            perspective in mind and I love what innovation can do for
            people. Next up for me is an internship this autumn. I
            hope to find a place where I can contribute as well as
            learn and develop my front end skills. So if you're
            interested in talking more - don't hesitate to contact me!
          </AboutDescription>
          <ImgWrapper>
            <AboutImage
              src="https://github.com/JunitaBerglin/PORTFOLIO_JUNITA/blob/main/src/attributes/IMG_8339%20(1).jpg?raw=true"
              alt="Picture of me"
            />
          </ImgWrapper>
        </AboutWrapper>
      )}
    </section>
  );
};

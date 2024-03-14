import styled, { css } from "styled-components";
import {
  colors,
  desktopStyles,
} from "../Global/style-variables/variables";

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  ${desktopStyles} {
    flex-direction: row;
  }
`;

export const AboutDescription = styled.p`
  width: 80%;
  color: ${colors.primary};
  background-color: ${colors.secondaryDark};
  padding: 30px;
  border-radius: 60px;
  font-family: "thin";
  margin-top: 10px;

  ${desktopStyles} {
    width: 50%;
  }
`;

export const AboutImage = styled.img`
  height: 200px;
  width: 200px;

  ${desktopStyles} {
    height: 280px;
    width: 280px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: solid 1px ${colors.secondaryDark};
  overflow: hidden;
  margin-bottom: 3em;
`;

export const ToggleAboutButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

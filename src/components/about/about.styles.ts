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

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
    width: 45%;
  }
`;

export const AboutImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: solid 1px ${colors.secondaryDark};

  ${desktopStyles} {
    height: 200px;
    width: 200px;
  }
`;

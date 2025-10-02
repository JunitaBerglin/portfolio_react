import styled from "styled-components";
import { colors, desktopStyles } from "../Global/style-variables/variables";

export const ProjectTextCV = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  grid-column: 2;
  justify-self: center;
  color: ${colors.secondaryDark};
  font-family: "lemon";
  font-size: 50px;
  padding: 10px 0;
  position: relative;
  text-decoration: none;

  ${desktopStyles} {
    font-size: 90px;
    padding: 15px 0;
  }
`;

export const RightArrowIcon = styled.svg`
  grid-column: 3;
  justify-self: center;
  height: 16px;
  width: 16px;
  fill: ${colors.secondaryDark};

  ${desktopStyles} {
    justify-self: start;
    height: 18px;
    width: 18px;
  }
`;

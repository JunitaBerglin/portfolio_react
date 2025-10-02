import styled from "styled-components";
import { colors, desktopStyles } from "../Global/style-variables/variables";

export const ProjectTextCV = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: ${colors.secondaryDark};
  font-family: "lemon";
  font-size: 50px;
  margin: 0 10px;
  padding: 10px 0;
  position: relative;
  text-decoration: none;

  ${desktopStyles} {
    font-size: 90px;
    margin: 0 30px;
    padding: 15px 0;
  }
`;

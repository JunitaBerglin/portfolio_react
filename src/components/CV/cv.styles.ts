import styled from "styled-components";
import { desktopStyles } from "../Global/style-variables/variables";

export const ProjectTextCV = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: black;
  font-family: "lemon";
  font-size: 80px;
  margin: 0 15px;
  position: relative;
  text-decoration: none;

  ${desktopStyles} {
    font-size: 80px;
    margin: 0 30px;
  }
`;

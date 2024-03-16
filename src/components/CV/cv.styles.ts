import styled from "styled-components";
import { desktopStyles } from "../../../pages/Global/style-variables/variables";

export const ProjectTextCV = styled.a`
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

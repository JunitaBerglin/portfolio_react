import styled from "styled-components";
import {
  colors,
  desktopStyles,
} from "../Global/style-variables/variables";

export const SectionContainer = styled.nav`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};

  &:hover {
    background-color: ${colors.secondaryLight};
    transition: background-color 2000ms;
  }
`;

export const ProjectText = styled.div`
  color: black;
  font-family: "lemon";
  font-size: 80px;
  margin: 0 15px;
  position: relative;

  ${desktopStyles} {
    font-size: 90px;
    margin: 0 30px;
  }
`;

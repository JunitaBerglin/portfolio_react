import styled from "styled-components";
import { desktopStyles } from "../Global/style-variables/variables";

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 30%;
  &:hover {
    background-color: #ffffdf;
    transition: 2000ms;
  }
`;

export const ProjectText = styled.div`
  color: black;
  text-decoration: none;
  font-family: "thin";
  font-size: 50px;

  ${desktopStyles} {
    font-size: 80px;
  }
`;

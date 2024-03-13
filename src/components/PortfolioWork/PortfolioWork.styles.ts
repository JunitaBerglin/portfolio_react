import styled from "styled-components";
import {
  desktopStyles,
  linkStyles,
} from "../Global/style-variables/variables";
import { colors } from "../Global/style-variables/variables";

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  justify-content: center;
  align-items: center;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: 30px;
  font-family: "thin", sans-serif;

  ${desktopStyles} {
    flex-direction: row;
    justify-content: space-evenly;
    width: 80%;
    margin-left: 8%;
  }
`;

export const ProjectImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  ${desktopStyles} {
    height: 50%;
    width: 40%;
    margin: 20px;
  }

  &:hover {
    transition: 500ms;
    transform: scale(1.1);
  }
`;

export const ProjectName = styled.h3`
  color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const ProjectDescription = styled.p`
  color: ${colors.primary};
  padding: 10px;
  width: 85%;
`;

export const WebsiteLink = styled.a`
  color: ${colors.secondaryDark};
  background-color: ${colors.secondaryDark};
  padding: 4px;
  border-radius: 5px;
  ${linkStyles}
`;

export const Button = styled.button`
  padding: 7px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToggleIcon = styled.i`
  cursor: pointer;
  color: ${colors.secondaryDark};
`;

export const OpenIcon = styled(ToggleIcon)`
  transform: rotate(180deg);
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

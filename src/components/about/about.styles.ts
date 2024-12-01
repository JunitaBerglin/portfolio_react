import styled from "styled-components";
import {
  Card,
  CardFace,
  CardImageFront,
} from "../PortfolioWork/PortfolioWork.styles";
import { desktopStyles } from "../Global/style-variables/variables";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${desktopStyles} {
    justify-content: center;
  }
`;

export const AboutImage = styled(CardImageFront)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: none;
`;

export const AboutCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  position: relative;
  perspective: 900px;
  background-color: aliceblue;
`;

export const CardContentAbout = styled(CardFace)`
  background-color: #000;
  position: absolute;
  color: #fff;
  font-family: "thin";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
`;

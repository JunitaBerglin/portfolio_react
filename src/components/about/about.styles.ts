import styled from "styled-components";
import {
  Card,
  CardFace,
  CardImageFront,
} from "../PortfolioWork/PortfolioWork.styles";
import { colors, desktopStyles } from "../Global/style-variables/variables";

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
  position: relative;
  width: 380px;
  height: 230px;
  border-radius: 10px;
  perspective: 1000px;
  box-shadow: 0 0 0 0px #ffffff80;
  transition: box-shadow 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    box-shadow: 0 0px 0px rgba(255, 255, 255, 0.2);
  }
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

import styled from "styled-components";
import {
  Card,
  CardFace,
  CardImageFront,
} from "../PortfolioWork/PortfolioWork.styles";
import { desktopStyles } from "@/Components/Global/style-variables/variables";

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
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 150px;
  width: 150px;
  border-radius: 20px;
  overflow: hidden;
  margin: auto;
`;

export const AboutCard = styled(Card)`
  margin: 25px;
  position: relative;
  width: 380px;
  height: 230px;
  border-radius: 20px;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: box-shadow 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }
`;

export const CardContentAbout = styled(CardFace)`
  background-color: #000;
  padding: 10px;
  color: #fff;
  font-family: "thin";
  font-size: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
`;

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
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;

  ${desktopStyles} {
    justify-content: center;
    max-width: none;
  }
`;

export const AboutImage = styled(CardImageFront)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: none;

  ${desktopStyles} {
    width: 200px;
    height: 200px;
  }
`;

export const AboutCard = styled(Card)`
  position: relative;
  width: 100%;
  min-width: 320px;
  max-width: 380px;
  height: auto;
  min-height: 280px;
  border-radius: 10px;
  perspective: 1000px;
  box-shadow: 0 0 0 0px #ffffff80;
  transition: box-shadow 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin: 20px auto;

  &:hover {
    box-shadow: 0 0px 0px rgba(255, 255, 255, 0.2);
  }

  ${desktopStyles} {
    width: 380px;
    margin: 20px;
    min-height: 320px;
  }
`;

export const CardContentAbout = styled(CardFace)`
  background-color: #215b42;
  position: absolute;
  color: #fff;
  font-family: "thin";
  font-size: 18px;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transform: rotateY(180deg);
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;

  ${desktopStyles} {
    font-size: 16px;
    padding: 30px 30px;
  }
`;

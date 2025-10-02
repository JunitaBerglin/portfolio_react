import styled from "styled-components";
import { colors, desktopStyles } from "../Global/style-variables/variables";

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

export const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  padding: 10px;

  @media (min-width: 768px) {
    justify-content: center;
    width: 80%;
    max-width: none;
    margin: 30px auto;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  min-width: 320px;
  max-width: 380px;
  height: 230px;
  border-radius: 10px;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: box-shadow 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin: 0 auto;

  &:hover {
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  ${desktopStyles} {
    width: 380px;
  }
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 10px;
  ${Card}:hover & {
    transform: rotateY(180deg);
  }
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  top: 0;
  left: 0;
`;

export const CardImageFront = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  top: 0;
  left: 0;
`;

export const CardContent = styled(CardFace)`
  background-color: #f2f2f2;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
`;

export const ProjectName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "thin";
  font-weight: bold;
  font-size: 18px;
  margin: 10px;

  ${desktopStyles} {
    font-size: 24px;
  }
`;

export const ProjectDescription = styled.div`
  padding: 10px;
  font-family: "thin";
  font-size: 14px;
  line-height: 1.4;
  padding-bottom: 1em;

  ${desktopStyles} {
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const ToggleIcon = styled.div`
  cursor: pointer;
  color: ${colors.secondaryDark};
`;

export const OpenIcon = styled(ToggleIcon)`
  transform: rotate(180deg);
`;

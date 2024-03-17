import styled, { keyframes } from "styled-components";
import { colors } from "@/Components/Global/style-variables/variables";

export const AboutSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const PortfolioWrapper = styled.div`
  margin-bottom: 7px;
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const OuterHomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // or any desired height
  width: 100%; // or any desired width
  background-color: lightblue; // just for better visibility
  @media (min-width: 768px) {
    height: 90vh;
    width: 90vw;
  }
`;

export const InnerHomeWrapper = styled.div`
  width: 70vw;
  height: 70vh;

  @media (min-width: 768px) {
    height: 90vh;
    width: 90vw;
  }
`;

export const WrapperOfJunita = styled.section`
  height: 30vh;

  @media (min-width: 768px) {
  }
`;

export const BigName = styled.h2`
  font-size: 7em;
  @media (min-width: 768px) {
    font-size: 15em;
  }
`;

export const WrapperOfBerglin = styled.section`
  height: 30vh;

  @media (min-width: 768px) {
  }
`;

export const MiddleMovement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid black;
  border-radius: 50px;
  height: 30px;
  background-color: black;
  width: 24em;

  @media (min-width: 768px) {
    width: 52em;
    padding-bottom: 0;
    margin-top: 90px;
  }
`;

export const MiddleMovementText = styled.div`
  color: ${colors.primary};
  font-family: "thin";
  font-size: 25px;

  @media (min-width: 768px) {
    font-size: 32px;
    padding-bottom: 0;
  }
`;

// Keyframes for animations
const moveLeft = keyframes`
  0% {
    transform: translate(-800px, 0);
  }
  100% {
    transform: translate(800px, 0);
  }
`;

export const Move = styled.p`
  animation: ${moveLeft} 20s infinite linear;
  color: ${colors.primary};

  &:first-child {
    animation-delay: -2s;
  }
`;

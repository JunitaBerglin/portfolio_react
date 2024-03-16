import styled, { keyframes } from "styled-components";
import { colors } from "../Global/style-variables/variables";

export const AboutSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    color: black;
  }
`;

export const HomeWrapper = styled.div`
  font-family: "lemon";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50em;

  @media (min-width: 768px) {
    height: 70em;
  }
`;

export const WrapperOfJunita = styled.div`
  height: 20vh;
  margin-top: 15em;

  @media (min-width: 768px) {
  }
`;

export const BigName = styled.div`
  display: flex;
  font-size: 27vw;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 280px;
  }
`;

export const WrapperOfBerglin = styled.div`
  margin-bottom: 15em;
  margin-top: 0em;

  @media (min-width: 768px) {
  }
`;

export const MiddleMovement = styled.div`
  border: solid black;
  border-radius: 50px;
  background-color: black;
  width: 98vw;
  height: 30px;

  @media (min-width: 768px) {
    height: 40px;
    width: 70em;
    padding-bottom: 0;
    margin-top: 90px;
  }
`;

export const MiddleMovementText = styled.div`
  color: ${colors.primary};
  display: flex;
  justify-content: space-between;
  font-family: "thin";
  font-size: 25px;
  padding-bottom: 3em;

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

export const Move = styled.div`
  animation: ${moveLeft} 20s infinite linear;
  color: ${colors.primary};

  &:first-child {
    animation-delay: -2s;
  }
`;

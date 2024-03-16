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
    height: 60em;
  }
`;

export const WrapperOfJunita = styled.div`
  height: 20vh;
  margin-top: 15em;

  @media (min-width: 768px) {
    height: 40vh;
  }
`;

export const BigName = styled.div`
  display: flex;
  font-size: 30vw;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 118px;
    font-size: 280px;
  }
`;

export const WrapperOfBerglin = styled(WrapperOfJunita)`
  margin-bottom: 15em;
  margin-top: 0em;

  @media (min-width: 768px) {
    height: 20vh;
    margin-bottom: 10em;
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

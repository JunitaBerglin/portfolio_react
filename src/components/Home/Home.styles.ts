import styled, { keyframes } from "styled-components";
import { colors } from "@/Components/Global/style-variables/variables";

export const AboutSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const OuterHomeWrapper = styled.div`
  font-family: "lemon";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 90vh;
  @media (min-width: 768px) {
    height: 150vh;
    width: 90vw;
  }
`;

export const InnerHomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 80%;

  @media (min-width: 768px) {
    width: 98vw;
  }
`;

export const WrapperOfJunita = styled.div`
  height: 42vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const BigName = styled.h2`
  line-height: 0;
  font-size: 7em;
  @media (min-width: 768px) {
    line-height: 0.6;
    font-size: 16em;
  }
`;

export const WrapperOfBerglin = styled.div`
  height: 42vh;
  display: flex;
  align-items: flex-end;

  @media (min-width: 768px) {
    margin-top: 50px;
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
    height: 50px;
    width: 52em;
  }
`;

export const MiddleMovementText = styled.div`
  color: ${colors.primary};
  font-family: "thin";
  font-size: 25px;
  font-weight: bold;

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

export const Move = styled.p`
  animation: ${moveLeft} 20s infinite linear;
  color: ${colors.primary};

  &:first-child {
    animation-delay: -2s;
  }
`;

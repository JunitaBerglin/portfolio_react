import styled, { keyframes, css } from "styled-components";
import {
  colors,
  desktopStyles,
} from "../Global/style-variables/variables";

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperOfJunita = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${desktopStyles} {
    height: 40vh;
  }
`;

export const BigName = styled.div`
  margin-top: 100px;
  font-size: 80px;
  font-weight: bold;

  ${desktopStyles} {
    margin-top: 118px;
  }
`;

export const WrapperOfBerglin = styled(WrapperOfJunita)`
  ${desktopStyles} {
    height: 40vh;
  }
`;

export const MiddleMovement = styled.div`
  border: solid black;
  border-radius: 50px;
  background-color: black;
  width: 95%;
  height: 30px;

  ${desktopStyles} {
    height: 40px;
    width: 80%;
  }
`;

export const MiddleMovementText = styled.div`
  margin-top: 2px;
  color: ${colors.primary};
  display: flex;
  justify-content: space-between;

  ${desktopStyles} {
    margin-top: 4px;
    margin-bottom: 10px;
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

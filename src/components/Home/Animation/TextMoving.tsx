import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../Global/style-variables/variables";

const MiddleMovement = styled.div`
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

const MiddleMovementText = styled.div`
  color: ${colors.primary};
  font-family: "thin";
  font-size: 25px;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const moveRight = keyframes`
  0% {
    transform: translateX(140%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Move = styled.p`
  display: flex;
  animation: ${moveRight} 13s infinite linear;
  color: ${colors.primary};
  width: 500px;

  &:first-child {
    animation-delay: -2s;
  }
`;

const Dott = styled.div`
  display: flex;
  background-color: ${colors.primary};
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-top: 15px;
  margin-right: 20px;
  margin-left: 20px;
`;

export const MovingText = () => {
  return (
    <MiddleMovement>
      <MiddleMovementText>
        <Move>
          W E B <Dott /> D E V E L O P E R
        </Move>
      </MiddleMovementText>
    </MiddleMovement>
  );
};

export default MovingText;

import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../Global/style-variables/variables";

const MiddleMovement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid ${colors.secondaryDark};
  border-radius: 50px;
  height: 24px;
  background-color: ${colors.secondaryDark};
  width: 90%;
  max-width: 24em;
  margin: 15px 0;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 42px;
    max-width: 52em;
  }
`;

const MiddleMovementText = styled.div`
  color: ${colors.primary};
  font-family: "thin";
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;

  @media (min-width: 480px) {
    font-size: 22px;
  }

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
  align-items: center;
  animation: ${moveRight} 13s infinite linear;
  color: ${colors.primary};
  width: 500px;
  margin: 0;

  &:first-child {
    animation-delay: -2s;
  }
`;

const Dott = styled.div`
  display: inline-block;
  background-color: ${colors.primary};
  border-radius: 50%;
  height: 8px;
  width: 8px;
  margin-right: 20px;
  margin-left: 20px;
  vertical-align: middle;
  align-self: center;

  @media (min-width: 480px) {
    height: 10px;
    width: 10px;
  }

  @media (min-width: 768px) {
    height: 12px;
    width: 12px;
  }
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

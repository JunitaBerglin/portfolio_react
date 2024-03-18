import styled, { keyframes } from "styled-components";

const jumpinArrowAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1, 1) rotate(15deg);
  }
  10% {
    transform: translateY(0) scale(1.3, 0.8) rotate(15deg);
  }
  11% {
    transform: translateY(0) scale(0.7, 1.2) rotate(15deg);
    animation-timing-function: cubic-bezier(0, 0, 0.5, 1);
  }
  39% {
    transform: translateY(-75px) scale(1) rotate(15deg);
    animation-timing-function: cubic-bezier(0, 0, 0.5, 1);
  }
  40%, 41% {
    transform: translateY(-75px) scale(1) rotate(15deg);
    animation-timing-function: cubic-bezier(1, 0, 1, 0);
  }
  69% {
    transform: translateY(0) scale(1, 1) rotate(15deg);
    animation-timing-function: cubic-bezier(1, 0, 1, 0);
  }
  70% {
    transform: translateY(0) scale(1.5, 0.4) rotate(15deg);
  }
  80% {
    transform: translateY(0) scale(0.8, 1.2) rotate(15deg);
  }
  90% {
    transform: translateY(0) scale(1.1, 0.8) rotate(15deg);
  }
  100% {
    transform: translateY(0) scale(1, 1) rotate(15deg);
  }
`;

const Arrow = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 15px; // This makes it circular if the image isn't
  position: absolute;
  transform-origin: bottom;
  animation: ${jumpinArrowAnimation} 2s infinite;
`;

export default function AnimatedArrowComponent() {
  return (
    <Arrow
      src="/portfolio_react/public/icon-15.jpg"
      alt="animated arrow"
    />
  );
}

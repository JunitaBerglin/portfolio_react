import styled, { keyframes } from "styled-components";

const jumpinArrowAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1, 1) rotate(270deg);
  }
  10% {
    transform: translateY(0) scale(1.3, 0.8) rotate(270deg);
  }
  11% {
    transform: translateY(0) scale(0.7, 1.2) rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.5, 1);
  }
  39% {
    transform: translateY(-75px) scale(1) rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.5, 1);
  }
  40%, 41% {
    transform: translateY(-75px) scale(1) rotate(270deg);
    animation-timing-function: cubic-bezier(1, 0, 1, 0);
  }
  69% {
    transform: translateY(0) scale(1, 1) rotate(270deg);
    animation-timing-function: cubic-bezier(1, 0, 1, 0);
  }
  70% {
    transform: translateY(0) scale(1.5, 0.4) rotate(270deg);
  }
  80% {
    transform: translateY(0) scale(0.8, 1.2) rotate(270deg);
  }
  90% {
    transform: translateY(0) scale(1.1, 0.8) rotate(270deg);
  }
  100% {
    transform: translateY(0) scale(1, 1) rotate(270deg);
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  padding-bottom: 30px;
`;

const Arrow = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 30px;
  position: absolute;
  transform-origin: bottom;
  animation: ${jumpinArrowAnimation} 2s infinite;
`;

export default function AnimatedArrowComponent() {
  return (
    <ArrowWrapper>
      <Arrow src="/icons8-back-52.png" alt="animated arrow" />
    </ArrowWrapper>
  );
}

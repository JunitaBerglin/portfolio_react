import styled, { keyframes } from "styled-components";

const jumpinArrowAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1, 1) rotate(180deg);
  }
  10% {
    transform: translateY(0) scale(1.3, 0.8) rotate(180deg);
  }
  11% {
    transform: translateY(0) scale(0.7, 1.2) rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.5, 1);
  }
  39% {
    transform: translateY(-75px) scale(1) rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.5, 1);
  }
  40%, 41% {
    transform: translateY(-75px) scale(1) rotate(180deg);
    animation-timing-function: cubic-bezier(1, 0, 1, 0);
  }
  69% {
    transform: translateY(0) scale(1, 1) rotate(180deg);
    animation-timing-function: cubic-bezier(1, 0, 1, 0);
  }
  70% {
    transform: translateY(0) scale(1.5, 0.4) rotate(180deg);
  }
  80% {
    transform: translateY(0) scale(0.8, 1.2) rotate(180deg);
  }
  90% {
    transform: translateY(0) scale(1.1, 0.8) rotate(180deg);
  }
  100% {
    transform: translateY(0) scale(1, 1) rotate(180deg);
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

const Arrow = styled.svg`
  height: 38px;
  width: 38px;
  margin-left: 30px;
  position: absolute;
  transform-origin: bottom;
  animation: ${jumpinArrowAnimation} 2s infinite;
  fill: #205a44;
`;

export default function AnimatedArrowComponent() {
  return (
    <ArrowWrapper>
      <Arrow viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      </Arrow>
    </ArrowWrapper>
  );
}

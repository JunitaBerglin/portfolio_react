import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

// Eyelid animation - comes down from top like a real eye blink
const eyelidBlink = keyframes`
  0%, 90%, 100% {
    clip-path: ellipse(0% 0% at 50% 0%);
  }
  95%, 97% {
    clip-path: ellipse(100% 100% at 50% 0%);
  }
`;

export const EyeWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: calc(50% - 7px);
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 480px) {
    width: 35px;
    height: 35px;
    top: 50%;
  }

  @media (min-width: 768px) {
    width: 75px;
    height: 75px;
    top: calc(50% - 24px);
  }
`;

const EyeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Eye = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #fff;
  background-image: radial-gradient(circle 9px, #0d161b 100%, transparent 0);
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  border: 1px solid #0d161b;

  @media (min-width: 480px) {
    width: 35px;
    height: 35px;
    background-image: radial-gradient(circle 14px, #0d161b 100%, transparent 0);
    border: 2px solid #0d161b;
  }

  @media (min-width: 768px) {
    width: 75px;
    height: 75px;
    background-image: radial-gradient(circle 32px, #0d161b 100%, transparent 0);
  }
`;

const Eyelid = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #f8e6e3;
  border-radius: 50%;
  animation: ${eyelidBlink} 4s infinite;
  z-index: 2;
  pointer-events: none;
  top: 0;
  left: 0;

  @media (min-width: 480px) {
    width: 35px;
    height: 35px;
  }

  @media (min-width: 768px) {
    width: 75px;
    height: 75px;
  }
`;

export default function EyeComponent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eyeRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (eyeRef.current) {
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        eyeRef.current.getBoundingClientRect();
      const eyeCenterX = left + width / 2;
      const eyeCenterY = top + height / 2;
      const deltaX = (clientX - eyeCenterX) * 0.08;
      const deltaY = (clientY - eyeCenterY) * 0.08;
      setMousePosition({ x: deltaX, y: deltaY });
    }
  };

  useEffect(() => {
    const handleMouseMoveThrottled = (e: MouseEvent) => {
      window.requestAnimationFrame(() => handleMouseMove(e));
    };
    window.addEventListener("mousemove", handleMouseMoveThrottled);

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveThrottled);
    };
  }, []);

  return (
    <EyeContainer>
      <Eye
        ref={eyeRef}
        style={{
          backgroundPosition: `calc(50% + ${mousePosition.x}px) calc(50% + ${mousePosition.y}px)`,
        }}
      />
      <Eyelid />
    </EyeContainer>
  );
}

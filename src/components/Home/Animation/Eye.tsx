import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const eyeBlink = keyframes`
  0%, 95%, 100% {
    height: 33px;
  }
  97% {
    height: 2px;
  }
`;
const eyeBlinkBig = keyframes`
  0%, 95%, 100% {
    height: 75px;
  }
  97% {
    height: 2px;
  }
`;

export const EyeWrapper = styled.div`
  position: relative;
  padding-left: 128px;
  height: 30px;
  width: 30px;

  @media (min-width: 768px) {
    padding-left: 50px;
    padding-bottom: 49px;
  }
`;

const Eye = styled.div`
  position: absolute;
  width: 25px;
  height: 15px;
  background-color: #fff;
  background-image: radial-gradient(
    circle 14px,
    #0d161b 100%,
    transparent 0
  );
  background-repeat: no-repeat;
  border-radius: 50%;
  vertical-align: middle;
  animation: ${eyeBlink} 4s infinite;
  @media (min-width: 768px) {
    width: 48px;
    animation: ${eyeBlinkBig} 4s infinite;
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
      const deltaX = (clientX - eyeCenterX) * 0.05;
      const deltaY = (clientY - eyeCenterY) * 0.05;
      setMousePosition({ x: deltaX, y: deltaY });
    }
  };

  useEffect(() => {
    const handleMouseMoveThrottled = (e: MouseEvent) => {
      window.requestAnimationFrame(() => handleMouseMove(e));
    };
    window.addEventListener("mousemove", handleMouseMoveThrottled);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMoveThrottled
      );
    };
  }, []);

  return (
    <Eye
      ref={eyeRef}
      style={{
        backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
      }}
    />
  );
}

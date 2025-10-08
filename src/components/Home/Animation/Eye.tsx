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
  top: calc(50% - 10px);
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
    top: calc(50% - 26px);
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
  background-color: #fcebe7;
  border-radius: 50%;
  animation: ${eyelidBlink} 4s infinite;
  z-index: 3;
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

const Eyeliner = styled.div`
  position: absolute;
  width: 24px;
  height: 12px;
  border-radius: 0 0 12px 12px;
  background-color: #1a4735;
  animation: ${eyelidBlink} 4s infinite;
  z-index: 2;
  pointer-events: none;
  top: 12px;
  left: 0;

  @media (min-width: 480px) {
    width: 35px;
    height: 17.5px;
    border-radius: 0 0 17.5px 17.5px;
    top: 17.5px;
  }

  @media (min-width: 768px) {
    width: 75px;
    height: 37.5px;
    border-radius: 0 0 37.5px 37.5px;
    top: 37.5px;
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

      // Beräkna delta med begränsning
      let deltaX = (clientX - eyeCenterX) * 0.08;
      let deltaY = (clientY - eyeCenterY) * 0.08;

      // Pupillstorlek baserat på skärmstorlek
      const pupilRadius = width <= 24 ? 9 : width <= 35 ? 14 : 32;
      const eyeRadius = width / 2;

      // Maximal rörelse: pupillen måste vara minst 40% synlig
      // Det betyder att centrum kan röra sig max (eyeRadius - pupilRadius * 0.6)
      const maxMovement = eyeRadius - pupilRadius * 0.6;

      // Clampa värdena
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (distance > maxMovement) {
        const ratio = maxMovement / distance;
        deltaX *= ratio;
        deltaY *= ratio;
      }

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
          backgroundPosition:
            mousePosition.x === 0 && mousePosition.y === 0
              ? "center"
              : `calc(50% + ${mousePosition.x}px) calc(50% + ${mousePosition.y}px)`,
        }}
      />
      <Eyeliner />
      <Eyelid />
    </EyeContainer>
  );
}

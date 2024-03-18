import React from "react";
import styled, { keyframes } from "styled-components";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  backgroundColor?: string;
}

const shakeAnimation = keyframes`
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }

  25% {
    transform: rotate(7deg) translate3d(0, 0, 0);
  }

  50% {
    transform: rotate(-7deg) translate3d(0, 0, 0);
  }

  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }

  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
`;

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  margin: 14px;
  padding: 0.8em 1em;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "#f9d080"};
  border-radius: 10px;
  color: #000;
  font-weight: 300;
  font-size: 18px;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  font-family: "thin";
  font-weight: bold;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    animation: ${shakeAnimation} 0.5s ease-in-out both;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    z-index: -1;
    transform: translate(100%, -25%) translate3d(0, 0, 0);
  }

  &:hover::before,
  &:hover::after {
    opacity: 0.15;
    transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
  }

  &:hover::before {
    transform: translate3d(50%, 0, 0) scale(0.9);
  }

  &:hover::after {
    transform: translate(50%, 0) scale(1.1);
  }
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

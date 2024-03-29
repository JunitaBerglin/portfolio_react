import styled, { keyframes } from "styled-components";
import { colors } from "../Global/style-variables/variables";

export const AboutSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const OuterHomeWrapper = styled.div`
  font-family: "lemon";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40em;
  @media (min-width: 768px) {
    width: 90vw;
    height: 43em;
  }
`;

export const InnerHomeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 18em;
  width: 80%;

  @media (min-width: 768px) {
    width: 98vw;
  }
`;

export const WrapperOfJunita = styled.div`
  position: relative;
  height: 128px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    height: 315px;
  }
`;

export const WrapperOfBerglin = styled.div`
  position: relative;
  height: 125px;
  display: flex;
  align-items: flex-end;

  @media (min-width: 768px) {
    height: 307px;
  }
`;

export const BigName = styled.h2`
  line-height: 0;
  font-size: 6.5em;
  @media (min-width: 768px) {
    font-size: 16em;
  }
`;

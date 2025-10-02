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
  min-height: 30em;
  padding: 20px 0;

  @media (min-width: 768px) {
    width: 90vw;
    padding: 0;
  }
`;

export const InnerHomeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;

  @media (min-width: 768px) {
    width: 98vw;
  }
`;

export const WrapperOfJunita = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 17rem;
  }
`;

export const WrapperOfBerglin = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const BigName = styled.h2`
  line-height: 0.5;
  font-size: 5em;
  margin: 0;
  padding: 0;
  position: relative;
  color: ${colors.secondaryDark};

  @media (min-width: 768px) {
    font-size: 16em;
    line-height: 0.67;
  }
`;

import styled from "styled-components";
import { colors, desktopStyles } from "../Global/style-variables/variables";

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 7px;
  padding: 5px;
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const SectionContainer = styled.nav`
  cursor: pointer;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  position: relative;

  &:hover {
    background-color: ${colors.secondaryLight};
    transition: background-color 2000ms;
  }
`;

export const AccordionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const ArrowIcon = styled.svg<{ isOpen: boolean }>`
  position: absolute;
  right: 20px;
  height: 16px;
  width: 16px;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(0deg)" : "rotate(180deg)")};
  user-select: none;
  fill: ${colors.secondaryDark};

  ${desktopStyles} {
    right: 40px;
    height: 18px;
    width: 18px;
  }
`;

export const ProjectText = styled.div`
  color: ${colors.secondaryDark};
  font-family: "lemon";
  font-size: 50px;
  margin: 0 10px;
  position: relative;
  padding: 10px 0;

  ${desktopStyles} {
    font-size: 90px;
    margin: 0 30px;
    padding: 15px 0;
  }
`;

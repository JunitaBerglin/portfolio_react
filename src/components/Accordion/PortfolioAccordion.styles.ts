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
  display: grid;
  justify-self: center;
  grid-template-columns: 33% 33% 33%;
  width: 100%;
  align-items: center;
  background-color: ${colors.primary};

  &:hover {
    background-color: ${colors.secondaryLight};
    transition: background-color 2000ms;
  }
`;

export const AccordionContent = styled.div`
  width: 100%;
`;

export const ArrowIcon = styled.svg<{ isOpen: boolean }>`
  grid-column: 3;
  justify-self: center;
  height: 16px;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(0deg)" : "rotate(180deg)")};
  user-select: none;
  fill: ${colors.secondaryDark};

  ${desktopStyles} {
    justify-self: start;
    height: 18px;
  }
`;

export const RightArrowIcon = styled.svg`
  grid-column: 3;
  justify-self: center;
  height: 16px;
  fill: ${colors.secondaryDark};

  ${desktopStyles} {
    justify-self: start;
    height: 18px;
  }
`;

export const ProjectText = styled.div`
  grid-column: 2;
  justify-self: center;
  color: ${colors.secondaryDark};
  font-family: "lemon";
  font-size: 50px;
  padding: 10px 0;

  ${desktopStyles} {
    font-size: 90px;
    padding: 15px 0;
  }
`;

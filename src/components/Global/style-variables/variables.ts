import { css } from "styled-components";

export const colors = {
  primary: "#FCEBE7",
  secondaryLight: "#f4e6e2",
  secondaryDark: "#1A4735",
};

export const desktopStyles = css`
  @media (min-width: 768px) {
    @content;
  }
`;

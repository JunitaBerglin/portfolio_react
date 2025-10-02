import { css } from "styled-components";

export const colors = {
  primary: "#FBE1DB",
  secondaryLight: "#f0e0dc",
  secondaryDark: "#1A4735",
};

export const desktopStyles = css`
  @media (min-width: 768px) {
    @content;
  }
`;

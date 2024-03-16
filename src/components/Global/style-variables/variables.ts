import { css } from "styled-components";

export const colors = {
  primary: "#f9d080",
  secondaryLight: "#ffffdf",
  secondaryDark: "black",
};

export const desktopStyles = css`
  @media (min-width: 768px) {
    @content;
  }
`;

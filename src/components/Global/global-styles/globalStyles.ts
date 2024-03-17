import { createGlobalStyle } from "styled-components";
import { colors } from "@/Components/Global/style-variables/variables";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "thin";
    src: url("/AlumniSansPinstripe-Regular.ttf") format("opentype");
  }

  @font-face {
    font-family: "lemon";
    src: url("/Alatsi/Alatsi-Regular.ttf") format("opentype");
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background-color: ${colors.primary};
    scroll-behavior: smooth;
  }

`;

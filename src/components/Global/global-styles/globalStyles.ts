import { createGlobalStyle } from "styled-components";
import { colors, desktopStyles } from "../style-variables/variables";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "thin";
    src: url("../attributes/webly-sleek/weblysleekuil.ttf") format("truetype");
  }
  @font-face {
    font-family: "lemon";
    src: url("../attributes/lemon-milk-font/LemonMilkLight-owxMq.otf") format("opentype");
  }


  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background-color: ${colors.primary};
    font-family: "thin";
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 80px;
    color: #000000;
    ${desktopStyles} {
      font-size: 200px;
    }
  }

  p {
    font-size: 12px;
    ${desktopStyles} {
      font-size: 17px;
    }
  }

  a:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

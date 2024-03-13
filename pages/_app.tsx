import React from "react";
import { AppProps } from "next/app";
import { GlobalStyles } from "../src/Components/Global/global-styles/globalStyles";

const MyPortfolioApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyPortfolioApp;

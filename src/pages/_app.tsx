import React from "react";
import { AppProps } from "next/app";
import { GlobalStyles } from "../components/Global/global-styles/GlobalStyles";

const MyPortfolioApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyPortfolioApp;

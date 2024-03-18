import React from "react";
import { AppProps } from "next/app";
import { GlobalStyles } from "../Components/Global/global-styles/GlobalStyles";

const MyPortfolioApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyPortfolioApp;

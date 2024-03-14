import React from "react";
import { AppProps } from "next/app";
import { GlobalStyles } from "../src/Components/Global/global-styles/globalStyles";
import { Layout } from "../src/Components/Global/Layout";

const MyPortfolioApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyPortfolioApp;

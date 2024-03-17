import React from "react";
import { AppProps } from "next/app";
import { Layout } from "@/Components/Layout";
import { GlobalStyles } from "@/Components/Global/global-styles/globalStyles";

const MyPortfolioApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyPortfolioApp;

import React from "react";
import { AppProps } from "next/app";
import { Layout } from "./Global/Layout";

const MyPortfolioApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyPortfolioApp;

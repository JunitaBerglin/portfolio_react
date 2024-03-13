import { gql } from "@apollo/client";
import React from "react";
import client from "../lib/apollo-client";
import { About } from "../src/Components/About/About";
import { Contact } from "../src/Components/Contact/Contact";
import PortfolioWork from "../src/Components/PortfolioWork/PortfolioWork";
import { PortfolioProject } from "../src/Components/PortfolioWork/PortfolioWork.types";
import HomePage from "../src/Components/Home/Home";

interface PortfolioPageProps {
  portfolioWorks: PortfolioProject[];
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({
  portfolioWorks,
}) => {
  return (
    <>
      <HomePage />
      <About />
      <PortfolioWork projectItems={portfolioWorks} />
      <Contact />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        allPortfolioWorks {
          description
          name
          projectId
          slug
          image {
            url
          }
        }
      }
    `,
  });

  const portfolioWorks = data.allPortfolioWorks.map(
    (work: PortfolioProject) => ({
      name: work.name,
      imageUrl: work.image.url,
      description: work.description,
      projectId: work.projectId,
      slug: work.slug,
    })
  );

  return {
    props: {
      portfolioWorks,
    },
  };
}

export default PortfolioPage;

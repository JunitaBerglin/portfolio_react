import { gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import client from "../../lib/apollo-client";
import { PortfolioProject } from "../components/PortfolioWork/PortfolioWork.types";
import dynamic from "next/dynamic";
import { Layout } from "../components/Layout";

const PortfolioAccordionNoSSR = dynamic(
  () => import("../components/Accordion/PortfolioAccordion"),
  { ssr: false }
);

const PortfolioPage: React.FC = () => {
  const [portfolioWorks, setPortfolioWorks] = useState<
    PortfolioProject[]
  >([]);

  useEffect(() => {
    const fetchPortfolioWorks = async () => {
      const { data } = await client.query({
        query: gql`
          query MyQuery {
            allPortfolioWorks {
              description
              image {
                url
              }
              name
              projectId
              githubName
            }
          }
        `,
      });

      const works = data.allPortfolioWorks.map(
        (work: PortfolioProject) => ({
          name: work.name,
          image: work.image ?? { url: "/default-image.jpg" },
          description: work.description,
          projectId: work.projectId,
          githubName: work.githubName,
        })
      );

      setPortfolioWorks(works);
    };

    fetchPortfolioWorks();
  }, []);

  return (
    <Layout>
      <PortfolioAccordionNoSSR projectItems={portfolioWorks} />
    </Layout>
  );
};

export default PortfolioPage;

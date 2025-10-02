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
  const [portfolioWorks, setPortfolioWorks] = useState<PortfolioProject[]>([]);

  useEffect(() => {
    const fetchPortfolioWorks = async () => {
      console.log("🚀 Startar fetch av portfolio works...");
      console.log("Environment check:", {
        nodeEnv: process.env.NODE_ENV,
        hasToken: !!process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN,
        tokenLength: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN?.length,
      });

      try {
        console.log("📡 Skickar GraphQL query...");
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
                showDemoButton
              }
            }
          `,
          fetchPolicy: "network-only",
        });

        console.log("📊 Rådata från API:", data);

        if (!data?.allPortfolioWorks) {
          console.error("❌ No data.allPortfolioWorks returned", data);
          setPortfolioWorks([]);
          return;
        }

        console.log(`✅ Hittade ${data.allPortfolioWorks.length} projekt`);

        const works = data.allPortfolioWorks.map((work: PortfolioProject) => {
          const github = work.githubName || "";
          return {
            name: work.name ?? "Untitled Project",
            image: work.image ?? { url: "/default-image.jpg" },
            description: work.description ?? "",
            projectId: work.projectId ?? Math.random().toString(36).slice(2),
            githubName:
              typeof github === "string" && github.startsWith("http")
                ? github
                : `https://github.com/${github}`,
            showDemoButton: !!work.showDemoButton,
          };
        });

        console.log("🎯 Processade projekt:", works);
        setPortfolioWorks(works);
      } catch (err) {
        console.error("💥 Failed to fetch portfolio works:", err);
        if (err instanceof Error) {
          console.error("Error details:", {
            message: err.message,
            stack: err.stack,
          });
        }
        setPortfolioWorks([]);
      }
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

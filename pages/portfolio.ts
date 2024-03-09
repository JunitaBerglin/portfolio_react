import { gql } from "@apollo/client";
import client from "../lib/apollo-client";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        allPortfolioWorks {
          description {
            value
          }
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

  return {
    props: {
      portfolioWorks: data.allPortfolioWorks,
    },
  };
}

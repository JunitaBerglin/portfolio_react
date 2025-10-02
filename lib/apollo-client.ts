import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error/index.js";

// Debug miljövariabler
const hasToken = !!process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN;
const tokenPreview = process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN?.substring(0, 8);

console.log("🔑 DATO CMS Token Status:", {
  hasToken,
  tokenPreview: hasToken ? `${tokenPreview}...` : "SAKNAS!",
  environment: process.env.NODE_ENV,
});

if (!hasToken) {
  console.error(
    "❌ KRITISKT FEL: NEXT_PUBLIC_DATOCMS_API_TOKEN saknas! Lägg till den i dina miljövariabler."
  );
}

// Error link för bättre felhantering
const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.error(
          `GraphQL error: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }

    if (networkError) {
      console.error(`Network error: ${networkError}`);
      // Logga mer detaljer om nätverksfelet
      if ("statusCode" in networkError) {
        console.error(`Status Code: ${(networkError as any).statusCode}`);
      }
      if ("result" in networkError) {
        console.error(`Network Error Result:`, (networkError as any).result);
      }
    }
  }
);

const httpLink = new HttpLink({
  uri: "https://graphql.datocms.com/",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
    "Content-Type": "application/json",
  },
});

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
  defaultOptions: {
    watchQuery: {
      errorPolicy: "all",
    },
    query: {
      errorPolicy: "all",
    },
  },
});

export default client;

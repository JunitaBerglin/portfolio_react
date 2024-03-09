import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://graphql.datocms.com/",
  headers: {
    Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;

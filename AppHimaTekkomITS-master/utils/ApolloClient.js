import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.APOLLO_PUBLIC_GRAPHCMS_ENDPOINT, // Ensure this is the correct GraphQL API URL
  cache: new InMemoryCache(),
});

export default client;
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://127.0.0.1:8080/graphql',
    credentials: 'include'
  }),
  cache: new InMemoryCache(),
});

export default apolloClient;

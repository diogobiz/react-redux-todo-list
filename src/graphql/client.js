import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const httpLink = new HttpLink({
  uri: 'http://localhost:8080/'
})

const inMemoryCache = new InMemoryCache().restore(window.__APOLLO_STATE__)

const configApolloClient = () => new ApolloClient({
  link: httpLink,
  cache: inMemoryCache
})

export default configApolloClient
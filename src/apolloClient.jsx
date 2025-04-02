import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
 
const apiUrl = 'http://localhost:1337/graphql';
 
const client = new ApolloClient({
  link: new HttpLink({
    uri: apiUrl,
  }),
  cache: new InMemoryCache(),
});
 
export default client;
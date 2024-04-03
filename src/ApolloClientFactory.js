import ApolloClient from 'apollo-boost';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// Using GraphQL fragments (in Best Bet lookup) requires a local schema file.
const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData
});

const cache = new InMemoryCache({ fragmentMatcher });

const apolloClient = new ApolloClient({
    cache,
    uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
    link: new HttpLink()
});

export {apolloClient};

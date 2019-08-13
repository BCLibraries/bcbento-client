import React from 'react';
import SearchResults from "./SearchResults";
import BlankSearchScreen from "./slots/BlankSearchScreen";
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient({uri: process.env.REACT_APP_GRAPHQL_ENDPOINT});

function App({searchBox, searchString}) {
    return (
        <ApolloProvider client={client}>
            <h2>HERE</h2>
            <div className="bento-results-page">
                {searchBox}
                {searchString ? <SearchResults searchString={searchString}/> : <BlankSearchScreen/>}
            </div>
        </ApolloProvider>
    );
}

export default App;

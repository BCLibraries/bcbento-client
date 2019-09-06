import React from 'react';
import SearchResults from "./SearchResults";
import BlankSearchScreen from "./slots/BlankSearchScreen";
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient({uri: process.env.REACT_APP_GRAPHQL_ENDPOINT});

function App({searchBox, searchString}) {
    return (
        <ApolloProvider client={client}>
            <div className="bento-results-page">
                <h1 className="sr-only sr-only-focusable" id="main-heading">Search the library</h1>
                {searchBox}
                {searchString ? <SearchResults searchString={searchString}/> : <BlankSearchScreen/>}
            </div>
        </ApolloProvider>
    );
}

export default App;

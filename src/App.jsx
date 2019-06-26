import React from 'react';
import SearchResults from "./SearchResults";
import BlankSearchScreen from "./slots/BlankSearchScreen";
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient({uri: 'http://127.0.0.1:8000/graphql'});

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

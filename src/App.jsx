import React from 'react';
import SearchResults from "./SearchResults";
import BlankSearchScreen from "./slots/BlankSearchScreen";

function App({searchBox, searchString}) {
    return (
        <div className="bento-results-page">
            <h1 className="sr-only sr-only-focusable" id="main-heading">Search the library</h1>
            {searchBox}
            {searchString ? <SearchResults searchString={searchString}/> : <BlankSearchScreen/>}
        </div>
    );
}

export default App;

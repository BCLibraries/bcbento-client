import React from 'react';
import SearchResults from "./SearchResults";
import BlankSearchScreen from "./slots/BlankSearchScreen";

function App({searchBox, searchString}) {
    return (
        <div className="bento-results-page">
            <h1 className="sr-only sr-only-focusable" id="main-heading">Search the library</h1>
            <form method="get" action={window.location.pathname} className="bento-search-box">
                {searchBox}
                <input type="submit" value="Search"/>
            </form>
            {searchString ? <SearchResults searchString={searchString}/> : <BlankSearchScreen/>}
        </div>
    );
}

export default App;

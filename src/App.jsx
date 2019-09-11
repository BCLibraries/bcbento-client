import React from 'react';
import SearchResults from "./SearchResults";
import BlankSearchScreen from "./slots/BlankSearchScreen";

function App({searchBox, searchString}) {
    return (
        <div className="bento-results-page">
            {searchBox}
            {searchString ? <SearchResults searchString={searchString}/> : <BlankSearchScreen/>}
        </div>
    );
}

export default App;

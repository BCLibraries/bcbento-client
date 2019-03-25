import React from 'react';
import SearchResults from "./SearchResults";
import BlankSearchScreen from "./slots/BlankSearchScreen";

function App({searchBox, searchString, resultsBoxContainer}) {
    const body = searchString ? <SearchResults boxes={resultsBoxContainer}/> : <BlankSearchScreen/>;

    return (
        <div className="bento-results-page">
            {searchBox}
            {body}
        </div>
    );
}

export default App;

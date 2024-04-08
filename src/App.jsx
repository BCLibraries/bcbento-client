import React from 'react';
import SearchResults from "./SearchResults";
import BlankSearchScreen from "./slots/BlankSearchScreen";
import './styles.css';

const Results = props => {
    return <SearchResults searchString={props.searchString}/>;
};

const MemoizedResults = React.memo(Results);

function App({searchBox, searchString}) {
    return (
        <div className="bento-results-page">
            <h1 className="sr-only sr-only-focusable" id="main-heading">Search the library</h1>
            <form method="get" action={window.location.pathname} className="bento-search-box">
                {searchBox}
                <button className="btn btn-default" type="submit">
                    <i className="fa fa-search" aria-hidden="true"/>
                    <span className="search-button-text">Search</span>
                </button>
            </form>
            {searchString ? <MemoizedResults searchString={searchString}/> : <BlankSearchScreen/>}
        </div>
    );
}

export default App;

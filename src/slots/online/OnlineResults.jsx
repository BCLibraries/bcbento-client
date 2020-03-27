import React from 'react';
import OnlineResult from "./OnlineResult";
import ResultsBoxContainer from "../ResultsBoxContainer";
import {OnlineQuery} from "./OnlineQuery";

/**
 * Online results box
 *
 * @param searchString string The search string from user input
 * @param client object GraphQL client
 * @param toggle
 * @return {*}
 * @constructor
 */
function OnlineResults({searchString, client, toggle}) {
    return (
        <ResultsBoxContainer
            client={client}
            heading={'Books & more'}
            classPrefix={'books'}
            term={'items'}
            query={new OnlineQuery(searchString)}
            renderResult={doc => <OnlineResult item={doc} key={`book-${doc.id}`}/>}
            noResultsContent={noResultContent(searchString)}
            modifier={toggle}
        />
    );
}

function noResultContent(searchString) {
    const encodedSearchString = encodeURIComponent(searchString);
    const worldCatSearchURL = `https://bc.on.worldcat.org/search?databaseList=&queryString=${encodedSearchString}`;

    return (
        <div className="catalog-no-results-box">
            <p>There are no results matching your search.</p>
            <p className="catalog-no-results-box__worldcat-advice">
                Try your search in <a href={worldCatSearchURL}>WorldCat</a> for results beyond BC Libraries.
            </p>
        </div>
    );
}

export default OnlineResults;
import React from 'react';
import ArticleResult from "./ArticleResult";
import ResultsBoxContainer from "../ResultsBoxContainer";
import {ArticlesQuery} from "./ArticlesQuery";

/**
 * Article results box
 *
 * @param {string} searchString  The search string from user input
 * @param {object} client GraphQL client
 * @param {function} handleFetch Called when new results are fetched
 * @return {*}
 * @constructor
 */
function ArticleResults({searchString, client, handleFetch}) {
    const encodedSearchString = encodeURIComponent(searchString);
    const expandedSearchUrl = `https://bc.primo.exlibrisgroup.com/discovery/search?query=any,contains,${encodedSearchString}&tab=CentralIndex&search_scope=CentralIndex&vid=01BC_INST:bclib&pcAvailability=false`

    return (
        <ResultsBoxContainer
            client={client}
            heading={'Articles'}
            classPrefix={'articles'}
            term={'articles'}
            query={new ArticlesQuery(searchString)}
            renderResult={doc => <ArticleResult article={doc} key={`article-${doc.id}`}/>}
            noResultsContent={noResultContent(searchString)}
            handleFetch={handleFetch}
        />
    );
}

function noResultContent(searchString) {
    const encodedSearchString = encodeURIComponent(searchString);
    const expandedSearchUrl = `https://bc.primo.exlibrisgroup.com/discovery/search?query=any,contains,${encodedSearchString}&tab=CentralIndex&search_scope=CentralIndex&vid=01BC_INST:bclib&pcAvailability=true`
        return (
        <div className="catalog-no-results-box">
            <p>There are no articles matching your search. </p>
            <p className="catalog-no-results-box__worldcat-advice">
                <a href={expandedSearchUrl}>Expand your search beyond library collections.</a>
            </p>
        </div>
    );
}

export default ArticleResults;
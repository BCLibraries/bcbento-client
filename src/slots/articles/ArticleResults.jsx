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
    return (
        <ResultsBoxContainer
            client={client}
            heading={'Articles'}
            classPrefix={'articles'}
            term={'articles'}
            query={new ArticlesQuery(searchString)}
            renderResult={doc => <ArticleResult article={doc} key={`article-${doc.id}`}/>}
            handleFetch={handleFetch}
        />
    );
}

export default ArticleResults;
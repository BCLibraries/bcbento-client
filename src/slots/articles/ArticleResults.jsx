import React from 'react';
import ArticleResult from "./ArticleResult";
import NewResultsBox from "../NewResultsBox";
import {ArticlesQuery} from "./ArticlesQuery";

/**
 * Article results box
 *
 * @param searchString string The search string from user input
 * @param client object GraphQL client
 * @return {*}
 * @constructor
 */
function ArticleResults({searchString, client}) {
    return (
        <NewResultsBox
            client={client}
            heading={'Articles'}
            classPrefix={'articles'}
            term={'articles'}
            query={new ArticlesQuery(searchString)}
            renderResult={doc => <ArticleResult article={doc} key={`article-${doc.id}`}/>}
        />
    );
}

export default ArticleResults;
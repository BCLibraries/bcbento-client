import React from 'react';
import BookResults from './BookResults.jsx';
import ResultsBoxContainer from './ResultsBoxContainer';
import ArticleResults from "./ArticleResults";


function buildResultsBoxes(searchString, queryResults) {
    const container = new ResultsBoxContainer();

    container.articleResults = <ArticleResults searchString={searchString} />
    container.bookResults = <BookResults searchString={searchString}/>;

    return container;
}



export default buildResultsBoxes;
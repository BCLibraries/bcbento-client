import React from 'react';
import BookResults from './books/BookResults';
import ResultsBoxContainer from './ResultsBoxContainer';
import ArticleResults from "./articles/ArticleResults";
import FaqResults from "./faq/FaqResults";
import LibrarianResults from "./librarians/LibrarianResults";
import VideoResults from "./video/VideoResults";
import WebsiteResults from "./website/WebsiteResults";


function buildResultsBoxes(searchString, queryResults) {
    const container = new ResultsBoxContainer();

    container.articleResults = <ArticleResults searchString={searchString}/>;
    container.bookResults = <BookResults searchString={searchString}/>;
    container.faqResults = <FaqResults searchString={searchString}/>;
    container.librarianResults = <LibrarianResults searchString={searchString}/>;
    container.videoResults = <VideoResults searchString={searchString}/>;
    container.websiteResults = <WebsiteResults searchString={searchString}/>;

    return container;
}


export default buildResultsBoxes;
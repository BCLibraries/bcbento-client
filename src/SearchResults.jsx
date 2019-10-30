import React, {useRef, useState} from 'react';
import BookResults from "./slots/books/BookResults";
import ArticleResults from "./slots/articles/ArticleResults";
import FaqResults from "./slots/faq/FaqResults";
import LibrarianResults from "./slots/librarians/LibrarianResults";
import VideoResults from "./slots/video/VideoResults";
import WebsiteResults from "./slots/website/WebsiteResults";
import BestBetLookup from "./slots/bestbets/BestBetLookup";
import {SkipToLinkBar} from "./SkipToLinkBar";
import {apolloClient} from "./ApolloClientFactory";

function SearchResults({searchString}) {

    // Store article results state here to share with BestBetLookup.
    const [articleResults, setArticleResults] = useState(null);

    // Get references to search result boxes for linking in the skip to bar.
    const refList = {
        booksDiv: useRef(null),
        articlesDiv: useRef(null),
        faqDiv: useRef(null),
        librariansDiv: useRef(null),
        videoDiv: useRef(null),
        websiteDiv: useRef(null),
    };

    const resultBoxParams = {searchString, client: apolloClient};

    return (
        <div>
            <SkipToLinkBar {...refList} />

            <div className="bento-results">
                <BestBetLookup {...resultBoxParams} articleResults={articleResults}/>

                <div className="results-row-1 row">
                    <div className="col-md-5 col-sm-12" ref={refList.booksDiv}>
                        <BookResults {...resultBoxParams} />
                    </div>
                    <div className="col-md-5 col-md-offset-1 col-sm-12" ref={refList.articlesDiv}>
                        <ArticleResults {...resultBoxParams} handleFetch={setArticleResults}/>
                    </div>
                </div>

                <div className="results-row-2 row" ref={refList.faqDiv}>
                    <div className="col-md-7">
                        <FaqResults {...resultBoxParams}/>
                    </div>
                    <div className="col-md-4 col-md-offset-1" ref={refList.librariansDiv}>
                        <LibrarianResults  {...resultBoxParams}/>
                    </div>
                </div>

                <div className="results-row-3 row" ref={refList.videoDiv}>
                    <div className="col-md-12">
                        <VideoResults {...resultBoxParams}/>
                    </div>
                </div>

                <div className="results-row-4 row" ref={refList.websiteDiv}>
                    <div className="col-md-12">
                        <WebsiteResults {...resultBoxParams}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;
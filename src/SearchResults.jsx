import React, {useRef, useState} from 'react';
import OnlineResults from "./slots/online/OnlineResults";
import ArticleResults from "./slots/articles/ArticleResults";
import FaqResults from "./slots/faq/FaqResults";
import LibrarianResults from "./slots/librarians/LibrarianResults";
import VideoResults from "./slots/video/VideoResults";
import WebsiteResults from "./slots/website/WebsiteResults";
import BestBetLookup from "./slots/bestbets/BestBetLookup";
import {SkipToLinkBar} from "./SkipToLinkBar";
import {apolloClient} from "./ApolloClientFactory";
import SearchComponentErrorBoundary from "./slots/SearchComponentErrorBoundary";
import BookResults from "./slots/books/BookResults";
import CatalogToggle from "./slots/CatalogToggle";

function SearchResults({searchString}) {

    // Store article results state here to share with BestBetLookup.
    const [articleResults, setArticleResults] = useState([]);
    const [isOnlineOnly, setIsOnlineOnly] = useState(true);

    function handleOnlineOnlyToggle() {
        setIsOnlineOnly(!isOnlineOnly);
    }

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
    const catalogToggle = <CatalogToggle handleToggle={handleOnlineOnlyToggle} isChecked={isOnlineOnly} />;

    return (
        <div>
            <SkipToLinkBar {...refList} />

            <div className="bento-results">
                <SearchComponentErrorBoundary>
                    <BestBetLookup {...resultBoxParams} articleResults={articleResults}/>
                </SearchComponentErrorBoundary>

                <div className="results-row-1 row">
                    <div className="col-md-5 col-sm-12" ref={refList.booksDiv}>
                        <SearchComponentErrorBoundary>
                            {isOnlineOnly ?
                                <OnlineResults {...resultBoxParams} toggle={catalogToggle}/> :
                                <BookResults {...resultBoxParams} toggle={catalogToggle} />
                            }
                        </SearchComponentErrorBoundary>
                    </div>
                    <div className="col-md-5 col-md-offset-1 col-sm-12" ref={refList.articlesDiv}>
                        <SearchComponentErrorBoundary>
                            <ArticleResults {...resultBoxParams} handleFetch={setArticleResults}/>
                        </SearchComponentErrorBoundary>
                    </div>
                </div>

                <div className="results-row-2 row" ref={refList.faqDiv}>
                    <div className="col-md-7">
                        <SearchComponentErrorBoundary>
                            <FaqResults {...resultBoxParams}/>
                        </SearchComponentErrorBoundary>
                    </div>
                    <div className="col-md-4 col-md-offset-1" ref={refList.librariansDiv}>
                        <SearchComponentErrorBoundary>
                            <LibrarianResults  {...resultBoxParams}/>
                        </SearchComponentErrorBoundary>
                    </div>
                </div>

                <div className="results-row-3 row" ref={refList.videoDiv}>
                    <div className="col-md-12">
                        <SearchComponentErrorBoundary>
                            <VideoResults {...resultBoxParams}/>
                        </SearchComponentErrorBoundary>
                    </div>
                </div>

                <div className="results-row-4 row" ref={refList.websiteDiv}>
                    <div className="col-md-12">
                        <SearchComponentErrorBoundary>
                            <WebsiteResults {...resultBoxParams}/>
                        </SearchComponentErrorBoundary>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;
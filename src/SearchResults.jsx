import React, {useRef} from 'react';
import SkipToLink from "./SkipToLink";

function SearchResults({boxes}) {
    const booksDiv = useRef(null);
    const articlesDiv = useRef(null);
    const faqDiv = useRef(null);
    const librariansDiv = useRef(null);
    const videoDiv = useRef(null);
    const websiteDiv = useRef(null);

    return <div>
        <div className="row">
            <nav className="link-to-results col-md-8">
                <div className="link-to-results__skip-to">Skip to:</div>
                <SkipToLink target={booksDiv} label="Books & more"/>
                <SkipToLink target={articlesDiv} label="Articles"/>
                <SkipToLink target={faqDiv} label="FAQ"/>
                <SkipToLink target={librariansDiv} label="Librarians"/>
                <SkipToLink target={videoDiv} label="Video"/>
                <SkipToLink target={websiteDiv} label="Website"/>
            </nav>
            <div className="not-finding col-md-4">Not finding what you
                need? <a href="https://libguides.bc.edu/ask-a-librarian">Ask
                    us!</a></div>
        </div>

        <div className="bento-results">

            <div className="results-row-1 row">
                <div className="col-md-5 col-sm-12" ref={booksDiv}>
                    {boxes.bookResults}
                </div>
                <div className="col-md-5 col-md-offset-1 col-sm-12" ref={articlesDiv}>
                    {boxes.articleResults}
                </div>
            </div>

            <div className="results-row-2 row" ref={faqDiv}>
                <div className="col-md-7">
                    {boxes.faqResults}
                </div>
                <div className="col-md-4 col-md-offset-1" ref={librariansDiv}>
                    {boxes.librarianResults}
                </div>
            </div>

            <div className="results-row-3 row" ref={videoDiv}>
                <div className="col-md-12">
                    {boxes.videoResults}
                </div>
            </div>

            <div className="results-row-4 row" ref={websiteDiv}>
                <div className="col-md-12">
                    {boxes.websiteResults}
                </div>
            </div>
        </div>
    </div>
}

export default SearchResults;
import React from 'react';

function SearchResults({boxes}) {
    return <div>
        <div className="row">
            <nav className="link-to-results col-md-8">
                <div className="link-to-results__skip-to">Skip to:</div>
                <div><a href="#books-anchor" className="link-to-results__search-link">Books & media</a></div>
                <div><a href="#articles-anchor" className="link-to-results__search-link">Articles</a></div>
                <div><a href="#faq-anchor" className="link-to-results__search-link">FAQ</a></div>
                <div><a href="#librarians-anchor" className="link-to-results__search-link">Librarians</a></div>
                <div><a href="#video-anchor" className="link-to-results__search-link">Film & video</a></div>
                <div><a href="#website-anchor" className="link-to-results__search-link">Website</a></div>
            </nav>
            <div className="not-finding col-md-4">Not finding what you
                need? <a href="https://libguides.bc.edu/ask-a-librarian">Ask
                    us!</a></div>
        </div>

        <div className="bento-results">

            <div className="results-row-1 row">
                <div className="col-md-5 col-sm-12" id="books-anchor">
                    {boxes.bookResults}
                </div>
                <div className="col-md-5 col-md-offset-1 col-sm-12" id="articles-anchor">
                    {boxes.articleResults}
                </div>
            </div>

            <div className="results-row-2 row" id="faq-anchor">
                <div className="col-md-7">
                    {boxes.faqResults}
                </div>
                <div className="col-md-4 col-md-offset-1" id="librarians-anchor">
                    {boxes.librarianResults}
                </div>
            </div>

            <div className="results-row-3 row" id="video-anchor">
                <div className="col-md-12">
                    {boxes.videoResults}
                </div>
            </div>

            <div className="results-row-4 row" id="website-anchor">
                <div className="col-md-12">
                    {boxes.websiteResults}
                </div>
            </div>
        </div>
    </div>
}

export default SearchResults;
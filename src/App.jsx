import React from 'react';
import './App.css';

function App({searchBox, resultsBoxContainer}) {

    return (
        <div className="bento-results-page">
            {searchBox}

            <div className="row">
                <nav className="link-to-results col-md-8">
                    <div className="link-to-results__skip-to">Skip to:</div>
                    <div><a href="#booksh3" className="link-to-results__search-link">Books & media</a></div>
                    <div><a href="#articleh3" className="link-to-results__search-link">Articles</a></div>
                    <div><a href="#faqh3" className="link-to-results__search-link">FAQ</a></div>
                    <div><a href="#librarianh3" className="link-to-results__search-link">Librarians</a></div>
                    <div><a href="#videoh3" className="link-to-results__search-link">Film & video</a></div>
                    <div><a href="#subjecth3" className="link-to-results__search-link">Website</a></div>
                </nav>
                <div className="not-finding col-md-4">Not finding what you
                    need? <a href="https://libguides.bc.edu/ask-a-librarian">Ask
                        us!</a></div>
            </div>

            <div className="bento-results">
                <div className="results-row-1">
                    {resultsBoxContainer.bookResults}
                    {resultsBoxContainer.articleResults}
                </div>
                <div className="results-row-2">
                    {resultsBoxContainer.faqResults}
                    {resultsBoxContainer.librarianResults}
                </div>
                <div className="results-row-3">
                    {resultsBoxContainer.videoResults}
                </div>
                <div className="results-row-4">
                    {resultsBoxContainer.websiteResults}
                </div>
            </div>
        </div>
    );
}

export default App;

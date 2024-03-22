import React from 'react';

/**
 * A single result class box
 *
 * @param {string} heading the heading text for the result box
 * @param {JSX.Element} seeAll a link to all the results of the search
 * @param children the search results
 * @returns {JSX.Element}
 * @constructor
 */
function ResultsBox({heading, seeAllLink, children}) {
    return (
        <div className="bento-results-box" aria-live="polite">
            <div className="bento-results-box__header-row">
                <h2>{heading}</h2>
                {seeAllLink}
            </div>
            {children}
        </div>
    )
}

export default ResultsBox;

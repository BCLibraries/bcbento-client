import React from 'react';

/**
 * A single result class box
 *
 * @param client object GraphQL client
 * @param heading string Heading for the box (e.g. "Books & more")
 * @param searchUrl string URL to link to search.
 * @return {*}
 * @constructor
 */
function NewResultsBox({heading, searchUrl, seeAll, children}) {
    return (
        <div className="bento-results-box" aria-live="polite">
            <div className="bento-results-box__header-row">
                <h2>{heading}</h2>
                {seeAll}
            </div>
            {children}
        </div>
    )
}

export default NewResultsBox;
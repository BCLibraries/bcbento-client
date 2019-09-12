import React from 'react';

/**
 * Contents of result after no result search
 *
 * @param heading string Heading for the box (e.g. "Books & more")
 * @return {*}
 * @constructor
 */
function NoResultsBox({heading}) {
    return (
        <div>
            <h2>{heading}</h2>
            <div className="bento-results-box__no-results">There are no results matching your search.</div>
        </div>
    );
}

export default NoResultsBox;
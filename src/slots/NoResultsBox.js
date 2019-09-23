import React from 'react';
import ResultsBox from './ResultsBox';

/**
 * Contents of result after no result search
 *
 * @param heading string Heading for the box (e.g. "Books & more")
 * @return {*}
 * @constructor
 */
function NoResultsBox({heading}) {
    return (
        <ResultsBox heading={heading}>
            <div className="bento-results-box__no-results">There are no results matching your search.</div>
        </ResultsBox>
    )

}

export default NoResultsBox;
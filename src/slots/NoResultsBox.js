import React from 'react';
import NewResultsBox from './NewResultsBox';

/**
 * Contents of result after no result search
 *
 * @param heading string Heading for the box (e.g. "Books & more")
 * @return {*}
 * @constructor
 */
function NoResultsBox({heading}) {
    return (
        <NewResultsBox heading={heading}>
            <div className="bento-results-box__no-results">There are no results matching your search.</div>
        </NewResultsBox>
    )

}

export default NoResultsBox;
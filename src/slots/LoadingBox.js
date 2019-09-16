import React from 'react';
import NewResultsBox from './NewResultsBox';

/**
 * Contents of result box when waiting for results
 *
 * @param heading string Heading for the box (e.g. "Books & more")
 * @return {*}
 * @constructor
 */
function LoadingBox({heading}) {
    return (
        <NewResultsBox heading={heading}>
            <div className='bento-results-box__loading-notice'>Loading...</div>
        </NewResultsBox>
    )
}

export default LoadingBox;
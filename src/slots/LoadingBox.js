import React from 'react';
import ResultsBox from './ResultsBox';

/**
 * Contents of result box when waiting for results
 *
 * @param heading string Heading for the box (e.g. "Books & more")
 * @return {*}
 * @constructor
 */
function LoadingBox({heading}) {
    return (
        <ResultsBox heading={heading}>
            <div className='bento-results-box__loading-notice'>Loading...</div>
        </ResultsBox>
    )
}

export default LoadingBox;
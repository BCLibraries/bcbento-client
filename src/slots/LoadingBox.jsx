import React from 'react';
import ResultsBox from './ResultsBox';

/**
 * What's in the result box when we're waiting for results
 *
 * @param heading string Heading for the box (e.g. "Books & more")
 * @return {JSX.Element}
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

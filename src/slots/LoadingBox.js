import React from 'react';

/**
 * Contents of result box when waiting for results
 *
 * @param heading string Heading for the box (e.g. "Books & more")
 * @return {*}
 * @constructor
 */
function LoadingBox({heading}) {
    return (
        <div>
            <h2>{heading}</h2>
            <div className='bento-results-box__loading-notice'>Loading</div>
        </div>
    );
}

export default LoadingBox;
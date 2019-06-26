import React from 'react';

function LoadingBox({header}) {
    return (
        <div>
            <h2>{header}</h2>
            <div className='bento-results-box__loading-notice'>Loading</div>
        </div>
    );
}

export default LoadingBox;
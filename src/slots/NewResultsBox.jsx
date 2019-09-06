import React from 'react';

function NewResultsBox({status, heading, results, classPrefix, seeAll, noResultsMessage, searchUrl}) {
    let body = '';

    if (status === 'loading') {
        body = <div className='bento-results-box__loading-notice'>Loading</div>
    } else if (status === 'error') {
        body = <div className="bento-results-box__error-notice">There was an error performing this search.</div>;
    } else if (noResultsMessage) {
        body = <div className="bento-results-box__no-results-notice">{noResultsMessage}</div>
    } else {
        body = (
            <div className={`${classPrefix}-results-box`}>
                <ol className={`${classPrefix}-results-list`}>
                    {results}
                </ol>
                {seeAll}
            </div>
        );
    }

    return (
        <div className="bento-results-box" aria-live="polite">
            <div className="bento-results-box__header-row">
                {boxHeading(heading, searchUrl)}
                {seeAll}
            </div>
            {body}
        </div>
    )
}

function boxHeading(contents, searchUrl = false) {
    return searchUrl ? (<h2><a href={searchUrl}>{contents}</a></h2>) : (<h2>{contents}</h2>);
}

export default NewResultsBox;
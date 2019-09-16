import React from 'react';
import NewResultsBox from './NewResultsBox';

/**
 * Contents of result box after error
 *
 * @param heading string Heading for the box (e.g. "Books & more")
 * @return {*}
 * @constructor
 */
function ErrorBox({heading}) {
    return (
        <NewResultsBox heading={heading}>
            <div className="bento-results-box__error-notice">There was an error performing this search.</div>
        </NewResultsBox>
    )
}

export default ErrorBox;
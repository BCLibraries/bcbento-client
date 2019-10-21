import React from 'react';
import ResultsBox from './ResultsBox';

/**
 * Contents of result after no result search
 *
 * @param heading string Heading for the box (e.g. "Books & more")
 * @param content
 * @return {*}
 * @constructor
 */
function NoResultsBox({heading, content}) {
    return (
        <ResultsBox heading={heading}>
            <div className="bento-results-box__no-results">{content}</div>
        </ResultsBox>
    )

}

export default NoResultsBox;
import React from 'react';

/**
 * List of result from search
 *
 * @param docs Docs array from GraphQL result
 * @param {string} classPrefix Prefix for element class
 * @param {function} renderResult maps a GraphQL doc to a single JSX result entry
 * @return {JSX.Element}
 * @constructor
 */
function ResultList({docs, classPrefix, renderResult}) {
    return <div className={`${classPrefix}-results-box`}>
        <ol className={`${classPrefix}-results-list`}>
            {docs.map(renderResult)}
        </ol>
    </div>
}

export default ResultList;

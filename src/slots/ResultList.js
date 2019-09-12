import React from 'react';

/**
 * List of result from search
 *
 * @param docs array Docs array from GraphQL result
 * @param classPrefix string Prefix for element class
 * @param renderResult function Function that maps a GraphQL doc to a single JSX result entry
 * @return {*}
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
import React from "react";

/**
 * Display a linked fulltext response
 *
 * @param {FullTextItem} fullText
 * @return {*}
 * @constructor
 */
function FullTextResult({fullText}) {
    return (
        <div className='best-bet-row'>
            <h2 className='best-bet-row__heading'>Top result</h2>
            <div className='best-bet-result'>
                <h3 className='best-bet-result__title'><a href={fullText.link}>{fullText.title}</a></h3>
                <p className='best-bet-result__author'>
                    {authorLine(fullText.authors)}
                </p>
                <p className='best-bet-result__publication'>
                    {citationLine(fullText)}
                </p>
                <p className='best-bet-result__doi'>doi:{fullText.doi}</p>
                <a href={fullText.link} className="pull-right btn btn-primary">Read</a>
            </div>
        </div>
    );
}

/**
 * Shorten long lists of authors and return as semi-colon delimited list
 *
 * @param {string[]} authors
 * @return {string}
 */
function authorLine(authors) {
    const originalLength = authors.length;
    authors = authors.slice(0, 6);
    if (originalLength > 6) {
        authors.push('et. al.');
    }
    return authors.join('; ');
}

/**
 * Return journal, volume, issue, and page string
 *
 * @param {FullTextItem} fullText
 * @return {string}
 */
function citationLine(fullText) {
    // Primo Central smashes all of this info into one field. Crossref provides atomic
    // fields.
    return fullText.source === 'pci' ?
        fullText.issueInfo :
        `${fullText.containerTitle} ${fullText.date} ${fullText.issueInfo}`;
}

export default FullTextResult;

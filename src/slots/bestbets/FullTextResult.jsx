import React from "react";

function FullTextResult({title, source, doi, authors, containerTitle, date, issueInfo, link}) {
    const originalLength = authors.length;
    authors = authors.slice(0, 6);

    if (originalLength > 6) {
        authors.push('et. al.');
    }

    const citationLine = source === 'pci' ? (
        <p className='best-bet-result__publication'>
            {issueInfo}
        </p>
    ) : (
        <p className='best-bet-result__publication'>
            {containerTitle} {date} {issueInfo}
        </p>
    );

    return (
        <div className='best-bet-row'>
            <h2 className='best-bet-row__heading'>Top result</h2>
            <div className='best-bet-result'>
                <h3 className='best-bet-result__title'><a href={link}>{title}</a></h3>
                {authors.join('; ')}
                <p className='best-bet-result__publication'>
                    {citationLine}
                </p>
                <p className='best-bet-result__doi'>doi:{doi}</p>
                <a href={link} className="pull-right btn btn-primary">Read</a>
            </div>
        </div>
    );
}

export default FullTextResult;

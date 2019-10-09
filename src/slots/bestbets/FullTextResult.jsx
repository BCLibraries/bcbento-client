import React from "react";

// Styles. Move to CSS file eventually.
const buttonStyle = {
    display: 'block',
    marginBottom: '-40px'
};

const publicationStyle = {
    fontSize: '14px'
};

const doiStyle = {
    color: '#44555F',
    fontSize: '13px'
};

// Map month numbers to strings.
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function FullTextResult({crossref, libKey}) {
    const title = crossref.titles[0];
    const link = libKey.fullTextFile ? libKey.fullTextFile : libKey.contentLocation;
    const containerTitle = buildContainerTitle(crossref.containerTitles);
    const date = crossref.publishedPrintDate.length > 0 ? buildDate(crossref.publishedPrintDate) : buildDate(crossref.publishedOnlineDate);
    const issueInfo = buildIssue(crossref.volume, crossref.issue, crossref.page);

    return (
        <div className='best-bet-row'>
            <h2 className='best-bet-row__heading'>Top result</h2>
            <div className='best-bet-result'>
                <h3 className='best-bet-result__title'><a href={link}>{title}</a></h3>
                <p className='best-bet-result__publication' style={publicationStyle}>
                    {containerTitle} {date} {issueInfo}
                </p>
                <p className='best-bet-result__doi' style={doiStyle}>doi:{crossref.DOI}</p>
                <a href={link} style={buttonStyle} className="pull-right btn btn-primary">Read</a>
            </div>
        </div>
    );
}

function buildContainerTitle(containerTitles) {
    if (containerTitles && containerTitles[0]) {
        return (
            <span>
                <em className={'best-bet-result__container'}>{containerTitles[0]}</em>,
            </span>
        );
    }
    return null;
}

function buildDate(dateData) {
    const datePartCount = dateData.length;

    if (datePartCount === 0) {
        return null;
    }

    const year = dateData[0];

    if (datePartCount === 1) {
        return `${year},`;
    }

    const month = months[dateData[1] - 1];

    if (datePartCount === 2) {
        return `${month} ${year},`;
    }

    return `${month} ${year} ${datePartCount[2]},`;
}

function buildIssue(volume, issue, page) {
    const issueInfo = [];

    // Build "volume (issue)" component
    if (volume && !issue) {
        issueInfo.push(`${volume}`);
    } else if (issue && !volume) {
        issueInfo.push(`${issue}`);
    } else if (volume && issue) {
        issueInfo.push(`${volume} (${issue})`);
    }

    // Build pages component
    if (page && page.includes('-')) {
        issueInfo.push(`pp. ${page}`);
    } else if (page) {
        issueInfo.push(`p. ${page}`);
    }

    // If there are multiple components, join them with commas.
    return issueInfo.join(', ');
}

export default FullTextResult;
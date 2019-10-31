import {FullTextItem} from "./FullTextItem";

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


function buildFulltextFromCrossref(crossrefData) {
    const fullText = new FullTextItem('crossref');
    fullText.title = crossrefData.titles[0];
    fullText.doi = crossrefData.DOI;
    fullText.authors = buildAuthors(crossrefData.authors);
    fullText.containerTitle = buildContainerTitle(crossrefData.containerTitles);
    fullText.date = crossrefData.publishedPrintDate.length > 0 ? buildDate(crossrefData.publishedPrintDate) : buildDate(crossrefData.publishedOnlineDate);
    fullText.issueInfo = buildIssue(crossrefData.volume, crossrefData.issue, crossrefData.page);
    return fullText
}

function buildContainerTitle(containerTitles) {
    return containerTitles && containerTitles[0] ? containerTitles[0] : null;
}

function buildDate(dateData) {
    if (dateData === undefined) {
        return '';
    }

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

    return `${month} ${year} ${dateData[2]},`;
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


function buildAuthors(authors) {
    if (authors === undefined || authors.length === 0) {
        return [];
    }
    authors = authors.slice(0,4);
    return authors.map(auth => `${auth.familyName}, ${auth.givenName}`);
}


export {buildFulltextFromCrossref};
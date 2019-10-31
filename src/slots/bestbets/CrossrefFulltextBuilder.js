import {FullTextItem} from "./FullTextItem";

// For converting month numbers to strings.
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


/**
 * Convert a Crossref response into a FullTextItem
 *
 * @param {object} crossrefData Crossref data from a BestBet lookup response
 * @return {FullTextItem}
 */
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

/**
 * Extract the journal title from Crossref containerTitles array
 *
 * @param {string[]} containerTitles
 * @return {null}
 */
function buildContainerTitle(containerTitles) {
    return containerTitles && containerTitles[0] ? containerTitles[0] : null;
}

/**
 * Convert Crossref date arrays to a human-readable date
 *
 * @param {int[]|null} dateData A date data field from Crossref
 * @return {string|null}
 */
function buildDate(dateData) {

    // No date? No date.
    if (dateData === undefined) {
        return '';
    }

    // Crossref dates are are made up of an array of 1-3 numbers: [year, month, day].
    const datePartCount = dateData.length;

    // No numbers? No date.
    if (datePartCount === 0) {
        return null;
    }

    // Just one number? It's a year.
    const year = dateData[0];
    if (datePartCount === 1) {
        return `${year},`;
    }

    // Two numbers? Year and month.
    const month = months[dateData[1] - 1];
    if (datePartCount === 2) {
        return `${month} ${year},`;
    }

    // Three numbers is a full date.
    return `${month} ${year} ${dateData[2]},`;
}

/**
 * Build a human-readable statement describing the journal volume/issue/page range
 *
 * @param {string} volume
 * @param {string} issue
 * @param {string} page
 * @return {string}
 */
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

/**
 * Convert Crossref authors array to "Last, First" format
 *
 * @param authors
 * @return {Array|*}
 */
function buildAuthors(authors) {
    if (authors === undefined || authors.length === 0) {
        return [];
    }
    return authors.map(auth => `${auth.familyName}, ${auth.givenName}`);
}


export {buildFulltextFromCrossref};
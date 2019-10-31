import {buildFulltextFromCrossref} from "./CrossrefFulltextBuilder";
import {buildFulltextFromPCI} from "./PCIFulltextBuilder";
import {LocalBestBet} from "./LocalBestBet";

/**
 * Decide what to return as a Top Result
 *
 * @param {object} bestBet
 * @param {object[]} articles
 * @param {string} searchString
 * @return {FullTextItem|LocalBestBet|null}
 */
function decideBestBet(bestBet, articles, searchString) {

    // Return local best bets (e.g. database, LibAnswers question, etc) first.
    if (bestBet && bestBet.displayText) {
        return new LocalBestBet(bestBet);
    }

    // If there is a fullText best bet and it is not a review, display it.
    if (bestBet && bestBet.fullText && !doiIsReview(bestBet.fullText.crossRefData.DOI, articles)) {
        const fullTextItem = buildFulltextFromCrossref(bestBet.fullText.crossRefData);
        const libKey = bestBet.fullText.libKeyData;
        fullTextItem.link = libKey.fullTextFile ? libKey.fullTextFile : libKey.contentLocation;
        return fullTextItem;
    }

    // If there is an article from PCI that has fulltext and appears to be a match, display that.
    if (articles) {
    const articleHits = findArticleMatches(searchString, articles);
    if (articleHits.length > 0) {
        const fullTextItem = buildFulltextFromPCI(articleHits[0]);
        const libKey = articleHits[0].libkeyAvailability;
        fullTextItem.link = libKey.fullTextFile ? libKey.fullTextFile : libKey.contentLocation;
        return fullTextItem;
    }}

    // No best bet.
    return null;
}


/**
 * Is the DOI a review?
 *
 * @param {string} fullTextDOI
 * @param {Object[]} articleRecords
 * @param {string} articleRecords[].doi
 */
function doiIsReview(fullTextDOI, articleRecords) {
    articleRecords = articleRecords ? articleRecords : [];
    let isReview = false;
    fullTextDOI = fullTextDOI.toLowerCase();

    // Is there any article that shares a DOI and is listed as a review?
    articleRecords.forEach(article => {
        const articleDOI = article.dOI ? article.dOI.toLowerCase() : '';
        if (fullTextDOI === articleDOI && article.type === 'review') {
            isReview = true;
        }
    });

    return isReview;
}

/**
 * Build a list of PCI articles that match the search
 *
 * @param {string} searchString
 * @param {object[]} articleRecords
 * @param {string} articleRecords.title
 * @return {*}
 */
function findArticleMatches(searchString, articleRecords) {
    return articleRecords.filter(article => {

        // Title must be long enough to definitively match.
        const longEnough = article.title.length > 40;

        // Title must match the search string exactly (minus spacing/capitalization)
        const matchesSearchString = searchString.toLowerCase().trim() === article.title.toLowerCase().trim();

        // Article must match all above and have a full text link to display.
        return longEnough && matchesSearchString && hasFullText(article.libkeyAvailability);
    });
}

/**
 * Can we find a file/page to link to?
 *
 * @param {object} libkeyAvailability Availability data from LibKey
 * @param {string} libkeyAvailability.fullTextFile Link to a LibKey PDF
 * @param {string} libkeyAvailability.contentLocation Link to the article page
 * @return {boolean}
 */
function hasFullText(libkeyAvailability) {
    if (! libkeyAvailability) {
        return false;
    }
    return libkeyAvailability.fullTextFile !== '' || libkeyAvailability.contentLocation !== '';
}

export {decideBestBet};
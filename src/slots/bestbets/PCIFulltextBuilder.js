import {FullTextItem} from "./FullTextItem";

/**
 * Convert a PCI response into a FullTextItem
 *
 * @param {object} article Article response from PCI
 * @return {FullTextItem}
 */
function buildFulltextFromPCI(article) {
    const fulltext = new FullTextItem('pci');
    fulltext.title = article.title;
    fulltext.doi = article.dOI;

    // PCI creators list come in semi-colon-delimited string. Split it up and let the
    // front-end component determine how to display authors.
    fulltext.authors = article.creator ? article.creator.split('; ') : [];

    fulltext.date = article.date;
    fulltext.containerTitle = article.journalTitle.length > 0 ? article.journalTitle[0] : null;

    // PCI's isPartOf is a mish-mash of journal title, volume, issue, and page information.
    fulltext.issueInfo = article.isPartOf.length > 0 ? article.isPartOf[0] : null;

    return fulltext;
}

export {buildFulltextFromPCI};
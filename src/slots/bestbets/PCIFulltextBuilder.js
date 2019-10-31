import {FullTextItem} from "./FullTextItem";

function buildFulltextFromPCI(article) {
    const fulltext = new FullTextItem('pci');
    fulltext.title = article.title;
    fulltext.doi = article.dOI;
    fulltext.authors = article.creator ? article.creator.split('; ') : [];
    fulltext.date = article.date;
    fulltext.containerTitle = article.journalTitle.length > 0 ? article.journalTitle[0] : null;
    fulltext.issueInfo = article.isPartOf.length > 0 ? article.isPartOf[0] : null;
    return fulltext;
}

export {buildFulltextFromPCI};
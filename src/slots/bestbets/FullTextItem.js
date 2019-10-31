/**
 * A linked fulltext response
 *
 * @property {string} source
 * @property {string} title
 * @property {string} doi
 * @property {string[]} authors
 * @property {string} containerTitle
 * @property {string} date
 * @property {string} issueInfo
 * @property {string} link
 */
class FullTextItem {
    constructor(source) {
        this.source = source;
        this.title = null;
        this.doi = null;
        this.authors = [];
        this.containerTitle = null;
        this.date = null;
        this.issueInfo = null;
        this.link = null;
    }
}

export {FullTextItem};
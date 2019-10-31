class FullTextItem {
    constructor(source) {
        this.source = source;
        this.title = null;
        this.doi = null;
        this.authors = [];
        this.containerTitle = null;
        this.date = null;
        this.issueInfo = null;
    }
}

export {FullTextItem};
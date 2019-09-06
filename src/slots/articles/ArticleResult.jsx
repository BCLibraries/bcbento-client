import React from 'react';

function ArticleResult({article}) {
    return <li className="article-result-item media">
        <div className="media-body">
            <h3 className="article-result-item__media-heading media-heading">
                <a href={recordLink(article)} className="article-result-item__title">
                    {article.title}
                </a>
            </h3>

            {article.date}

            <div className="article-result-item__creator">{article.creator}</div>
            <div className="article-result-item__publisher">
                {formatPartOf(article.isPartOf, article.journalTitle)}
            </div>

        </div>
    </li>;
}

// @TODO Replace
function formatPartOf(part_of, journal_title) {
    part_of = part_of.length > 0 ? part_of[0] : '';

    const parts = part_of.split(journal_title);

    if (!journal_title || parts.length !== 2) {
        return <span>{part_of}</span>
    }

    return <span className="article-result-item__journal-title">
            {parts[0]}<cite>{journal_title}</cite>{parts[1]}
        </span>
}

function recordLink(article) {
    return `https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=${article.id}&context=PC&tab=pci_only&search_scope=pci&vid=bclib_new&lang=en_US`;
}

export default ArticleResult;
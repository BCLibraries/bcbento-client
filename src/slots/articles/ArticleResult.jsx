import React from 'react';
import {PrimoRecordLink} from "../PrimoRecordLink";
import BrowzineBadge from './BrowzineBadge';
import {getDisplayCreator} from "../getDisplayCreator";

function ArticleResult({article}) {
    return <li className="article-result-item media">
        <div className="media-body">
            <h3 className="article-result-item__media-heading media-heading">
                <a href={PrimoRecordLink(article, true)} className="article-result-item__title" target="_blank" rel="noreferrer noopener">
                    {article.title}
                </a>
            </h3>

            {article.date}

            <div className="article-result-item__creator">{getDisplayCreator(article)}</div>
            <div className="article-result-item__publisher">
                {formatPartOf(article.isPartOf, article.journalTitle)}
            </div>

            {article.libkeyAvailability && <BrowzineBadge libkeyAvailability={article.libkeyAvailability}/>}

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

export default ArticleResult;
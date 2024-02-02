import React from 'react';
import {PrimoRecordLink} from "../PrimoRecordLink";
import BrowzineBadge from './BrowzineBadge';
import {getDisplayCreator} from "../getDisplayCreator"
import {lookupTypeName} from "../../ResourceTypeMap";
import styles from "../../styles.css";

function ArticleResult({article}) {

    const resource_type = lookupTypeName(article.type);

    return <li className="article-result-item media">
        <div className="media-body">
            <div className="article-result-item__type">{resource_type}</div>
            <h3 className="article-result-item__media-heading media-heading">
                <a href={PrimoRecordLink(article, true)} className="article-result-item__title" target="_blank"
                   rel="noreferrer noopener">
                    {article.title}
                </a>
            </h3>

            {article.date}

            <div className="article-result-item__creator">{getDisplayCreator(article)}</div>
            <div className="article-result-item__publisher">
                {formatPartOf(article.isPartOf, article.journalTitle)}
            </div>
            {article.isPeerReviewed && <div className="article-result-item__peer_reviewed">Peer Reviewed</div>}
            {article.isOpenAccess && <div className="article-result-item__peer_reviewed">
                <img src="https://library.bc.edu/images/bento/open-access-logo.svg" alt=""
                     className="article-result-item__open-access-logo"/>
                Open Access
            </div>}
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

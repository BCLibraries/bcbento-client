import React from 'react';

function ArticleResult({article}) {
    return <li className="article-result-item media">
        <div className="media-body">
            <h3 className="article-result-item__media-heading media-heading">
                <a href={article.link} className="article-result-item__title">
                    {article.title}
                </a>
            </h3>

            {article.date}

            <div className="article-result-item__creator">{article.creator}</div>
            <div className="article-result-item__publisher">{article.part_of}</div>

            <a href={article.link} aria-hidden="true" className={"media-body__mobile-link"}>&nbsp;</a>
        </div>
    </li>;
}

export default ArticleResult;
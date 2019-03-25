import React from 'react';

function ArticleResult({article}) {
    return <div className="article-result-item media">
        <div className="media-body">
            <h3 className="article-result-item__media-heading">
                <a href={article.link} className="article-result-item__title">
                    {article.title}
                </a>
            </h3>

            {article.date}

            <div className="article-result-item__creator">{article.creator}</div>
            <div className="article-result-item__publisher">{article.part_of}</div>
        </div>
    </div>;
}

export default ArticleResult;
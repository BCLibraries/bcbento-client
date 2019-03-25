import React from 'react';
import useFetchResultList from "../UseFetchResultList";
import ArticleResult from "./ArticleResult";

function ArticleResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://localhost:8080/search-services/catalog');
    const body = loading ? <div className='loading-notice'>Loading</div> : articleList(data.items);

    return <div className="article-results-box">
        <h2 className="article-results-box__header">Articles</h2>
        {body}
    </div>;
}

function articleList(articles) {
    if (articles.length === 0) {
        return <div className="no-results-found">
            There are no results matching your search.
        </div>
    }

    return <ol className="article-results-list">
        {articles.map((article) => <ArticleResult key={article.id} article={article}/>)}
    </ol>;
}

export default ArticleResults;
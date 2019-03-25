import React from 'react';
import useFetchResultList from "../UseFetchResultList";
import ArticleResult from "./ArticleResult";

function ArticleResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://localhost:8080/search-services/catalog');

    const loadingNotice = loading ? <div className='loading-notice'>Loading</div> : <span/>;
    const loadingClass = loading ? 'article-results-list--loading' : '';

    return <div className="article-results-box">
        <h2 className="article-results-box__header">Articles</h2>
        {loadingNotice}
        <ol className={`article-results-list ${loadingClass}`}>
            {data.items.map((item) => <ArticleResult key={item.id} article={item}/>)}
        </ol>
    </div>;
}

export default ArticleResults;
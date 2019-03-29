import React from 'react';
import useFetchResultList from "../UseFetchResultList";
import ArticleResult from "./ArticleResult";
import BentoResultError from "../BentoResultError";
import SeeAllLink from "../SeeAllLink";
import LoadingNotice from "../LoadingNotice";

function ArticleResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://localhost:8080/search-services/articles');
    const body = loading ? <LoadingNotice/> : articleList(data.items, data.total_results, data.search_url);

    return <div className="article-results-box">
        <h2 className="article-results-box__header">Articles</h2>
        <SeeAllLink url={data.search_url} total={data.total_results} found={data.items.length}/>
        {data.error ? <BentoResultError message="There was an error searching articles."/> : body}
    </div>;
}

function articleList(articles, total_results, url) {
    if (articles.length === 0) {
        return <div className="no-results-found">
            There are no results matching your search.
        </div>
    }

    return <div>
        <ol className="article-results-list">
            {articles.map((article) => <ArticleResult key={article.id} article={article}/>)}
        </ol>
        <SeeAllLink total={total_results} found={articles.length} term='articles' url={url}/>
    </div>;
}

export default ArticleResults;
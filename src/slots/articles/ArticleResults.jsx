import React from 'react';
import ArticleResult from "./ArticleResult";
import ResultBox from "../ResultBox";

const renderArticleList = data => {
    return (
        <React.Fragment>
            {data.items.map(article => <ArticleResult key={article.id} article={article}/>)}
        </React.Fragment>
    );
};

function ArticleResults({searchString}) {
    return <ResultBox baseUrl='http://libdev.bc.edu/search-services/articles'
                      classPrefix="article"
                      term="articles"
                      heading="Articles"
                      searchString={searchString}
                      render={renderArticleList}
    />;
}

export default ArticleResults;
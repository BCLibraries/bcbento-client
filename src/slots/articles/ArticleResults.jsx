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
    return <ResultBox baseUrl={process.env.REACT_APP_ARTICLES_SERVICE_URL}
                      classPrefix="article"
                      term="articles"
                      heading="Articles"
                      searchString={searchString}
                      render={renderArticleList}
    />;
}

export default ArticleResults;
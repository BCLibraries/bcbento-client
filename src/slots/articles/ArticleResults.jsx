import React from 'react';
import ArticleResult from "./ArticleResult";
import SeeAllLink from "../SeeAllLink";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import NewResultsBox from "../NewResultsBox";

function ArticleResults({searchString}) {

    const graphql = gql`
{
  searchArticles( keyword: "${searchString}", limit: 3) {
    docs {
      id,
      title,
      date,
      type,
      contributors,
      coverImages {
        url
      },
      isPartOf,
      journalTitle
    },   
    didUMean,
    total
  }
}`;
    return (
        <Query query={graphql}>
            {({loading, error, data}) => {

                if (loading) {
                    return <NewResultsBox heading={"Articles"} status="loading" classPrefix={"articles"}/>
                } else if (error) {
                    return <NewResultsBox heading={"Articles"} status="error" classPrefix={"articles"}/>
                } else if (data.searchArticles.total === 0) {
                    return <NewResultsBox heading='Articles'
                                          classPrefix='articles'
                                          noResultsMessage='There are no results matching your search.'
                    />
                }

                const results = data.searchArticles.docs.map(doc => <ArticleResult article={doc} key={`article-${doc.id}`}/>);

                const seeAllLink = (
                    <SeeAllLink
                        term={"articles"}
                        total={data.searchArticles.total}
                        found={data.searchArticles.docs.length}
                        url={searchUrl(searchString)}
                    />
                );


                return (
                    <NewResultsBox
                        results={results}
                        heading={"Articles"}
                        searchUrl={searchUrl(searchString)}
                        classPrefix={"articles"}
                        seeAll={seeAllLink}
                    />
                );
            }}
        </Query>
    );
}

function searchUrl(searchString) {
    return `https://bc-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any%2Ccontains%2C${searchString}&tab=bcl_only&search_scope=bcl&vid=bclib_new&lang=en_US&offset=0`;
}

export default ArticleResults;
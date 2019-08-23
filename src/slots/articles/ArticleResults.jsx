import React from 'react';
import ArticleResult from "./ArticleResult";
import SeeAllLink from "../SeeAllLink";
import {Query} from "react-apollo";
import NewResultsBox from "../NewResultsBox";
import primoSearchURl from "../../PrimoSearchURL";
import GraphQLQueries from "../../GraphQLQueries";

function ArticleResults({searchString}) {
    const searchURL = primoSearchURl(searchString, 'pci_only','pci');

    return (
        <Query query={GraphQLQueries.forArticles(searchString)}>
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
                        url={searchURL}
                    />
                );


                return (
                    <NewResultsBox
                        results={results}
                        heading={"Articles"}
                        searchUrl={searchURL}
                        classPrefix={"articles"}
                        seeAll={seeAllLink}
                    />
                );
            }}
        </Query>
    );
}

export default ArticleResults;
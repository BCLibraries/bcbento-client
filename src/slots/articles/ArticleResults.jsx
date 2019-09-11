import React from 'react';
import ArticleResult from "./ArticleResult";
import SeeAllLink from "../SeeAllLink";
import NewResultsBox from "../NewResultsBox";
import primoSearchURl from "../../PrimoSearchURL";
import GraphQLQueries from "../../GraphQLQueries";
import {useQuery} from "@apollo/react-hooks";

function ArticleResults({searchString, client}) {
    const searchURL = primoSearchURl(searchString, 'pci_only', 'pci');
    const {loading, error, data} = useQuery(GraphQLQueries.forArticles(searchString), {client: client});

    if (loading) {
        return <NewResultsBox heading={"Articles"} status="loading" classPrefix={"articles"}/>
    }

    if (error) {
        return <NewResultsBox heading={"Articles"} status="error" classPrefix={"articles"}/>
    }

    if (data.searchArticles.total === 0) {
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
}

export default ArticleResults;
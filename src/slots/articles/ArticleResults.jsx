import React from 'react';
import ArticleResult from "./ArticleResult";
import SeeAllLink from "../SeeAllLink";
import NewResultsBox from "../NewResultsBox";
import primoSearchURl from "../../PrimoSearchURL";
import GraphQLQueries from "../../GraphQLQueries";
import {useQuery} from "@apollo/react-hooks";

const resultsBoxOptions = {
    heading: 'Articles',
    classPrefix: 'articles'
};

function ArticleResults({searchString, client}) {
    const searchURL = primoSearchURl(searchString, 'pci_only', 'pci');
    const {loading, error, data} = useQuery(GraphQLQueries.forArticles(searchString), {client: client});

    if (loading) {
        return <NewResultsBox status="loading" {...resultsBoxOptions} />
    }

    if (error) {
        return <NewResultsBox status="error" {...resultsBoxOptions} />
    }

    if (data.searchArticles.total === 0) {
        return <NewResultsBox noResultsMessage='There are no results matching your search.' {...resultsBoxOptions} />
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
            searchUrl={searchURL}
            seeAll={seeAllLink}
            {...resultsBoxOptions}
        />
    );
}

export default ArticleResults;
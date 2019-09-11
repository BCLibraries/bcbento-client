import React from 'react';
import FaqResult from "./FaqResult";
import NewResultsBox from "../NewResultsBox";
import SeeAllLink from "../SeeAllLink";
import GraphQLQueries from "../../GraphQLQueries";
import {useQuery} from "@apollo/react-hooks";

const resultsBoxOptions = {
    heading: 'FAQ',
    classPrefix: 'faq'
};

function FaqResults({searchString, client}) {
    const {loading, error, data} = useQuery(GraphQLQueries.forFAQ(searchString), {client});

    if (loading) {
        return <NewResultsBox status="loading" {...resultsBoxOptions} />
    }

    if (error) {
        return <NewResultsBox status="error" {...resultsBoxOptions} />
    }

    if (data.searchFAQ.total === 0) {
        return <NewResultsBox noResultsMessage='There are no results matching your search.' {...resultsBoxOptions} />
    }

    const results = data.searchFAQ.results.map(result =>
        <FaqResult result={result} key={`answer-${result.id}`}/>);

    const seeAllLink = (
        <SeeAllLink
            term={"questions"}
            total={data.searchFAQ.total}
            found={data.searchFAQ.results.length}
            url={data.searchFAQ.searchUrl}
        />
    );


    return (
        <NewResultsBox
            results={results}
            searchUrl={data.searchFAQ.searchUrl}
            seeAll={seeAllLink}
            {...resultsBoxOptions}
        />
    );
}

export default FaqResults;
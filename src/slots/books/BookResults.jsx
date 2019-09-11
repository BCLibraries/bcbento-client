import React from 'react';
import BookResult from "./BookResult";
import NewResultsBox from "../NewResultsBox";
import SeeAllLink from "../SeeAllLink";
import GraphQLQueries from "../../GraphQLQueries";
import primoSearchURl from "../../PrimoSearchURL";
import {useQuery} from "@apollo/react-hooks";

const resultsBoxOptions = {
    heading: 'Books & more',
    classPrefix: 'books'
};

function BookResults({searchString, client}) {
    const searchURL = primoSearchURl(searchString, 'bcl_only', 'bcl');

    const {loading, error, data} = useQuery(GraphQLQueries.forBooksAndMore(searchString), {client});

    if (loading) {
        return <NewResultsBox status="loading" {...resultsBoxOptions} />
    }

    if (error) {
        return <NewResultsBox status="error" {...resultsBoxOptions}/>
    }

    if (data.searchCatalog.total === 0) {
        return <NewResultsBox noResultsMessage='There are no results matching your search.' {...resultsBoxOptions}/>
    }

    const results = data.searchCatalog.docs.map(doc => <BookResult item={doc} key={`book-${doc.id}`}/>);

    const seeAllLink = (
        <SeeAllLink
            term={"items"}
            total={data.searchCatalog.total}
            found={data.searchCatalog.docs.length}
            url={searchURL}
        />
    );

    return (
        <NewResultsBox
            results={results}
            status={'success'}
            searchUrl={searchURL}
            seeAll={seeAllLink}
            {...resultsBoxOptions}
        />
    );
}

export default BookResults;
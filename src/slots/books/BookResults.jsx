import React from 'react';
import BookResult from "./BookResult";
import NewResultsBox from "../NewResultsBox";
import SeeAllLink from "../SeeAllLink";
import GraphQLQueries from "../../GraphQLQueries";
import primoSearchURl from "../../PrimoSearchURL";
import {useQuery} from "@apollo/react-hooks";

const heading = 'Books & more';
const classPrefix = 'books';

function BookResults({searchString, client}) {
    const searchURL = primoSearchURl(searchString, 'bcl_only', 'bcl');

    const {loading, error, data} = useQuery(GraphQLQueries.forBooksAndMore(searchString), {client});

    if (loading) {
        return <NewResultsBox heading={heading} status="loading" classPrefix={classPrefix}/>
    }

    if (error) {
        return <NewResultsBox heading={heading} status="error" classPrefix={classPrefix}/>
    }

    if (data.searchCatalog.total === 0) {
        return <NewResultsBox heading={heading}
                              classPrefix={classPrefix}
                              noResultsMessage='There are no results matching your search.'
        />
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
            heading={heading}
            status={'success'}
            searchUrl={searchURL}
            classPrefix={classPrefix}
            seeAll={seeAllLink}
        />
    );
}

export default BookResults;
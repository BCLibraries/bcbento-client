import React from 'react';
import BookResult from "./BookResult";
import NewResultsBox from "../NewResultsBox";
import SeeAllLink from "../SeeAllLink";
import {Query} from "react-apollo";
import GraphQLQueries from "../../GraphQLQueries";
import primoSearchURl from "../../PrimoSearchURL";

function BookResults({searchString}) {
    const searchURL = primoSearchURl(searchString, 'bcl_only', 'bcl');

    return (
        <Query query={GraphQLQueries.forBooksAndMore(searchString)}>
            {({loading, error, data}) => {

                let results = '';
                let status = 'success';
                let noResultsMessage = false;
                let seeAllLink = '';


                if (loading) {
                    status = 'loading';
                } else if (error) {
                    status = 'error';
                } else if (!data.searchCatalog) {
                    status = 'error';
                } else if (data.searchCatalog.total === 0) {
                    noResultsMessage = 'There are no results matching your search.';
                } else {
                    results = data.searchCatalog.docs.map(doc => <BookResult item={doc} key={`book-${doc.id}`}/>);
                    seeAllLink = (
                        <SeeAllLink
                            term={"items"}
                            total={data.searchCatalog.total}
                            found={data.searchCatalog.docs.length}
                            url={searchURL}
                        />
                    );
                }

                return (
                    <NewResultsBox
                        results={results}
                        heading={"Books & more"}
                        status={status}
                        searchUrl={searchURL}
                        classPrefix={"books"}
                        noResultsMessage={noResultsMessage}
                        seeAll={seeAllLink}
                    />
                );
            }}
        </Query>
    );
}

export default BookResults;
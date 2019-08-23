import React from 'react';
import BookResult from "./BookResult";
import NewResultsBox from "../NewResultsBox";
import SeeAllLink from "../SeeAllLink";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import CleanGraphqlInput from "../../CleanGraphqlInput";
import primoSearchURl from "../../PrimoSearchURL";

function BookResults({searchString}) {

    const searchFor = CleanGraphqlInput(searchString);
    const searchURL = primoSearchURl(searchString, 'bcl_only', 'bcl');

    const graphql = gql`
{
  searchCatalog( keyword: "${searchFor}", limit: 3) {
    docs {
      id,
      title,
      date,
      type,
      creator,
      contributors,
      coverImages { 
        url
      },
      available,
      isPhysical,
      isElectronic,
      screenCap,
      mms,
      holdings {
        ilsId,
        libraryCode,
        locationDisplay,
        locationCode,
        availabilityStatus,
        callNumber,
        items {
          availability,
          locationCode,
          location,
          libraryDisplay,
          library,
          callNumber
          }
        }
    },   
    didUMean,
    total
  }
}`;
    return (
        <Query query={graphql}>
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
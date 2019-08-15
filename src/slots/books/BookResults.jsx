import React from 'react';
import BookResult from "./BookResult";
import NewResultsBox from "../NewResultsBox";
import SeeAllLink from "../SeeAllLink";
import {Query} from "react-apollo";
import gql from "graphql-tag";

function BookResults({searchString}) {

    const graphql = gql`
{
  searchCatalog( keyword: "${searchString}", limit: 3) {
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
                } else if (! data.searchCatalog) {
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
                            url={searchUrl(searchString)}
                        />
                    );
                }

                return (
                    <NewResultsBox
                        results={results}
                        heading={"Books & more"}
                        status={status}
                        searchUrl={searchUrl(searchString)}
                        classPrefix={"books"}
                        noResultsMessage={noResultsMessage}
                        seeAll={seeAllLink}
                    />
                );
            }}
        </Query>
    );
}

function searchUrl(searchString) {
    return `https://bc-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any%2Ccontains%2C${searchString}&tab=pci_only&search_scope=pci&vid=bclib_new&lang=en_US&offset=0`;
}

export default BookResults;
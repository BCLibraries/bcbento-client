import React from 'react';
import VideoResult from "./VideoResult";
import NewResultsBox from "../NewResultsBox";
import SeeAllLink from "../SeeAllLink";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import CleanGraphqlInput from "../../CleanGraphqlInput";
import primoSearchUrl from "../../PrimoSearchURL";

function VideoResults({searchString}) {
    const searchFor = CleanGraphqlInput(searchString);
    const searchURL = primoSearchUrl(searchString,'video','VIDEO');

    const graphql = gql`
{
  searchVideo( keyword: "${searchFor}", limit: 3) {
     docs {
      id,
      title,
      date,
      format,
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
                } else if (data.searchVideo.total === 0) {
                    noResultsMessage = 'There are no results matching your search.';
                } else {
                    results = data.searchVideo.docs.map(doc => <VideoResult item={doc} key={`video-${doc.id}`} />);
                    seeAllLink = (
                        <SeeAllLink
                            term={"videos"}
                            total={data.searchVideo.total}
                            found={data.searchVideo.docs.length}
                            url={searchURL}
                        />
                    );
                }

                return (
                    <NewResultsBox
                        results={results}
                        heading={"Videos"}
                        status={status}
                        searchUrl={searchURL}
                        classPrefix={"videos"}
                        noResultsMessage={noResultsMessage}
                        seeAll={seeAllLink}
                    />
                );
            }}
        </Query>
    );
}

export default VideoResults;
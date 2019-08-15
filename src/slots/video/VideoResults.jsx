import React from 'react';
import VideoResult from "./VideoResult";
import NewResultsBox from "../NewResultsBox";
import SeeAllLink from "../SeeAllLink";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import CleanGraphqlInput from "../../CleanGraphqlInput";

function VideoResults({searchString}) {

    const searchFor = CleanGraphqlInput(searchString);

    const graphql = gql`
{
  searchVideo( keyword: "${searchFor}", limit: 3) {
    docs {
      id,
      title,
      date,
      type,
      format,
      contributors,
      coverImages {
        url
      },
      screenCap,
      isElectronic,
      mms
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
                            url={searchUrl(searchString)}
                        />
                    );
                }

                return (
                    <NewResultsBox
                        results={results}
                        heading={"Videos"}
                        status={status}
                        searchUrl={searchUrl(searchString)}
                        classPrefix={"videos"}
                        noResultsMessage={noResultsMessage}
                        seeAll={seeAllLink}
                    />
                );
            }}
        </Query>
    );
}

function searchUrl(searchString) {
    return `https://bc-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,${searchString}&tab=bcl_only&search_scope=bcl&vid=bclib_new&facet=rtype,include,video&lang=en_US&offset=0`;
}

export default VideoResults;
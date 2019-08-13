import React from 'react';
import VideoResult from "./VideoResult";
import NewResultsBox from "../NewResultsBox";
import SeeAllLink from "../SeeAllLink";
import {Query} from "react-apollo";
import gql from "graphql-tag";

function VideoResults({searchString}) {

    const graphql = gql`
{
  searchVideo( keyword: "${searchString}", limit: 3) {
    docs {
      id,
      title,
      date,
      type,
      contributors,
      coverImages,
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
                            term={"item"}
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
    return `https://bc-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any%2Ccontains%2C${searchString}&tab=pci_only&search_scope=pci&vid=bclib_new&lang=en_US&offset=0`;
}

export default VideoResults;
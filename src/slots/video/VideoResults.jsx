import React from 'react';
import VideoResult from "./VideoResult";
import NewResultsBox from "../NewResultsBox";
import SeeAllLink from "../SeeAllLink";
import {Query} from "react-apollo";
import primoSearchUrl from "../../PrimoSearchURL";
import GraphQLQueries from "../../GraphQLQueries";

function VideoResults({searchString}) {
    const searchURL = primoSearchUrl(searchString,'video','VIDEO');

    return (
        <Query query={GraphQLQueries.forVideos(searchString)}>
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
import React from 'react';
import VideoResult from "./VideoResult";
import NewResultsBox from "../NewResultsBox";
import SeeAllLink from "../SeeAllLink";
import primoSearchUrl from "../../PrimoSearchURL";
import GraphQLQueries from "../../GraphQLQueries";
import {useQuery} from "@apollo/react-hooks";

const heading = 'Videos';
const classPrefix = 'videos';

function VideoResults({searchString, client}) {
    const searchURL = primoSearchUrl(searchString, 'video', 'VIDEO');
    const {loading, error, data} = useQuery(GraphQLQueries.forVideos(searchString), {client});

    if (loading) {
        return (
            <NewResultsBox heading={heading} classPrefix={classPrefix} status="loading"/>
        );
    }

    if (error) {
        return <NewResultsBox heading={heading} classPrefix={classPrefix} status="error"/>
    }

    if (data.searchVideo.total === 0) {
        return <NewResultsBox heading={heading}
                              classPrefix={classPrefix}
                              noResultsMessage='There are no results matching your search.'
        />
    }

    const results = data.searchVideo.docs.map(doc => <VideoResult item={doc} key={`video-${doc.id}`}/>);

    const seeAllLink = (
        <SeeAllLink
            term={"items"}
            total={data.searchVideo.total}
            found={data.searchVideo.docs.length}
            url={searchURL}
        />
    );

    return (
        <NewResultsBox
            heading={heading}
            classPrefix={classPrefix}
            results={results}
            status={'success'}
            searchUrl={searchURL}
            seeAll={seeAllLink}
        />
    );
}

export default VideoResults;
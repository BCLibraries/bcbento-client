import React from 'react';
import VideoResult from "./VideoResult";
import primoSearchUrl from "../../PrimoSearchURL";
import NewerResultsBox from "../NewerResultsBox";
import {VideosQuery} from "./VideosQuery";

/**
 * Video results box
 *
 * @param searchString string The search string from user input
 * @param client object GraphQL client
 * @return {*}
 * @constructor
 */
function VideoResults({searchString, client}) {
    return <NewerResultsBox
        client={client}
        heading={'Videos'}
        classPrefix={'videos'}
        term={'videos'}
        searchUrl={primoSearchUrl(searchString, 'video', 'VIDEO')}
        query={new VideosQuery(searchString)}
        renderResult={doc => <VideoResult item={doc} key={`video-${doc.id}`}/>}
    />
}

export default VideoResults;
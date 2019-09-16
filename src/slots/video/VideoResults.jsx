import React from 'react';
import VideoResult from "./VideoResult";
import NewResultsBoxContainer from "../NewResultsBoxContainer";
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
    return <NewResultsBoxContainer
        client={client}
        heading={'Videos'}
        classPrefix={'videos'}
        term={'videos'}
        query={new VideosQuery(searchString)}
        renderResult={doc => <VideoResult item={doc} key={`video-${doc.id}`}/>}
    />
}

export default VideoResults;
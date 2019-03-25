import React from 'react';
import useFetchResultList from '../UseFetchResultList';
import OnlineVideo from "./OnlineVideo";
import PhysicalVideo from "./PhysicalVideo";

function VideoResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://libdev.bc.edu/search-services/video');
    const body = loading ? <div className='loading-notice'>Loading</div> : videoList(data.items);

    return <div className="video-results-box">
        <h2 className="video-results-box__header">Video</h2>
        {body}
    </div>;
}

function videoList(videos) {
    if (videos.length === 0) {
        return <div className="no-results-found">
            There are no results matching your search.
        </div>
    }

    return <ol className="video-results-list row">
        {videos.map((video) => videoResult(video))}
    </ol>;
}

function videoResult(video) {
    return video.getit ? <OnlineVideo video={video} key={video.id}/> : <PhysicalVideo video={video} key={video.id}/>
}

export default VideoResults;
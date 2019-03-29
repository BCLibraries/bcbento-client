import React from 'react';
import useFetchResultList from '../UseFetchResultList';
import OnlineVideo from "./OnlineVideo";
import PhysicalVideo from "./PhysicalVideo";
import BentoResultError from "../BentoResultError";
import LoadingNotice from "../LoadingNotice";
import SeeAllLink from "../SeeAllLink";
import SlotHeading from "../SlotHeading";

function VideoResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://libdev.bc.edu/search-services/video');
    const body = loading ? <LoadingNotice/> : videoList(data.items, data.total_results, data.search_url);

    return <div className="video-results-box">
        <SlotHeading url={data.search_url} classPrefix="video">Video</SlotHeading>
        <SeeAllLink url={data.search_url} total={data.total_results} found={data.items.length}/>
        {data.error ? <BentoResultError message="There was an error searching videos."/> : body}
    </div>;
}

function videoList(videos, total, url) {
    if (videos.length === 0) {
        return <div className="no-results-found">
            There are no results matching your search.
        </div>
    }

    return <div>
        <ol className="video-results-list row">
            {videos.map((video) => videoResult(video))}
        </ol>
        <SeeAllLink total={total} found={videos.length} term="videos" url={url}/>
    </div>;
}

function videoResult(video) {
    return video.getit ? <OnlineVideo video={video} key={video.id}/> : <PhysicalVideo video={video} key={video.id}/>
}

export default VideoResults;
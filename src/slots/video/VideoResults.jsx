import React from 'react';
import OnlineVideo from "./OnlineVideo";
import PhysicalVideo from "./PhysicalVideo";
import ResultBox from "../ResultBox";

const getVideoType = video => {
    const key = video.id;
    return video.getit ? <OnlineVideo video={video} key={key}/> : <PhysicalVideo video={video} key={key}/>;
};

const renderVideoList = data => {
    return (
        <React.Fragment>
            {data.items.map((video) => getVideoType(video))}
        </React.Fragment>
    );
};

function VideoResults({searchString}) {
    return <ResultBox baseUrl={process.env.REACT_APP_VIDEO_SERVICE_URL}
                      classPrefix="video"
                      term="videos"
                      heading="Video"
                      searchString={searchString}
                      render={renderVideoList}
    />;
}

export default VideoResults;
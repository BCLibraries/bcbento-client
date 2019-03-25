import React from 'react';
import blankScreen from "./blank-screen.svg";

function OnlineVideo({video}) {
    const screen = (video.covers.length > 0) ? video.covers[0] : blankScreen;
    const screenClass = (video.covers.length > 0) ? 'online-video-thumb__screenshot' : 'online-video-thumb__blank_screen';

    return <div className="online-video">
        <a href={video.getit}>
            <div className="online_video__thumb">
                <img src={screen} alt="screenshot" className={screenClass}/>
            </div>
        </a>

        <h3 className="media-heading">
            <a href={video.link} className="online-video__title">{video.title}</a>
        </h3>

        {video.date}

        <div className="online-video__creator">{creatorName(video)}</div>

        <div className="online-video__watch-link"><a href={video.getit}>Watch online</a></div>

    </div>
}

function creatorName(video) {
    if (video.creator) {
        return video.creator;
    }

    if (video.contributors[0]) {
        return video.contributors[0];
    }

    return '';
}

export default OnlineVideo;
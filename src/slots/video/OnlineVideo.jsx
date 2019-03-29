import React from 'react';
import blankScreen from "./blank-screen.svg";

function OnlineVideo({video}) {
    const screen = (video.covers && video.covers.length > 0) ? video.covers[0] : blankScreen;
    const screenClass = (video.covers && video.covers.length > 0) ? 'online-video-thumb__screenshot' : 'online-video-thumb__blank_screen';

    return <li className="online-video col-md-4">
        <a href={video.getit}>
            <div className="online_video__thumb">
                <img src={screen} alt={`Watch ${video.title} online`} className={screenClass}/>
            </div>
        </a>

        <h3 className="online-video__media-heading media-heading">
            <a href={video.link} className="online-video__title">{video.title}</a>
        </h3>

        {video.date}

        <div className="online-video__creator">{creatorName(video)}</div>

        <div className="online-video__watch-link"><a href={video.getit}>Watch online</a></div>
    </li>
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
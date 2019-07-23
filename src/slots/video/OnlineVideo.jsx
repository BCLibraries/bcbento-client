import React from 'react';
import blankScreen from "./blank-screen.svg";
import FixBrokenImage from "../../FixBrokenImage";

function OnlineVideo({video}) {
    const screen = video.screenCap ? video.screenCap : blankScreen;
    const screenClass = video.screenCap ? 'online-video-thumb__screenshot' : 'online-video-thumb__blank_screen';

    return <li className="online-video col-md-4">
        <a href={watchLink(video)}>
            <div className="online_video__thumb">
                <img src={screen} alt={`Watch ${video.title} online`} onError={FixBrokenImage(blankScreen)} className={screenClass}/>
            </div>
        </a>

        <h3 className="online-video__media-heading media-heading">
            <a href={video.link} className="online-video__title">{video.title}</a>
        </h3>

        {video.date}

        <div className="online-video__creator">{creatorName(video)}</div>

        <div className="online-video__watch-link"><a href={watchLink(video)}>Watch online</a></div>
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

function recordLink(video) {
    return `https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=${video.id}&context=L&tab=bcl_only&search_scope=bcl&vid=bclib_new&lang=en_US`;
}

function watchLink(video) {
    return `https://mlib.bc.edu/reserves-api/items/${video.mms}`;
}

export default OnlineVideo;
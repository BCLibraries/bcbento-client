import React from 'react';
import FixBrokenImage from "../../FixBrokenImage";

const blankScreen = 'https://library.bc.edu/images/blank-screen.svg';

function OnlineVideo({video}) {
    const screen = video.screenCap ? video.screenCap : blankScreen;
    const screenClass = video.screenCap ? 'online-video-thumb__screenshot' : 'online-video-thumb__blank_screen';

    return <div className="online-video">
        <a href={watchLink(video)}>
            <div className="online_video__thumb">
                <img src={screen} alt={`Watch ${video.title} online`} onError={FixBrokenImage(blankScreen)} className={screenClass}/>
            </div>
        </a>

        <h3 className="online-video__media-heading media-heading">
            <a href={recordLink(video)} className="online-video__title">{video.title}</a>
        </h3>

        {video.date}

        <div className="online-video__creator">{creatorName(video)}</div>

        <div className="online-video__watch-link"><a href={watchLink(video)}>Watch online</a></div>
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

function watchLink(video) {
    return `https://mlib.bc.edu/reserves-api/items/${video.mms}`;
}

function recordLink(item) {
    return `https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=${item.id}&context=L&tab=bcl_only&search_scope=bcl&vid=bclib_new&lang=en_US`;
}

export default OnlineVideo;
import React from 'react';
import FixBrokenImage from "../../FixBrokenImage";
import {PrimoRecordLink} from "../PrimoRecordLink";
import {getDisplayCreator} from "../getDisplayCreator";
import Availability from "../availability/Availability";
import AvailabilityContainer from "../availability/AvailabilityContainer";

const blankScreen = 'https://library.bc.edu/images/blank-screen.svg';

function OnlineVideo({video}) {
    const screen = video.screenCap ? video.screenCap : blankScreen;
    const screenClass = video.screenCap ? 'online-video-thumb__screenshot' : 'online-video-thumb__blank_screen';
    const watchLink = `https://mlib.bc.edu/reserves-api/items/${video.mms}`;
    const recordLink = PrimoRecordLink(video);

    return <div className="online-video">
        <a href={watchLink}>
            <div className="online_video__thumb">
                <img src={screen} alt={`Watch ${video.title} online`} onError={FixBrokenImage(blankScreen)} className={screenClass}/>
            </div>
        </a>

        <h3 className="online-video__media-heading media-heading">
            <a href={recordLink} className="online-video__title">{video.title}</a>
        </h3>

        {video.date}

        <div className="online-video__creator">{getDisplayCreator(video)}</div>

        <div className="online-video__watch-link"><a href={watchLink}>Watch online</a></div>

        {video.isPhysical && <AvailabilityContainer item={video}/>}
    </div>
}

export default OnlineVideo;
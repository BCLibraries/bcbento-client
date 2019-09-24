import React from 'react';
import FixBrokenImage from "../../FixBrokenImage";
import {PrimoRecordLink} from "../PrimoRecordLink";
import AvailabilityContainer from "../availability/AvailabilityContainer";

const defaultVHSIcon = 'https://library.bc.edu/images/video-tape.svg';
const defaultDVDIcon = 'https://library.bc.edu/images/mono-dvd-mount.svg';

const vhsClass = 'physical-video__vhs-cover',
    dvdClass = 'physical-video__dvd-cover';

let defaultIcon = defaultVHSIcon;
let iconClass = vhsClass;

function PhysicalVideo({video}) {
    if (video.format.includes('disc')) {
        defaultIcon = defaultDVDIcon;
        iconClass = dvdClass;
    }

    const cover = getCover(video);

    const altText = `Catalog record for ${video.title}`;

    const recordLink = PrimoRecordLink(video);

    return <div className="physical-video">
        <a href={recordLink} aria-hidden="true">
            <img src={cover}
                 onLoad={onImageLoad}
                 onError={FixBrokenImage(defaultIcon, `OPER physical-video__default_cover ${iconClass}`)}
                 alt={altText}
                 className={coverClass(video)}/>
        </a>

        <h3 className="physical-video__media-heading media-heading">
            <a href={recordLink} className="physical-video__title">
                {video.title}
            </a>
        </h3>

        {video.date}

        <div className="physical-video__creator">{creatorName(video)}</div>

        {video.format}

        <AvailabilityContainer item={video}/>

    </div>
}

function coverClass(video) {
    return (video.coverImages.length > 0 && video.coverImages[0]) ? 'physical-video__box_cover' : `OPER HERE NOW physical-video__default_cover  ${iconClass}`;
}

function getCover(video) {
    if (video.coverImages.length > 0 && video.coverImages[0]) {
        return String(video.coverImages[0].url);
    }

    return defaultIcon;
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

function onImageLoad(event) {
    if (event.target.naturalHeight === 1) {
        event.target.className = `physical-video__default_cover ${iconClass}`;
        event.target.src = defaultIcon;
    }
}

export default PhysicalVideo;
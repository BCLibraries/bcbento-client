import React from 'react';
import defaultVHSIcon from './video-tape.svg';
import defaultDVDIcon from './mono-dvd-mount.svg';
import PhysicalAvailability from "../PhysicalAvailability";
import FixBrokenImage from "../../FixBrokenImage";

function PhysicalVideo({video}) {
    const cover = getCover(video);

    return <div className="physical-video col-md-4">
        <a href={video.link} aria-hidden="true">
            <img src={cover} onError={FixBrokenImage(defaultVHSIcon)} alt="" className={coverClass(video)}/>
        </a>

        <h3 className="physical-video__media-heading media-heading">
            <a href={video.link} className="physical-video__title">
                {video.title}
            </a>
        </h3>

        {video.date}

        <div className="physical-video__creator">{creatorName(video)}</div>

        {video.format}

        <PhysicalAvailability item={video}/>

    </div>
}

function coverClass(video) {
    return (video.coverImages.length > 0 && video.coverImages[0])  ? 'physical-video__box_cover' : 'physical-video__default_cover';
}

function getCover(video) {
    if (video.coverImages.length > 0 && video.coverImages[0]) {
        return String(video.coverImages[0]);
    }

    switch (video.format) {
        case 'DVD':
            return defaultDVDIcon;
        case 'VHS':
            return defaultVHSIcon;
        default:
            return defaultVHSIcon;
    }
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

export default PhysicalVideo;